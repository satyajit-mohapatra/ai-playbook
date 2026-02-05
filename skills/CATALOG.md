# Claude Code Skills Catalog

A collection of reusable AI skills formatted according to the [Agent Skills Specification](https://agentskills.io/specification).

## Skills by Category

### Architecture
- [design-api](design-api/) - Design clean, RESTful APIs
- [design-database](design-database/) - Design efficient database schemas
- [design-patterns](design-patterns/) - Apply appropriate design patterns
- [system-design](system-design/) - Design scalable distributed systems

### Code Review
- [code-review-best-practices](code-review-best-practices/) - Comprehensive code review
- [code-review-performance](code-review-performance/) - Performance bottleneck analysis
- [code-review-refactor](code-review-refactor/) - Code refactoring recommendations
- [code-review-security](code-review-security/) - Security vulnerability analysis

### Debugging
- [debug-error](debug-error/) - Systematic error diagnosis
- [debug-performance-profile](debug-performance-profile/) - Performance bottleneck profiling
- [debug-trace-issue](debug-trace-issue/) - Complex issue tracing

### Documentation
- [docs-api-docs](docs-api-docs/) - Generate API documentation
- [docs-changelog](docs-changelog/) - Generate maintainable changelogs
- [docs-contributing](docs-contributing/) - Create contributing guidelines
- [docs-readme](docs-readme/) - Generate project README

### Learning
- [learning-compare-tech](learning-compare-tech/) - Compare technical solutions
- [learning-eli5](learning-eli5/) - Simple concept explanations
- [learning-explain-concept](learning-explain-concept/) - Detailed technical explanations
- [learning-roadmap](learning-roadmap/) - Structured learning plans

### Prompts
- [prompts-best-practices](prompts-best-practices/) - Prompt engineering principles
- [prompts-create-template](prompts-create-template/) - Create reusable prompt templates
- [prompts-improve](prompts-improve/) - Improve existing prompts

### Testing
- [testing-coverage-analysis](testing-coverage-analysis/) - Test coverage analysis
- [testing-edge-cases](testing-edge-cases/) - Edge case identification
- [testing-generate-e2e-tests](testing-generate-e2e-tests/) - End-to-end test creation
- [testing-generate-unit-tests](testing-generate-unit-tests/) - Unit test generation

### Writing
- [writing-email](writing-email/) - Professional email composition
- [writing-presentation](writing-presentation/) - Presentation content creation
- [writing-technical-blog](writing-technical-blog/) - Technical blog post writing

## Directory Structure

Each skill follows the Agent Skills specification:

```
skill-name/
├── SKILL.md           # Required - skill definition with YAML frontmatter
├── scripts/           # Optional - executable code
├── references/        # Optional - additional documentation
└── assets/            # Optional - static resources
```

## Specification Compliance

All skills conform to the [Agent Skills Specification](https://agentskills.io/specification):

- YAML frontmatter with `name` and `description` fields
- `name` field: lowercase with hyphens, 1-64 characters
- `description` field: 1-1024 characters, explains when to use
- Markdown body containing skill instructions
- Progressive disclosure structure

## Usage

Each skill can be loaded by AI agents that support the Agent Skills specification. The YAML frontmatter provides metadata for skill discovery, while the Markdown body contains the actual instructions.

## Statistics

| Category | Count |
|----------|-------|
| Architecture | 4 |
| Code Review | 4 |
| Debugging | 3 |
| Documentation | 4 |
| Learning | 4 |
| Prompts | 3 |
| Testing | 4 |
| Writing | 3 |

**Total: 28 Skills**
