# Complete Guide to AI-Assisted Coding Tools
## MCP Servers, Skills, Prompts, Agents, Subagents & Custom Instructions

---

# Table of Contents

1. [Introduction](#introduction)
2. [MCP Servers (Model Context Protocol)](#mcp-servers-model-context-protocol)
3. [Skills](#skills)
4. [Prompts & Prompt Engineering](#prompts--prompt-engineering)
5. [Agents](#agents)
6. [Subagents](#subagents)
7. [Custom Instructions](#custom-instructions)
8. [GitHub Copilot Coding Agent](#github-copilot-coding-agent)
9. [Context Engineering](#context-engineering)
10. [Tool-Specific Configurations](#tool-specific-configurations)
11. [Comparison Matrix](#comparison-matrix)
12. [Best Practices](#best-practices)
13. [Quick Start Guide](#quick-start-guide)
14. [Resources](#resources)

---

# Introduction

Modern AI-assisted coding tools have evolved far beyond simple autocomplete. They now include sophisticated systems for:
- **MCP Servers**: External tool integrations via standardized protocols
- **Skills**: Reusable, portable capabilities for specific tasks
- **Prompts**: Structured instructions for AI interactions
- **Agents**: Autonomous AI systems that can plan and execute multi-step tasks
- **Subagents**: Specialized, delegated AI assistants for focused work
- **Custom Instructions**: Persistent configuration for AI behavior

This guide covers these concepts with practical examples for naive users and experienced engineers alike.

---

# MCP Servers (Model Context Protocol)

## What is MCP?

**Model Context Protocol (MCP)** is an open-source standard introduced by Anthropic in November 2024. Think of it as a **"USB port for AI"** – a universal connector that allows AI coding assistants to interact with external tools, databases, APIs, and systems in a standardized and secure way.

### Simple Analogy
> Imagine your AI assistant is a brilliant coder who's trapped in a room with no windows. MCP opens doors and windows, letting the AI see your GitHub repos, browse documentation, run database queries, or even control your browser.

## When to Use MCP Servers

| Use Case | Example | Why MCP Helps |
|----------|---------|---------------|
| **Database Access** | Query production data | AI can read schemas, run safe queries |
| **Browser Automation** | Test web applications | AI can click, type, navigate pages |
| **External APIs** | Fetch documentation | Real-time access to current info |
| **File Systems** | Read/write files | Structured file operations |
| **Repository Actions** | Create branches, PRs | Direct GitHub integration |
| **Design Tools** | Inspect Figma files | Extract design specs |

## MCP Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Your AI Assistant                         │
│              (Claude Code / Copilot / Cursor)               │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                     MCP Client Layer                         │
│            (Built into your coding tool)                     │
└──────────────────────────┬──────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
┌─────────────┐  ┌─────────────────┐  ┌─────────────┐
│ GitHub MCP  │  │  Playwright MCP │  │ Custom MCP  │
│   Server    │  │     Server      │  │   Server    │
└──────┬──────┘  └───────┬─────────┘  └──────┬──────┘
       │                 │                   │
       ▼                 ▼                   ▼
   GitHub API      Web Browser         Your Tools
```

## How to Set Up an MCP Server

### Step 1: Choose Your MCP Server

Popular pre-built MCP servers:
- **GitHub MCP**: Repository management, issues, PRs
- **Playwright MCP**: Browser automation and testing
- **PostgreSQL MCP**: Database queries
- **Filesystem MCP**: File operations
- **Slack MCP**: Team communication
- **Figma MCP**: Design inspection

### Step 2: Installation (Example: GitHub MCP)

For **Claude Code** (in `~/.claude/settings.json`):
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    }
  }
}
```

For **VS Code / Cursor** (in `settings.json`):
```json
{
  "mcp.servers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    }
  }
}
```

### Step 3: Verify Installation

Ask your AI assistant:
> "What MCP tools do you have access to?"

The AI should list available tools from your configured servers.

## Creating a Custom MCP Server

### When to Create Your Own
- You have internal APIs the AI should access
- You need custom database integrations
- You want to expose proprietary tools

### Basic Python MCP Server

```python
# my_custom_mcp/server.py
from mcp.server import Server
from mcp.types import Tool, TextContent

# Create server instance
server = Server("my-custom-server")

# Define a tool
@server.tool("get-user-info")
async def get_user_info(user_id: str) -> list[TextContent]:
    """
    Retrieves user information from the internal system.
    
    Args:
        user_id: The unique identifier for the user
    """
    # Your custom logic here
    user_data = await fetch_user_from_internal_api(user_id)
    return [TextContent(type="text", text=str(user_data))]

# Define resources (data the AI can read)
@server.resource("users://list")
async def list_users() -> str:
    """Lists all available users"""
    users = await get_all_users()
    return str(users)

# Run the server
if __name__ == "__main__":
    server.run()
```

### Register Your Server

Add to your configuration:
```json
{
  "mcpServers": {
    "my-custom": {
      "command": "python",
      "args": ["/path/to/my_custom_mcp/server.py"]
    }
  }
}
```

## MCP Server Examples by Use Case

### Example 1: Database Query Server
```python
@server.tool("query-database")
async def query_database(query: str, database: str = "production") -> list[TextContent]:
    """
    Execute a read-only SQL query against the specified database.
    
    Args:
        query: SQL SELECT query to execute
        database: Target database (production/staging/dev)
    """
    # Safety check - only allow SELECT
    if not query.strip().upper().startswith("SELECT"):
        return [TextContent(type="text", text="Error: Only SELECT queries allowed")]
    
    results = await execute_safe_query(query, database)
    return [TextContent(type="text", text=format_results(results))]
```

### Example 2: Documentation Fetcher
```python
@server.tool("fetch-internal-docs")
async def fetch_docs(topic: str) -> list[TextContent]:
    """
    Fetches internal documentation for a given topic.
    
    Args:
        topic: The documentation topic to search for
    """
    docs = await search_confluence(topic)
    return [TextContent(type="text", text=docs)]
```

---

# Skills

## What are Skills?

**Skills** are portable, reusable capability packages that extend what your AI assistant can do. Think of them as "recipes" or "playbooks" that teach the AI how to perform specific tasks.

### Simple Analogy
> If your AI assistant is a chef, Skills are like recipe cards. Each card teaches a specific dish with ingredients (tools), steps (instructions), and tips (examples).

## Skills vs. Custom Instructions

| Aspect | Skills | Custom Instructions |
|--------|--------|---------------------|
| **Scope** | Specific task or workflow | General behavior |
| **Structure** | Includes scripts, examples, resources | Usually just text |
| **Activation** | Auto-selected based on context | Always active |
| **Portability** | Can be shared/reused across projects | Often personal |
| **Complexity** | Can be very sophisticated | Usually simpler |

## When to Use Skills

- ✅ You do the same complex task repeatedly
- ✅ You want to encode team-specific workflows
- ✅ You need scripts alongside instructions
- ✅ You want to share capabilities with teammates
- ✅ The task requires specific tools or patterns

## Skill File Structure

### GitHub Copilot Skills

**Location:**
- Project skills: `.github/skills/<skill-name>/`
- Personal skills: `~/.copilot/skills/<skill-name>/`

**Required file:** `SKILL.md`

```
.github/
└── skills/
    └── api-testing/
        ├── SKILL.md           # Required - main instructions
        ├── scripts/           # Optional - helper scripts
        │   └── generate-tests.sh
        ├── examples/          # Optional - reference code  
        │   └── sample-test.ts
        └── templates/         # Optional - code templates
            └── test-template.ts
```

### SKILL.md Format

```markdown
---
name: api-testing
description: Generate comprehensive API integration tests using Jest and Supertest
---

# API Testing Skill

## Overview
This skill helps you create API integration tests for REST endpoints.

## When to Use
- Creating tests for new API endpoints
- Adding test coverage to existing APIs
- Setting up integration test suites

## Instructions

### Step 1: Analyze the Endpoint
First, examine the endpoint's route, method, request/response schemas.

### Step 2: Generate Test Cases
Create tests for:
- Happy path (valid inputs)
- Validation errors (missing/invalid params)
- Authentication/authorization
- Edge cases

### Step 3: Use the Template
Reference the template in `templates/test-template.ts` for consistent structure.

## Example

For this endpoint:
```typescript
// POST /api/users
app.post('/users', validateBody(userSchema), createUser);
```

Generate:
```typescript
describe('POST /api/users', () => {
  it('should create user with valid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' });
    expect(response.status).toBe(201);
  });

  it('should return 400 for missing email', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John' });
    expect(response.status).toBe(400);
  });
});
```

## Do NOT
- Generate tests that modify production data
- Skip error case testing
- Use hardcoded credentials
```

## Creating Your First Skill

### Example: React Component Generator Skill

**Create:** `.github/skills/react-component/SKILL.md`

```markdown
---
name: react-component
description: Generate React components with TypeScript, tests, and Storybook stories
---

# React Component Generator

## Purpose
Creates complete React components following our team's patterns.

## When to Use
- Creating new UI components
- Adding to the component library
- Building feature components

## Component Structure
Every component should include:
1. Component file (`ComponentName.tsx`)
2. Types file (`ComponentName.types.ts`)
3. Styles file (`ComponentName.module.css`)
4. Test file (`ComponentName.test.tsx`)
5. Story file (`ComponentName.stories.tsx`)
6. Index file (`index.ts`)

## Generated Structure
```
components/
└── Button/
    ├── Button.tsx
    ├── Button.types.ts
    ├── Button.module.css
    ├── Button.test.tsx
    ├── Button.stories.tsx
    └── index.ts
```

## Template

### Component File
```tsx
import React from 'react';
import styles from './{ComponentName}.module.css';
import type { {ComponentName}Props } from './{ComponentName}.types';

export const {ComponentName}: React.FC<{ComponentName}Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.root} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};
```

### Types File
```tsx
import type { HTMLAttributes, ReactNode } from 'react';

export interface {ComponentName}Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}
```

## Example Usage
"Create a Button component with primary, secondary, and outline variants"
```

### Using the Skill

Once created, simply ask your AI:
> "Create a Modal component with open/close functionality"

The AI will automatically apply the skill based on your request.

---

# Prompts & Prompt Engineering

## What are Prompts?

**Prompts** are the instructions you give to AI assistants. Effective prompting is the difference between getting usable code and getting garbage.

### Simple Analogy
> Prompts are like orders at a restaurant. "Give me food" might get you something, but "I'd like a medium-rare ribeye with garlic butter, roasted vegetables on the side, and no mushrooms please" gets you exactly what you want.

## Prompt Engineering Principles

### 1. Be Specific, Not Vague

```
❌ Bad:  "Write a function to process data"

✅ Good: "Write a TypeScript function called processUserData that:
         - Takes an array of User objects
         - Filters out inactive users (isActive === false)
         - Sorts by createdAt date descending
         - Returns the top 10 results
         - Handle empty arrays gracefully"
```

### 2. Provide Context

```
❌ Bad:  "Add validation"

✅ Good: "Add validation to this Express endpoint using Zod.
         The endpoint receives:
         - email: required, valid email format
         - age: optional, integer between 18-120
         - name: required, 2-50 characters
         Return 400 with error details if validation fails."
```

### 3. Show Examples

```
✅ Good: "Create a function to format currency.
         
         Examples:
         formatCurrency(1234.5, 'USD') → '$1,234.50'
         formatCurrency(1234.5, 'EUR') → '€1,234.50'
         formatCurrency(1234.5, 'JPY') → '¥1,235' (no decimals)"
```

### 4. Specify Constraints

```
✅ Good: "Refactor this function with these constraints:
         - Keep the same function signature (no breaking changes)
         - Use only ES6+ features
         - Do NOT use external libraries
         - Maximum 30 lines
         - Add JSDoc comments"
```

### 5. Define Output Format

```
✅ Good: "Analyze this code and provide feedback in this format:
         
         ## Summary
         [1-2 sentence overview]
         
         ## Issues Found
         1. 🔴 Critical: [issue] - [fix]
         2. 🟡 Warning: [issue] - [fix]
         3. 🟢 Suggestion: [improvement]
         
         ## Refactored Code
         [complete fixed code]"
```

## Prompt Templates Library

### Template 1: Function Generation
```
Create a [language] function with these specifications:

**Name:** [functionName]
**Purpose:** [what it does]

**Parameters:**
- [param1]: [type] - [description]
- [param2]: [type] - [description]

**Returns:** [type] - [description]

**Requirements:**
1. [requirement]
2. [requirement]

**Edge Cases:**
- [edge case to handle]
- [edge case to handle]

**Example:**
Input: [example input]
Output: [example output]
```

### Template 2: Bug Investigation
```
I'm experiencing a bug. Help me investigate.

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What's happening instead]

**Steps to Reproduce:**
1. [step]
2. [step]
3. [step]

**Environment:**
- [relevant tech/versions]

**What I've Tried:**
- [attempt 1]
- [attempt 2]

**Relevant Code:**
[paste code]

Please:
1. Identify potential root causes
2. Suggest debugging steps
3. Propose fixes with explanations
```

### Template 3: Code Review
```
Review this code for a pull request:

[paste code]

Check for:
1. Logic errors or bugs
2. Security vulnerabilities
3. Performance issues
4. Best practices violations
5. Missing error handling
6. Edge cases not covered

Format as:
🔴 Must Fix: [issue] - Line [X] - [suggestion]
🟡 Should Fix: [issue] - Line [X] - [suggestion]  
🟢 Nice to Have: [improvement] - [suggestion]
```

### Template 4: Test Generation
```
Generate comprehensive tests for this code using [Jest/pytest/etc]:

[paste code]

Include:
1. Happy path tests (normal usage)
2. Edge cases (empty, null, boundary values)
3. Error scenarios (invalid input, failures)
4. Mocks for [external dependencies]

Use describe/it block structure.
Include setup/teardown if needed.
Target 90%+ code coverage.
```

### Template 5: Architecture Decision
```
Help me make an architecture decision.

**Context:**
[describe current system state]

**Decision Needed:**
[what needs to be decided]

**Options:**
1. [Option A] - [brief description]
2. [Option B] - [brief description]
3. [Option C] - [brief description]

**Constraints:**
- [constraint]
- [constraint]

**Requirements:**
- Performance: [needs]
- Scalability: [needs]
- Maintainability: [needs]

Please:
1. Analyze each option
2. Create comparison table
3. Identify risks
4. Recommend with reasoning
```

## Saving & Reusing Prompts

### GitHub Copilot: Prompt Files

Create `.github/prompts/<prompt-name>.md`:

```markdown
---
name: api-review
description: Review API endpoint code for security and best practices
---

Review this API endpoint code:

{code}

Check specifically for:
1. SQL injection vulnerabilities
2. Authentication/authorization issues
3. Input validation gaps
4. Rate limiting needs
5. Error message information leakage

Provide severity ratings and fix suggestions.
```

### Claude Code: Saved Prompts

Create in `.claude/prompts/`:

```markdown
---
name: feature-planning
description: Plan implementation of a new feature
---

Help me plan implementing this feature: {feature_description}

Please provide:
1. High-level approach
2. Files that need changes
3. Database schema changes (if any)
4. API changes (if any)
5. Estimated complexity (S/M/L/XL)
6. Potential risks
7. Testing strategy
```

---

# Agents

## What are Agents?

**Agents** are AI systems that can autonomously plan and execute multi-step tasks. Unlike simple chat, agents can:
- Break down complex goals into subtasks
- Execute code and commands
- Read and modify multiple files
- Self-correct when things go wrong
- Make decisions about next steps

### Simple Analogy
> Regular AI chat is like texting a friend for advice. An Agent is like hiring a contractor who plans the work, gathers materials, does the job, checks their work, and cleans up – all from a single request.

## Agent vs. Chat Mode

| Aspect | Chat Mode | Agent Mode |
|--------|-----------|------------|
| **Interaction** | Q&A conversation | Goal-oriented execution |
| **Scope** | Single response | Multi-step workflow |
| **Autonomy** | Low (you guide) | High (it drives) |
| **File Changes** | Suggests changes | Makes changes |
| **Commands** | Suggests commands | Runs commands |
| **Best For** | Questions, small edits | Features, refactoring |

## When to Use Agent Mode

✅ **Use Agent Mode for:**
- Implementing complete features
- Large refactoring projects
- Bug investigation across files
- Setting up new project structures
- Migration scripts
- End-to-end test creation

❌ **Use Chat Mode for:**
- Quick questions
- Understanding code
- Single function changes
- Learning/exploring

## Agent Mode in Different Tools

### GitHub Copilot Agent Mode

**Activation:** 
- Use the `@workspace` command in Copilot Chat
- Enable Agent mode in VS Code settings

**Example:**
```
@workspace Implement user authentication with JWT tokens. Include:
- Login endpoint with email/password
- Register endpoint with validation
- JWT middleware for protected routes
- Refresh token mechanism
- Unit tests for auth service
```

### Cursor Agent Mode

**Activation:**
- Click the Agent toggle in the chat panel
- Use Cmd/Ctrl + I for composer with agent

**Autonomy Slider:**
Cursor offers an autonomy slider:
- **Low**: Agent asks before each action
- **Medium**: Agent asks for major decisions
- **High**: Agent runs autonomously, shows diff at end

### Claude Code Agent Mode

**Activation:**
- Run `claude` in terminal
- Agent mode is default behavior

**Example Session:**
```bash
$ claude
> Implement a caching layer for our API using Redis.
  Include cache invalidation on data updates.

Claude will:
1. Analyze existing API structure
2. Create Redis connection utility
3. Add cache middleware
4. Update data modification endpoints
5. Add cache invalidation logic
6. Create tests
7. Update documentation
```

### Windsurf Cascade Agent

**Activation:**
- Use Cascade panel
- Agent behavior is built-in

**Features:**
- Maintains full project context
- Autonomous multi-file editing
- Runs tests and commands
- Self-corrects on failures

## Agent Workflow Example

### Task: "Add pagination to our users API"

**Agent Internal Planning:**
```
1. Find existing users endpoint
2. Analyze current implementation
3. Determine pagination strategy
4. Modify endpoint to accept page/limit params
5. Update query logic
6. Add pagination metadata to response
7. Update TypeScript types
8. Add tests for pagination
9. Update API documentation
```

**Agent Execution:**
```
📁 Reading src/routes/users.ts...
📁 Reading src/services/userService.ts...
📁 Reading src/types/api.ts...

💭 Planning: I'll implement cursor-based pagination for better performance.

✏️ Modifying src/routes/users.ts
   + Added page and limit query parameters
   + Added response metadata (total, hasMore, nextCursor)

✏️ Modifying src/services/userService.ts
   + Implemented getPaginatedUsers method
   + Added cursor-based query logic

✏️ Creating src/types/pagination.ts
   + Added PaginatedResponse<T> interface

✏️ Modifying src/tests/users.test.ts
   + Added pagination tests

🔧 Running: npm test
   ✓ All tests passing

📝 Updated API documentation
```

---

# Subagents

## What are Subagents?

**Subagents** are specialized AI assistants that the main agent can delegate tasks to. Each subagent operates with:
- Its own **context window** (isolated memory)
- Custom **system prompt** (specialized behavior)
- Specific **tool access** (limited capabilities)
- Independent **permissions**

### Simple Analogy
> If the main Agent is a general contractor, Subagents are the electrician, plumber, and painter they call in for specialized work. Each expert focuses on their domain without getting distracted.

## When to Use Subagents

| Scenario | Why Subagent Helps |
|----------|-------------------|
| **Code Review** | Dedicated reviewer doesn't lose context |
| **Testing** | Test expert knows testing patterns |
| **Security Audit** | Security focus without other distractions |
| **Documentation** | Doc writer with consistent style |
| **Debugging** | Debugger with investigative approach |
| **Frontend/Backend** | Domain experts for each layer |

## Built-in Subagents (Claude Code)

Claude Code includes default subagents:

### 1. Explore Subagent
```
Purpose: Investigate codebases, understand architecture
Tools: Read, Grep, Glob (read-only)
Use for: "Help me understand how authentication works in this project"
```

### 2. Plan Subagent
```
Purpose: Create implementation plans without making changes
Tools: Read, Grep (read-only)
Use for: "Plan how we should implement the payment system"
```

## Creating Custom Subagents

### Method 1: Using /agents Command (Claude Code)

```bash
$ claude
> /agents

Select action:
1. List agents
2. Create new agent
3. Edit agent
4. Delete agent

> 2

Agent name: security-reviewer
Description: Reviews code for security vulnerabilities
Scope: project

Define system prompt:
---
You are a security expert reviewing code for vulnerabilities.

Focus on:
- OWASP Top 10 vulnerabilities
- Authentication/authorization flaws
- Input validation issues
- Sensitive data exposure
- SQL injection, XSS, CSRF

For each issue found:
1. Severity: Critical/High/Medium/Low
2. Location: File and line
3. Description: What's wrong
4. Fix: How to remediate
5. Reference: Relevant security standard

Do NOT modify code, only review and report.
---

Tools: Read, Grep, Glob
Model: claude-sonnet
```

### Method 2: Creating Subagent Files

**Project-level:** Create `.claude/agents/security-reviewer.md`

**User-level:** Create `~/.claude/agents/security-reviewer.md`

```markdown
---
name: security-reviewer
description: Reviews code for security vulnerabilities following OWASP guidelines
model: claude-sonnet-4-20250514
tools:
  - Read
  - Grep
  - Glob
---

# Security Reviewer

You are a security expert reviewing code for vulnerabilities.

## Your Focus Areas

### Authentication & Authorization
- Check for proper auth on all endpoints
- Verify role-based access controls
- Look for auth bypass possibilities

### Input Validation
- All user input must be validated
- Check for injection vulnerabilities (SQL, NoSQL, Command)
- Verify output encoding

### Data Protection
- Sensitive data (passwords, tokens) properly handled
- No secrets in code
- Proper encryption usage

## Output Format

For each issue found:

```
### [SEVERITY] Issue Title

**Location:** `file.ts:line`

**Description:** 
What the vulnerability is and how it could be exploited.

**Remediation:**
\`\`\`typescript
// Fixed code
\`\`\`

**Reference:** OWASP A01:2021 - Broken Access Control
```

## Rules
- Do NOT modify any code
- Do NOT suggest changes that break functionality
- Prioritize critical issues first
- Be specific about locations and fixes
```

### Method 3: Cursor Subagent Rules

In `.cursor/rules/security-reviewer.mdc`:

```markdown
---
description: Security review agent for code analysis
globs:
  - "**/*.ts"
  - "**/*.js"
---

# Security Reviewer Agent

When reviewing code for security:

1. Check for OWASP Top 10 issues
2. Verify input validation
3. Check authentication flows
4. Look for sensitive data exposure

Report findings with severity and fixes.
```

## Using Subagents

### Invoking Subagents

**Claude Code:**
```bash
> Ask @security-reviewer to review src/auth/
> Have @documentation-writer update the README
> @test-expert write tests for the UserService
```

**Cursor:**
```
In Agent mode, Cursor automatically delegates to appropriate agents
based on the task and your configured rules.
```

## Subagent Examples

### Example 1: Documentation Writer

```markdown
---
name: documentation-writer
description: Creates and updates documentation with consistent style
tools:
  - Read
  - Write
  - Grep
---

# Documentation Writer

You are a technical writer who creates clear, helpful documentation.

## Documentation Standards

### README Files
- Start with project purpose (1 sentence)
- Installation: copy-paste ready commands
- Quick start: working example in <5 minutes
- API reference: all public methods documented

### Code Comments
- JSDoc for all public functions
- Explain "why" not "what"
- Keep comments current with code

### API Documentation
- OpenAPI/Swagger format
- Include request/response examples
- Document error responses

## Tone
- Clear and concise
- Assume reader is a developer
- Use active voice
- Include code examples
```

### Example 2: Test Expert

```markdown
---
name: test-expert
description: Creates comprehensive test suites
tools:
  - Read
  - Write
  - Bash
---

# Test Expert

You are a testing specialist who creates thorough, maintainable tests.

## Testing Philosophy
- Tests should document behavior
- Prefer integration tests over mocks when possible
- Every public function needs tests
- Edge cases are not optional

## Test Structure
```typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should [expected behavior] when [condition]', () => {
      // Arrange
      // Act  
      // Assert
    });
  });
});
```

## Coverage Requirements
- Happy path: Required
- Edge cases: Required  
- Error handling: Required
- Boundary values: When applicable

## Commands
- Run tests: `npm test`
- Coverage: `npm run test:coverage`
- Watch: `npm run test:watch`
```

### Example 3: Database Expert

```markdown
---
name: database-expert
description: Designs schemas and optimizes queries
tools:
  - Read
  - Grep
  - Bash
---

# Database Expert

You are a database specialist focusing on PostgreSQL.

## Responsibilities
- Schema design and migrations
- Query optimization
- Index recommendations
- Data modeling

## Standards
- Use migrations for all schema changes
- Follow naming conventions: snake_case for DB, camelCase for app
- Always include created_at, updated_at timestamps
- Soft delete with deleted_at when appropriate

## Before Creating Migrations
1. Check existing schema
2. Consider backward compatibility
3. Plan rollback strategy
4. Estimate data migration time

## Query Optimization
- Explain analyze before optimizing
- Add indexes for frequently filtered columns
- Consider query patterns, not just individual queries
```

---

# Custom Instructions

## What are Custom Instructions?

**Custom Instructions** are persistent configuration that shapes how AI assistants behave across all interactions. Unlike skills (task-specific) or prompts (one-time), custom instructions define default behavior.

### Simple Analogy
> Custom instructions are like job preferences. You tell a new employee: "We use TypeScript here, we prefer functional programming, and we always write tests." They apply this to everything they do.

## Types of Custom Instructions

### 1. User-Level (Personal)
- Apply to all your projects
- Stored in your user profile
- Your personal preferences

### 2. Project-Level (Team)
- Apply to specific repository
- Version controlled with code
- Team-wide standards

### 3. Workspace-Level
- Apply to current workspace
- Combine with project rules
- Override defaults

## Custom Instructions by Tool

### GitHub Copilot

**User Level:** Settings > Copilot > Custom Instructions

**Project Level:** Create `.github/copilot-instructions.md`

```markdown
# Copilot Instructions for This Project

## Language & Frameworks
- Use TypeScript with strict mode
- React 18 with functional components
- Express.js for backend

## Code Style
- Prefer const over let
- Use arrow functions
- Destructure props and imports
- Maximum function length: 30 lines

## Naming Conventions
- Components: PascalCase
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Files: kebab-case

## Testing
- Jest for unit tests
- React Testing Library for components
- Minimum 80% coverage

## Documentation
- JSDoc for public functions
- README for each module
- Inline comments for complex logic

## Security
- Never log sensitive data
- Validate all inputs
- Use parameterized queries
- Sanitize user content

## Do NOT
- Use `any` type in TypeScript
- Use class components in React
- Commit console.log statements
- Use synchronous file operations
```

### Claude Code

**User Level:** `~/.claude/CLAUDE.md`

**Project Level:** `CLAUDE.md` (in project root)

```markdown
# Claude Instructions

## Project Context
This is a SaaS application for project management.
Stack: Next.js 14, Prisma, PostgreSQL, TailwindCSS

## Code Standards

### TypeScript
- Strict mode enabled
- No `any` types
- Prefer interfaces over types
- Use Zod for runtime validation

### React
- Server Components by default
- Client Components only when needed
- Use React Query for data fetching
- Prefer composition over inheritance

### Database
- Prisma for ORM
- Migrations for all changes
- Soft delete pattern
- UUID for IDs

## Commands
- Dev: `npm run dev`
- Test: `npm test`
- Lint: `npm run lint`
- Build: `npm run build`

## Directory Structure
```
src/
├── app/          # Next.js app router
├── components/   # React components
├── lib/          # Utilities
├── services/     # Business logic
└── types/        # TypeScript types
```

## When Unclear
- Ask before making assumptions
- Prefer explicit over clever
- When in doubt, add tests
```

### Cursor

**User Level:** Settings > General > Rules for AI

**Project Level:** `.cursor/rules/<name>.mdc` or `.cursorrules`

```markdown
# Cursor Rules

## Code Generation
- Always use TypeScript
- Generate types before implementation
- Include error handling
- Add JSDoc comments

## Architecture Preferences
- Prefer functional programming
- Use dependency injection
- Single responsibility principle
- Immutable data structures

## Response Format
- Show complete working code
- Explain changes made
- Note any assumptions
- Suggest follow-up improvements

## Review Checklist
Before suggesting code, verify:
- [ ] Types are correct
- [ ] Errors are handled
- [ ] Edge cases covered
- [ ] Consistent with codebase
```

### Windsurf

**Project Level:** `.windsurfrules`

```markdown
# Windsurf Rules

## Project: E-commerce Platform

### Technology Stack
- Frontend: Vue 3 + Vite
- Backend: FastAPI
- Database: PostgreSQL
- Cache: Redis

### Coding Standards
- Python: Follow PEP 8
- Vue: Composition API only
- Type hints required everywhere
- Docstrings for all functions

### Testing Requirements
- pytest for backend
- Vitest for frontend
- E2E with Playwright
```

### Aider

**Configuration:** `.aider.conf.yml` or `AGENTS.md`

```yaml
# .aider.conf.yml
model: gpt-4o
auto-commits: false
dirty-commits: false
attribute-author: true
attribute-committer: true

# Custom prompt additions
system-prompt: |
  You are working on a Python data pipeline project.
  Always use type hints.
  Prefer dataclasses over dicts.
  Use pytest for testing.
```

Or use `AGENTS.md`:

```markdown
# AGENTS.md

## Project Overview
Data pipeline for ETL processing

## Build Commands
- Install: `pip install -e .`
- Test: `pytest`
- Lint: `ruff check .`

## Code Style
- Python 3.11+
- Type hints required
- Dataclasses for data structures
- Async/await for I/O

## Testing
- Pytest with fixtures
- Mock external services
- Integration tests in `tests/integration/`
```

## AGENTS.md Universal Format

`AGENTS.md` is an **open standard** that works across many AI coding tools.

```markdown
# AGENTS.md

## Project Overview
Brief description of what this project does.

## Quick Start
```bash
npm install
npm run dev
```

## Build & Test Commands
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run typecheck` - Verify types

## Architecture
```
src/
├── api/       # REST endpoints
├── services/  # Business logic
├── models/    # Data models
├── utils/     # Helpers
└── config/    # Configuration
```

## Code Style Guidelines
- TypeScript strict mode
- ESLint + Prettier
- Conventional commits
- Feature branches

## Testing Guidelines
- Unit tests required for services
- Integration tests for APIs
- Mocks for external services
- Minimum 80% coverage

## Security Requirements
- No secrets in code
- Validate all inputs
- HTTPS only in production
- Rate limiting on APIs

## Do NOT
- Commit node_modules
- Use console.log in production
- Bypass TypeScript with `any`
- Skip error handling
```

## Creating Effective Custom Instructions

### Do's ✅

1. **Be Specific**
   ```
   ✅ "Use Zod for validation with custom error messages"
   ❌ "Validate inputs properly"
   ```

2. **Provide Examples**
   ```
   ✅ "Name tests like: 'should return user when valid ID provided'"
   ❌ "Write good test names"
   ```

3. **Include Commands**
   ```
   ✅ "Run tests with: npm test -- --coverage"
   ❌ "Make sure tests pass"
   ```

4. **Define Structure**
   ```
   ✅ "Components go in src/components/{ComponentName}/"
   ❌ "Keep code organized"
   ```

### Don'ts ❌

1. **Don't Be Vague**
   ```
   ❌ "Write clean code"
   ✅ "Functions under 30 lines, single responsibility"
   ```

2. **Don't Contradict**
   ```
   ❌ "Use classes" + "Use functional programming"
   ✅ Pick one approach and stick to it
   ```

3. **Don't Overload**
   ```
   ❌ 1000 lines of instructions
   ✅ Focus on the important 20% of rules
   ```

---

# Tool-Specific Configurations

## GitHub Copilot

### File Structure
```
project/
├── .github/
│   ├── copilot-instructions.md   # Project instructions
│   ├── prompts/                   # Saved prompts
│   │   └── code-review.md
│   └── skills/                    # Skills
│       └── api-testing/
│           └── SKILL.md
├── AGENTS.md                      # Universal config
└── ...
```

### Key Features
| Feature | Location | Purpose |
|---------|----------|---------|
| Instructions | `.github/copilot-instructions.md` | Project rules |
| Skills | `.github/skills/` | Task capabilities |
| Prompts | `.github/prompts/` | Reusable prompts |
| User Rules | VS Code Settings | Personal prefs |

## Claude Code

### File Structure
```
project/
├── .claude/
│   ├── agents/                    # Subagents
│   │   ├── security-reviewer.md
│   │   └── test-expert.md
│   ├── prompts/                   # Saved prompts
│   │   └── implement-feature.md
│   └── settings.json              # Claude settings
├── CLAUDE.md                      # Project instructions
└── ...
```

### Key Features
| Feature | Location | Purpose |
|---------|----------|---------|
| Instructions | `CLAUDE.md` | Project rules |
| Subagents | `.claude/agents/` | Specialized agents |
| Settings | `.claude/settings.json` | Tool config |
| MCP Servers | `~/.claude/settings.json` | Tool integrations |

### settings.json Example
```json
{
  "permissions": {
    "allow": ["Read", "Write", "Bash"],
    "deny": ["WebFetch"]
  },
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

## Cursor

### File Structure
```
project/
├── .cursor/
│   └── rules/
│       ├── general.mdc            # General rules
│       ├── testing.mdc            # Test-specific
│       └── security.mdc           # Security rules
├── .cursorrules                   # Alternative location
├── AGENTS.md                      # Universal config
└── ...
```

### Rule Levels
| Level | Scope | Location |
|-------|-------|----------|
| User | All projects | Settings > General |
| Project | This repo | `.cursor/rules/` |
| Always | Every request | Rule: `alwaysApply: true` |
| Auto | Context-based | Rule: specific globs |
| Manual | On request | Rule: `@rulename` |

### Rule Format (.mdc)
```markdown
---
description: React component standards
alwaysApply: false
globs:
  - "src/components/**/*.tsx"
---

# React Component Rules

- Use functional components only
- Export named, not default
- Props interface above component
- Use React.FC type annotation
```

## Windsurf

### File Structure
```
project/
├── .windsurfrules                 # Project rules
├── AGENTS.md                      # Universal config
└── ...
```

### Key Features
| Feature | How to Use |
|---------|-----------|
| Rules | `.windsurfrules` file |
| Memories | Cascade > Memories & Rules |
| Flows | Cascade workflows |
| Web Search | @web in prompts |

## Aider

### File Structure
```
project/
├── .aider.conf.yml                # Aider config
├── .env                           # API keys
├── AGENTS.md                      # Universal config
└── ...
```

### Configuration
```yaml
# .aider.conf.yml
model: claude-sonnet-4-20250514
edit-format: diff
auto-commits: true
dirty-commits: false

# Chat modes
chat-mode: code

# Linting
lint-cmd: npm run lint
auto-lint: true

# Testing  
test-cmd: npm test
auto-test: true
```

## OpenCode

### File Structure
```
project/
├── .opencode/
│   └── config.json
├── AGENTS.md
└── ...
```

### MCP Configuration
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"]
    }
  }
}
```

---

# GitHub Copilot Coding Agent

## What is the Copilot Coding Agent?

The **GitHub Copilot Coding Agent** is an autonomous AI system that can independently complete development tasks. Unlike agent mode in an IDE (which assists while you watch), the Coding Agent works in the background on GitHub itself.

### Simple Analogy
> Think of it as an AI intern that you can assign GitHub Issues to. They work on the task, create a branch, make commits, run tests, and submit a pull request for your review – all while you focus on other work.

## When to Use the Coding Agent

✅ **Good for:**
- Bug fixes with clear reproduction steps
- Small to medium features with defined scope
- Code refactoring tasks
- Test coverage improvements
- Documentation updates
- Dependency upgrades
- Addressing technical debt

❌ **Not ideal for:**
- Large architectural changes
- Complex features requiring many decisions
- Tasks with ambiguous requirements
- Security-critical code (needs careful review)

## How to Assign Tasks to Copilot

### Method 1: Assign an Issue Directly

1. **Create a well-defined issue:**
```markdown
## Title: Add pagination to /api/users endpoint

## Description
The users API endpoint currently returns all users. Add pagination support.

## Acceptance Criteria
- [ ] Accept `page` and `limit` query parameters
- [ ] Return pagination metadata (total, hasMore)
- [ ] Default to page 1, limit 20
- [ ] Maximum limit of 100

## Files to Modify
- src/routes/users.ts
- src/services/userService.ts
- src/types/api.ts

## Testing
- Add unit tests for pagination logic
- Update existing API tests
```

2. **Assign to Copilot:**
   - Go to the issue on GitHub
   - Click "Assignees"
   - Select "Copilot" from the list

3. **Monitor Progress:**
   - View the Agents tab in your repository
   - Check session logs for real-time progress
   - Receive notification when PR is ready

### Method 2: From VS Code

1. Install the GitHub Pull Requests extension
2. Open Command Palette (Cmd/Ctrl + Shift + P)
3. Select "GitHub Copilot: Assign Issue to Copilot"
4. Choose the issue from your repository

### Method 3: From Copilot Chat

```
@github Assign issue #42 to Copilot
```

### Method 4: From Slack

With the GitHub Copilot Slack integration:
```
/github assign-copilot issue:42 repo:myorg/myrepo
```

## What Happens After Assignment

```
┌─────────────────────────────────────────────────────────────┐
│                    COPILOT CODING AGENT                      │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  1. ANALYZE                                                  │
│     • Read issue description and acceptance criteria         │
│     • Examine repository structure                           │
│     • Review .github/copilot-instructions.md                │
│     • Identify relevant files                                │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  2. PLAN                                                     │
│     • Create implementation strategy                         │
│     • Identify dependencies between changes                  │
│     • Estimate scope                                         │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  3. IMPLEMENT                                                │
│     • Create branch from default branch                      │
│     • Make code changes                                      │
│     • Create/update tests                                    │
│     • Update documentation                                   │
│     • Commit progress incrementally                          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  4. VALIDATE                                                 │
│     • Run tests via GitHub Actions                          │
│     • Execute linting                                        │
│     • Auto-fix issues found                                  │
│     • Retry if needed                                        │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  5. SUBMIT                                                   │
│     • Open Draft Pull Request                                │
│     • Include explanation of changes                         │
│     • Request human review                                   │
│     • Wait for approval before CI runs                       │
└─────────────────────────────────────────────────────────────┘
```

## Optimizing Issues for Copilot

### Issue Template for Copilot Tasks

Create `.github/ISSUE_TEMPLATE/copilot-task.md`:

```markdown
---
name: Copilot Task
about: A well-defined task suitable for Copilot
title: ''
labels: copilot-eligible
assignees: ''
---

## Summary
<!-- One-sentence description of what needs to be done -->

## Detailed Description
<!-- Explain the context and what needs to change -->

## Acceptance Criteria
<!-- Checkboxes for what "done" looks like -->
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Files to Modify
<!-- List specific files or directories -->
- `src/path/to/file.ts`
- `tests/path/to/test.ts`

## Technical Notes
<!-- Any implementation hints or constraints -->

## Testing Requirements
<!-- What tests should be added/updated -->

## Out of Scope
<!-- Explicitly state what NOT to do -->
```

### Writing Good Issues for Copilot

**✅ Good Issue:**
```markdown
## Add email validation to registration form

### Summary
Add client-side email validation to the registration form.

### Acceptance Criteria
- [ ] Email field shows error for invalid format
- [ ] Validate on blur, not on every keystroke
- [ ] Error message: "Please enter a valid email address"
- [ ] Valid emails: user@example.com, user.name@domain.co.uk
- [ ] Invalid: user@, @domain.com, user space@domain.com

### Files to Modify
- src/components/RegistrationForm.tsx
- src/utils/validation.ts
- src/tests/RegistrationForm.test.tsx

### Technical Notes
- Use the existing validateInput utility pattern
- Follow React Testing Library patterns for tests
```

**❌ Bad Issue:**
```markdown
## Fix registration

The registration isn't working right. Please fix it.
```

## PR Automation with Copilot

### Automatic Code Review

Configure Copilot to review all PRs:

1. Go to Repository Settings > Copilot > Code Review
2. Enable "Automatically review pull requests"
3. Configure options:
   - Review new PRs
   - Review new pushes
   - Review draft PRs

### Copilot Review Output
```markdown
## Copilot Review

### Summary
This PR adds pagination to the users API endpoint.

### Findings

🟢 **Looks Good**
- Proper input validation for page/limit parameters
- Defensive coding for edge cases

🟡 **Suggestion** (Line 45)
Consider adding an index on `created_at` for the ORDER BY clause.

🔴 **Issue** (Line 23)
The limit parameter accepts values above 100, but the spec requires max 100.

### Security
No security issues detected.

### Tests
Test coverage for new code: 87%
```

---

# Context Engineering

## What is Context Engineering?

**Context Engineering** is the practice of systematically managing all the information, tools, and context that an AI model operates with. It's the evolution beyond simple prompt engineering.

### Simple Analogy
> Prompt engineering is like giving someone directions. Context engineering is like giving them a GPS with real-time traffic, their schedule, and knowledge of their preferences – so they can navigate any situation optimally.

## Prompt Engineering vs. Context Engineering

| Aspect | Prompt Engineering | Context Engineering |
|--------|-------------------|---------------------|
| **Focus** | The question/instruction | The entire environment |
| **Scope** | Single interaction | System-wide design |
| **Memory** | Stateless | Manages state |
| **Tools** | Text only | Tools, data, memory |
| **Dynamic** | Static prompt | Adaptive context |

## The Four Pillars of Context Engineering

### 1. Working Context
What the AI sees right now in its context window.

```
┌────────────────────────────────────────┐
│          WORKING CONTEXT               │
├────────────────────────────────────────┤
│ • Current prompt                       │
│ • Opened files                         │
│ • Recent conversation                  │
│ • Active file content                  │
│ • Error messages                       │
└────────────────────────────────────────┘
```

### 2. Short-Term Memory
Recent interactions and temporary state.

```
┌────────────────────────────────────────┐
│         SHORT-TERM MEMORY              │
├────────────────────────────────────────┤
│ • Last few exchanges                   │
│ • Recently viewed files                │
│ • Current task context                 │
│ • Session preferences                  │
└────────────────────────────────────────┘
```

### 3. Long-Term Memory
Persistent knowledge and preferences.

```
┌────────────────────────────────────────┐
│          LONG-TERM MEMORY              │
├────────────────────────────────────────┤
│ • AGENTS.md / CLAUDE.md                │
│ • Custom instructions                  │
│ • Project conventions                  │
│ • User preferences                     │
│ • Team standards                       │
└────────────────────────────────────────┘
```

### 4. External Tools (MCP)
Real-time access to external systems.

```
┌────────────────────────────────────────┐
│           EXTERNAL TOOLS               │
├────────────────────────────────────────┤
│ • Database queries                     │
│ • API calls                            │
│ • File system access                   │
│ • Browser automation                   │
│ • Version control                      │
└────────────────────────────────────────┘
```

## Context Engineering Best Practices

### 1. Context-First Thinking

Before writing a prompt, ask:
- What context does the AI need?
- What files should be open?
- What documentation is relevant?
- What constraints exist?

**Example:**
```
Instead of: "Write a function to validate users"

Do this:
1. Open existing validation utilities
2. Open user model/types
3. Open similar validation functions
4. Then ask: "Following the pattern in utils/validation.ts,
   create a validateUser function that checks the UserInput type
   against our validation rules"
```

### 2. Layered Context Management

Organize context by relevance and longevity:

```markdown
# .github/copilot-instructions.md (Long-term)
Core conventions that never change.

# .github/prompts/current-sprint.md (Short-term)
Sprint-specific context and focus areas.

# Open files/@ mentions (Working)
Immediate task context.
```

### 3. Progressive Disclosure

Don't dump everything at once:

```
❌ Bad: 2000-line instruction file loaded always

✅ Good: 
   Level 1: Core rules (always loaded)
   Level 2: Skills (loaded when relevant)
   Level 3: Examples (loaded on demand)
```

### 4. Structured Formats

Use consistent, parseable formats:

```markdown
## API Conventions

### Request Format
| Method | Path Pattern | Body |
|--------|-------------|------|
| GET | /api/{resource} | None |
| POST | /api/{resource} | JSON |
| PUT | /api/{resource}/{id} | JSON |
| DELETE | /api/{resource}/{id} | None |

### Response Format
\`\`\`json
{
  "data": T | T[],
  "meta": { "total": number, "page": number },
  "error": { "code": string, "message": string } | null
}
\`\`\`
```

### 5. Context Hygiene

Regularly clean up stale context:

```yaml
# Weekly context review
- Remove outdated instructions
- Update deprecated patterns
- Prune unused skills
- Refresh examples with current code
```

## Advanced Context Techniques

### Technique 1: Context Priming

Start sessions with context load:

```markdown
Before we begin, please review:
1. @AGENTS.md for project conventions
2. @src/types/api.ts for type definitions
3. @src/utils/validation.ts for validation patterns

Now, let's implement user input validation...
```

### Technique 2: Context Checkpoints

For long tasks, create checkpoints:

```markdown
## Checkpoint: Authentication Implementation

### Completed
- [x] User model with password hashing
- [x] JWT token generation
- [x] Login endpoint

### Current State
- Working on: Refresh token mechanism
- Open files: authService.ts, tokenUtils.ts
- Last commit: "Add login endpoint"

### Next Steps
- Implement refresh token storage
- Add token rotation
- Create logout endpoint
```

### Technique 3: Context Compression

Summarize before context overflow:

```markdown
## Context Summary (for long conversations)

We've been working on payment integration. So far:
- Created PaymentService with Stripe integration
- Added checkout endpoint at POST /api/checkout
- Tests passing for happy path

Current issue: Webhook signature verification failing.
Error: "Invalid signature for payload"

Let's focus on fixing the webhook verification...
```

### Technique 4: Semantic Context Selection

Include context based on meaning, not just proximity:

```
Task: Fix bug in user registration

Relevant context (include):
- Registration endpoint code
- User validation logic
- Error handling utilities
- Related test files

Not relevant (exclude):
- Unrelated API endpoints
- Frontend components
- Database migrations
```

## Context Engineering for Teams

### Team Context Hierarchy

```
Organization Level
├── .github/copilot-instructions.md  (All repos)
│
Repository Level
├── AGENTS.md                        (This repo)
├── .github/prompts/                 (Team prompts)
└── .github/skills/                  (Team skills)
    │
    Personal Level
    └── ~/.copilot/                  (Individual prefs)
```

### Context Versioning

Track context changes with your code:

```bash
# When updating AI context
git add AGENTS.md .github/skills/
git commit -m "refactor(ai): Update context for new testing patterns

- Added Jest mock patterns
- Updated component structure conventions
- Removed deprecated validator references"
```

### Context Review Process

Include AI context in code reviews:

```markdown
## Pull Request Checklist

- [ ] Code follows conventions
- [ ] Tests pass
- [ ] Documentation updated
- **[ ] AI context updated if patterns changed**
```

---

# Detailed Comparison: Custom Instructions vs Custom Prompts vs Skills vs Agents

Understanding when to use Custom Instructions, Custom Prompts, Skills, or Agents is critical for effective AI-assisted development. This section provides a deep-dive comparison with practical examples.

## Quick Reference Matrix

| Aspect | Custom Instructions | Custom Prompts | Skills | Agents |
|--------|--------------------:|---------------:|-------:|-------:|
| **Primary Purpose** | Define default behavior | Reusable request templates | Task-specific capabilities | Autonomous execution |
| **Scope** | Always active | On-demand | Context-triggered | Goal-oriented |
| **Persistence** | Permanent until changed | Saved, invoked manually | Auto-selected by context | Session-based |
| **Complexity** | Simple text rules | Templated requests | Multi-file packages | Multi-step workflows |
| **User Interaction** | None after setup | Single invocation | Minimal | High autonomy |
| **Best For** | Coding standards | Repetitive requests | Domain expertise | Large features |

---

## 1. Custom Instructions (Always-On Configuration)

### What They Are
Custom Instructions are **persistent rules** that define how the AI behaves in ALL interactions. Think of them as "house rules" – once set, they apply to everything.

### When to Use
- ✅ Coding standards and conventions
- ✅ Technology stack preferences
- ✅ Company-specific terminology
- ✅ Forbidden practices (anti-patterns)
- ✅ Output format preferences

### Detailed Example

**File:** `.github/copilot-instructions.md`

```markdown
# Project: E-Commerce Platform

## Technology Stack
- TypeScript 5.0+ with strict mode
- React 18 with functional components only
- Next.js 14 App Router
- PostgreSQL with Prisma ORM
- TailwindCSS for styling

## Code Conventions

### Naming
- Components: PascalCase (e.g., ProductCard.tsx)
- Functions: camelCase (e.g., calculateDiscount)
- Constants: SCREAMING_SNAKE_CASE (e.g., MAX_CART_ITEMS)
- Database columns: snake_case (e.g., created_at)

### File Structure
components/
├── ComponentName/
│   ├── ComponentName.tsx
│   ├── ComponentName.test.tsx
│   ├── ComponentName.styles.ts
│   └── index.ts

### Testing Requirements
- Jest + React Testing Library
- Minimum 80% coverage
- Test file next to component
- Name tests: "should [expected behavior] when [condition]"

## Forbidden Practices (NEVER do these)
- ❌ Never use `any` type
- ❌ Never use class components
- ❌ Never use inline styles in React
- ❌ Never commit console.log statements
- ❌ Never store secrets in code

## Error Handling
- All API calls must have try/catch
- User-facing errors should be friendly
- Log errors with context (userId, action, params)
- Use custom error classes from src/lib/errors.ts
```

### How It Works in Practice

**Without Custom Instructions:**
```
User: "Create a button component"

AI generates:
class Button extends React.Component { ... }  // ❌ Class component
style={{ color: 'red' }}                       // ❌ Inline styles
```

**With Custom Instructions:**
```
User: "Create a button component"

AI generates:
export const Button: React.FC<ButtonProps> = ({ ... }) => {  // ✅ Functional
  return <button className="btn-primary">                     // ✅ Tailwind
```

---

## 2. Custom Prompts (Reusable Request Templates)

### What They Are
Custom Prompts are **saved templates** for common requests. Think of them as "macros" – pre-written prompts you invoke when needed, optionally with variables.

### When to Use
- ✅ Frequent requests with similar structure
- ✅ Complex prompts you don't want to retype
- ✅ Team-standardized code generation patterns
- ✅ Documentation templates
- ✅ Review checklists

### Detailed Example

**File:** `.github/prompts/api-endpoint.md`

```markdown
---
name: api-endpoint
description: Generate a complete REST API endpoint with validation and tests
variables:
  - resource
  - method
  - fields
---

Create a complete {{method}} endpoint for {{resource}} with the following:

## Endpoint Specification
- **Route:** /api/{{resource}}
- **Method:** {{method}}
- **Authentication:** Required (JWT)

## Request Schema (for POST/PUT)
{{fields}}

## Implementation Requirements
1. Input validation using Zod schema
2. Error handling with custom error classes
3. Proper HTTP status codes:
   - 200: Success (GET, PUT)
   - 201: Created (POST)
   - 400: Validation error
   - 401: Unauthorized
   - 404: Not found
   - 500: Server error

4. TypeScript types for request/response
5. JSDoc documentation

## Testing Requirements
Generate tests covering:
- Happy path with valid data
- Validation errors (missing fields, invalid format)
- Authentication failure
- Not found scenario (for GET/PUT/DELETE)

## Output Format
Provide in this order:
1. Route file (routes/{{resource}}.ts)
2. Service file (services/{{resource}}Service.ts)
3. Validation schema (schemas/{{resource}}.ts)
4. Types (types/{{resource}}.ts)
5. Tests (tests/{{resource}}.test.ts)
```

### How to Use

**Invoke the prompt:**
```
@prompt api-endpoint
resource: users
method: POST
fields: |
  - email: string (required, valid email)
  - name: string (required, 2-100 chars)
  - role: "admin" | "user" (optional, default "user")
```

**AI generates all 5 files following the template.**

### Custom Prompts vs. Manual Typing

| Without Custom Prompt | With Custom Prompt |
|----------------------:|-------------------:|
| Type 200+ words each time | Type ~30 words |
| Forget requirements | Consistent every time |
| Inconsistent output | Standardized structure |
| Hard to share with team | Version controlled |

---

## 3. Skills (Task-Specific Capability Packages)

### What They Are
Skills are **self-contained capability packages** that teach the AI how to perform specific complex tasks. Think of them as "recipe books" – each skill includes instructions, examples, scripts, and templates.

### When to Use
- ✅ Complex, multi-step workflows
- ✅ Tasks requiring specific tools or scripts
- ✅ Domain-specific expertise
- ✅ Workflows with multiple output files
- ✅ Reusable across projects (portable)

### Key Difference from Custom Instructions
| Custom Instructions | Skills |
|--------------------:|-------:|
| Always active | Context-activated |
| General behavior | Specific task |
| Text only | Includes scripts, templates |
| One file | Multi-file package |

### Detailed Example

**Folder Structure:**
```
.github/skills/react-component-suite/
├── SKILL.md              # Main instructions
├── templates/
│   ├── component.tsx.template
│   ├── test.tsx.template
│   ├── story.tsx.template
│   └── styles.ts.template
├── scripts/
│   └── generate-component.sh
└── examples/
    ├── Button/
    └── Modal/
```

**File:** `.github/skills/react-component-suite/SKILL.md`

```markdown
---
name: react-component-suite
description: Generate complete React component suites with tests, stories, and styles
triggers:
  - "create component"
  - "new component"
  - "generate component"
---

# React Component Suite Generator

## Overview
This skill creates complete React component packages including:
- TypeScript component file
- Unit tests (Jest + RTL)
- Storybook story
- Styled components/CSS modules
- Barrel export (index.ts)

## When This Skill Activates
This skill auto-activates when you ask to:
- Create a new React component
- Generate a component with tests
- Build a component suite

## Component Package Structure
For a component named `{ComponentName}`:

```
src/components/{ComponentName}/
├── {ComponentName}.tsx          # Main component
├── {ComponentName}.types.ts     # TypeScript interfaces
├── {ComponentName}.test.tsx     # Unit tests
├── {ComponentName}.stories.tsx  # Storybook stories
├── {ComponentName}.styles.ts    # Styled components
└── index.ts                     # Barrel export
```

## Step-by-Step Process

### Step 1: Gather Requirements
Ask the user:
- What props should this component accept?
- What variants/states should it have?
- Should it be controlled or uncontrolled?
- Any accessibility requirements?

### Step 2: Generate Types First
Always start with the types file:
```typescript
// {ComponentName}.types.ts
export interface {ComponentName}Props {
  // Required props
  children: React.ReactNode;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  
  // Event handlers
  onClick?: (event: React.MouseEvent) => void;
}
```

### Step 3: Implement Component
Follow this pattern:
```typescript
// {ComponentName}.tsx
import React from 'react';
import { {ComponentName}Wrapper } from './{ComponentName}.styles';
import type { {ComponentName}Props } from './{ComponentName}.types';

export const {ComponentName}: React.FC<{ComponentName}Props> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <{ComponentName}Wrapper
      $variant={variant}
      $size={size}
      $disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </{ComponentName}Wrapper>
  );
};
```

### Step 4: Generate Tests
Cover these scenarios:
1. Renders without crashing
2. Renders children correctly
3. Applies correct variant styles
4. Handles click events
5. Respects disabled state
6. Accessibility: keyboard navigation

### Step 5: Create Storybook Stories
Generate stories for:
- Default state
- All variants
- All sizes
- Disabled state
- Interactive example

## Template Files
Refer to the templates in `templates/` for consistent structure.

## Examples
See complete working examples in `examples/Button/` and `examples/Modal/`.

## Anti-Patterns (What NOT to do)
- ❌ Don't create components without types
- ❌ Don't skip accessibility attributes
- ❌ Don't use default exports (use named)
- ❌ Don't put business logic in components
- ❌ Don't create tests without edge cases
```

### How Skills Auto-Activate

```
User: "Create a Modal component with open/close state"

AI internally:
1. Detects "Create...component" → Matches skill trigger
2. Loads SKILL.md instructions
3. References templates/
4. Generates complete component suite
```

---

## 4. Agents (Autonomous Multi-Step Execution)

### What They Are
Agents are **autonomous AI modes** that can plan and execute multi-step tasks independently. Unlike chat (Q&A) or skills (task templates), agents actively navigate your codebase, make decisions, and complete complex goals.

### When to Use
- ✅ Implementing complete features
- ✅ Multi-file refactoring
- ✅ Bug investigation across codebase
- ✅ Setting up new projects/modules
- ✅ Complex migrations
- ✅ End-to-end feature development

### Key Difference from Skills
| Skills | Agents |
|-------:|-------:|
| Template-driven | Goal-driven |
| Predictable output | Adaptive approach |
| Single task focus | Multi-step journey |
| You provide context | Agent discovers context |
| Follows instructions | Makes decisions |

### Detailed Example

**User Request:**
```
Implement user authentication with the following requirements:
1. Email/password registration
2. Login with JWT tokens
3. Password reset via email
4. Protected route middleware
5. Unit and integration tests
```

**Agent Execution Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│                    AGENT EXECUTION                          │
└─────────────────────────────────────────────────────────────┘

📋 PHASE 1: ANALYSIS (2 mins)
├─ Reading project structure...
├─ Found: Next.js 14, Prisma, PostgreSQL
├─ Found existing: src/lib/db.ts, src/middleware/
├─ Reading: package.json for installed packages
└─ Decision: Will use bcrypt, jsonwebtoken
  
📋 PHASE 2: PLANNING (1 min)
├─ Step 1: Create Prisma schema for User
├─ Step 2: Generate migration
├─ Step 3: Create auth service (register, login, verify)
├─ Step 4: Create JWT utilities
├─ Step 5: Create API routes
├─ Step 6: Create middleware
├─ Step 7: Add password reset flow
├─ Step 8: Write tests
└─ Estimated: 8 files, ~15 commits

📂 PHASE 3: IMPLEMENTATION
│
├─ 📁 prisma/schema.prisma
│  └─ ✏️ Added User model with email, hashedPassword, tokens
│
├─ 🔧 Running: npx prisma migrate dev --name add_user_auth
│  └─ ✓ Migration created and applied
│
├─ 📁 src/lib/auth.ts
│  └─ ✏️ Created: hashPassword, verifyPassword, generateToken
│
├─ 📁 src/services/authService.ts
│  └─ ✏️ Created: register(), login(), resetPassword()
│
├─ 📁 src/app/api/auth/register/route.ts
│  └─ ✏️ POST endpoint with validation
│
├─ 📁 src/app/api/auth/login/route.ts
│  └─ ✏️ POST endpoint returning JWT
│
├─ 📁 src/middleware/auth.ts
│  └─ ✏️ JWT verification middleware
│
├─ 📁 src/app/api/auth/reset-password/route.ts
│  └─ ✏️ Password reset with email token
│
└─ 📁 tests/auth.test.ts
   └─ ✏️ 12 tests covering all scenarios

✅ PHASE 4: VALIDATION
├─ 🔧 Running: npm run lint
│  └─ ✓ No errors
├─ 🔧 Running: npm test tests/auth.test.ts
│  └─ ✓ 12/12 tests passing
└─ 🔧 Running: npm run typecheck
   └─ ✓ No type errors

📝 PHASE 5: SUMMARY
Created 8 files, 15 commits
Auth system ready with:
- Registration: POST /api/auth/register
- Login: POST /api/auth/login  
- Reset: POST /api/auth/reset-password
- Middleware: Import from src/middleware/auth
```

### Agent Prompt Best Practices

**❌ Vague (Agent will struggle):**
```
Make auth work
```

**✅ Clear (Agent will succeed):**
```
Implement user authentication with JWT tokens.

## Requirements
1. Email/password registration with validation
2. Login endpoint returning access + refresh tokens
3. Password reset flow with email verification
4. Middleware for protected routes

## Technical Constraints
- Use existing Prisma setup (src/lib/db.ts)
- Follow project patterns (see AGENTS.md)
- bcrypt for password hashing
- Access tokens: 15 min, Refresh: 7 days

## Testing
- Unit tests for auth service
- Integration tests for API routes
- Test invalid credentials scenario

## Out of Scope
- Social login (Google, GitHub)
- Two-factor authentication
```

---

## Side-by-Side Comparison with Examples

### Scenario: "I want the AI to always write TypeScript"

| Approach | How You'd Do It |
|----------|-----------------|
| **Custom Instructions** | Add to `.github/copilot-instructions.md`:<br>`- Always use TypeScript with strict mode`<br>`- Never use any type` |
| **Custom Prompt** | N/A (this is a behavior, not a request template) |
| **Skill** | N/A (this is a rule, not a task) |
| **Agent** | N/A (this is a preference, not a goal) |

**Winner: Custom Instructions** ✅

---

### Scenario: "I frequently ask for API endpoints with the same structure"

| Approach | How You'd Do It |
|----------|-----------------|
| **Custom Instructions** | Won't help (too specific for "always on") |
| **Custom Prompt** | Create `.github/prompts/api-endpoint.md` with template for your standard API structure |
| **Skill** | Overkill (no scripts or examples needed) |
| **Agent** | Overkill (single-step request) |

**Winner: Custom Prompt** ✅

---

### Scenario: "I want AI to generate complete React component packages (component + test + story + styles)"

| Approach | How You'd Do It |
|----------|-----------------|
| **Custom Instructions** | Too complex for simple rules |
| **Custom Prompt** | Could work but limited (no templates or examples) |
| **Skill** | Perfect fit: Create skill with SKILL.md + templates/ + examples/ |
| **Agent** | Works but overkill for templated task |

**Winner: Skill** ✅

---

### Scenario: "I need to implement a complete authentication system"

| Approach | How You'd Do It |
|----------|-----------------|
| **Custom Instructions** | Won't help (multi-step implementation) |
| **Custom Prompt** | Too complex for a single prompt |
| **Skill** | Could work but too rigid for adaptive needs |
| **Agent** | Perfect: Give goal, let agent plan and execute |

**Winner: Agent** ✅

---

## Decision Flowchart

```
START: What do you need?
│
├─► Is it a RULE that should always apply?
│   ├─ YES → Use CUSTOM INSTRUCTIONS
│   └─ NO ↓
│
├─► Is it a REQUEST you repeat often with same structure?
│   ├─ YES → Use CUSTOM PROMPT
│   └─ NO ↓
│
├─► Is it a TASK that needs templates, scripts, or examples?
│   ├─ YES → Use SKILL
│   └─ NO ↓
│
├─► Is it a GOAL requiring multiple files and decisions?
│   ├─ YES → Use AGENT
│   └─ NO ↓
│
└─► Just ask in chat (simple one-off request)
```

---

## Summary Table

| Concept | Analogy | Typical Size | Auto-Activation | Best For |
|---------|---------|--------------|-----------------|----------|
| **Custom Instructions** | House rules | 50-500 lines | Always on | Standards, preferences |
| **Custom Prompts** | Macros/shortcuts | 20-100 lines | On invocation | Repetitive requests |
| **Skills** | Recipe books | 100-1000+ lines | Context-triggered | Domain expertise |
| **Agents** | Personal assistant | N/A (it's a mode) | User-initiated | Complex goals |

---

# Comparison Matrix

## Feature Comparison

| Feature | Copilot | Claude Code | Cursor | Windsurf | Aider |
|---------|---------|-------------|--------|----------|-------|
| **Instructions File** | `.github/copilot-instructions.md` | `CLAUDE.md` | `.cursorrules` | `.windsurfrules` | `AGENTS.md` |
| **Skills/Agents Folder** | `.github/skills/` | `.claude/agents/` | `.cursor/rules/` | N/A | N/A |
| **MCP Support** | ✅ | ✅ | ✅ | ✅ | Partial |
| **Agent Mode** | ✅ | ✅ (default) | ✅ | ✅ | ✅ |
| **Subagents** | Via Skills | ✅ Native | Via Rules | N/A | N/A |
| **Custom Prompts** | `.github/prompts/` | `.claude/prompts/` | N/A | N/A | N/A |
| **AGENTS.md** | ✅ | Symlink | ✅ | ✅ | ✅ |
| **IDE Integration** | VS Code | Terminal | Cursor IDE | Windsurf IDE | Terminal |
| **Model Selection** | Limited | Multiple | Multiple | Multiple | Multiple |
| **Autonomy Control** | Low | High | Slider | Medium | Medium |

## Instruction File Compatibility

| File | Copilot | Claude | Cursor | Windsurf | Aider |
|------|---------|--------|--------|----------|-------|
| `AGENTS.md` | ✅ | Symlink | ✅ | ✅ | ✅ |
| `CLAUDE.md` | ❌ | ✅ | ❌ | ❌ | ❌ |
| `.cursorrules` | ❌ | ❌ | ✅ | ❌ | ❌ |
| `.windsurfrules` | ❌ | ❌ | ❌ | ✅ | ❌ |
| `.github/copilot-instructions.md` | ✅ | ❌ | ❌ | ❌ | ❌ |

## Universal Setup (Works Everywhere)

To maximize compatibility across tools:

```
project/
├── AGENTS.md                      # Universal (most tools)
├── CLAUDE.md -> AGENTS.md         # Symlink for Claude
├── .cursorrules -> AGENTS.md      # Symlink for Cursor  
├── .windsurfrules -> AGENTS.md    # Symlink for Windsurf
└── ...
```

Create symlinks:
```bash
ln -s AGENTS.md CLAUDE.md
ln -s AGENTS.md .cursorrules
ln -s AGENTS.md .windsurfrules
```

---

# Best Practices

## 1. Start Simple, Grow Gradually

```
Week 1: Custom instructions only
Week 2: Add saved prompts
Week 3: Create first skill
Week 4: Try subagents
```

## 2. Version Control Everything

```bash
# Include AI configurations in git
git add AGENTS.md
git add .github/skills/
git add .claude/agents/
git commit -m "chore: Add AI assistant configuration"
```

## 3. Document Your Rules

```markdown
# Why These Rules Exist

## "No any types"
We enforce this because:
1. Prevents runtime type errors
2. Improves IDE autocomplete
3. Makes refactoring safer

Introduced: Jan 2024 after production bug #423
```

## 4. Keep Instructions Focused

```
❌ Bad: 2000-line instruction file
✅ Good: 200-line focused instruction file

Split large configs:
- AGENTS.md (core rules)
- .github/skills/testing/ (test-specific)
- .github/skills/security/ (security-specific)
```

## 5. Test Your AI Configuration

```markdown
## Verification Prompts

Ask your AI these to verify config works:
1. "What tech stack is this project using?"
2. "What are the testing requirements?"
3. "Show me the file structure convention"

Expected: Answers should match your AGENTS.md
```

## 6. Team Alignment

```markdown
## Team Onboarding

1. Clone repo
2. Read AGENTS.md to understand project
3. Install recommended AI tool
4. Verify by asking: "Summarize this project"
5. Make first PR with AI assistance
```

## 7. Security Considerations

```markdown
## Never Include in Instructions
- API keys or secrets
- Production database credentials
- Customer data
- Internal network details

## Safe to Include
- Development commands
- Code style preferences
- Architecture patterns
- Testing requirements
```

## 8. Measure and Iterate

```markdown
## Weekly Review Questions
1. What prompts worked well?
2. What did the AI get wrong?
3. Should we update instructions?
4. Any new patterns to codify?
```

---

# Quick Start Guide

## Getting Started Today (5 Minutes)

### Step 1: Create AGENTS.md

```markdown
# AGENTS.md

## Project
[Your project name and brief description]

## Tech Stack
- [Language/Framework]
- [Database]
- [Other tools]

## Commands
- Install: `[command]`
- Run: `[command]`
- Test: `[command]`

## Code Style
- [Key rule 1]
- [Key rule 2]
- [Key rule 3]
```

### Step 2: Test It

Ask your AI:
> "Based on the project guidelines, create a simple function that [does something relevant]"

Verify it follows your rules.

### Step 3: Iterate

Add more rules as you discover what the AI gets wrong.

---

## Resources

### Official Documentation
- [Model Context Protocol](https://modelcontextprotocol.io)
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [Claude Code Docs](https://docs.anthropic.com/claude-code)
- [Cursor Documentation](https://cursor.com/docs)
- [Windsurf Documentation](https://docs.windsurf.com)
- [Aider Documentation](https://aider.chat)

### Community Resources
- [AGENTS.md Specification](https://agents.md)
- [Awesome Copilot Skills](https://github.com/topics/copilot-skills)
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers)

---

*Document Version: 1.0*
*Last Updated: February 2026*
*Review Schedule: Monthly*
