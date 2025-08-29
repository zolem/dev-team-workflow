# Product Management Methodologies Reference

This document outlines the product management methodologies used by the Product Manager command for requirements gathering, prioritization, and go-to-market planning.

## Requirements Methodologies

### 1. MoSCoW Prioritization
**When to use:** Feature prioritization and scope definition
**How it works:**
- **M**ust have - Critical features for minimum viable release
- **S**hould have - Important but not critical features
- **C**ould have - Nice-to-have features for future iterations
- **W**on't have - Features explicitly out of scope

### 2. User Story Mapping
**When to use:** Breaking down features into development iterations
**How it works:** 
- Map user journey horizontally
- Break activities into tasks vertically
- Prioritize by user value and technical dependency
**Best for:** Epic breakdown, iteration planning

### 3. RICE Scoring Framework
**When to use:** Objective feature prioritization
**How it works:**
- **R**each - How many users affected?
- **I**mpact - How much will it impact each user? (1-3 scale)
- **C**onfidence - How confident are we in our estimates? (%)
- **E**ffort - How much engineering time required?
**Score = (Reach × Impact × Confidence) / Effort**

### 4. Kano Model Analysis
**When to use:** Understanding feature value perception
**Categories:**
- **Basic Needs** - Expected features (absence causes dissatisfaction)
- **Performance Needs** - More is better (satisfaction increases linearly)
- **Excitement Needs** - Unexpected delighters (high satisfaction when present)

## Requirements Gathering Techniques

### 5. Jobs-to-be-Done (JTBD)
**When to use:** Understanding true user motivations
**Framework:** "When I [situation], I want to [motivation], so I can [expected outcome]"
**Best for:** Feature validation, market positioning

### 6. Acceptance Criteria Definition
**Format:** Given/When/Then structure
- **Given** [context/precondition]
- **When** [user action/event]
- **Then** [expected outcome]

### 7. Edge Case Analysis
**Categories to consider:**
- **Data extremes** - Empty, very large, special characters
- **User behavior** - Power users, novices, edge workflows
- **System limits** - Performance boundaries, error conditions
- **Integration points** - Third-party failures, API limits

## Go-to-Market Methodologies

### 8. Product-Market Fit Canvas
**Components:**
- Value proposition hypothesis
- Target customer segments
- Customer needs validation
- Solution fit assessment

### 9. Phased Rollout Strategy
**Alpha Phase:**
- Internal testing
- Core functionality validation
- Performance baseline

**Beta Phase:**
- Limited external users
- Feature completeness validation
- Support process testing

**GA Phase:**
- Full market availability
- Complete feature set
- Scaled operations

### 10. Feature Flag Strategy
**Types:**
- **Kill switches** - Emergency disable capability
- **Gradual rollouts** - Percentage-based user exposure
- **A/B testing** - Feature variation testing
- **Canary releases** - Risk mitigation for new code

## Risk Assessment Frameworks

### 11. RAID Analysis
**Categories:**
- **R**isks - Things that might go wrong
- **A**ssumptions - Things we believe to be true
- **I**ssues - Current problems blocking progress
- **D**ependencies - External requirements for success

### 12. Pre-Mortem Analysis
**Process:**
1. Assume the project failed completely
2. Brainstorm all possible failure reasons
3. Assess likelihood and impact of each
4. Create mitigation plans for high-probability failures

## Stakeholder Management

### 13. RACI Matrix
**For each decision/task, assign:**
- **R**esponsible - Who does the work
- **A**ccountable - Who approves/owns the outcome
- **C**onsulted - Who provides input
- **I**nformed - Who needs to know the result

### 14. Stakeholder Influence/Interest Grid
**Quadrants:**
- High Interest/High Influence - Manage Closely
- High Interest/Low Influence - Keep Informed
- Low Interest/High Influence - Keep Satisfied
- Low Interest/Low Influence - Monitor

## Session Structure

### Requirements Gathering Flow
1. **Context Review** - Analyze BA documents for business understanding
2. **Scope Definition** - Apply MoSCoW to proposed features
3. **Iteration Planning** - Use User Story Mapping for phasing
4. **Acceptance Criteria** - Define specific, testable requirements
5. **Risk Assessment** - Apply RAID and Pre-Mortem analysis
6. **GTM Planning** - Develop phased rollout and launch strategy

### Decision-Making Framework
1. **Data Collection** - Gather quantitative and qualitative evidence
2. **Option Generation** - Create multiple viable approaches
3. **Impact Analysis** - Assess pros/cons using structured criteria
4. **Stakeholder Validation** - Confirm decisions with key stakeholders
5. **Documentation** - Record rationale for future reference