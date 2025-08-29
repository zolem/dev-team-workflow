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