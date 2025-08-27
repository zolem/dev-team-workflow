# JN LLM Workflow System - Custom Agent Usage Guide

## Quick Start with Custom Agents

Your JN LLM Workflow System is now configured as **6 specialized Claude Code custom agents** in `.claude/agents/`. Each agent handles a specific role in your workflow with built-in Atlassian MCP integration.

## Available Agents

### 1. `business-analyst`
**Purpose:** Requirements elicitation and project/feature brief creation  
**Use:** Starting new projects or features  
**Output:** Project Brief or Feature Brief + Jira Initiative/Epic

### 2. `product-manager`  
**Purpose:** Detailed PRD creation from business requirements  
**Use:** After business analyst completes brief  
**Output:** Comprehensive PRD + Jira Epics & Stories

### 3. `architect`
**Purpose:** Technical design and system architecture  
**Use:** After product manager completes PRD  
**Output:** Architecture Document + Technical Epics

### 4. `engineering-manager`
**Purpose:** Task breakdown into 1-3 day implementable units  
**Use:** After architect completes technical design  
**Output:** Sprint Plan + Jira Tasks under Stories

### 5. `qa-engineer`
**Purpose:** Test planning and edge case specification  
**Use:** After engineering manager creates task breakdown  
**Output:** Test Plan + QA Tasks in Jira

### 6. `developer`
**Purpose:** Task implementation with quality standards  
**Use:** For implementing specific Jira tasks  
**Output:** Working code + Updated Jira task status

### 7. `workflow-orchestrator`
**Purpose:** Guides workflow progression and quality gates  
**Use:** To start workflows or when unsure of next steps  
**Output:** Workflow guidance and persona coordination

## How to Use the Agents

### Starting a New Workflow

#### Option 1: Use Workflow Orchestrator (Recommended for first time)
```
Use the workflow-orchestrator to start a new [greenfield/brownfield] project called "[PROJECT NAME]"
```

The orchestrator will:
- Guide you through setup
- Validate your Atlassian configuration  
- Direct you to the appropriate first agent
- Provide quality checkpoints

#### Option 2: Direct Agent Usage (For experienced users)
```
Use the business-analyst to create a [project brief/feature brief] for "[PROJECT/FEATURE NAME]"
```

### Agent Progression Flow

**Sequential Usage Pattern:**
```
workflow-orchestrator → business-analyst → product-manager → architect → engineering-manager → qa-engineer → developer
```

**Example Agent Transitions:**
```
1. Use the business-analyst to create a project brief for "Customer Portal Application"

2. Use the product-manager to create a PRD based on the project brief at [Confluence link]

3. Use the architect to design system architecture for the PRD at [Confluence link]

4. Use the engineering-manager to break down the architecture and PRD into development tasks

5. Use the qa-engineer to create comprehensive test plans for the task breakdown

6. Use the developer to implement Jira task [TASK-KEY] following the architecture and test requirements
```

## Atlassian Integration Setup

### Prerequisites
Before using agents, ensure you have:
- [ ] Atlassian MCP server configured in Claude Code
- [ ] Access to target Confluence space with create/edit permissions
- [ ] Access to target Jira project with create issue permissions
- [ ] Cloud ID, Space ID, and Project Key identified

### Quick Setup Validation
```
Use the workflow-orchestrator to validate my Atlassian setup for project "[PROJECT NAME]"
```

The orchestrator will verify your access and help identify the correct space and project IDs.

## Agent Features & Capabilities

### Built-in Atlassian Integration
Each agent automatically:
- Creates appropriate Confluence pages using professional templates
- Creates proper Jira issue hierarchy (Initiative → Epic → Story → Task)
- Maintains bidirectional linking between documentation and work items
- Follows established quality standards for enterprise documentation

### Structured Methodologies
Each agent follows proven industry methodologies:
- **Business Analyst**: 5W2H framework + MoSCoW prioritization
- **Product Manager**: INVEST user stories + Given-When-Then acceptance criteria
- **Architect**: 4+1 Architectural View Model + systematic technology selection
- **Engineering Manager**: SMART task breakdown + agile sprint planning
- **QA Engineer**: Risk-based testing + CRUD + Boundaries edge case analysis
- **Developer**: Test-driven development + comprehensive quality standards

### Quality Gates & Handoffs
Each agent includes:
- Comprehensive quality checklists for deliverable validation
- Clear handoff criteria for next persona
- Integration validation for Atlassian artifact creation
- Stakeholder validation requirements where appropriate

## Best Practices

### Workflow Execution
1. **Start with orchestrator** for new workflows or when unsure
2. **Complete each persona fully** before moving to next
3. **Validate quality gates** before persona transitions
4. **Maintain stakeholder engagement** throughout planning phases

### Agent Usage Tips
- **Provide full context** when invoking agents (include Confluence links)
- **Follow agent guidance** completely through their methodologies
- **Validate Atlassian integration** after each agent completes
- **Use agent recommendations** for next steps and handoffs

### Documentation Management
- **Keep Confluence organized** using consistent naming and page hierarchy
- **Maintain Jira hierarchy** (Initiative → Epic → Story → Task) consistently
- **Update documentation** as implementation progresses and decisions change
- **Use cross-references** between Confluence and Jira for full traceability

## Troubleshooting

### Common Issues & Solutions

**Agent Not Found Error:**
```
# Verify agents are properly configured
ls .claude/agents/

# Check agent file format and frontmatter
cat .claude/agents/[agent-name].md
```

**Atlassian Access Issues:**
```
Use the workflow-orchestrator to troubleshoot my Atlassian configuration
```

**Quality Gate Failures:**
```
Use the workflow-orchestrator to validate my [current phase] deliverables before proceeding to [next phase]
```

### Agent Re-invocation
If you need to return to a previous agent:
```
Use the [agent-name] to update/revise [deliverable] based on new information: [context]
```

## Example Usage Sessions

### Starting a Greenfield Project
```
User: I want to build a customer support ticketing system
Assistant: Use the workflow-orchestrator to start a new greenfield project called "Customer Support Ticketing System"
[Orchestrator guides through setup and directs to business-analyst]

User: [Provides context to business-analyst]
[Business analyst conducts 5W2H interview and creates project brief]

User: Use the product-manager to create a PRD based on the project brief at [Confluence link]
[Product manager creates comprehensive PRD with user stories]

[Continue through remaining personas...]
```

### Adding a Feature to Existing System
```
User: I need to add real-time notifications to my existing e-commerce platform
Assistant: Use the workflow-orchestrator to start a new brownfield feature called "Real-time Notifications"
[Orchestrator guides through brownfield setup]

User: Use the business-analyst to create a feature brief for real-time notifications
[Business analyst creates feature brief with impact analysis]

[Continue through feature-focused workflow...]
```

## Agent Customization

### Modifying Agent Behavior
To customize agents for your organization:
1. **Edit agent files** in `.claude/agents/` directory
2. **Modify methodologies** to match your processes
3. **Update templates** to match your documentation standards
4. **Adjust Atlassian integration** for your specific space and project structure

### Adding Organization-Specific Context
Add your organization's specific context to agent frontmatter or system prompts:
- Technology stack preferences
- Code standards and conventions  
- Compliance requirements
- Stakeholder roles and approval processes

This custom agent system provides you with a professional, systematic approach to project delivery that integrates seamlessly with your Atlassian tools while following proven industry methodologies adapted for AI-assisted development workflows.