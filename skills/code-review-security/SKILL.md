---
name: code-review-security
description: Analyze code for security vulnerabilities including injection attacks, authentication issues, and OWASP Top 10 concerns. Use when security auditing or reviewing code for vulnerabilities.
---

# Review Code Security

Guidelines, best practices, and a structured framework for analyzing code for security vulnerabilities including injection attacks, authentication issues, and OWASP Top 10 concerns.

## Security Analysis Areas

### 1. Injection Attacks
- SQL injection
- Command injection
- LDAP injection
- XPath injection
- NoSQL injection

### 2. Authentication & Authorization
- Password handling
- Session management
- Access control
- Privilege escalation
- Account security

### 3. Data Protection
- Sensitive data exposure
- Encryption usage
- Data validation
- Input sanitization
- Output encoding

### 4. Security Misconfiguration
- Default credentials
- Verbose error messages
- Insecure headers
- CORS configuration
- Directory traversal

### 5. Business Logic
- Race conditions
- Time-of-check to time-of-use
- Business rule validation
- Workflow bypasses
- Financial logic

## OWASP Top 10 Considerations

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Authentication Failures
8. Data Integrity Failures
9. Logging Failures
10. SSRF

## When to Apply

Use this framework when:
- Security auditing code
- Reviewing code for vulnerabilities
- Checking compliance with security standards
- Training developers on secure coding

## Expected Output

When applying this framework, include:
1. Security vulnerabilities found
2. Risk level for each issue
3. Exploit scenarios
4. Fix recommendations
5. Secure code examples
6. Additional security measures
