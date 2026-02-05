---
name: code-review-refactor
description: Refactor code to improve quality, readability, and maintainability by identifying and eliminating code smells. Use when improving legacy code or technical debt reduction.
---

# Refactor Code

Guidelines, best practices, and a structured framework for refactoring code to improve quality, readability, and maintainability by identifying and eliminating code smells.

## Refactoring Goals

### 1. Code Smell Identification
- Long methods/functions
- Large classes/modules
- Feature envy
- Data clumps
- Primitive obsession
- Switch statements
- Parallel inheritance hierarchies
- Speculative generality

### 2. Extract & Simplify
- Extract methods
- Extract classes
- Replace conditional with polymorphism
- Introduce parameter object
- Replace magic strings with constants
- Decompose conditional

### 3. Improve Naming
- Descriptive variable names
- Clear function names
- Consistent naming conventions
- Meaningful class names
- Avoid ambiguous names

### 4. Reduce Complexity
- Simplify conditionals
- Reduce nesting levels
- Break large functions
- Use early returns
- Simplify boolean expressions

### 5. SOLID Compliance
- Single Responsibility check
- Open/Closed principle
- Dependency Inversion
- Interface segregation

## When to Apply

Use this framework when:
- Improving legacy code quality
- Reducing technical debt
- Enhancing code maintainability
- Teaching refactoring techniques

## Expected Output

When applying this framework, include:
1. Code smells identified
2. Refactoring techniques applied
3. Original vs refactored code comparison
4. Benefits of refactoring
5. Step-by-step refactoring process
6. Testing recommendations
