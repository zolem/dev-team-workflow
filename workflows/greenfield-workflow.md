# Greenfield Project Workflow

Complete end-to-end workflow for new project creation from concept to implementation.

## Overview

This workflow takes you through all six personas in sequence to build a new application from scratch. Each step builds on the previous, creating a comprehensive project foundation.

## Workflow Steps

### Step 1: Business Analysis (2-3 hours)
**Persona:** Business Analyst  
**Goal:** Create comprehensive Project Brief

1. **Load the Business Analyst persona**
   ```
   Copy the prompt from: personas/business-analyst/prompt.md
   Paste into Claude Code or Cursor as system prompt
   ```

2. **Conduct requirements elicitation session**
   - Follow the 5W2H framework methodology
   - Use structured interview techniques
   - Apply MoSCoW prioritization

3. **Create Project Brief**
   - Use template: `personas/business-analyst/templates/project-brief-template.md`
   - Complete all sections thoroughly
   - Validate with stakeholders

4. **Atlassian Integration**
   ```bash
   # Create Confluence page
   mcp__atlassian__createConfluencePage(
     title: "Project Brief: [PROJECT NAME]",
     body: [project brief markdown],
     spaceId: [space-id]
   )
   
   # Create Jira Initiative
   mcp__atlassian__createJiraIssue(
     projectKey: [project-key],
     issueTypeName: "Initiative",
     summary: "[PROJECT NAME] - Initiative"
   )
   ```

**Output:** Project Brief in Confluence + Jira Initiative

---

### Step 2: Product Management (4-5 hours)  
**Persona:** Product Manager  
**Goal:** Create detailed Product Requirements Document

1. **Load the Product Manager persona**
   ```
   Copy the prompt from: personas/product-manager/prompt.md
   Paste into Claude Code or Cursor as system prompt
   ```

2. **Analyze Project Brief**
   - Review business requirements and constraints
   - Validate stakeholder priorities
   - Identify any gaps or clarification needs

3. **Create comprehensive PRD**
   - Use template: `personas/product-manager/templates/prd-template.md`
   - Develop user stories with INVEST criteria
   - Define acceptance criteria using Given-When-Then format

4. **Atlassian Integration**
   ```bash
   # Create PRD Confluence page
   mcp__atlassian__createConfluencePage(
     title: "PRD: [PROJECT NAME]",
     body: [PRD markdown]
   )
   
   # Create Epics for major feature areas
   For each epic:
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Epic",
     summary: "[Epic Name]",
     parent: [initiative-key]
   )
   
   # Create Stories under epics  
   For each user story:
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Story", 
     summary: "[Story summary]",
     parent: [epic-key]
   )
   ```

**Output:** PRD in Confluence + Jira Epics + Jira Stories

---

### Step 3: Architecture Design (3-4 hours)
**Persona:** Solution Architect  
**Goal:** Create comprehensive System Architecture Document

1. **Load the Architect persona**
   ```
   Copy the prompt from: personas/architect/prompt.md
   Paste into Claude Code or Cursor as system prompt
   ```

2. **Analyze PRD and technical requirements**
   - Extract technical requirements from functional specs
   - Assess non-functional requirements impact
   - Identify integration points and constraints

3. **Design system architecture**
   - Use template: `personas/architect/templates/system-architecture-template.md`
   - Apply 4+1 Architectural View Model
   - Select appropriate technology stack

4. **Atlassian Integration**
   ```bash
   # Create Architecture Confluence page
   mcp__atlassian__createConfluencePage(
     title: "System Architecture: [PROJECT NAME]",
     body: [architecture document markdown]
   )
   
   # Create technical epics if needed
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Epic",
     summary: "Technical Infrastructure",
     parent: [initiative-key]
   )
   ```

**Output:** Architecture Document in Confluence + Technical Epics (if needed)

---

### Step 4: Task Breakdown & Sprint Planning (2-3 hours)
**Persona:** Engineering/Project Manager  
**Goal:** Break down work into implementable 1-3 day tasks

1. **Load the Engineering Manager persona**
   ```
   Copy the prompt from: personas/engineering-manager/prompt.md
   Paste into Claude Code or Cursor as system prompt
   ```

2. **Analyze epics and stories**
   - Review all user stories for completeness
   - Validate against architecture document
   - Identify technical dependencies

3. **Break down into tasks**
   - Create 1-3 day development tasks
   - Apply T-shirt sizing (XS, S, M, L)
   - Map dependencies between tasks

4. **Atlassian Integration**
   ```bash
   # Create implementation tasks
   For each development task:
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Task",
     summary: "[Task name] (1-3 days)",
     parent: [story-key],
     description: "[Detailed task with acceptance criteria]"
   )
   
   # Create Sprint Planning page
   mcp__atlassian__createConfluencePage(
     title: "Sprint Plan: [PROJECT NAME] - Sprint 1"
   )
   ```

**Output:** Sprint Plan in Confluence + Jira Tasks under Stories

---

### Step 5: Test Planning (2-3 hours)
**Persona:** QA Engineer  
**Goal:** Comprehensive test plan with edge cases

1. **Load the QA persona**
   ```
   Copy the prompt from: personas/qa/prompt.md
   Paste into Claude Code or Cursor as system prompt
   ```

2. **Develop test strategy**
   - Apply risk-based testing approach
   - Identify edge cases using CRUD + Boundaries framework
   - Plan test automation strategy

3. **Create test cases**
   - Document test cases for all user stories
   - Specify edge case testing scenarios
   - Plan integration and system testing

4. **Atlassian Integration**
   ```bash
   # Create Test Plan page
   mcp__atlassian__createConfluencePage(
     title: "Test Plan: [PROJECT NAME]"
   )
   
   # Create QA tasks
   mcp__atlassian__createJiraIssue(
     issueTypeName: "Task",
     summary: "QA: [Test category]",
     parent: [story-key]
   )
   ```

**Output:** Test Plan in Confluence + QA Tasks in Jira

---

### Step 6: Development Implementation (Ongoing)
**Persona:** Developer  
**Goal:** Implement tasks following architecture and quality standards

1. **Load the Developer persona**
   ```
   Copy the prompt from: personas/developer/prompt.md  
   Paste into Claude Code or Cursor as system prompt
   ```

2. **For each development task:**
   - Analyze task context and requirements
   - Follow TDD approach
   - Implement with quality standards
   - Complete testing and validation

3. **Atlassian Integration**
   ```bash
   # Update task status
   mcp__atlassian__transitionJiraIssue(status: "In Progress")
   
   # Add implementation notes
   mcp__atlassian__addCommentToJiraIssue(
     commentBody: "[Progress updates, blockers, notes]"
   )
   
   # Mark complete
   mcp__atlassian__transitionJiraIssue(status: "Done")
   ```

**Output:** Working software + Updated Jira tasks + Implementation documentation

## Workflow Checkpoints

### After Business Analysis
- [ ] Project Brief approved by stakeholders
- [ ] Business requirements clearly defined and prioritized
- [ ] Success criteria established
- [ ] Jira Initiative created and linked

### After Product Management
- [ ] PRD complete with user stories and acceptance criteria
- [ ] Epics and stories created in Jira
- [ ] Non-functional requirements specified
- [ ] Integration requirements defined

### After Architecture
- [ ] Technical design complete and reviewed
- [ ] Technology stack selected and justified
- [ ] Integration points designed
- [ ] Architecture document in Confluence

### After Engineering Management
- [ ] All stories broken down into 1-3 day tasks
- [ ] Task dependencies identified and managed
- [ ] Sprint plan created and resourced
- [ ] Development team ready to start

### After QA Planning
- [ ] Test strategy covers all requirements
- [ ] Edge cases systematically identified
- [ ] Test automation plan defined
- [ ] QA tasks created and linked

### Development Ongoing
- [ ] Tasks completed according to acceptance criteria
- [ ] Code quality standards maintained
- [ ] Test coverage targets achieved
- [ ] Jira tasks updated with progress

## Success Metrics

- **Planning Completeness**: All workflow steps completed with quality deliverables
- **Traceability**: Complete linkage from business requirements to implementation tasks
- **Team Readiness**: Development team can start implementation immediately
- **Stakeholder Alignment**: All stakeholders understand scope, timeline, and approach