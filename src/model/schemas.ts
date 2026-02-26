/**
 * Single Source of Truth (SSOT) for all data schemas
 * 
 * This file contains both Zod schemas (for LLM validation) and TypeScript types.
 * All code should import from here to avoid drift between:
 * - What the LLM returns (Zod schemas)
 * - What the app uses internally (TypeScript types)
 * - What the study data contains (hardcoded data)
 */

import { z } from 'zod';
import { Node, Edge } from '@xyflow/react';

// ============================================================================
// Zod Schemas (for LLM response validation)
// ============================================================================

export const EntityPropertySchema = z.object({
    name: z.string(),
    value: z.number(),
});

// Wrapper schema for LLM response (what the API returns)
export const EntityResponseSchema = z.object({
    entities: z.array(z.object({
        name: z.string(),
        emoji: z.string(),
        properties: z.array(EntityPropertySchema),
    })),
});

// Type for the wrapped response
export type EntityResponse = z.infer<typeof EntityResponseSchema>;

// Base entity type (without wrapper)
export type Entity = z.infer<typeof EntityResponseSchema>['entities'][0];

// Wrapper schema for LLM response (what the API returns)
export const LocationResponseSchema = z.object({
    locations: z.array(z.object({
        name: z.string(),
        emoji: z.string(),
    })),
});

export type LocationResponse = z.infer<typeof LocationResponseSchema>;
export type Location = z.infer<typeof LocationResponseSchema>['locations'][0];

// Wrapper schema for LLM response (what the API returns)
export const ActionResponseSchema = z.object({
    actions: z.array(z.object({
        name: z.string(),
        source: z.string(),
        target: z.string(),
        location: z.string(),
        passage: z.string(),
    })),
});

export type ActionResponse = z.infer<typeof ActionResponseSchema>;
export type Action = z.infer<typeof ActionResponseSchema>['actions'][0];

// Base types
export type EntityProperty = z.infer<typeof EntityPropertySchema>;

// ============================================================================
// React Flow Types (Node/Edge wrappers)
// ============================================================================

export type EntityNode = Node<Entity, 'entityNode'>;
export type LocationNode = Node<Location, 'locationNode'>;
export type ActionEdge = Edge<Action>;

// ============================================================================
// Hardcoded Study Data Type
// ============================================================================

export type HardcodedStudyData = {
    locations: Location[];
    entities: Entity[];
    actions: Action[];
};

// ============================================================================
// Compile-time Schema Consistency Check
// This ensures Zod schema and TypeScript types stay in sync
// ============================================================================

type AssertEqual<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;

// Entity consistency
const _entitySchemaCheck: AssertEqual<z.infer<typeof EntityResponseSchema>['entities'][0], Entity> = true;

// Location consistency
const _locationSchemaCheck: AssertEqual<z.infer<typeof LocationResponseSchema>['locations'][0], Location> = true;

// Action consistency
const _actionSchemaCheck: AssertEqual<z.infer<typeof ActionResponseSchema>['actions'][0], Action> = true;
