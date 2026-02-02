# AI Prompt Cheatsheet
## Quick Reference for Daily Use

---

## 🟢 Basic Prompts (Days 1-30)

### Generate Function
```
Create a [language] function called [name] that:
- Takes [param1: type, param2: type] as parameters
- Returns [type]
- Does [specific behavior]

Example: functionName(input) → expected output
```

### Explain Code
```
Explain this code step by step:
[paste code]

Include: purpose, algorithm, edge cases, improvements
```

### Fix Bug
```
Bug: Expected [X] but got [Y]
[paste code]
Find and fix with explanation.
```

### Refactor
```
Refactor for [readability/performance/maintainability]:
[paste code]
Keep same functionality.
```

### Write Tests
```
Write [Jest/pytest] tests for:
[paste code]
Cover: happy path, edge cases, errors.
```

### Document
```
Add JSDoc/docstring with @param, @returns, @example:
[paste code]
```

### Commit Message
```
Conventional commit for: [describe changes]
Format: type(scope): description
```

---

## 🟡 Intermediate Prompts (Days 31-60)

### Feature Template
```
Implement [feature name]:

Requirements:
1. [req 1]
2. [req 2]

Tech: [stack]

Create:
1. Backend API
2. Frontend component
3. Tests
4. Documentation

Follow existing patterns.
```

### Code Review
```
Review this PR code:
[paste code]

Check: bugs, security, performance, best practices
Rate: 🔴 Must fix | 🟡 Should fix | 🟢 Nice to have
```

### API Endpoint
```
Create [GET/POST] /api/[path]

Request: [body/params]
Response: { success: [schema], error: [schema] }
Logic: [steps]

Include validation and error handling.
```

### Component
```
React component [Name]:

Props: [prop1: type, prop2: type]
State: [state1: initial]
Behavior: [what it does]

Include types and tests.
```

### Debug Investigation
```
Symptoms: [what's happening]
Expected: [what should happen]
Steps: [to reproduce]

Analyze and fix.
```

---

## 🔴 Advanced Prompts (Days 61-90)

### Architecture Decision
```
Decision: [what to decide]

Options:
A. [option]
B. [option]

Constraints: [limits]
Requirements: [perf, scale, security]

Recommend with trade-off analysis.
```

### Technical RFC
```
RFC for [title]:

Problem: [what problem]
Solution: [proposed approach]

Generate: background, design, alternatives, rollout plan.
```

### Performance Fix
```
Performance issue:
- Symptom: [slow/high memory/etc]
- Metrics: [current numbers]
- System: [components involved]

Diagnose and optimize.
```

### Migration
```
Migrate from [source] to [target]:

Transformations: [list]
Constraints: idempotent, reversible

Create: migration, rollback, validation scripts.
```

---

## 🚀 Agent Workflow Prompts

### Build Feature End-to-End
```
Build [feature] step by step:

1. Analyze codebase patterns
2. Create implementation plan
3. Build backend
4. Build frontend
5. Add tests
6. Update docs

Ask questions before proceeding.
```

### Explore Codebase
```
Help me understand [area/feature]:

Find relevant files
Explain architecture and data flow
Identify key patterns
Create diagram if helpful
```

### Refactoring Project
```
Refactor [module] to improve [goal]:

Constraints:
- Backward compatible
- Incremental steps
- Don't break tests

Plan → Execute → Verify each step.
```

---

## ⚡ One-Liners

| Task | Prompt |
|------|--------|
| Quick function | `[lang] function: [name]([params]) → [return] that [does]` |
| Add types | `Add TypeScript types to: [code]` |
| Simplify | `Simplify this code: [code]` |
| Error handling | `Add proper error handling: [code]` |
| Make async | `Convert to async/await: [code]` |
| Add logging | `Add appropriate logging: [code]` |
| Optimize query | `Optimize this SQL: [query]` |
| Regex | `Regex to match: [pattern description]` |
| Mock data | `Generate mock data for: [type/schema]` |
| Enum | `Create enum for: [list of values]` |

---

## 🛡️ Safety Checklist

Before every AI interaction:
- [ ] No secrets/API keys in prompt
- [ ] No PII or customer data
- [ ] No proprietary business logic exposure

Before every commit of AI code:
- [ ] I understand what the code does
- [ ] I've tested it works
- [ ] I've reviewed for security issues
- [ ] Tests are included or updated

---

## 📝 Context Tips

### Better Results = Better Context

```
✅ DO include:
- Language and framework versions
- Type definitions and interfaces
- Related code snippets
- Expected input/output examples
- Error messages if debugging

❌ DON'T include:
- Secrets, passwords, API keys
- Customer data or PII
- Irrelevant code
- Very long files (summarize instead)
```

### Magic Pattern
```
"Given this [type/interface/context]:
[paste relevant definitions]

Create [what you need] that [specific requirements]."
```

---

## 🔄 Iteration Patterns

### Refine Output
```
That's close, but:
- Change [X] to [Y]
- Add [missing thing]
- Remove [unwanted thing]
```

### Add Feature
```
Now also add:
- [feature 1]
- [feature 2]
Keep everything else the same.
```

### Fix Issue
```
That's not quite right because [reason].
The [specific part] should [correct behavior].
```

### Request Explanation
```
Explain why you chose [specific approach].
What are the trade-offs?
```

---

## 📊 Daily Tracker

| Date | Task | Prompt Used | Result (1-5) | Notes |
|------|------|-------------|--------------|-------|
|      |      |             |              |       |
|      |      |             |              |       |
|      |      |             |              |       |
|      |      |             |              |       |
|      |      |             |              |       |

---

*Print this page and keep it next to your keyboard!*
