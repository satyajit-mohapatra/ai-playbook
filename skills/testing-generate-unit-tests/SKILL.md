---
name: testing-generate-unit-tests
description: Create comprehensive unit tests for functions and classes including happy paths, edge cases, and error scenarios. Use when writing unit tests or improving test coverage.
---

# Generate Unit Tests

Guidelines, best practices, and a structured framework for creating comprehensive unit tests for functions and classes including happy paths, edge cases, and error scenarios.

## Unit Testing Framework

### 1. Test Organization
- Describe blocks for functions/classes
- Context blocks for scenarios
- Individual test cases
- Clear test names

### 2. Test Coverage Areas

**Happy Path Tests**
- Valid inputs with expected outputs
- Common use cases
- Typical workflows

**Edge Cases**
- Empty inputs
- Zero and negative values
- Boundary values
- Single element collections

**Error Cases**
- Invalid inputs
- Type mismatches
- Missing parameters
- Malformed data

### 3. Testing Patterns

**Arrange-Act-Assert (AAA)**
```
// Arrange: Setup test data
// Act: Execute function
// Assert: Verify results
```

**Given-When-Then (BDD)**
```
// Given: Preconditions
// When: Action taken
// Then: Verify outcome
```

### 4. Test Types
- Basic functionality tests
- Parameterized tests
- Async tests
- Mock/stub tests
- State tests

### 5. Setup and Teardown
- beforeAll/beforeEach
- afterEach/afterAll
- Resource cleanup
- Test isolation

## When to Apply

Use this framework when:
- Writing new unit tests for code
- Improving test coverage for existing code
- Refactoring code that needs new tests
- Setting up testing standards for a team

## Expected Output

When applying this framework, include:
1. Complete test suite
2. Test framework configuration
3. Mock setups
4. Clear descriptions
5. Test quality checklist
6. Coverage goals
