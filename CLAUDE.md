# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## System Overview

The JN LLM Workflow System is a structured project delivery framework using 6 specialized AI personas with Atlassian integration. This is a documentation and workflow system (no code files) that provides:

- **Business Analyst**: Requirements elicitation using 5W2H framework
- **Product Manager**: PRD creation with INVEST user stories  
- **Architect**: Technical design using 4+1 Architectural View Model
- **Engineering Manager**: Task breakdown into 1-3 day implementable units
- **QA Engineer**: Risk-based test planning with edge case analysis
- **Developer**: Implementation with TDD and quality standards

## Architecture & Structure

### Core Components

- `/personas/` - Individual persona prompts and methodologies (6 specialized roles)
- `/workflows/` - Step-by-step process guides (greenfield/brownfield)
- `/templates/` - Document templates for each deliverable type
- `/.claude/agents/` - Claude Code custom agents (7 total including workflow-orchestrator)

### Integration Features

**Atlassian MCP Integration**: All personas create:
- Confluence pages using professional templates
- Jira hierarchy (Initiative → Epic → Story → Task)
- Bidirectional linking between documentation and work items
- Complete traceability from requirements to implementation

## Using the System

### Starting New Projects

**Option 1 - Workflow Orchestrator (Recommended)**:
```
Use the workflow-orchestrator to start a new [greenfield/brownfield] project called "[PROJECT NAME]"
```

**Option 2 - Direct Sequential Usage**:
```
business-analyst → product-manager → architect → engineering-manager → qa-engineer → developer
```

### Agent Progression Flow

1. **business-analyst**: Creates project/feature brief + Jira Initiative
2. **product-manager**: Creates PRD + Jira Epics & Stories  
3. **architect**: Creates technical design + Technical Epics
4. **engineering-manager**: Creates sprint plan + Jira Tasks
5. **qa-engineer**: Creates test plan + QA Tasks
6. **developer**: Implements specific Jira tasks
7. **workflow-orchestrator**: Guides transitions and validates quality gates

### Prerequisites for Atlassian Integration

Before using agents, ensure:
- Atlassian MCP server configured in Claude Code
- Confluence space access with create/edit permissions
- Jira project access with create issue permissions
- Cloud ID, Space ID, and Project Key identified

### Validation Commands

To verify Atlassian setup:
```
Use the workflow-orchestrator to validate my Atlassian setup for project "[PROJECT NAME]"
```

## Key Files & Templates

### Essential Documentation
- `AGENT-USAGE-GUIDE.md` - Complete agent usage instructions
- `workflows/quick-start-guide.md` - 5-minute startup guide
- `workflows/greenfield-workflow.md` - New project process
- `workflows/brownfield-workflow.md` - Feature addition process

### Agent Templates
- `personas/*/templates/` - Document templates for each persona output
- `personas/*/prompt.md` - Complete persona prompts with methodologies

## Quality Standards

### Persona Quality Gates
Each persona includes:
- Comprehensive quality checklists for deliverable validation
- Clear handoff criteria for next persona
- Integration validation for Atlassian artifact creation
- Stakeholder validation requirements where appropriate

### Best Practices
- Complete each persona fully before moving to next
- Validate quality gates before persona transitions
- Maintain stakeholder engagement throughout planning phases
- Use consistent naming across Jira and Confluence
- Maintain proper issue hierarchy (Initiative → Epic → Story → Task)

## Common Usage Patterns

### Agent Invocation Examples
```
# Starting new project
Use the business-analyst to create a project brief for "Customer Portal Application"

# Continuing workflow  
Use the product-manager to create a PRD based on the project brief at [Confluence link]

# Feature addition
Use the business-analyst to create a feature brief for real-time notifications

# Implementation
Use the developer to implement Jira task [TASK-KEY] following the architecture and test requirements
```

### Troubleshooting
```
# Validate deliverables
Use the workflow-orchestrator to validate my [current phase] deliverables before proceeding to [next phase]

# Configuration issues  
Use the workflow-orchestrator to troubleshoot my Atlassian configuration
```

This system provides systematic, professional project delivery that integrates with Atlassian tools while following proven industry methodologies adapted for AI-assisted development workflows.