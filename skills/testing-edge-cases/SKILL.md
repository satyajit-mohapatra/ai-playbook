---
name: testing-edge-cases
description: Identify and create tests for edge cases and boundary conditions including input, type, and state variations. Use when writing comprehensive tests or identifying missing test scenarios.
---

# Analyze Edge Cases

Guidelines, best practices, and a structured framework for identifying and creating tests for edge cases and boundary conditions including input, type, and state variations.

## Edge Case Categories

### 1. Input Boundary Cases
- Empty inputs (null, undefined, empty string/array)
- Zero and negative values
- Maximum/minimum values
- Off-by-one scenarios
- Very large inputs

### 2. Type Edge Cases
- Wrong input types
- Type coercion scenarios
- null/undefined handling
- Type boundary conditions
- Union type variations

### 3. State Edge Cases
- Initial state variations
- Concurrent modifications
- Race conditions
- State persistence
- Session boundaries

### 4. Time-Based Edge Cases
- Timezone handling
- Leap year considerations
- Daylight saving transitions
- Timestamp boundaries
- Timeout scenarios

### 5. Error Edge Cases
- Network failures
- API errors
- Permission changes
- Resource exhaustion
- Third-party failures

### 6. Business Logic Edge Cases
- Boundary conditions
- Threshold values
- Validation limits
- Workflow interruptions
- Approval workflows

## When to Apply

Use this framework when:
- Writing comprehensive test suites
- Identifying missing test scenarios
- Testing boundary conditions
- Ensuring robust error handling

## Expected Output

When applying this framework, include:
1. Edge cases identified
2. Risk assessment for each case
3. Test case implementations
4. Test execution order
5. Automation recommendations
6. Monitoring suggestions
