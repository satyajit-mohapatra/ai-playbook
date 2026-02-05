---
name: design-api
description: Design clean, RESTful APIs following best practices for endpoints, authentication, and documentation. Use when creating new APIs, documenting existing ones, or reviewing API designs.
---

# Design RESTful APIs

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
