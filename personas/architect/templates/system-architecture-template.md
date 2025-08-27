# System Architecture Document: [PROJECT NAME]

**Date:** [DATE]  
**Architect:** [NAME]  
**Project Type:** Greenfield  
**PRD Reference:** [LINK-TO-PRD]  
**Jira Initiative:** [INITIATIVE-KEY]  

## Executive Summary

### Architecture Overview
[High-level description of the system architecture and design approach]

### Key Architectural Decisions
[Most important architectural decisions and their rationale]

### Technology Stack Summary
[Overview of chosen technologies and why they were selected]

## System Context

### Business Requirements Summary
[Key business requirements that drive architectural decisions]

### Quality Attributes
[Performance, security, scalability, and other non-functional requirements]

### Constraints & Assumptions
[Technical, business, and organizational constraints that influence design]

## Architecture Views

### 1. Logical View - System Components

#### System Decomposition
```
[High-level component diagram in text/ASCII format]

Example:
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Frontend  │────│   API Gateway   │────│  Core Services  │
│   (React/Vue)   │    │   (Node.js)     │    │   (Microservices)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                        ┌─────────────────┐
                        │    Database     │
                        │   (PostgreSQL)  │
                        └─────────────────┘
```

#### Component Responsibilities
| Component | Responsibilities | Dependencies |
|-----------|------------------|--------------|
| | | |

### 2. Development View - Code Organization

#### Module Structure
```
src/
├── api/              # REST API endpoints
├── services/         # Business logic services  
├── models/           # Data models and entities
├── integrations/     # External system integrations
├── auth/            # Authentication and authorization
├── utils/           # Shared utilities
└── config/          # Configuration management
```

#### Key Patterns & Standards
[Architectural patterns, coding standards, and conventions to follow]

### 3. Process View - Runtime Behavior

#### Key Use Case Flows
[Description of how major user scenarios flow through the system]

#### Service Communication
[How components communicate at runtime - synchronous/asynchronous patterns]

#### Error Handling Strategy
[How errors are handled, logged, and recovered from across components]

### 4. Physical View - Deployment Architecture

#### Infrastructure Requirements
[Server, database, network, and infrastructure requirements]

#### Deployment Strategy
[How the system will be deployed, scaled, and maintained]

#### Environment Strategy
```
Development → Testing → Staging → Production
[Description of each environment and promotion process]
```

## Detailed Component Design

### API Layer
#### RESTful API Specification
[Key endpoints, request/response formats, authentication]

#### API Standards
[REST conventions, versioning strategy, documentation approach]

### Business Logic Layer
#### Core Services
[Description of main business logic components and their interactions]

#### Domain Model
[Key business entities and their relationships]

### Data Layer
#### Database Design
[Database schema, key tables, relationships, indexing strategy]

#### Data Access Patterns
[ORM usage, query patterns, caching strategy]

### Integration Layer
#### External System Integration
[How the system integrates with external APIs, services, or legacy systems]

#### Event-Driven Architecture
[If applicable: event sourcing, message queues, pub/sub patterns]

## Technology Stack

### Frontend Technology
| Category | Choice | Rationale |
|----------|--------|-----------|
| Framework | | |
| State Management | | |
| UI Library | | |

### Backend Technology  
| Category | Choice | Rationale |
|----------|--------|-----------|
| Runtime | | |
| Framework | | |
| Database | | |
| Caching | | |

### Infrastructure & DevOps
| Category | Choice | Rationale |
|----------|--------|-----------|
| Cloud Provider | | |
| Container Platform | | |
| CI/CD | | |
| Monitoring | | |

## Security Architecture

### Authentication & Authorization
[How users are authenticated and what they can access]

### Data Protection
[Encryption at rest, in transit, and key management]

### Security Controls
[Input validation, rate limiting, audit logging, etc.]

## Performance & Scalability

### Performance Targets
[Specific performance requirements and how they'll be achieved]

### Scalability Strategy
[How the system will scale horizontally and vertically]

### Caching Strategy
[What gets cached, where, and cache invalidation patterns]

## Monitoring & Observability

### Logging Strategy
[What gets logged, log levels, centralized logging approach]

### Metrics & Monitoring
[Key metrics to track, alerting strategy, dashboards]

### Health Checks
[System health monitoring and automated recovery approaches]

## Implementation Guidance

### Development Phases
[Recommended implementation order and technical milestones]

### Critical Path Items
[Technical dependencies that could impact timeline]

### Technical Risks & Mitigations
[Known technical risks and how to address them]

## Migration Strategy (Brownfield Only)

### Data Migration
[How existing data will be migrated to new system]

### User Migration
[How users will transition to new system]

### Rollback Plan
[How to revert if migration issues occur]

---

## Atlassian Integration

**Jira Initiative:** [LINK-TO-INITIATIVE]  
**Related PRD:** [LINK-TO-PRD]  
**Technical Epics:** [LINKS-TO-TECHNICAL-EPICS]  
**Confluence Page:** [LINK-TO-THIS-PAGE]  

**Created:** [DATE] | **Last Updated:** [DATE]  
**Version:** [VERSION] | **Status:** [Draft/Reviewed/Approved]