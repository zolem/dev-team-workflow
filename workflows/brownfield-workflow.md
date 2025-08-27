# Brownfield Feature Workflow

Feature enhancement workflow for adding new capabilities to existing applications.

## Overview

This workflow adapts the six-persona system for adding features to existing codebases. It emphasizes impact analysis, integration planning, and maintaining system consistency.

## Pre-Workflow: System Analysis

Before starting the persona workflow, understand the existing system:

### Codebase Analysis
1. **Architecture Review**: Understand current system architecture and patterns
2. **Technology Stack**: Identify existing frameworks, libraries, and tools
3. **Integration Points**: Map existing APIs, databases, and external integrations  
4. **Code Conventions**: Understand established coding standards and practices

### Business Context Review
1. **Existing User Base**: Understand current users and their workflows
2. **System Capabilities**: Map existing features and functionality
3. **Technical Debt**: Identify areas of concern or improvement opportunities
4. **Compliance Requirements**: Understand existing security and compliance constraints

## Workflow Steps

### Step 1: Business Analysis (1.5-2 hours)
**Persona:** Business Analyst  
**Goal:** Create Feature Brief with impact analysis

1. **Load the Business Analyst persona**
   ```
   Copy the prompt from: personas/business-analyst/prompt.md
   Include additional context: "This is a brownfield feature addition to existing system [SYSTEM NAME]"
   ```

2. **Conduct feature requirements session**
   - Apply 5W2H framework focused on feature scope
   - Analyze impact on existing users and workflows
   - Use MoSCoW prioritization with integration complexity consideration

3. **Create Feature Brief**
   - Use template: `personas/business-analyst/templates/feature-brief-template.md`
   - Focus on integration impact analysis
   - Document backward compatibility requirements

4. **Atlassian Integration**
   ```bash
   # Create Feature Brief page
   mcp__atlassian__createConfluencePage(
     title: "Feature Brief: [FEATURE NAME]",
     body: [feature brief markdown]
   )
   
   # Create Jira Epic under existing initiative
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Epic",
     summary: "[FEATURE NAME] - Feature Epic"
   )
   ```

**Output:** Feature Brief in Confluence + Jira Epic

---

### Step 2: Product Management (2-3 hours)
**Persona:** Product Manager  
**Goal:** Extend/update PRD with new feature requirements

1. **Load the Product Manager persona**
   ```
   Copy the prompt from: personas/product-manager/prompt.md
   Include context: "Adding feature [FEATURE NAME] to existing product with PRD at [EXISTING PRD LINK]"
   ```

2. **Analyze existing PRD and feature requirements**
   - Review current product state and user journeys
   - Identify integration points with existing features
   - Plan feature rollout and user adoption strategy

3. **Extend PRD with feature details**
   - Use template: `personas/product-manager/templates/prd-template.md`
   - Focus on integration user stories
   - Define feature flags and rollout strategy

4. **Atlassian Integration**
   ```bash
   # Update existing PRD or create feature PRD section
   mcp__atlassian__updateConfluencePage(
     pageId: [existing-prd-page-id],
     body: [updated PRD with feature]
   )
   
   # Create feature user stories
   For each user story:
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Story",
     parent: [feature-epic-key]
   )
   ```

**Output:** Updated PRD + Feature Stories in Jira

---

### Step 3: Architecture Design (2-3 hours)
**Persona:** Solution Architect  
**Goal:** Create Feature Architecture Document

1. **Load the Architect persona**
   ```
   Copy the prompt from: personas/architect/prompt.md
   Include context: "Designing feature [FEATURE NAME] for existing system with architecture at [EXISTING ARCH LINK]"
   ```

2. **Analyze existing architecture and integration requirements**
   - Review current system architecture and patterns
   - Identify components that need modification
   - Plan integration strategy with minimal disruption

3. **Create feature architecture**
   - Use template: `personas/architect/templates/feature-architecture-template.md`
   - Focus on integration patterns and backward compatibility
   - Plan migration and rollback strategies

4. **Atlassian Integration**
   ```bash
   # Create Feature Architecture page
   mcp__atlassian__createConfluencePage(
     title: "Feature Architecture: [FEATURE NAME]"
   )
   
   # Create technical implementation epics if needed
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Epic",
     summary: "Technical Infrastructure: [FEATURE NAME]"
   )
   ```

**Output:** Feature Architecture Document + Technical Epics

---

### Step 4: Task Breakdown & Integration Planning (2 hours)
**Persona:** Engineering/Project Manager  
**Goal:** Break down feature into implementable tasks with integration focus

1. **Load the Engineering Manager persona**
   ```
   Copy the prompt from: personas/engineering-manager/prompt.md
   Include context: "Breaking down feature [FEATURE NAME] for existing system. Consider integration complexity and existing codebase patterns."
   ```

2. **Analyze integration complexity**
   - Map feature tasks to existing system components
   - Identify modification vs. new development tasks
   - Plan feature flag implementation strategy

3. **Create implementation task breakdown**
   - Size tasks considering integration complexity
   - Plan deployment and rollback tasks
   - Include database migration tasks if needed

4. **Atlassian Integration**
   ```bash
   # Break down stories into implementation tasks
   For each development task:
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Task",
     parent: [story-key],
     summary: "[Task description] (1-3 days)"
   )
   
   # Create feature flag tasks
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Task",
     summary: "Implement feature flags for [FEATURE NAME]"
   )
   ```

**Output:** Sprint Plan + Detailed Implementation Tasks

---

### Step 5: Test Planning with Regression Focus (2 hours)
**Persona:** QA Engineer  
**Goal:** Plan comprehensive testing including regression testing

1. **Load the QA persona**
   ```
   Copy the prompt from: personas/qa/prompt.md
   Include context: "Planning testing for feature [FEATURE NAME] being added to existing system. Must include regression testing strategy."
   ```

2. **Develop feature and regression test strategy**
   - Apply risk-based testing to existing functionality
   - Plan integration testing between new and existing features
   - Identify regression test automation opportunities

3. **Create comprehensive test plan**
   - Feature-specific test cases
   - Integration test scenarios
   - Regression test suite updates
   - Performance impact testing

4. **Atlassian Integration**
   ```bash
   # Create Test Plan page
   mcp__atlassian__createConfluencePage(
     title: "Test Plan: [FEATURE NAME]"
   )
   
   # Create QA tasks for each story
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Task",
     summary: "QA: Feature Testing - [Story Name]",
     parent: [story-key]
   )
   
   # Create regression testing tasks
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Task", 
     summary: "QA: Regression Testing - [Feature Impact Area]"
   )
   ```

**Output:** Test Plan + Feature QA Tasks + Regression Testing Tasks

---

### Step 6: Feature Implementation (Ongoing)
**Persona:** Developer  
**Goal:** Implement feature tasks following integration best practices

1. **Load the Developer persona**
   ```
   Copy the prompt from: personas/developer/prompt.md
   Include context: "Implementing feature [FEATURE NAME] in existing codebase. Follow established patterns and maintain backward compatibility."
   ```

2. **For each implementation task:**
   - Analyze existing code patterns and conventions
   - Implement following established architecture
   - Maintain backward compatibility
   - Include comprehensive testing

3. **Feature-specific considerations:**
   - **Feature flags**: Implement proper feature toggling
   - **Database migrations**: Plan and test migration scripts
   - **API versioning**: Maintain API backward compatibility
   - **Configuration**: Update system configuration appropriately

4. **Atlassian Integration**
   ```bash
   # Update task status throughout development
   mcp__atlassian__transitionJiraIssue(
     issueIdOrKey: [task-key],
     transition: {"id": "in-progress-id"}
   )
   
   # Document implementation decisions
   mcp__atlassian__addCommentToJiraIssue(
     issueIdOrKey: [task-key],
     commentBody: "[Implementation notes and decisions]"
   )
   ```

**Output:** Feature Implementation + Updated Jira Tasks + Code Documentation

## Brownfield-Specific Considerations

### Integration Planning
- **Minimize disruption**: Plan changes to minimize impact on existing functionality
- **Backward compatibility**: Ensure existing users aren't affected negatively  
- **Data migration**: Plan for any required data structure changes
- **API versioning**: Maintain existing API contracts while adding new capabilities

### Risk Mitigation
- **Feature flags**: Enable safe rollout and quick rollback
- **Monitoring**: Add monitoring for new feature performance and errors
- **Rollback plan**: Detailed plan for reverting changes if issues occur
- **Gradual rollout**: Plan phased release to limit blast radius

### Testing Strategy
- **Regression focus**: Comprehensive testing of existing functionality
- **Integration testing**: Verify new feature integrates properly
- **Performance testing**: Ensure feature doesn't degrade system performance
- **User acceptance**: Validate feature works in real user environments

## Quality Gates

### After Each Persona
- [ ] Deliverable meets quality standards for that phase
- [ ] Atlassian artifacts created and properly linked  
- [ ] Integration impact properly assessed and planned
- [ ] Dependencies on existing system documented

### Before Development Starts
- [ ] All planning phases complete
- [ ] Development tasks properly sized and scoped
- [ ] Integration strategy validated with technical team
- [ ] Testing approach covers both feature and regression testing
- [ ] Rollback and monitoring plans defined

### Development Quality Gates  
- [ ] Feature flag implementation complete
- [ ] Integration points work correctly
- [ ] Regression tests pass
- [ ] Performance impact within acceptable limits
- [ ] Security review completed
- [ ] Documentation updated

## Success Metrics

- **Integration Success**: New feature works seamlessly with existing system
- **No Regression**: Existing functionality remains unaffected
- **User Adoption**: Feature is adopted by users without confusion
- **System Stability**: Overall system performance and reliability maintained
- **Development Efficiency**: Feature delivered within planned timeline with quality standards met