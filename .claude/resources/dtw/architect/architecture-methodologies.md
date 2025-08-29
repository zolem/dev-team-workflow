# System Architecture Methodologies Reference

This document outlines the system architecture methodologies used by the Architect command for technical feasibility assessment, system design, and architecture planning.

## Architecture Design Methodologies

### 1. Domain-Driven Design (DDD)
**When to use:** Complex business domains with intricate rules
**How it works:**
- **Bounded Contexts** - Define clear domain boundaries
- **Ubiquitous Language** - Common vocabulary between business and technical teams
- **Aggregates** - Cluster related entities for consistency
- **Domain Services** - Capture domain logic that doesn't belong to entities

### 2. Event Storming
**When to use:** Understanding complex business processes and system interactions
**Process:**
- **Domain Events** - Things that happened in the business
- **Commands** - Actions that trigger events
- **Aggregates** - Things that process commands and emit events
- **Policies** - Business rules that react to events

### 3. C4 Model (Context, Containers, Components, Code)
**When to use:** Creating clear architecture documentation
**Levels:**
- **Level 1 (Context)** - System interactions with users and external systems
- **Level 2 (Container)** - High-level technology choices and responsibilities
- **Level 3 (Component)** - Major structural building blocks within containers
- **Level 4 (Code)** - Class diagrams and implementation details

## System Design Patterns

### 4. Microservices Architecture Patterns
**Service Decomposition:**
- **Database per Service** - Each service owns its data
- **Saga Pattern** - Manage distributed transactions
- **API Gateway** - Single entry point for client requests
- **Service Discovery** - Dynamic service location

### 5. Event-Driven Architecture
**Patterns:**
- **Event Sourcing** - Store events as source of truth
- **CQRS** - Separate read and write models
- **Event Streaming** - Real-time event processing
- **Choreography vs Orchestration** - Service coordination strategies

### 6. Scalability Patterns
**Horizontal Scaling:**
- **Load Balancing** - Distribute requests across instances
- **Sharding** - Partition data across databases
- **Replication** - Data redundancy and read scaling

**Vertical Scaling:**
- **Resource Optimization** - CPU, memory, storage tuning
- **Caching Strategies** - In-memory, distributed, CDN
- **Database Optimization** - Indexing, query optimization

## Technology Evaluation Frameworks

### 7. Technology Decision Matrix
**Evaluation Criteria:**
- **Technical Fit** - Meets functional requirements
- **Learning Curve** - Team familiarity and ramp-up time
- **Community Support** - Documentation, ecosystem, longevity
- **Performance** - Speed, scalability, resource efficiency
- **Security** - Built-in security features and track record
- **Cost** - Licensing, infrastructure, maintenance costs

### 8. Build vs Buy Analysis
**Decision Factors:**
- **Core Business Logic** - Strategic value vs commodity functionality
- **Timeline Constraints** - Development time vs integration time
- **Maintenance Burden** - Long-term support and updates
- **Customization Needs** - Flexibility vs out-of-the-box functionality
- **Total Cost of Ownership** - Development + operational costs

### 9. Technical Debt Assessment
**Categories:**
- **Code Debt** - Poor code quality, documentation gaps
- **Architectural Debt** - Outdated patterns, technology choices
- **Infrastructure Debt** - Legacy systems, manual processes
- **Testing Debt** - Missing tests, poor coverage

## Risk Assessment Methodologies

### 10. Technical Risk Analysis
**Risk Categories:**
- **Technology Risks** - Unproven technologies, compatibility issues
- **Scalability Risks** - Performance bottlenecks, capacity limits
- **Integration Risks** - Third-party dependencies, API changes
- **Security Risks** - Vulnerabilities, compliance gaps
- **Operational Risks** - Deployment complexity, monitoring gaps

### 11. Failure Mode Analysis
**Process:**
1. **Identify Components** - List all system components
2. **Define Failure Modes** - How each component can fail
3. **Assess Impact** - Effect on system and users
4. **Calculate Risk** - Probability × Impact
5. **Design Mitigation** - Prevention and recovery strategies

### 12. Architecture Trade-off Analysis (ATA)
**Process:**
- **Quality Attributes** - Performance, security, availability, modifiability
- **Scenarios** - Specific situations that test quality attributes
- **Architecture Alternatives** - Different approaches to meet scenarios
- **Trade-off Analysis** - Pros/cons of each alternative

## Performance Engineering

### 13. Performance Requirements Analysis
**Categories:**
- **Response Time** - User-facing latency requirements
- **Throughput** - Transactions per second capacity
- **Capacity** - Concurrent users, data volume
- **Availability** - Uptime requirements and recovery time

### 14. Load Testing Strategy
**Testing Types:**
- **Load Testing** - Normal expected load
- **Stress Testing** - Beyond normal capacity
- **Spike Testing** - Sudden load increases
- **Volume Testing** - Large amounts of data

## Security Architecture

### 15. Security by Design
**Principles:**
- **Defense in Depth** - Multiple security layers
- **Least Privilege** - Minimum necessary permissions
- **Fail Securely** - Secure defaults when things go wrong
- **Zero Trust** - Verify everything, trust nothing

### 16. Threat Modeling (STRIDE)
**Categories:**
- **S**poofing - Identity verification
- **T**ampering - Data integrity
- **R**epudiation - Non-denial mechanisms
- **I**nformation Disclosure - Confidentiality
- **D**enial of Service - Availability
- **E**levation of Privilege - Authorization

## Session Structure

### Architecture Assessment Flow
1. **Requirements Analysis** - Extract technical requirements from product docs
2. **Context Discovery** - Understand existing systems and constraints
3. **Technology Evaluation** - Assess technology stack options
4. **Architecture Design** - Create system blueprint
5. **Risk Assessment** - Identify and mitigate technical risks
6. **Implementation Planning** - Phase technical delivery

### Decision Documentation Framework
1. **Problem Statement** - What technical challenge are we solving?
2. **Options Considered** - What alternatives did we evaluate?
3. **Decision Criteria** - What factors influenced the choice?
4. **Decision Made** - What approach did we select?
5. **Rationale** - Why was this the best choice?
6. **Trade-offs** - What are we giving up with this choice?
7. **Success Metrics** - How will we measure success?

## Engineering-Level Technical Questions

### Database Design Questions
- "What's your expected data growth rate and how will you partition large tables?"
- "Which columns need composite indexes and what's your query access pattern?"
- "How will you handle database migrations with zero downtime?"
- "What's your strategy for handling database connection pooling under high load?"
- "Do you need read replicas and how will you handle read/write splitting?"

### API Design Questions
- "What's your API rate limiting strategy and how will you implement sliding windows?"
- "How will you version your APIs and handle backward compatibility?"
- "What's your pagination strategy for large result sets?"
- "How will you implement idempotent operations for critical endpoints?"
- "What's your circuit breaker configuration for external service calls?"

### Performance & Concurrency Questions
- "What are your specific latency targets (P50/P95/P99) and how will you measure them?"
- "How will you handle race conditions in your critical data paths?"
- "What's your caching invalidation strategy and cache-aside vs write-through approach?"
- "How will you implement optimistic locking for high-contention resources?"
- "What's your strategy for handling thundering herd problems?"

### Security Implementation Questions
- "How will you implement JWT token refresh and revocation?"
- "What's your RBAC model and how will you handle permission inheritance?"
- "How will you implement rate limiting per user/tenant/API key?"
- "What's your encryption key rotation strategy?"
- "How will you handle security headers and CORS policies?"

### Infrastructure Questions
- "What's your container resource allocation strategy and horizontal pod autoscaler configuration?"
- "How will you implement blue/green deployments with database migrations?"
- "What's your service mesh configuration for traffic management?"
- "How will you handle distributed tracing correlation IDs across service boundaries?"
- "What's your disaster recovery RPO/RTO and backup verification strategy?"

### Frontend Architecture Questions
- "What's your component composition strategy and how will you prevent prop drilling?"
- "How will you implement code splitting and what's your chunk loading strategy?"
- "What's your client-side caching strategy for API responses and how long should cache TTL be?"
- "How will you handle optimistic updates and conflict resolution when APIs fail?"
- "What's your bundle size budget and how will you enforce it in CI?"

### Frontend Performance Questions
- "What are your Core Web Vitals targets and how will you measure them in production?"
- "How will you implement virtual scrolling for large lists and what's your viewport strategy?"
- "What's your image optimization pipeline and responsive image serving strategy?"
- "How will you handle memory leaks in long-running SPAs?"
- "What's your strategy for reducing main thread blocking and implementing time slicing?"

### Frontend State Management Questions
- "How will you normalize state and handle entity relationships in the client?"
- "What's your strategy for handling stale data and background refetching?"
- "How will you implement undo/redo functionality and state persistence?"
- "What's your approach to handling concurrent state updates from multiple users?"
- "How will you manage form state and validation across multi-step workflows?"

### Frontend Build & Deployment Questions
- "What's your tree-shaking strategy and how will you eliminate dead code?"
- "How will you implement progressive loading and what's your critical path CSS strategy?"
- "What's your CDN strategy for static assets and cache invalidation?"
- "How will you handle feature flags in the frontend and runtime configuration?"
- "What's your A/B testing implementation and how will you track conversion funnels?"

### Frontend Security Questions
- "How will you implement CSP policies and what's your nonce generation strategy?"
- "What's your strategy for preventing XSS in user-generated content?"
- "How will you handle sensitive data in local storage and session management?"
- "What's your approach to CSRF protection in SPAs?"
- "How will you implement secure file uploads and validate file types client-side?"