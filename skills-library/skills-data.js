const skillsData = {
    "code-review-best-practices": {
        name: "code-review-best-practices",
        description: "Perform comprehensive code review focusing on code style, organization, error handling, testing, and SOLID principles. Use when reviewing code for quality and maintainability.",
        frontmatter: `---
name: code-review-best-practices
description: Perform comprehensive code review focusing on code style, organization, error handling, testing, and SOLID principles. Use when reviewing code for quality and maintainability.
---`,
        body: `# Code Review Best Practices

A systematic framework for conducting thorough code reviews that ensure code quality, maintainability, and adherence to best practices.

## Review Focus Areas

### 1. Code Style & Readability
- Language/framework conventions
- Naming clarity and consistency
- Self-documenting code
- Comment quality and relevance
- Formatting consistency

### 2. Code Organization
- Proper modularization
- Separation of concerns
- Single-purpose functions
- Logical file structure
- DRY principle compliance

### 3. Error Handling
- Graceful error handling
- Helpful error messages
- Proper logging
- Edge case consideration
- Defensive programming

### 4. Testing & Testability
- Code testability
- Dependency injection
- Side effect isolation
- Test coverage adequacy
- Test meaningfulness

### 5. Maintainability
- Ease of modification
- Technical debt awareness
- Magic numbers/strings avoidance
- Configuration externalization
- Documentation adequacy

### 6. SOLID Principles
- Single Responsibility
- Open/Closed principle
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

## When to Apply

Use this framework when:
- Reviewing pull requests
- Conducting code audits
- Mentoring junior developers
- Establishing team coding standards
- Refactoring legacy code

## Expected Output

A comprehensive code review should provide:
1. Critical Issues (must-fix before merge)
2. High Priority improvements (address soon)
3. Medium Priority recommendations (nice to have)
4. Low Priority enhancements (future consideration)
5. Code examples showing improved versions
6. Educational context for each finding
`
    },
    "code-review-performance": {
        name: "code-review-performance",
        description: "Analyze code for performance bottlenecks, algorithmic complexity, and resource optimization opportunities. Use when optimizing code for speed or resource usage.",
        frontmatter: `---
name: code-review-performance
description: Analyze code for performance bottlenecks, algorithmic complexity, and resource optimization opportunities. Use when optimizing code for speed or resource usage.
---`,
        body: `# Performance Code Review

A comprehensive framework for identifying and resolving performance bottlenecks in code through systematic analysis and optimization strategies.

## Performance Analysis Areas

### 1. Algorithm Complexity
- Time complexity analysis (Big O notation)
- Space complexity evaluation
- Nested loop detection
- Recursive depth assessment
- Sorting and search algorithm choices

### 2. Resource Usage
- Memory allocation patterns
- Object creation overhead
- Garbage collection impact
- CPU-intensive operations
- I/O blocking analysis

### 3. Database Optimization
- Query efficiency
- Index usage review
- N+1 query detection
- Connection pooling
- Caching strategies

### 4. Concurrency & Parallelism
- Thread safety issues
- Lock contention
- Async/await patterns
- Parallel processing opportunities
- Race condition detection

### 5. Frontend Performance (if applicable)
- Bundle size analysis
- Render optimization
- State management efficiency
- Asset loading strategies
- DOM manipulation costs

## When to Apply

Use this framework when:
- Experiencing slow response times
- High resource usage in production
- Scaling application infrastructure
- Optimizing critical paths
- Preparing for high-traffic events

## Expected Output

A performance review should include:
1. Performance metrics and benchmarks
2. Identified bottlenecks with severity ratings
3. Optimization recommendations with trade-offs
4. Before/after complexity analysis
5. Implementation priority ranking
6. Testing strategies for performance
`
    },
    "code-review-refactor": {
        name: "code-review-refactor",
        description: "Identify refactoring opportunities to improve code structure, reduce complexity, and enhance maintainability without changing behavior.",
        frontmatter: `---
name: code-review-refactor
description: Identify refactoring opportunities to improve code structure, reduce complexity, and enhance maintainability without changing behavior.
---`,
        body: `# Refactoring Code Review

A structured approach to identifying and planning code refactoring opportunities that improve maintainability, readability, and design without changing external behavior.

## Refactoring Opportunities

### 1. Code Smells Detection
- Long methods/functions
- Large classes/modules
- Duplicate code (DRY violations)
- Feature envy
- Data clumps
- Primitive obsession
- Switch statements

### 2. Design Improvements
- Extract methods/functions
- Inline temporary variables
- Move methods to appropriate classes
- Replace conditionals with polymorphism
- Introduce parameter objects
- Factory pattern adoption

### 3. Complexity Reduction
- Cyclomatic complexity analysis
- Cognitive complexity assessment
- Nesting depth reduction
- Boolean parameter elimination
- Null check consolidation

### 4. Testability Enhancement
- Dependency injection opportunities
- Mock-friendly interfaces
- Side effect isolation
- Pure function extraction
- Test seam creation

### 5. Modernization
- Outdated pattern replacement
- Language feature adoption
- Framework upgrade opportunities
- Security pattern updates

## When to Apply

Use this framework when:
- Code is hard to understand or modify
- Adding features requires extensive changes
- Test writing is difficult
- Code duplicates logic elsewhere
- Technical debt is accumulating

## Expected Output

A refactoring review should provide:
1. Code smell inventory with locations
2. Specific refactoring recommendations
3. Before/after code examples
4. Risk assessment for each change
5. Step-by-step refactoring plan
6. Testing strategy to ensure safety
`
    },
    "code-review-security": {
        name: "code-review-security",
        description: "Security-focused code review identifying vulnerabilities, injection risks, and authentication/authorization issues.",
        frontmatter: `---
name: code-review-security
description: Security-focused code review identifying vulnerabilities, injection risks, and authentication/authorization issues.
---`,
        body: `# Security Code Review

A comprehensive framework for identifying security vulnerabilities, assessing risks, and ensuring secure coding practices throughout the codebase.

## Security Review Areas

### 1. Input Validation
- SQL injection vulnerabilities
- NoSQL injection risks
- Command injection possibilities
- Path traversal attempts
- XML/XXE vulnerabilities
- File upload validation

### 2. Authentication & Authorization
- Password storage (hashing/salting)
- Session management
- JWT token security
- OAuth implementation
- Permission checking
- Privilege escalation risks

### 3. Data Protection
- Sensitive data exposure
- PII handling
- Encryption at rest
- Encryption in transit
- Key management
- Data masking

### 4. Dependency Security
- Outdated dependencies
- Known vulnerabilities (CVEs)
- License compliance
- Supply chain risks
- Third-party code review

### 5. Business Logic
- Race conditions
- Idempotency issues
- State management flaws
- Workflow bypass possibilities
- Financial calculation accuracy

## When to Apply

Use this framework when:
- Processing user input
- Handling authentication/authorization
- Storing sensitive data
- Using external dependencies
- Processing financial transactions
- Before production releases

## Expected Output

A security review should provide:
1. Vulnerability inventory with severity (Critical/High/Medium/Low)
2. CWE (Common Weakness Enumeration) references
3. Exploit scenario descriptions
4. Remediation code examples
5. Security testing recommendations
6. Compliance mapping (if applicable)
`
    },
    "debug-error": {
        name: "debug-error",
        description: "Systematic debugging framework for diagnosing and resolving errors, exceptions, and unexpected behavior in code.",
        frontmatter: `---
name: debug-error
description: Systematic debugging framework for diagnosing and resolving errors, exceptions, and unexpected behavior in code.
---`,
        body: `# Error Debugging Guide

A systematic approach to diagnosing, isolating, and resolving errors and exceptions in software applications.

## Debugging Process

### 1. Error Information Gathering
- Error message analysis
- Stack trace examination
- Exception type identification
- Frequency and pattern analysis
- Environment context collection

### 2. Reproduction
- Minimal reproduction case
- Environment setup
- Input data analysis
- Trigger condition identification
- Edge case exploration

### 3. Root Cause Analysis
- Code path tracing
- Variable state inspection
- Input validation review
- Dependency verification
- Recent change analysis

### 4. Fix Implementation
- Solution design
- Code modification
- Side effect assessment
- Regression prevention
- Unit test addition

### 5. Verification
- Reproduction test
- Edge case testing
- Integration testing
- Monitoring setup
- Documentation update

## When to Apply

Use this framework when:
- Production errors occur
- Test failures need investigation
- Unexpected behavior appears
- Exceptions are thrown
- User reports issues

## Expected Output

An error debugging session should produce:
1. Clear error description and context
2. Root cause identification
3. Minimal reproduction case
4. Fix implementation
5. Prevention strategies
6. Documentation updates
`
    },
    "debug-performance-profile": {
        name: "debug-performance-profile",
        description: "Performance profiling and bottleneck identification using CPU, memory, and resource analysis tools.",
        frontmatter: `---
name: debug-performance-profile
description: Performance profiling and bottleneck identification using CPU, memory, and resource analysis tools.
---`,
        body: `# Performance Profiling Guide

A comprehensive framework for identifying, analyzing, and resolving performance bottlenecks using systematic profiling techniques.

## Profiling Areas

### 1. CPU Profiling
- Hotspot identification
- Function call frequency
- Algorithm efficiency
- Loop optimization opportunities
- Recursive depth analysis

### 2. Memory Profiling
- Memory leak detection
- Allocation patterns
- Garbage collection impact
- Heap size analysis
- Object retention analysis

### 3. I/O Profiling
- Disk read/write patterns
- Network request timing
- Database query performance
- File system operations
- Cache hit/miss ratios

### 4. Frontend Profiling (if applicable)
- Render performance
- Bundle size analysis
- Asset loading times
- JavaScript execution
- Layout recalculation

### 5. Concurrent Operations
- Thread contention
- Lock analysis
- Async operation timing
- Resource competition
- Deadlock detection

## When to Apply

Use this framework when:
- Slow response times reported
- High resource usage observed
- Memory leaks suspected
- Scaling issues arise
- User experience degraded

## Expected Output

A performance profiling session should provide:
1. Performance metrics baseline
2. Bottleneck identification with evidence
3. Flame graphs or call trees
4. Resource usage patterns
5. Optimization recommendations
6. Before/after benchmarks
`
    },
    "debug-trace-issue": {
        name: "debug-trace-issue",
        description: "Trace complex issues through multiple layers, services, and components to identify root causes.",
        frontmatter: `---
name: debug-trace-issue
description: Trace complex issues through multiple layers, services, and components to identify root causes.
---`,
        body: `# Issue Tracing Guide

A systematic methodology for tracing complex issues across distributed systems, multiple services, and component boundaries.

## Tracing Methodology

### 1. System Mapping
- Architecture overview
- Component interaction diagram
- Data flow paths
- Service dependencies
- Communication protocols

### 2. Log Analysis
- Correlation ID tracking
- Timestamp alignment
- Log level filtering
- Pattern recognition
- Anomaly detection

### 3. Request Tracing
- Request path reconstruction
- Inter-service communication
- Latency breakdown
- Failure point identification
- Timeout analysis

### 4. State Investigation
- Database state changes
- Cache consistency
- Message queue status
- Configuration drift
- Environment differences

### 5. Reproduction Strategy
- End-to-end test creation
- Component isolation
- Mock external services
- Load pattern simulation
- Race condition testing

## When to Apply

Use this framework when:
- Issues span multiple services
- Root cause is unclear
- Intermittent failures occur
- Production-only issues appear
- Complex distributed systems

## Expected Output

An issue tracing session should provide:
1. System interaction map
2. Request flow visualization
3. Failure point identification
4. Timeline of events
5. Root cause analysis
6. Prevention recommendations
`
    },
    "design-api": {
        name: "design-api",
        description: "Design clean, RESTful APIs following best practices for endpoints, authentication, and documentation.",
        frontmatter: `---
name: design-api
description: Design clean, RESTful APIs following best practices for endpoints, authentication, and documentation.
---`,
        body: `# API Design Guidelines

A comprehensive framework for designing RESTful APIs that are scalable, secure, and developer-friendly.

## Design Requirements

### 1. API Structure
- Define endpoints with proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Use RESTful conventions (resource-based URLs)
- Plan for pagination, filtering, and sorting
- Consider versioning strategy

### 2. Request/Response Design
- Define request body schemas
- Define response formats with status codes
- Plan for error responses
- Consider content types and language

### 3. Security Considerations
- Authentication mechanisms (JWT, OAuth, API keys)
- Authorization levels and permissions
- Rate limiting strategies
- Input validation and sanitization

### 4. Documentation
- Generate OpenAPI/Swagger specification
- Document all endpoints, parameters, and responses
- Include code examples for common languages

## When to Apply

Use this framework when:
- Creating new APIs from scratch
- Documenting existing APIs
- Reviewing API designs for compliance
- Planning API versioning strategies
- Defining authentication and security policies

## Expected Output

A well-designed API specification should include:
1. API Overview with base URLs and versioning info
2. Endpoints with methods, paths, parameters, and descriptions
3. Request/Response schemas with examples
4. Error handling documentation
5. Security considerations and authentication flows
6. Example API calls in multiple languages
`
    },
    "design-database": {
        name: "design-database",
        description: "Design efficient database schemas and data models including tables, relationships, indexes, and normalization.",
        frontmatter: `---
name: design-database
description: Design efficient database schemas and data models including tables, relationships, indexes, and normalization.
---`,
        body: `# Database Design Guidelines

A comprehensive framework for designing efficient, scalable, and maintainable database schemas and data models.

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

A well-designed database schema should include:
1. Entity-relationship diagram (text-based)
2. Table/collection definitions
3. Index strategy
4. Migration scripts
5. Sample queries and use cases
`
    },
    "design-patterns": {
        name: "design-patterns",
        description: "Apply appropriate design patterns to solve common software problems including creational, structural, and behavioral patterns.",
        frontmatter: `---
name: design-patterns
description: Apply appropriate design patterns to solve common software problems including creational, structural, and behavioral patterns.
---`,
        body: `# Design Patterns Guide

A comprehensive reference for applying software design patterns to solve common architectural and coding problems.

## Common Design Patterns

### Creational Patterns
- **Singleton**: Single instance, global access
- **Factory Method**: Object creation through interfaces
- **Abstract Factory**: Create families of related objects
- **Builder**: Construct complex objects step by step
- **Prototype**: Clone existing objects

### Structural Patterns
- **Adapter**: Bridge incompatible interfaces
- **Decorator**: Add behavior dynamically
- **Facade**: Simplified interface to complex subsystem
- **Proxy**: Controlled access to objects
- **Composite**: Treat individual and compositions uniformly

### Behavioral Patterns
- **Observer**: Notify multiple objects of changes
- **Strategy**: Encapsulate interchangeable algorithms
- **Command**: Encapsulate requests as objects
- **Iterator**: Traverse collections without exposing structure
- **State**: Change behavior with internal state

## Analysis Framework

1. Identify the problem domain
2. List requirements and constraints
3. Evaluate pattern candidates
4. Show pattern implementation with code examples
5. Discuss trade-offs and alternatives

## When to Apply

Use this framework when:
- Refactoring code for better design
- Architecting new solutions
- Learning design patterns systematically
- Reviewing code for pattern opportunities

## Expected Output

When documenting pattern usage:
1. Problem analysis
2. Recommended patterns with rationale
3. Class diagrams
4. Code implementations
5. Benefits and trade-offs
`
    },
    "docs-api-docs": {
        name: "docs-api-docs",
        description: "Create comprehensive API documentation with examples, authentication details, and endpoint specifications.",
        frontmatter: `---
name: docs-api-docs
description: Create comprehensive API documentation with examples, authentication details, and endpoint specifications.
---`,
        body: `# API Documentation Guide

A comprehensive framework for creating clear, complete, and developer-friendly API documentation.

## Documentation Components

### 1. Getting Started
- Base URL and endpoints
- Authentication methods
- Quick start guide
- SDKs and client libraries
- API versioning

### 2. Authentication
- API keys
- OAuth flows
- JWT tokens
- Permission scopes
- Security best practices

### 3. Endpoints
- Resource paths
- HTTP methods
- Request parameters
- Response formats
- Status codes

### 4. Examples
- Code samples (multiple languages)
- cURL commands
- Request/response pairs
- Error examples
- Use case scenarios

### 5. Error Handling
- Error codes
- Error messages
- Troubleshooting guide
- Rate limiting
- Common issues

## When to Apply

Use this framework when:
- Creating documentation for new APIs
- Updating existing API docs
- Onboarding new developers
- Supporting API consumers
- Publishing public APIs

## Expected Output

Complete API documentation should include:
1. Overview and quick start
2. Authentication guide
3. All endpoints with details
4. Code examples
5. Error reference
6. Changelog
`
    },
    "docs-changelog": {
        name: "docs-changelog",
        description: "Generate and maintain changelogs following best practices for version tracking and release notes.",
        frontmatter: `---
name: docs-changelog
description: Generate and maintain changelogs following best practices for version tracking and release notes.
---`,
        body: `# Changelog Guide

A structured approach to creating and maintaining changelogs that clearly communicate changes to users and stakeholders.

## Changelog Structure

### 1. Version Format
- Semantic versioning (MAJOR.MINOR.PATCH)
- Release dates
- Version comparison links

### 2. Change Categories
- **Added**: New features
- **Changed**: Changes to existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Now removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements

### 3. Entry Quality
- Clear descriptions
- Issue/PR references
- Breaking change notices
- Migration guides
- Contributor credits

### 4. Organization
- Reverse chronological order
- Grouped by version
- Grouped by category within version
- Consistent formatting

## When to Apply

Use this framework when:
- Preparing for releases
- Communicating changes to users
- Maintaining version history
- Supporting upgrade paths
- Documenting breaking changes

## Expected Output

A well-maintained changelog includes:
1. Version history (newest first)
2. Categorized changes
3. Breaking change warnings
4. Migration instructions
5. Links to issues/PRs
6. Clear, user-friendly language
`
    },
    "docs-contributing": {
        name: "docs-contributing",
        description: "Create contributing guidelines that help new contributors understand how to participate in the project.",
        frontmatter: `---
name: docs-contributing
description: Create contributing guidelines that help new contributors understand how to participate in the project.
---`,
        body: `# Contributing Guidelines

A comprehensive framework for creating clear contributing guidelines that welcome and guide new contributors.

## Guidelines Structure

### 1. Welcome Message
- Friendly introduction
- Project values
- Community expectations
- Code of conduct reference

### 2. Getting Started
- Development environment setup
- Project structure overview
- Build and test instructions
- First contribution suggestions

### 3. Contribution Process
- Issue reporting guidelines
- Feature request process
- Pull request workflow
- Code review expectations

### 4. Coding Standards
- Style guide references
- Code quality requirements
- Testing expectations
- Documentation requirements

### 5. Communication
- Where to ask questions
- Discussion forums
- Meeting schedules
- Maintainer contacts

## When to Apply

Use this framework when:
- Open sourcing a project
- Growing contributor community
- Standardizing contributions
- Onboarding new developers

## Expected Output

Contributing guidelines should include:
1. Clear welcome message
2. Setup instructions
3. Step-by-step workflow
4. Code standards
5. Review process
6. Recognition for contributors
`
    },
    "docs-readme": {
        name: "docs-readme",
        description: "Generate comprehensive README files with installation, usage, and contribution information.",
        frontmatter: `---
name: docs-readme
description: Generate comprehensive README files with installation, usage, and contribution information.
---`,
        body: `# README Guide

A comprehensive framework for creating effective README files that introduce projects and guide users.

## README Sections

### 1. Header
- Project name and description
- Badges (build, coverage, version)
- One-line summary

### 2. Installation
- Prerequisites
- Dependencies
- Installation commands
- Configuration steps

### 3. Usage
- Quick start example
- Basic usage patterns
- Common tasks
- Code examples

### 4. Features
- Key capabilities
- Screenshots (if applicable)
- Unique selling points
- Comparison highlights

### 5. Documentation
- Links to full docs
- API reference
- Tutorials
- FAQ

### 6. Contributing
- How to contribute
- Development setup
- Pull request process
- Code of conduct

### 7. License & Support
- License type
- Copyright info
- Support channels
- Contact information

## When to Apply

Use this framework when:
- Creating new projects
- Open sourcing code
- Publishing packages
- Improving project discoverability

## Expected Output

A comprehensive README should include:
1. Clear project description
2. Installation instructions
3. Usage examples
4. Feature highlights
5. Documentation links
6. Contributing guide
7. License information
`
    },
    "learning-compare-tech": {
        name: "learning-compare-tech",
        description: "Compare technologies, frameworks, or approaches with structured analysis of trade-offs and use cases.",
        frontmatter: `---
name: learning-compare-tech
description: Compare technologies, frameworks, or approaches with structured analysis of trade-offs and use cases.
---`,
        body: `# Technology Comparison Guide

A structured framework for comparing technologies, frameworks, or approaches with objective analysis of trade-offs.

## Comparison Framework

### 1. Criteria Definition
- Performance metrics
- Ease of use
- Community support
- Documentation quality
- Learning curve
- Cost considerations

### 2. Feature Analysis
- Core capabilities
- Unique features
- Missing features
- Integration options
- Extensibility

### 3. Trade-off Analysis
- Pros and cons list
- Decision matrix
- Use case mapping
- Team skill alignment
- Long-term viability

### 4. Context Considerations
- Project requirements
- Team expertise
- Timeline constraints
- Budget limitations
- Future scalability

### 5. Recommendation
- Best fit scenarios
- When to choose each option
- Hybrid approaches
- Migration paths

## When to Apply

Use this framework when:
- Evaluating new technologies
- Making architectural decisions
- Migrating between solutions
- Educating team members
- Justifying technology choices

## Expected Output

A technology comparison should provide:
1. Clear comparison criteria
2. Feature matrices
3. Trade-off analysis
4. Context-specific recommendations
5. Decision framework
6. Implementation considerations
`
    },
    "learning-eli5": {
        name: "learning-eli5",
        description: "Explain complex technical concepts in simple, accessible terms for non-technical audiences.",
        frontmatter: `---
name: learning-eli5
description: Explain complex technical concepts in simple, accessible terms for non-technical audiences.
---`,
        body: `# Simple Explanations Guide

A framework for breaking down complex technical concepts into simple, accessible explanations for non-technical audiences.

## Explanation Framework

### 1. Identify the Core Concept
- What problem does it solve?
- Why does it matter?
- What is the key benefit?

### 2. Use Analogies
- Everyday comparisons
- Relatable metaphors
- Visual imagery
- Familiar experiences

### 3. Avoid Jargon
- Plain language definitions
- Technical term translations
- Context building
- Progressive disclosure

### 4. Provide Examples
- Real-world use cases
- Before/after scenarios
- Step-by-step walkthroughs
- Visual aids

### 5. Validate Understanding
- Check comprehension
- Address confusion
- Invite questions
- Provide resources

## When to Apply

Use this framework when:
- Explaining to stakeholders
- Onboarding non-technical team members
- Writing documentation
- Giving presentations
- Teaching beginners

## Expected Output

A simple explanation should include:
1. Clear, jargon-free overview
2. Relatable analogy
3. Real-world example
4. Key takeaways
5. Visual aids (when possible)
6. Further reading links
`
    },
    "learning-explain-concept": {
        name: "learning-explain-concept",
        description: "Provide detailed technical explanations of concepts, algorithms, or architectural patterns.",
        frontmatter: `---
name: learning-explain-concept
description: Provide detailed technical explanations of concepts, algorithms, or architectural patterns.
---`,
        body: `# Technical Concept Explanations

A comprehensive framework for providing detailed technical explanations of concepts, algorithms, and architectural patterns.

## Explanation Structure

### 1. Concept Overview
- Definition and purpose
- Historical context
- Problem it solves
- Key principles

### 2. How It Works
- Step-by-step process
- Algorithm walkthrough
- Data flow diagrams
- State transitions

### 3. Technical Details
- Implementation specifics
- Code examples
- Edge cases
- Performance characteristics
- Complexity analysis

### 4. Use Cases
- When to apply
- Common applications
- Industry examples
- Anti-patterns to avoid

### 5. Related Concepts
- Prerequisites
- Similar technologies
- Building blocks
- Advanced topics

## When to Apply

Use this framework when:
- Teaching technical concepts
- Documenting architecture
- Explaining algorithms
- Deep diving into technologies
- Mentoring developers

## Expected Output

A technical explanation should provide:
1. Clear definition
2. Detailed mechanics
3. Code examples
4. Use cases
5. Trade-offs
6. Related concepts
7. Further learning resources
`
    },
    "learning-roadmap": {
        name: "learning-roadmap",
        description: "Create structured learning roadmaps for technologies, skills, or career paths.",
        frontmatter: `---
name: learning-roadmap
description: Create structured learning roadmaps for technologies, skills, or career paths.
---`,
        body: `# Learning Roadmap Guide

A framework for creating structured, achievable learning roadmaps for technologies, skills, or career development.

## Roadmap Structure

### 1. Goal Definition
- Learning objectives
- Skill level target
- Timeline expectations
- Success metrics

### 2. Prerequisites
- Required knowledge
- Recommended background
- Tools and resources
- Environment setup

### 3. Learning Phases
- **Beginner**: Fundamentals
- **Intermediate**: Practical application
- **Advanced**: Complex scenarios
- **Expert**: Mastery and optimization

### 4. Resources
- Courses and tutorials
- Documentation
- Practice projects
- Community resources
- Books and articles

### 5. Milestones
- Checkpoint objectives
- Project deliverables
- Assessment criteria
- Timeline markers

## When to Apply

Use this framework when:
- Learning new technologies
- Skill development planning
- Career path guidance
- Team training programs
- Personal development

## Expected Output

A learning roadmap should include:
1. Clear learning objectives
2. Prerequisite checklist
3. Phased learning plan
4. Resource recommendations
5. Project milestones
6. Assessment methods
7. Timeline estimates
`
    },
    "prompts-best-practices": {
        name: "prompts-best-practices",
        description: "Learn best practices for writing effective prompts to get better results from AI assistants.",
        frontmatter: `---
name: prompts-best-practices
description: Learn best practices for writing effective prompts to get better results from AI assistants.
---`,
        body: `# Prompt Writing Best Practices

A comprehensive guide to writing effective prompts that produce high-quality, relevant results from AI assistants.

## Prompt Principles

### 1. Be Specific
- Clear task definition
- Expected output format
- Context details
- Constraints and requirements

### 2. Provide Context
- Background information
- Relevant code or data
- Previous attempts
- Success criteria

### 3. Use Examples
- Input/output pairs
- Format demonstrations
- Style references
- Edge case examples

### 4. Structure Effectively
- Numbered lists for requirements
- Bullet points for options
- Sections for clarity
- Logical flow

### 5. Iterate and Refine
- Start simple
- Add constraints gradually
- Test variations
- Learn from outputs

## Common Patterns

### Chain of Thought
"Think step by step and explain your reasoning..."

### Few-Shot Learning
Provide examples before asking for new output

### Role Assignment
"Act as an expert in [field]..."

## When to Apply

Use this framework when:
- Writing new prompts
- Improving existing prompts
- Getting consistent results
- Teaching prompt engineering
- Building prompt libraries

## Expected Output

Effective prompts should:
1. Clearly define the task
2. Provide necessary context
3. Specify output format
4. Include examples
5. Set constraints
6. Allow for iteration
`
    },
    "prompts-create-template": {
        name: "prompts-create-template",
        description: "Create reusable prompt templates for common tasks and workflows.",
        frontmatter: `---
name: prompts-create-template
description: Create reusable prompt templates for common tasks and workflows.
---`,
        body: `# Prompt Template Creation Guide

A framework for creating reusable, effective prompt templates that can be adapted for various scenarios.

## Template Structure

### 1. Template Definition
- Purpose statement
- Use case description
- Input variables
- Expected output

### 2. Variable Design
- Clear variable names
- Type specifications
- Default values
- Validation rules

### 3. Template Body
- Instructions section
- Context placeholder
- Task description
- Output format
- Constraints

### 4. Usage Examples
- Sample inputs
- Expected outputs
- Common variations
- Edge cases

### 5. Documentation
- How to customize
- Variable explanations
- Best practices
- Troubleshooting

## Template Types

### Task Templates
Structured prompts for specific tasks

### Role Templates
Persona-based prompts for expertise areas

### Workflow Templates
Multi-step process prompts

## When to Apply

Use this framework when:
- Creating reusable prompts
- Standardizing team workflows
- Building prompt libraries
- Onboarding new users
- Scaling AI usage

## Expected Output

A prompt template should include:
1. Clear purpose
2. Defined variables
3. Template structure
4. Usage examples
5. Customization guide
6. Best practices
`
    },
    "prompts-improve": {
        name: "prompts-improve",
        description: "Analyze and improve existing prompts for better clarity, context, and results.",
        frontmatter: `---
name: prompts-improve
description: Analyze and improve existing prompts for better clarity, context, and results.
---`,
        body: `# Prompt Improvement Guide

A systematic approach to analyzing and improving existing prompts for better results and consistency.

## Analysis Framework

### 1. Clarity Assessment
- Clear task definition
- Unambiguous language
- Specific requirements
- Expected output format

### 2. Context Evaluation
- Relevant background info
- Appropriate detail level
- Missing context identification
- Unnecessary information

### 3. Structure Review
- Logical organization
- Section clarity
- Instruction ordering
- Visual formatting

### 4. Completeness Check
- All requirements included
- Edge cases covered
- Examples provided
- Constraints defined

### 5. Effectiveness Testing
- Output quality
- Consistency
- Edge case handling
- Error scenarios

## Improvement Strategies

### Add Context
Fill in missing background information

### Specify Format
Define expected output structure

### Add Examples
Include input/output pairs

### Set Constraints
Clarify limitations and requirements

## When to Apply

Use this framework when:
- Refining existing prompts
- Troubleshooting poor results
- Standardizing team prompts
- Building prompt libraries
- Teaching prompt engineering

## Expected Output

A prompt improvement session should provide:
1. Current prompt analysis
2. Identified weaknesses
3. Specific improvements
4. Before/after comparison
5. Testing recommendations
6. Documentation updates
`
    },
    "system-design": {
        name: "system-design",
        description: "Design scalable, reliable distributed systems with proper architecture, data management, and scalability strategies.",
        frontmatter: `---
name: system-design
description: Design scalable, reliable distributed systems with proper architecture, data management, and scalability strategies.
---`,
        body: `# System Design Guidelines

A comprehensive framework for designing scalable, reliable distributed systems with modern architectural patterns.

## Design Framework

### 1. Requirements Clarification
- Functional requirements
- Non-functional requirements (scalability, reliability, latency)
- Constraints and assumptions

### 2. High-Level Architecture
- Identify major components
- Define component responsibilities
- Plan for loose coupling
- Consider microservices vs monolith

### 3. Data Management
- Choose data storage types (relational, NoSQL, cache)
- Design data flow and consistency models
- Plan for data partitioning and replication
- Consider backup and recovery strategies

### 4. Scalability & Reliability
- Design for horizontal scaling
- Plan for load balancing
- Implement redundancy and failover
- Consider circuit breakers and bulkheads

### 5. Performance Optimization
- Identify bottlenecks
- Plan for caching strategies
- Consider asynchronous processing
- Design for graceful degradation

## When to Apply

Use this framework when:
- Designing new systems from scratch
- Scaling existing architectures
- Planning system migrations
- Preparing for system design interviews
- Architecting cloud-native applications

## Expected Output

A system design should include:
1. Requirements summary
2. Architecture diagram (text-based)
3. Component breakdown
4. Data model
5. Scalability strategy
6. Trade-off analysis
`
    },
    "testing-coverage-analysis": {
        name: "testing-coverage-analysis",
        description: "Analyze test coverage and identify gaps in unit, integration, and end-to-end tests.",
        frontmatter: `---
name: testing-coverage-analysis
description: Analyze test coverage and identify gaps in unit, integration, and end-to-end tests.
---`,
        body: `# Test Coverage Analysis Guide

A comprehensive framework for analyzing test coverage and identifying gaps across unit, integration, and end-to-end tests.

## Coverage Analysis Areas

### 1. Code Coverage Metrics
- Line coverage
- Branch coverage
- Function/method coverage
- Statement coverage
- Coverage thresholds

### 2. Test Type Distribution
- Unit test coverage
- Integration test coverage
- E2E test coverage
- Test pyramid balance
- Missing test types

### 3. Critical Path Analysis
- Business logic coverage
- Error handling coverage
- Edge case coverage
- Happy path vs edge cases
- High-risk areas

### 4. Quality Metrics
- Assertion density
- Test reliability
- Flaky test identification
- Test execution time
- Maintenance burden

### 5. Gap Identification
- Untested code paths
- Missing edge cases
- Integration gaps
- Infrastructure coverage
- Security test gaps

## When to Apply

Use this framework when:
- Assessing test suite health
- Planning testing improvements
- Prioritizing test additions
- Refactoring legacy code
- Preparing for releases

## Expected Output

A coverage analysis should provide:
1. Coverage metrics dashboard
2. Gap identification report
3. Risk assessment matrix
4. Priority recommendations
5. Implementation plan
6. Coverage goals
`
    },
    "testing-edge-cases": {
        name: "testing-edge-cases",
        description: "Identify and test edge cases, boundary conditions, and error scenarios.",
        frontmatter: `---
name: testing-edge-cases
description: Identify and test edge cases, boundary conditions, and error scenarios.
---`,
        body: `# Edge Case Testing Guide

A comprehensive framework for identifying, categorizing, and testing edge cases, boundary conditions, and error scenarios.

## Edge Case Categories

### 1. Input Boundaries
- Minimum values
- Maximum values
- Empty inputs
- Null/undefined handling
- Whitespace and special characters

### 2. Data Variations
- Type mismatches
- Format variations
- Encoding issues
- Unicode handling
- Data size extremes

### 3. State Conditions
- Initial states
- Final states
- Transition states
- Concurrent states
- Invalid states

### 4. Environmental
- Network failures
- Resource exhaustion
- Timeout scenarios
- Permission changes
- External service failures

### 5. Temporal
- Time zone handling
- Leap years
- Daylight saving time
- Clock skew
- Concurrent access

## When to Apply

Use this framework when:
- Writing comprehensive test suites
- Hardening production code
- Security testing
- Load testing preparation
- Refactoring critical paths

## Expected Output

Edge case testing should provide:
1. Edge case inventory
2. Categorized test scenarios
3. Test implementation guidance
4. Priority rankings
5. Risk assessments
6. Documentation updates
`
    },
    "testing-generate-e2e-tests": {
        name: "testing-generate-e2e-tests",
        description: "Create end-to-end tests that validate complete user workflows and system integrations.",
        frontmatter: `---
name: testing-generate-e2e-tests
description: Create end-to-end tests that validate complete user workflows and system integrations.
---`,
        body: `# E2E Testing Guide

A comprehensive framework for creating end-to-end tests that validate complete user workflows and system integrations.

## E2E Test Framework

### 1. Test Scope
- User workflows
- Critical paths
- Integration points
- Data flows
- System boundaries

### 2. Test Structure
- Setup and teardown
- Precondition validation
- Action sequences
- Assertion points
- Cleanup procedures

### 3. User Flows
- Authentication flows
- Transaction workflows
- Data entry processes
- Navigation paths
- Multi-step operations

### 4. Integration Points
- API interactions
- Database operations
- External services
- File system access
- Message queues

### 5. Cross-Browser/Device
- Browser compatibility
- Mobile responsiveness
- Accessibility compliance
- Performance testing
- Visual regression

## When to Apply

Use this framework when:
- Testing complete user journeys
- Validating integrations
- Regression testing
- Release qualification
- Smoke testing

## Expected Output

E2E tests should include:
1. Complete test scenarios
2. Page object models
3. Test data management
4. Environment configurations
5. CI/CD integration
6. Reporting setup
`
    },
    "testing-generate-unit-tests": {
        name: "testing-generate-unit-tests",
        description: "Create comprehensive unit tests for functions and classes including happy paths, edge cases, and error scenarios.",
        frontmatter: `---
name: testing-generate-unit-tests
description: Create comprehensive unit tests for functions and classes including happy paths, edge cases, and error scenarios.
---`,
        body: `# Unit Testing Guide

A comprehensive framework for creating effective unit tests that ensure code correctness and maintainability.

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
- Arrange: Setup test data
- Act: Execute function
- Assert: Verify results

**Given-When-Then (BDD)**
- Given: Preconditions
- When: Action taken
- Then: Verify outcome

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
- Writing new unit tests
- Improving test coverage
- Refactoring code
- Setting testing standards
- Code reviews

## Expected Output

Unit tests should include:
1. Complete test suite
2. Clear test names
3. Proper assertions
4. Mock configurations
5. Edge case coverage
6. Documentation
`
    },
    "writing-email": {
        name: "writing-email",
        description: "Write professional emails for various contexts including technical communication, status updates, and requests.",
        frontmatter: `---
name: writing-email
description: Write professional emails for various contexts including technical communication, status updates, and requests.
---`,
        body: `# Professional Email Guide

A framework for writing clear, professional emails that effectively communicate technical information and requests.

## Email Structure

### 1. Subject Line
- Clear and specific
- Action-oriented (if applicable)
- Urgency indicator (when needed)
- Length: 6-8 words ideally

### 2. Opening
- Appropriate greeting
- Context setting
- Purpose statement
- Relationship acknowledgment

### 3. Body
- Clear purpose
- Organized points
- Technical details (when relevant)
- Action items
- Timeline information

### 4. Closing
- Clear next steps
- Call to action
- Appropriate sign-off
- Contact information

### 5. Tone Guidelines
- Professional yet approachable
- Clear and concise
- Respectful of time
- Action-oriented
- Context-aware

## Email Types

### Technical Updates
Progress reports, architecture decisions

### Requests
Code reviews, resources, clarifications

### Escalations
Blockers, urgent issues, decisions needed

## When to Apply

Use this framework when:
- Communicating with teams
- Requesting resources or help
- Sharing technical updates
- Following up on issues
- Coordinating with stakeholders

## Expected Output

A professional email should include:
1. Clear subject line
2. Context in opening
3. Organized body content
4. Specific action items
5. Professional closing
6. Appropriate tone
`
    },
    "writing-presentation": {
        name: "writing-presentation",
        description: "Create technical presentations with clear structure, visuals, and engaging content for various audiences.",
        frontmatter: `---
name: writing-presentation
description: Create technical presentations with clear structure, visuals, and engaging content for various audiences.
---`,
        body: `# Technical Presentation Guide

A comprehensive framework for creating effective technical presentations that engage audiences and communicate complex information clearly.

## Presentation Structure

### 1. Opening
- Hook/attention grabber
- Agenda overview
- Audience relevance
- Value proposition

### 2. Content Organization
- Logical flow
- Progressive disclosure
- Key message emphasis
- Supporting evidence
- Real examples

### 3. Visual Design
- Consistent theme
- Readable fonts
- Relevant graphics
- Data visualizations
- Clean layouts

### 4. Delivery
- Storytelling elements
- Audience engagement
- Technical depth calibration
- Q&A preparation
- Time management

### 5. Closing
- Key takeaways
- Action items
- Resource sharing
- Contact information
- Follow-up plan

## Audience Types

### Technical Audiences
Deep technical details, code examples

### Mixed Audiences
Balanced technical and business content

### Executive Audiences
High-level overview, business impact

## When to Apply

Use this framework when:
- Presenting architecture reviews
- Sharing technical discoveries
- Proposing solutions
- Training sessions
- Conference talks

## Expected Output

A technical presentation should include:
1. Clear structure
2. Engaging visuals
3. Appropriate depth
4. Supporting materials
5. Q&A preparation
6. Follow-up resources
`
    },
    "writing-technical-blog": {
        name: "writing-technical-blog",
        description: "Write technical blog posts that explain concepts, share knowledge, and engage developer audiences.",
        frontmatter: `---
name: writing-technical-blog
description: Write technical blog posts that explain concepts, share knowledge, and engage developer audiences.
---`,
        body: `# Technical Blog Writing Guide

A comprehensive framework for writing technical blog posts that educate, engage, and provide value to developer audiences.

## Blog Structure

### 1. Title
- Clear and descriptive
- SEO-friendly keywords
- Accurate reflection of content
- Appropriate length

### 2. Introduction
- Hook the reader
- Problem statement
- Promise of solution
- Target audience

### 3. Body Content
- Clear explanations
- Code examples
- Visual aids
- Step-by-step guides
- Real-world applications

### 4. Technical Depth
- Appropriate for audience
- Progressive complexity
- Code snippets
- Diagrams and charts
- External references

### 5. Conclusion
- Key takeaways
- Summary of learnings
- Call to action
- Further resources
- Discussion invitation

## Writing Tips

### Be Clear
Simple explanations, avoid jargon

### Be Practical
Working code, real examples

### Be Engaging
Story elements, personal insights

## When to Apply

Use this framework when:
- Sharing technical knowledge
- Documenting solutions
- Building personal brand
- Teaching concepts
- Community contribution

## Expected Output

A technical blog post should include:
1. Clear title
2. Engaging introduction
3. Well-organized content
4. Working code examples
5. Visual aids
6. Conclusion with takeaways
7. SEO optimization
`
    }
};

// Export for Node.js environments
if (typeof module !== "undefined" && module.exports) {
    module.exports = skillsData;
}
