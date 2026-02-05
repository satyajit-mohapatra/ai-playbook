---
name: debug-trace-issue
description: Trace complex issues through code execution paths including data flow, state changes, and dependency analysis. Use when investigating multi-component bugs or tracing execution flow.
---

# Trace Complex Issues

Guidelines, best practices, and a structured framework for tracing complex issues through code execution paths including data flow, state changes, and dependency analysis.

## Tracing Framework

### 1. Entry Point Identification
- Find where the issue manifests
- Identify user actions triggering the issue
- Map initial conditions
- Document expected vs actual behavior

### 2. Execution Path Analysis
- Follow code flow
- Identify all function calls
- Map data transformations
- Track state changes
- Identify branching logic

### 3. Data Flow Analysis
- Trace variable values
- Identify data sources
- Track data transformations
- Find data sinks
- Check for data corruption

### 4. State Analysis
- Application state at failure
- User session state
- Cache state
- Database state
- Configuration state

### 5. Dependency Analysis
- External service dependencies
- Library/framework interactions
- API calls
- Database queries
- Message queues

## When to Apply

Use this framework when:
- Investigating multi-component bugs
- Tracing execution flow through complex systems
- Debugging distributed system issues
- Analyzing root causes of failures

## Expected Output

When applying this framework, include:
1. Issue summary and reproduction steps
2. Complete execution path
3. Data flow diagram
4. Root cause identification
5. Fix recommendations
6. Testing strategy
7. Prevention measures
