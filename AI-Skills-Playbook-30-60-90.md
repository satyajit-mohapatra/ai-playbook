# AI Engineering Skills Playbook
## 30-60-90 Day Practical Guide with Prompts & Checklists

---

# Quick Navigation

- [Days 1-30: Foundation](#days-1-30-foundation---basic-prompting-mastery)
- [Days 31-60: Acceleration](#days-31-60-acceleration---agent-workflows)
- [Days 61-90: Mastery](#days-61-90-mastery---advanced-skills--automation)
- [Prompt Library](#prompt-library)
- [Daily Checklists](#daily-checklists)

---

# Days 1-30: Foundation - Basic Prompting Mastery

## Week 1: Getting Started (Days 1-7)

### Day 1-2 Checklist: Environment Setup
- [ ] Install AI coding assistant (GitHub Copilot, Cursor, Cody, etc.)
- [ ] Configure IDE integration
- [ ] Enable inline suggestions
- [ ] Set up keyboard shortcuts
- [ ] Test basic autocomplete is working
- [ ] Join team Slack channel for AI support

### Day 3-4 Checklist: First Prompts
- [ ] Write 10 simple function completions using AI
- [ ] Practice accepting/rejecting suggestions (Tab/Esc)
- [ ] Try inline comments to guide suggestions
- [ ] Use chat panel for first conversation
- [ ] Document what works, what doesn't

### Day 5-7 Checklist: Understanding Context
- [ ] Learn how context window works
- [ ] Practice opening relevant files before prompting
- [ ] Try @ mentions for files/symbols
- [ ] Experiment with prompt length
- [ ] Complete 5 real work tasks with AI assistance

---

## 🎯 Week 1 Prompts: Basic Code Generation

### Prompt 1.1: Simple Function Generation
```
Create a [language] function called [name] that:
- Takes [inputs] as parameters
- Returns [output type]
- Does [specific behavior]

Example usage:
[show example of how function should be called]
```

**Ready-to-use example:**
```
Create a TypeScript function called formatFileSize that:
- Takes size (number, in bytes) as a parameter
- Returns a formatted string
- Formats the number with proper size unit (KB, MB, GB, etc.)

Example usage:
formatFileSize(1024) // Returns "1.00 KB"
formatFileSize(1048576) // Returns "1.00 MB"
```

---

### Prompt 1.2: Code Explanation
```
Explain this code step by step:

[paste code here]

Include:
1. What the code does overall
2. Key logic and algorithms used
3. Any potential issues or edge cases
4. Suggestions for improvement
```

---

### Prompt 1.3: Bug Fixing
```
This code has a bug. The expected behavior is [expected].
The actual behavior is [actual].

[paste buggy code]

Find the bug and provide a fixed version with explanation.
```

---

### Prompt 1.4: Code Refactoring
```
Refactor this code to be more:
- Readable
- Maintainable  
- Following [language] best practices

Keep the same functionality.

[paste code]
```

---

## Week 2: Context & Precision (Days 8-14)

### Day 8-9 Checklist: Better Context
- [ ] Learn to provide type definitions in prompts
- [ ] Practice including interface/class context
- [ ] Use "given this existing code..." pattern
- [ ] Reference documentation in prompts
- [ ] Track which context improves results

### Day 10-11 Checklist: Precise Instructions
- [ ] Practice using numbered requirements
- [ ] Learn to specify edge cases upfront
- [ ] Include example inputs/outputs
- [ ] Specify what NOT to do
- [ ] Rate prompt effectiveness (1-5)

### Day 12-14 Checklist: Iteration Skills
- [ ] Practice follow-up prompts
- [ ] Learn "now also add..." pattern
- [ ] Try "that's not quite right because..." corrections
- [ ] Build on previous responses
- [ ] Complete 10 real work tasks with iteration

---

## 🎯 Week 2 Prompts: Precise Engineering

### Prompt 2.1: Detailed Function with Constraints
```
Create a [language] function with these exact specifications:

**Function name:** [name]
**Parameters:**
- param1: [type] - [description]
- param2: [type] - [description]

**Returns:** [type] - [description]

**Requirements:**
1. [requirement 1]
2. [requirement 2]
3. [requirement 3]

**Edge cases to handle:**
- [edge case 1]
- [edge case 2]

**Do NOT:**
- [anti-pattern to avoid]

**Example:**
Input: [example input]
Output: [example output]
```

**Ready-to-use example:**
```
Create a TypeScript function with these exact specifications:

**Function name:** validateUserInput
**Parameters:**
- email: string - user's email address
- password: string - user's password

**Returns:** { valid: boolean; errors: string[] }

**Requirements:**
1. Email must be valid format (contains @ and domain)
2. Password must be 8+ characters
3. Password must contain at least one number
4. Password must contain at least one special character

**Edge cases to handle:**
- Empty strings should return appropriate errors
- Whitespace-only input should be treated as empty
- Email should be case-insensitive for validation

**Do NOT:**
- Use regex for email validation (use simple string checks)
- Throw exceptions (return error object instead)

**Example:**
Input: ("user@test.com", "Pass123!")
Output: { valid: true, errors: [] }
```

---

### Prompt 2.2: API Endpoint Creation
```
Create a [framework] API endpoint for [resource]:

**HTTP Method:** [GET/POST/PUT/DELETE]
**Path:** [/api/path]

**Request:**
- Headers: [required headers]
- Body: [body schema]
- Query params: [params]

**Response:**
- Success (200): [success schema]
- Error (4xx): [error schema]

**Business logic:**
1. [step 1]
2. [step 2]

**Include:**
- Input validation
- Error handling
- TypeScript types
```

---

### Prompt 2.3: Component with Specifications
```
Create a [React/Vue/etc] component:

**Component name:** [Name]
**Props:**
- [prop1]: [type] - [description]
- [prop2]: [type] - [description]

**State:** (if applicable)
- [state1]: [type] - [initial value]

**Behavior:**
1. [behavior 1]
2. [behavior 2]

**Styling approach:** [CSS modules/styled-components/Tailwind]

**Accessibility requirements:**
- [requirement 1]
- [requirement 2]
```

---

## Week 3: Testing & Documentation (Days 15-21)

### Day 15-16 Checklist: Test Generation
- [ ] Generate unit tests for existing functions
- [ ] Learn to specify test frameworks (Jest, Vitest, etc.)
- [ ] Practice "add edge case tests" prompts
- [ ] Generate mocks and fixtures
- [ ] Run generated tests (fix any failures)

### Day 17-18 Checklist: Documentation
- [ ] Generate JSDoc/docstrings for functions
- [ ] Create README sections with AI
- [ ] Generate API documentation
- [ ] Write inline comments for complex logic
- [ ] Document one module completely

### Day 19-21 Checklist: Integration
- [ ] Use AI for commit message writing
- [ ] Practice PR description generation
- [ ] Generate changelog entries
- [ ] Create code review comments
- [ ] Complete 15 real work tasks with AI

---

## 🎯 Week 3 Prompts: Testing & Docs

### Prompt 3.1: Unit Test Generation
```
Write comprehensive unit tests for this function using [Jest/Vitest/pytest]:

[paste function code]

Include tests for:
1. Happy path scenarios
2. Edge cases (empty input, null, undefined)
3. Error conditions
4. Boundary values

Use [describe/it or test] block structure.
Include setup/teardown if needed.
Mock [specific dependencies] if present.
```

**Ready-to-use example:**
```
Write comprehensive unit tests for this function using Jest:

function calculateResponseTime(startTime: number, endTime: number): number {
  if (endTime < startTime) {
    throw new Error('Invalid input');
  }
  return endTime - startTime;
}

Include tests for:
1. Happy path scenarios (normal calculation)
2. Edge cases (0 duration, same start/end)
3. Error conditions (negative duration)
4. Boundary values (very large numbers)

Use describe/it block structure.
```

---

### Prompt 3.2: Mock Generation
```
Create mocks for testing this code:

[paste code with dependencies]

Generate:
1. Mock implementations for [dependency names]
2. Factory functions for test data
3. Fixture files if appropriate

Use [Jest mocks/Sinon/etc] syntax.
```

---

### Prompt 3.3: Documentation Generation
```
Generate comprehensive documentation for this code:

[paste code]

Include:
1. JSDoc/docstring with:
   - @description
   - @param for each parameter
   - @returns
   - @throws (if applicable)
   - @example with usage
2. Inline comments for complex logic
3. README section explaining purpose and usage
```

---

### Prompt 3.4: Commit Message Generation
```
Generate a conventional commit message for these changes:

**Files changed:**
[list files]

**Summary of changes:**
[describe what changed]

**Why these changes were made:**
[describe motivation]

Use format: type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
```

---

## Week 4: Code Review & Optimization (Days 22-30)

### Day 22-24 Checklist: AI-Assisted Review
- [ ] Use AI to review your own code before PR
- [ ] Practice "find issues in this code" prompts
- [ ] Generate review comments for others' PRs
- [ ] Identify security vulnerabilities
- [ ] Check for performance issues

### Day 25-27 Checklist: Optimization
- [ ] Use AI for performance optimization suggestions
- [ ] Refactor for readability with AI help
- [ ] Identify code duplication
- [ ] Optimize database queries
- [ ] Improve error handling

### Day 28-30 Checklist: Month 1 Review
- [ ] Complete 25+ real work tasks with AI
- [ ] Document personal best prompts
- [ ] Review monthly AI usage patterns and refine prompts
- [ ] Identify areas for improvement
- [ ] Set goals for Month 2

---

## 🎯 Week 4 Prompts: Review & Optimization

### Prompt 4.1: Code Review
```
Review this code for a pull request:

[paste code]

Check for:
1. Logic errors or bugs
2. Security vulnerabilities
3. Performance issues
4. Code style and best practices
5. Missing error handling
6. Edge cases not covered
7. Accessibility issues (if UI)

Format as PR review comments with line references.
Categorize as: 🔴 Must fix | 🟡 Should fix | 🟢 Suggestion
```

---

### Prompt 4.2: Security Audit
```
Perform a security review of this code:

[paste code]

Check for:
1. SQL injection vulnerabilities
2. XSS vulnerabilities
3. Authentication/authorization issues
4. Sensitive data exposure
5. Input validation gaps
6. Insecure dependencies
7. OWASP Top 10 issues

Rate severity: Critical | High | Medium | Low
Provide remediation code for each issue.
```

---

### Prompt 4.3: Performance Optimization
```
Optimize this code for performance:

[paste code]

Current issues observed:
[describe any known performance problems]

Consider:
1. Algorithm complexity (Big O)
2. Memory usage
3. Database query optimization
4. Caching opportunities
5. Async/parallel processing
6. Bundle size (if frontend)

Provide before/after code with explanation.
```

---

### Prompt 4.4: Refactoring for Maintainability
```
Refactor this code to improve maintainability:

[paste code]

Apply these principles:
1. Single Responsibility Principle
2. DRY (Don't Repeat Yourself)
3. Meaningful naming
4. Small, focused functions
5. Clear control flow
6. Proper error handling

Keep functionality identical.
Add tests if behavior is at risk.
```

---

# Days 31-60: Acceleration - Agent Workflows

## Week 5-6: Multi-Step Tasks (Days 31-44)

### Day 31-35 Checklist: Complex Workflows
- [ ] Learn to break large tasks into steps
- [ ] Practice multi-file editing prompts
- [ ] Use "first...then...finally" structure
- [ ] Chain related tasks together
- [ ] Complete a feature end-to-end with AI

### Day 36-40 Checklist: Agent Patterns
- [ ] Understand agent vs. chat mode
- [ ] Learn when to use agent for exploration
- [ ] Practice delegating research tasks
- [ ] Use agent for codebase navigation
- [ ] Let agent run commands (with review)

### Day 41-44 Checklist: Feature Development
- [ ] Build a complete feature with agent
- [ ] Include tests, docs, and implementation
- [ ] Practice review and iteration
- [ ] Measure time vs. manual development
- [ ] Document agent workflow patterns

---

## 🎯 Weeks 5-6 Agent Prompts: Multi-Step Tasks

### Agent Prompt 5.1: Feature Implementation
```
I need to implement a new feature. Help me build it step by step.

**Feature:** [feature name]
**Description:** [what it does]

**Tech stack:**
- Frontend: [React/Vue/etc]
- Backend: [Node/Python/etc]
- Database: [PostgreSQL/MongoDB/etc]

**Requirements:**
1. [requirement 1]
2. [requirement 2]
3. [requirement 3]

**Acceptance criteria:**
- [ ] [criterion 1]
- [ ] [criterion 2]

Please:
1. First, analyze the codebase to understand existing patterns
2. Create a implementation plan
3. Implement the backend changes
4. Implement the frontend changes
5. Add unit tests
6. Update documentation

Ask me questions if anything is unclear before proceeding.
```

**Ready-to-use example:**
```
I need to implement a new feature. Help me build it step by step.

**Feature:** User course progress tracking
**Description:** Track and display user progress through course modules

**Tech stack:**
- Frontend: React with TypeScript
- Backend: Node.js/Express
- Database: PostgreSQL

**Requirements:**
1. Store completion status for each module per user
2. Calculate overall course completion percentage
3. Display progress bar on course detail page
4. Award badge when course is 100% complete

**Acceptance criteria:**
- [ ] User can see their progress on any course
- [ ] Progress persists across sessions
- [ ] 100% completion triggers badge notification

Please:
1. First, analyze the codebase to understand existing patterns
2. Create an implementation plan
3. Implement the database schema changes
4. Implement the backend API endpoints
5. Implement the frontend components
6. Add unit tests
7. Update API documentation

Ask me questions if anything is unclear before proceeding.
```

---

### Agent Prompt 5.2: Bug Investigation
```
Help me investigate and fix this bug.

**Symptoms:**
[describe what's happening]

**Expected behavior:**
[describe what should happen]

**Steps to reproduce:**
1. [step 1]
2. [step 2]

**Relevant files/areas:**
[list suspected files or areas]

**What I've tried:**
[list debugging attempts]

Please:
1. Analyze the relevant code paths
2. Identify potential root causes
3. Propose a fix with explanation
4. Add a test to prevent regression
```

---

### Agent Prompt 5.3: Codebase Exploration
```
Help me understand this codebase area.

**What I'm trying to understand:**
[specific question or area]

**Context:**
[why you need to understand this]

Please:
1. Find the relevant files and code
2. Explain the architecture and data flow
3. Identify key functions/classes involved
4. Create a diagram if helpful
5. Point out any patterns or conventions used
```

---

### Agent Prompt 5.4: Refactoring Project
```
Help me refactor this module/feature.

**Current state:**
[describe current implementation issues]

**Goals:**
1. [goal 1 - e.g., improve testability]
2. [goal 2 - e.g., reduce coupling]
3. [goal 3 - e.g., improve type safety]

**Constraints:**
- Must maintain backward compatibility
- Cannot break existing tests
- Should be done incrementally

Please:
1. Analyze the current implementation
2. Propose a refactoring plan with steps
3. Execute each step with tests
4. Verify nothing breaks after each step
```

---

## Week 7-8: Automation & Integration (Days 45-60)

### Day 45-50 Checklist: Workflow Automation
- [ ] Create reusable prompt templates
- [ ] Set up AI-assisted code review pipeline
- [ ] Automate documentation updates
- [ ] Create agent workflows for common tasks
- [ ] Build personal prompt library

### Day 51-55 Checklist: Team Patterns
- [ ] Share effective prompts with team
- [ ] Create team prompt templates
- [ ] Document agent best practices
- [ ] Identify team-wide automation opportunities
- [ ] Review team's AI adoption metrics

### Day 56-60 Checklist: Month 2 Review
- [ ] Complete 2 features end-to-end with agents
- [ ] Document top 10 personal prompts
- [ ] Document and share 3 AI success stories with team
- [ ] Share learnings with team
- [ ] Set goals for Month 3

---

## 🎯 Weeks 7-8 Agent Prompts: Automation

### Agent Prompt 6.1: API Development Workflow
```
Build a complete REST API for [resource].

**Resource:** [name, e.g., "courses"]
**Operations needed:** [CRUD, search, etc.]

**Data model:**
[describe fields and relationships]

**Business rules:**
1. [rule 1]
2. [rule 2]

Please create:
1. Database schema/migration
2. Data models/entities
3. Repository/data access layer
4. Service layer with business logic
5. API controllers/handlers
6. Input validation
7. Error handling
8. Unit tests for service layer
9. Integration tests for API
10. OpenAPI/Swagger documentation

Follow existing patterns in the codebase.
```

---

### Agent Prompt 6.2: React Component Suite
```
Create a complete component suite for [feature].

**Feature:** [name]
**Components needed:**
- [Component1] - [purpose]
- [Component2] - [purpose]

**Design requirements:**
- [styling approach]
- [responsive behavior]
- [accessibility requirements]

Please create:
1. Type definitions for props and state
2. Component implementations
3. Storybook stories
4. Unit tests with React Testing Library
5. CSS/styling files
6. Index file for exports
7. README with usage examples

Follow existing component patterns in the codebase.
```

---

### Agent Prompt 6.3: Migration Script
```
Create a data migration from [source] to [target].

**Source:** [describe current data/schema]
**Target:** [describe new data/schema]

**Transformations needed:**
1. [transformation 1]
2. [transformation 2]

**Constraints:**
- Must be idempotent (safe to run multiple times)
- Must be reversible (provide rollback)
- Should handle [volume] records
- Must log progress

Please create:
1. Migration script
2. Rollback script
3. Validation script to verify migration
4. Documentation for running migration
5. Tests with sample data
```

---

### Agent Prompt 6.4: End-to-End Test Suite
```
Create comprehensive E2E tests for [feature/flow].

**User flow:**
1. [step 1]
2. [step 2]
3. [step 3]

**Framework:** [Playwright/Cypress/etc.]

**Test scenarios:**
1. Happy path
2. Error handling
3. Edge cases
4. Accessibility

Please create:
1. Page object models
2. Test fixtures and data
3. Test implementation
4. CI configuration
5. Documentation for running tests
```

---

# Days 61-90: Mastery - Advanced Skills & Automation

## Week 9-10: Advanced Patterns (Days 61-74)

### Day 61-65 Checklist: System-Level Thinking
- [ ] Use AI for architecture decisions
- [ ] Generate system design documents
- [ ] Create technical RFCs with AI
- [ ] Analyze trade-offs with AI assistance
- [ ] Design API contracts

### Day 66-70 Checklist: Complex Problem Solving
- [ ] Use AI for algorithm design
- [ ] Solve performance bottlenecks
- [ ] Debug distributed system issues
- [ ] Optimize database schemas
- [ ] Implement caching strategies

### Day 71-74 Checklist: Knowledge Transfer
- [ ] Create onboarding docs with AI
- [ ] Generate training materials
- [ ] Build internal wikis
- [ ] Document tribal knowledge
- [ ] Create video script outlines

---

## 🎯 Weeks 9-10 Prompts: Advanced Engineering

### Prompt 7.1: Architecture Decision
```
Help me make an architecture decision.

**Context:**
[describe the system and current state]

**Decision needed:**
[what architecture choice needs to be made]

**Options being considered:**
1. [Option A] - [brief description]
2. [Option B] - [brief description]
3. [Option C] - [brief description]

**Constraints:**
- [constraint 1 - e.g., platform limits]
- [constraint 2 - e.g., timeline]
- [constraint 3 - e.g., team expertise]

**Non-functional requirements:**
- Performance: [requirements]
- Scalability: [requirements]
- Security: [requirements]
- Maintainability: [requirements]

Please:
1. Analyze each option against requirements
2. Create a comparison matrix
3. Identify risks for each option
4. Make a recommendation with rationale
5. Suggest implementation approach
```

---

### Prompt 7.2: Technical RFC Generation
```
Help me write a technical RFC.

**Title:** [RFC title]
**Author:** [your name]
**Status:** Draft

**Summary:**
[1-2 sentence summary]

**Problem statement:**
[what problem this solves]

**Proposed solution:**
[high-level description]

Please generate a complete RFC including:
1. Background and motivation
2. Detailed design
3. Alternatives considered
4. Security considerations
5. Rollout plan
6. Rollback plan
7. Open questions
8. References

Follow engineering RFC best practices.
```

---

### Prompt 7.3: Performance Investigation
```
Help me investigate this performance issue.

**Symptoms:**
[describe the performance problem]

**Current metrics:**
- Response time: [current]
- Throughput: [current]
- Error rate: [current]

**System under investigation:**
[describe relevant components]

**Available data:**
[logs, traces, profiles, etc.]

Please:
1. Suggest investigation approach
2. Identify likely bottlenecks
3. Propose diagnostic queries/commands
4. Recommend optimizations
5. Estimate expected improvement
```

---

### Prompt 7.4: Debugging Distributed Systems
```
Help me debug this distributed system issue.

**System architecture:**
[describe services involved]

**Symptoms:**
[what's happening]

**Observed patterns:**
[timing, frequency, conditions]

**Hypotheses:**
1. [hypothesis 1]
2. [hypothesis 2]

Please:
1. Suggest additional data to collect
2. Propose a debugging strategy
3. Identify likely root causes
4. Recommend fixes for each cause
5. Suggest preventive measures
```

---

## Week 11-12: Leadership & Scale (Days 75-90)

### Day 75-80 Checklist: Team Enablement
- [ ] Create team prompt playbook
- [ ] Lead a prompt engineering workshop
- [ ] Establish team AI standards
- [ ] Mentor teammates on AI usage
- [ ] Create team metrics dashboard

### Day 81-85 Checklist: Process Optimization
- [ ] Integrate AI into team workflows
- [ ] Optimize CI/CD with AI tools
- [ ] Automate repetitive team tasks
- [ ] Create self-service AI templates
- [ ] Measure team productivity gains

### Day 86-90 Checklist: 90-Day Review
- [ ] Document all personal prompt patterns
- [ ] Calculate total productivity improvement
- [ ] Write up lessons learned
- [ ] Present results to leadership
- [ ] Plan ongoing mastery development

---

## 🎯 Weeks 11-12 Prompts: Leadership Scale

### Prompt 8.1: Team Standards Document
```
Help me create an AI usage standards document for our engineering team.

**Team size:** [number]
**Tech stack:** [technologies]
**Domain:** [industry/product type]

Please create a document covering:
1. Approved AI tools and setup
2. When to use AI (and when not to)
3. Security guidelines
4. Code review requirements for AI code
5. Testing requirements
6. Prompt best practices
7. Common patterns for our stack
8. Anti-patterns to avoid
9. Metrics to track
10. FAQs

Make it practical and actionable.
```

---

### Prompt 8.2: Retrospective Analysis
```
Analyze our team's AI adoption over the past quarter.

**Data available:**
- AI tool usage metrics
- Developer surveys
- Code quality metrics (before/after)
- Velocity metrics (before/after)

**Questions to answer:**
1. What's working well?
2. What needs improvement?
3. What are the main blockers?
4. Success Story documentation
5. Recommendations for next quarter

Please provide:
1. Executive summary
2. Detailed analysis
3. Specific recommendations
4. Action items with owners
5. Success metrics for next quarter
```

---

### Prompt 8.3: Onboarding Documentation
```
Create comprehensive onboarding documentation for new team members on our AI practices.

**Audience:** New engineers joining the team
**Prerequisite knowledge:** [basic programming in our stack]

Please create:
1. Getting started guide (tools setup)
2. First day AI checklist
3. First week learning plan
4. Key prompts to learn first
5. Common workflows with examples
6. Troubleshooting guide
7. Resources for continued learning
8. FAQ document

Make it welcoming and practical.
```

---

### Prompt 8.4: Automation Recommendation
```
Analyze our development workflow and recommend AI automation opportunities.

**Current workflow:**
1. [step 1]
2. [step 2]
...

**Pain points:**
- [pain point 1]
- [pain point 2]

**Constraints:**
- [constraint 1]
- [constraint 2]

Please recommend:
1. Quick wins (implement this week)
2. Medium-term improvements (this month)
3. Strategic automations (this quarter)

For each, include:
- Description
- Implementation approach
- Expected time savings
- Required effort
- Risks
```

---

# Prompt Library

## Quick Reference: Copy-Paste Prompts

### Code Generation
```
Create a [language] function that [does X] with [inputs] returning [output].
Handle edge cases: [list them]. Include TypeScript types.
```

### Explain Code
```
Explain this code in detail, including the algorithm, complexity, and potential improvements:
[code]
```

### Debug
```
This code should [expected] but instead [actual]. Find and fix the bug:
[code]
```

### Test
```
Write [Jest/pytest] tests for this function covering happy path, edge cases, and errors:
[code]
```

### Refactor
```
Refactor this code to improve [readability/performance/testability] while keeping the same functionality:
[code]
```

### Review
```
Review this code for bugs, security issues, and best practices. Categorize feedback by severity:
[code]
```

### Document
```
Generate comprehensive documentation including JSDoc, README section, and usage examples for:
[code]
```

### API Design
```
Design a REST API for [resource] with CRUD operations, proper status codes, and error handling. Include OpenAPI spec.
```

### Database
```
Design a database schema for [feature] with proper relationships, indexes, and migration script.
```

### Commit Message
```
Generate a conventional commit message for these changes: [describe changes]
```

---

# Daily Checklists

## Daily AI Practice Checklist

### Morning Routine (5 min)
- [ ] Check AI tool is active and responding
- [ ] Review yesterday's prompts that worked well
- [ ] Set intention: "Today I'll try AI for [specific task]"

### During Work
- [ ] Used AI for at least one coding task
- [ ] Experimented with one new prompt pattern
- [ ] Reviewed AI output before committing
- [ ] Documented any particularly effective prompts

### End of Day (5 min)
- [ ] What AI tasks worked well today?
- [ ] What prompts needed iteration?
- [ ] What would I try differently tomorrow?
- [ ] Add any good prompts to personal library

---

## Weekly Review Checklist

### Week End (15 min)
- [ ] How many tasks did I complete with AI assistance?
- [ ] Estimated time saved this week: _____ hours
- [ ] Top 3 prompts that worked well:
  1. ____________________
  2. ____________________
  3. ____________________
- [ ] What didn't work well:
  - ____________________
- [ ] Skill to focus on next week:
  - ____________________

---

## Monthly Progress Tracker

### Month ___ Review

**Quantitative:**
- [ ] Tasks completed with AI: _____
- [ ] Estimated time saved: _____ hours
- [ ] Prompts added to library: _____
- [ ] Agent workflows created: _____

**Qualitative:**
- [ ] Biggest win this month: ____________________
- [ ] Biggest challenge: ____________________
- [ ] Key learning: ____________________

**Skill Progression:**
- [ ] Basic prompting: ⬜ Learning / ⬜ Competent / ⬜ Proficient
- [ ] Context management: ⬜ Learning / ⬜ Competent / ⬜ Proficient
- [ ] Agent workflows: ⬜ Learning / ⬜ Competent / ⬜ Proficient
- [ ] Team enablement: ⬜ Learning / ⬜ Competent / ⬜ Proficient

**Next Month Goals:**
1. ____________________
2. ____________________
3. ____________________

---

# Anti-Patterns to Avoid

## ❌ Don't Do This

### 1. Blind Trust
```
❌ Bad: Accept AI output without review
✅ Good: Always review, test, and understand AI-generated code
```

### 2. Vague Prompts
```
❌ Bad: "Write a function to process data"
✅ Good: "Write a TypeScript function that takes an array of User objects and returns only active users sorted by createdAt date descending"
```

### 3. Sensitive Data
```
❌ Bad: Include API keys, passwords, or PII in prompts
✅ Good: Use placeholder values: "[API_KEY]", "user@example.com"
```

### 4. Skipping Tests
```
❌ Bad: Use AI-generated code without tests
✅ Good: Always generate tests alongside implementation
```

### 5. Ignoring Context
```
❌ Bad: Prompt without relevant file context
✅ Good: Open related files, reference types and interfaces
```

### 6. One-Shot Thinking
```
❌ Bad: Give up if first response isn't perfect
✅ Good: Iterate with follow-up prompts to refine
```

---

# Success Metrics Dashboard

## Track Your Progress

| Week | Tasks with AI | Time Saved (hrs) | Quality Score | Skill Level |
|------|---------------|------------------|---------------|-------------|
| 1 | | | | Beginner |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | Intermediate |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | Advanced |
| 10 | | | | |
| 11 | | | | |
| 12 | | | | Expert |

**Quality Score:** Rate 1-5 based on how much AI helped code quality
**Skill Level:** Self-assess based on prompt sophistication

---

*Document Version: 1.0*
*Created: February 2026*
*Review Schedule: Monthly*
