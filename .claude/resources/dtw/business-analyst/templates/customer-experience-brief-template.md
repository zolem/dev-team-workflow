# Customer Experience Brief: [INITIATIVE NAME]

**Date:** [DATE]  
**Business Analyst:** [NAME]  
**Product Designer:** [NAME]  
**Stakeholders:** [LIST]  
**Parent Opportunity Canvas:** [LINK-TO-OPPORTUNITY-CANVAS]  
**Jira Initiative:** [INITIATIVE-KEY]  

---

**Purpose:**

This document helps product/engineering leadership, stakeholders, and team members understand:
- The proposed solution has been adequately tested with users
- A clear, measurable definition of success has been identified  
- The solution passes an engineering "sniff test" and there is high confidence that a technical path forward exists

It sets the foundation for detailed technical scoping and finalized requirements.

**Instructions:**
Each section includes prompts to guide your thinking. Feel free to delete the prompts once the section is complete.

## Customer Journey Flow

[Demonstrate you have a strong understanding of how the user(s) operates today AND how they could operate in the future. Identify what Workflows, Stages, and Statuses the JTBD and potential solution play in.]

### Current State Journey
**Today's User Experience:** [How users accomplish this goal currently]

**Current Workflows:** [Existing processes, steps, and decision points]

**Pain Points in Current Flow:** [Specific friction points and inefficiencies]

**System Touch Points:** [Where users interact with current system capabilities]

### Future State Journey  
**Proposed User Experience:** [How users will accomplish this goal with the new solution]

**Improved Workflows:** [New processes and simplified decision points]

**Key Experience Improvements:** [Specific friction reductions and efficiency gains]

**New System Capabilities:** [How the solution enhances or replaces current touchpoints]

### Workflow Integration Analysis
**Existing Workflows Affected:** [Which current workflows will change?]

**Stage/Status Impacts:** [How does this affect existing stages and statuses in the system?]

**Cross-Functional Impacts:** [How does this affect other teams' workflows?]

## Wireframes/Prototypes

[Link to or screenshots of wireframe designs to be used in customer and stakeholder testing/validation. If using AI tools to go straight to prototypes link to those prototypes.]

### Design Approach
**Design Methodology:** [Design thinking approach, user-centered design principles used]

**Key Design Decisions:** [Major design choices and the reasoning behind them]

### Prototype/Wireframe Links
**Low-Fidelity Wireframes:** [Link to initial concept wireframes]

**High-Fidelity Prototypes:** [Link to interactive prototypes used for testing]

**Design System Alignment:** [How designs align with existing design system and patterns]

### User Interface Specifications  
**Key UI Components:** [Main interface elements and their purpose]

**Interaction Patterns:** [How users will interact with the solution]

**Responsive Considerations:** [Mobile, tablet, desktop experience considerations]

## Customer & Stakeholder Testing

[Outline test plans, testing notes, and outcomes/learnings.]

### Research Methodology
**Research Questions:** [Primary questions the testing aimed to answer]

**Test Participants:** [User types, number of participants, selection criteria]

**Testing Method:** [Usability testing, interviews, surveys, A/B testing, etc.]

### Test Results & Insights
**Key Findings:** [Most important learnings from user testing]

**User Feedback Themes:** [Common patterns in user responses]

**Usability Issues Identified:** [Problems found during testing and proposed solutions]

**Feature Validation:** [Which features tested well vs poorly]

### Design Iterations
**Changes Made Based on Testing:** [How designs evolved based on user feedback]

**Outstanding Questions:** [User experience questions that still need resolution]

**Validation Status:** [What has been validated vs what still needs testing]

### Stakeholder Validation
**Internal Stakeholder Feedback:** [Key insights from internal stakeholders]

**Business Requirements Validation:** [Confirmation that solution meets business needs]

**Technical Feasibility Feedback:** [Initial technical review and concerns]

## Event Architecture Considerations

[Identify key events in the customer journey & proposed feature experience. These events should be business use case moments that our system, other applications, or AI would benefit from knowing about (its not simply a data change).]

### Key Business Events
**User Journey Events:** [Critical moments in the user experience that generate business value]
- [Event]: [When it occurs and why it's significant]
- [Event]: [When it occurs and why it's significant]

**System Integration Events:** [Events that other systems or applications need to know about]
- [Event]: [What triggers it and what systems care about it]  
- [Event]: [What triggers it and what systems care about it]

**Analytics & AI Events:** [Events that provide valuable data for analytics or AI systems]
- [Event]: [What data it provides and how it could be used]
- [Event]: [What data it provides and how it could be used]

### Event Flow Mapping
**Event Sequence:** [How events flow through the user journey]

**Cross-System Dependencies:** [Which events require coordination between systems]

**Data Requirements:** [What information needs to be captured with each event]

## Data Architecture Considerations

[What data is required to consume in order to execute this initiative. What data could this initiative produce that others may want/need to consume?]

### Data Requirements (Data In)
**Existing Data Sources:** [What data from current systems is needed?]
- [Data Source]: [What data and how it will be used]
- [Data Source]: [What data and how it will be used]

**New Data Requirements:** [What new data needs to be collected?]  
- [Data Type]: [Why it's needed and how it will be collected]
- [Data Type]: [Why it's needed and how it will be collected]

**Data Quality Requirements:** [Accuracy, completeness, timeliness needs]

### Data Production (Data Out)
**New Data Generated:** [What data will this solution produce?]
- [Data Output]: [What it contains and potential consumers]
- [Data Output]: [What it contains and potential consumers]

**Data Integration Opportunities:** [How this data could benefit other systems or teams]

**Data Privacy & Compliance:** [Any data handling requirements or restrictions]

### Data Flow Architecture
**Data Sources & Destinations:** [Where data comes from and where it goes]

**Real-time vs Batch Requirements:** [Which data needs real-time processing]

**Data Transformation Needs:** [How data needs to be processed or formatted]

## Risks & Assumptions

[What risks have we identified? What assumptions are we making? What mitigation plans can help de-risk?]

### User Experience Risks
| Risk | Impact (H/M/L) | Probability (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|-------------------|
| [User adoption risk] | [H/M/L] | [H/M/L] | [How to prevent/mitigate] |
| [Usability risk] | [H/M/L] | [H/M/L] | [How to prevent/mitigate] |

### Technical Integration Risks
| Risk | Impact (H/M/L) | Probability (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|-------------------|
| [Integration complexity] | [H/M/L] | [H/M/L] | [How to prevent/mitigate] |
| [Performance impact] | [H/M/L] | [H/M/L] | [How to prevent/mitigate] |

### Business & Market Risks
| Risk | Impact (H/M/L) | Probability (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|-------------------|
| [Market timing risk] | [H/M/L] | [H/M/L] | [How to prevent/mitigate] |
| [Resource availability] | [H/M/L] | [H/M/L] | [How to prevent/mitigate] |

### Key Assumptions
**User Behavior Assumptions:** [Assumptions about how users will interact with the solution]

**Technical Assumptions:** [Assumptions about system capabilities and integrations]

**Business Assumptions:** [Assumptions about market conditions, resources, timing]

## Success Metrics

[How will we measure the success of this solution? What work needs to be done to enable measurement of the outcomes you intend to move?]

### Primary Success Metrics
**User Success Metrics:**
- [Metric]: [Current baseline] → [Target] within [timeframe]
- [Metric]: [Current baseline] → [Target] within [timeframe]

**Business Success Metrics:**
- [Metric]: [Current baseline] → [Target] within [timeframe]  
- [Metric]: [Current baseline] → [Target] within [timeframe]

### Analytics Implementation Requirements
**Events to Track:** [Specific user actions that need to be measured]

**Conversion Funnels:** [Key user journeys to measure and optimize]

**Dashboard Requirements:** [What metrics need real-time visibility]

**A/B Testing Plans:** [Experiments to run post-launch]

### Measurement Infrastructure
**Analytics Tooling:** [What tools/platforms needed for measurement]

**Data Collection:** [What new data collection needs to be implemented]

**Reporting Requirements:** [Who needs what reports and how often]

## Design Review

Schedule a design review that includes product/engineering leaders & dependent or impacted product squad leadership to review the proposed solution. The purpose of this meeting will be to ensure strategic, cross team alignment. This will also be an opportunity for you to gain full support of leadership on the approach you intend to take.

### Review Participants
**Required Attendees:**
- [Name/Role]: [Why their review is critical]
- [Name/Role]: [Why their review is critical]

**Optional Attendees:**  
- [Name/Role]: [What perspective they provide]
- [Name/Role]: [What perspective they provide]

### Review Agenda & Outcomes
**Key Review Topics:**
1. [Topic to be reviewed and validated]
2. [Topic to be reviewed and validated]
3. [Topic to be reviewed and validated]

**Decisions Needed:**
- [Decision]: [Who makes it and by when]
- [Decision]: [Who makes it and by when]

**Review Outcomes:**
- [ ] **Strategic Alignment:** Solution approach approved by leadership
- [ ] **Cross-Team Alignment:** Dependent teams aligned on approach  
- [ ] **Resource Commitment:** Required resources confirmed and allocated
- [ ] **Technical Feasibility:** Engineering confident in technical approach

---

## Handoff to Technical Feasibility

### Technical Questions for Engineering/Architecture Review
**Architecture Questions:**
1. [Technical architecture question that needs engineering input]
2. [Integration or performance question for technical assessment]
3. [Infrastructure or scalability question for technical validation]

**Implementation Questions:**
1. [Question about development approach or complexity]
2. [Question about timeline or resource requirements]  
3. [Question about risk mitigation or technical alternatives]

### Handoff Requirements
- [ ] **User Experience Validated:** Solution approach tested and refined with users
- [ ] **Design Specifications:** Complete wireframes/prototypes ready for technical review
- [ ] **Data Architecture:** Clear requirements for data in/out documented
- [ ] **Event Architecture:** Key business events identified for technical implementation  
- [ ] **Success Metrics:** Measurement approach defined and ready for technical instrumentation
- [ ] **Risk Assessment:** User experience and business risks identified with mitigation plans

---

**Parent Opportunity Canvas:** [LINK-TO-OPPORTUNITY-CANVAS]  
**Jira Initiative:** [LINK-TO-JIRA-INITIATIVE]  
**Confluence Page:** [LINK-TO-CONFLUENCE-PAGE]  
**Created:** [DATE] | **Last Updated:** [DATE] | **Version:** 1.0