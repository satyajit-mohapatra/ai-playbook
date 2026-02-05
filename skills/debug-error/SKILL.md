---
name: debug-error
description: Diagnose and fix software errors with systematic debugging approach including error analysis and root cause identification. Use when troubleshooting bugs or debugging runtime errors.
---

# Debug and Fix Errors

Guidelines, best practices, and a structured framework for diagnosing and fixing software errors with systematic debugging approach including error analysis and root cause identification.

## Diagnostic Process

### 1. Error Analysis
- Error type identification (Syntax, Runtime, Logic, Type, Reference)
- Error message interpretation
- Stack trace analysis
- Error location identification
- Execution path analysis

### 2. Context Investigation
- Code context analysis
- Environment context (browser, Node, OS, versions)
- User context and reproduction steps
- Input validation
- Variable state examination

### 3. Root Cause Analysis
- Null/undefined checks
- Type validation
- Async error handling
- Scope analysis
- Boundary condition checks

### 4. Common Error Patterns

**JavaScript/TypeScript Errors:**
- ReferenceError: Variable not declared
- TypeError: Invalid type operation
- SyntaxError: Invalid syntax
- RangeError: Out of bounds

**Network/API Errors:**
- 404 Not Found
- CORS errors
- Timeout errors
- 401/403 authentication errors

## Debugging Steps

1. Reproduce the error consistently
2. Isolate the problematic code
3. Form hypothesis about root cause
4. Test fix and verify resolution
5. Add preventive measures

## When to Apply

Use this framework when:
- Troubleshooting runtime errors
- Debugging application bugs
- Analyzing error logs and stack traces
- Fixing production issues

## Expected Output

When applying this framework, include:
1. Error diagnosis and explanation
2. Root cause identification
3. Step-by-step fix instructions
4. Fixed code example
5. Prevention strategies
6. Related issues to check
7. Debugging tips for similar issues
