# Persona Handoff Checklist

This checklist ensures smooth transitions between personas and maintains quality standards throughout the workflow.

## Business Analyst → Product Manager

### Business Analyst Completion Checklist
- [ ] **Requirements Gathering Complete**
  - [ ] All stakeholders interviewed using 5W2H framework
  - [ ] Requirements prioritized using MoSCoW method
  - [ ] Success criteria clearly defined and measurable
  - [ ] Constraints and assumptions documented

- [ ] **Documentation Quality**
  - [ ] Project/Feature Brief complete and internally consistent
  - [ ] All template sections thoroughly completed
  - [ ] Business value and impact clearly articulated
  - [ ] Risk assessment includes mitigation strategies

- [ ] **Stakeholder Validation**
  - [ ] Brief reviewed with primary stakeholders
  - [ ] Scope and priorities explicitly approved
  - [ ] Change control process established
  - [ ] Sign-off obtained and documented

- [ ] **Atlassian Integration**
  - [ ] Confluence page created with complete brief
  - [ ] Jira Initiative/Epic created and linked
  - [ ] Proper page hierarchy and linking established

### Handoff Information for Product Manager
**Required Context:**
- Link to Business Brief (Confluence page)
- Stakeholder contact information and roles
- Approved scope and priority decisions
- Any outstanding questions or assumptions
- Timeline constraints and dependencies

---

## Product Manager → Architect

### Product Manager Completion Checklist
- [ ] **PRD Quality Standards**
  - [ ] All business requirements translated to functional specifications
  - [ ] User stories follow INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)
  - [ ] Acceptance criteria use Given-When-Then format
  - [ ] Non-functional requirements comprehensively specified

- [ ] **Epic & Story Structure**  
  - [ ] Logical epic breakdown aligned with user workflows
  - [ ] Stories are properly sized and achievable
  - [ ] Story dependencies identified and documented
  - [ ] Business rules and validation logic specified

- [ ] **Integration Requirements**
  - [ ] External system integration points defined
  - [ ] Data requirements and flow specifications
  - [ ] API requirements and interface definitions
  - [ ] Performance and scalability targets set

- [ ] **Atlassian Integration**
  - [ ] PRD Confluence page created and linked to Business Brief
  - [ ] Jira Epics created for each major feature area
  - [ ] Jira Stories created under appropriate epics
  - [ ] Proper parent-child relationships established

### Handoff Information for Architect
**Required Context:**
- Link to PRD (Confluence page)
- Technology preferences or constraints from stakeholders
- Integration requirements and external system details
- Performance and scalability targets
- Compliance or security requirements

---

## Architect → Engineering Manager

### Architect Completion Checklist
- [ ] **Technical Design Complete**
  - [ ] System architecture addresses all PRD requirements
  - [ ] Technology stack selected with clear rationale
  - [ ] Integration points and APIs designed
  - [ ] Data architecture and storage strategy defined

- [ ] **Implementation Guidance**
  - [ ] Development patterns and standards specified
  - [ ] Code organization and module structure planned
  - [ ] Deployment and infrastructure requirements defined
  - [ ] Security architecture and controls specified

- [ ] **Quality Attributes**
  - [ ] Performance targets achievable with chosen architecture
  - [ ] Scalability strategy addresses projected growth
  - [ ] Maintainability and testability designed in
  - [ ] Security controls appropriate for requirements

- [ ] **Atlassian Integration**
  - [ ] Architecture Confluence page created and comprehensive
  - [ ] Technical epics created if needed
  - [ ] Architecture linked to PRD and Business Brief
  - [ ] Technical decisions documented for future reference

### Handoff Information for Engineering Manager
**Required Context:**
- Link to Architecture Document (Confluence page)
- Technology stack details and setup requirements
- Development environment and tooling specifications
- Team skills assessment relative to chosen technologies
- Critical path technical dependencies

---

## Engineering Manager → QA

### Engineering Manager Completion Checklist
- [ ] **Task Breakdown Quality**
  - [ ] All stories broken down into 1-3 day tasks
  - [ ] Task descriptions are specific and actionable
  - [ ] Acceptance criteria defined for each task
  - [ ] Dependencies mapped and managed

- [ ] **Sprint Planning**
  - [ ] Sprint goals aligned with business objectives
  - [ ] Team capacity and velocity considered
  - [ ] Risk assessment completed for sprint
  - [ ] Resource allocation planned and realistic

- [ ] **Technical Planning**
  - [ ] Development environment setup tasks included
  - [ ] Infrastructure and DevOps tasks planned
  - [ ] Code review and quality assurance processes defined
  - [ ] Integration testing approach planned

- [ ] **Atlassian Integration**
  - [ ] Sprint Plan Confluence page created
  - [ ] Jira Tasks created under appropriate Stories
  - [ ] Task estimates and assignments documented
  - [ ] Sprint timeline and milestones established

### Handoff Information for QA
**Required Context:**
- Link to Sprint Plan (Confluence page)
- Development task breakdown and timeline
- Technical risk areas requiring focused testing
- Integration points needing validation
- Performance and security testing requirements

---

## QA → Developer

### QA Completion Checklist
- [ ] **Test Strategy Complete**
  - [ ] Risk-based testing approach defined
  - [ ] Test levels and coverage targets set
  - [ ] Edge cases systematically identified using CRUD + Boundaries
  - [ ] Test automation strategy planned and feasible

- [ ] **Test Case Documentation**
  - [ ] Test cases documented for all user stories
  - [ ] Edge case scenarios comprehensively covered
  - [ ] Integration test scenarios defined
  - [ ] Regression testing approach planned (brownfield)

- [ ] **Quality Standards**
  - [ ] Test case quality meets documentation standards
  - [ ] Automation framework selected and justified
  - [ ] Test data requirements specified
  - [ ] Performance testing approach defined

- [ ] **Atlassian Integration**
  - [ ] Test Plan Confluence page created and complete
  - [ ] QA Tasks created in Jira and linked to dev tasks
  - [ ] Test execution tracking approach established

### Handoff Information for Developer
**Required Context:**
- Link to Test Plan (Confluence page)
- Critical edge cases and testing priorities
- Test automation framework and setup requirements
- Performance targets and testing approach
- Specific testing requirements for each development task

---

## Developer Task Completion

### Developer Quality Checklist
- [ ] **Implementation Complete**
  - [ ] All task acceptance criteria implemented and verified
  - [ ] Code follows architectural patterns and standards
  - [ ] Error handling implements graceful degradation
  - [ ] Security best practices applied throughout

- [ ] **Testing Complete**
  - [ ] Unit tests written and passing (80%+ coverage)
  - [ ] Edge cases from QA plan properly handled
  - [ ] Integration tests cover component interactions
  - [ ] Manual testing completed for all scenarios

- [ ] **Quality Assurance**
  - [ ] Code reviewed and feedback addressed
  - [ ] Performance requirements met
  - [ ] Documentation updated (code docs, API docs)
  - [ ] No security vulnerabilities introduced

- [ ] **Atlassian Integration**
  - [ ] Jira task status updated throughout development
  - [ ] Implementation notes and decisions documented
  - [ ] Code commits linked to Jira tasks
  - [ ] Task marked complete with validation evidence

---

## Quality Gates Summary

### Planning Phase Quality Gates
1. **Business Analysis Gate**: Stakeholder-approved brief with clear requirements
2. **Product Management Gate**: Complete PRD with testable user stories
3. **Architecture Gate**: Comprehensive technical design ready for implementation
4. **Engineering Management Gate**: Task breakdown ready for development team

### Implementation Phase Quality Gates
1. **QA Planning Gate**: Test strategy covers all requirements and edge cases
2. **Development Gate**: Each task meets quality standards before marking complete
3. **Integration Gate**: Feature integration doesn't break existing functionality
4. **Deployment Gate**: All quality standards met and stakeholder acceptance obtained

## Workflow Quality Metrics

### Planning Efficiency
- **Time to complete planning phases**: Target vs actual
- **Rework rate**: How often earlier phases need revision
- **Stakeholder satisfaction**: Approval rate and feedback quality

### Implementation Quality  
- **Defect rate**: Defects per story point or task
- **Code coverage**: Automated test coverage percentage
- **Velocity**: Story points completed per sprint

### Process Effectiveness
- **Requirement traceability**: Completeness of requirement → implementation linkage
- **Documentation quality**: Confluence page views and stakeholder usage
- **Team adoption**: How effectively team members use the personas and workflows

This checklist ensures that each persona completes their responsibilities thoroughly before handing off to the next, maintaining quality and continuity throughout the workflow.