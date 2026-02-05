---
name: design-database
description: Design efficient database schemas and data models including tables, relationships, indexes, and normalization. Use when planning database architecture or optimizing existing schemas.
---

# Design Database Schemas

Guidelines, best practices, and a structured framework for designing efficient database schemas and data models including tables, relationships, indexes, and normalization.

## Design Requirements

### 1. Schema Design
- Identify entities and relationships
- Define tables/collections with proper columns/fields
- Choose appropriate data types
- Plan for primary keys and indexes

### 2. Normalization
- Apply normalization rules (1NF, 2NF, 3NF)
- Balance normalization vs denormalization based on use cases
- Consider read/write patterns

### 3. Relationships
- Define one-to-one, one-to-many, and many-to-many relationships
- Plan for foreign keys and referential integrity
- Consider cascade behaviors

### 4. Performance Optimization
- Add indexes for frequently queried columns
- Plan for query optimization
- Consider partitioning strategies
- Plan for caching layers

## When to Apply

Use this framework when:
- Planning database architecture for new projects
- Optimizing existing database schemas
- Designing data models for applications
- Normalizing or denormalizing databases

## Expected Output

When applying this framework, include:
1. Entity-relationship diagram (text-based)
2. Table/collection definitions
3. Index strategy
4. Migration scripts
5. Sample queries and use cases
