---
name: debug-performance-profile
description: Profile and identify performance bottlenecks in code using CPU, memory, I/O, and rendering analysis. Use when diagnosing slow performance or optimizing application speed.
---

# Profile Performance

Guidelines, best practices, and a structured framework for profiling and identifying performance bottlenecks in code using CPU, memory, I/O, and rendering analysis.

## Profiling Approach

### 1. CPU Profiling
- Identify hot paths
- Function call frequency analysis
- Loop optimization opportunities
- Recursion analysis
- Algorithm complexity review

### 2. Memory Profiling
- Memory allocation patterns
- Leak detection
- Object retention analysis
- GC pressure identification
- Memory footprint reduction

### 3. I/O Profiling
- Database query analysis
- Network request optimization
- File I/O efficiency
- Batch vs individual operations
- Connection management

### 4. Rendering Profiling
- DOM operation efficiency
- Layout thrashing
- Paint/composite analysis
- Animation performance
- Event handling optimization

## Tools & Techniques

- Browser DevTools Performance tab
- Node.js profiler
- Chrome DevTools Memory tab
- Lighthouse performance audit
- Webpack bundle analysis

## When to Apply

Use this framework when:
- Diagnosing slow application performance
- Optimizing code execution speed
- Identifying memory leaks
- Improving UI rendering performance

## Expected Output

When applying this framework, include:
1. Performance bottlenecks identified
2. Root cause analysis
3. Optimization recommendations
4. Before/after performance comparison
5. Code changes required
6. Tools for ongoing monitoring
