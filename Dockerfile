# Multi-stage build for image optimization
# Stage 1: Application build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build


# Stage 2: Production image
FROM node:20-alpine AS production

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy compiled application from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/index.html ./index.html

# Set production mode
ENV NODE_ENV=production

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]
