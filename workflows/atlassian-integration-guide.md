# Atlassian MCP Integration Guide

This guide provides step-by-step instructions for integrating the JN LLM Workflow System with Atlassian tools using Claude Code's MCP server capabilities.

## Prerequisites

### Required Access
- Atlassian Cloud instance (Jira + Confluence)
- Appropriate permissions in Jira for creating initiatives, epics, and stories
- Confluence space with create/edit permissions
- Claude Code with Atlassian MCP server configured

### Initial Setup
1. **Configure Claude Code Atlassian MCP**: Ensure your Claude Code session has Atlassian MCP server enabled
2. **Identify Confluence Space**: Determine which Confluence space will hold your project documentation
3. **Identify Jira Project**: Determine which Jira project will contain your work items

## Workflow Integration Points

### Business Analyst → Atlassian Integration

#### For Greenfield Projects
```bash
# Step 1: Create Confluence page for Project Brief
Use: mcp__atlassian__createConfluencePage
- title: "Project Brief: [PROJECT NAME]"
- body: [Complete project brief in markdown]
- spaceId: [Your designated space ID]

# Step 2: Create Jira Initiative
Use: mcp__atlassian__createJiraIssue  
- projectKey: [Your project key]
- issueTypeName: "Initiative" (or "Epic" if no Initiative type)
- summary: "[PROJECT NAME] - Initiative"
- description: "Project initiative for [PROJECT NAME]. See Confluence for detailed brief: [CONFLUENCE-LINK]"

# Step 3: Link Confluence page to Jira initiative
Update Confluence page to reference Jira initiative key
```

#### For Brownfield Features
```bash
# Step 1: Create Confluence page for Feature Brief
Use: mcp__atlassian__createConfluencePage
- title: "Feature Brief: [FEATURE NAME]"
- body: [Complete feature brief in markdown]
- spaceId: [Your designated space ID]

# Step 2: Create Jira Epic under existing initiative
Use: mcp__atlassian__createJiraIssue
- projectKey: [Your project key] 
- issueTypeName: "Epic"
- summary: "[FEATURE NAME] - Epic"
- description: "Feature epic for [FEATURE NAME]. See Confluence for detailed brief: [CONFLUENCE-LINK]"
```

### Product Manager → Atlassian Integration

```bash
# Step 1: Create PRD Confluence page
Use: mcp__atlassian__createConfluencePage
- title: "PRD: [PROJECT/FEATURE NAME]"
- body: [Complete PRD in markdown]
- spaceId: [Your designated space ID]

# Step 2: Create Jira Epics for each major feature area
For each epic in PRD:
Use: mcp__atlassian__createJiraIssue
- projectKey: [Your project key]
- issueTypeName: "Epic" 
- summary: "[Epic Name] - Implementation"
- description: "Epic for [Epic Name]. Requirements detailed in PRD: [CONFLUENCE-LINK]"

# Step 3: Create user stories as Jira Stories
For each user story:
Use: mcp__atlassian__createJiraIssue
- projectKey: [Your project key]
- issueTypeName: "Story"
- summary: "[User Story Summary]"
- description: "[Full user story with acceptance criteria in markdown]"
- parent: [Epic Key] # Link to parent epic
```

### Architect → Atlassian Integration

```bash
# Step 1: Create Architecture Confluence page
Use: mcp__atlassian__createConfluencePage
- title: "Architecture: [PROJECT/FEATURE NAME]"
- body: [Complete architecture document in markdown]
- spaceId: [Your designated space ID]

# Step 2: Create technical epics if not covered by functional epics
Use: mcp__atlassian__createJiraIssue
- projectKey: [Your project key]
- issueTypeName: "Epic"
- summary: "Technical Infrastructure - [Component Name]"
- description: "Technical implementation epic for [Component]. See architecture doc: [CONFLUENCE-LINK]"

# Step 3: Link architecture to all related Jira items
Update Confluence architecture page with references to all related Jira epics and stories
```

### Engineering Manager → Atlassian Integration

```bash
# Step 1: Create Sprint Planning Confluence page
Use: mcp__atlassian__createConfluencePage
- title: "Sprint Plan: [PROJECT/FEATURE NAME] - Sprint [NUMBER]"
- body: [Sprint plan with task breakdown]
- spaceId: [Your designated space ID]

# Step 2: Break down stories into Jira tasks
For each implementation task:
Use: mcp__atlassian__createJiraIssue
- projectKey: [Your project key]
- issueTypeName: "Task" or "Sub-task"
- summary: "[Task Summary] (1-3 days)"
- description: "[Detailed task description with acceptance criteria]"
- parent: [Story Key] # Link to parent story
```

### QA → Atlassian Integration

```bash
# Step 1: Create Test Plan Confluence page
Use: mcp__atlassian__createConfluencePage
- title: "Test Plan: [PROJECT/FEATURE NAME]"
- body: [Complete test plan with test cases and edge cases]
- spaceId: [Your designated space ID]

# Step 2: Create QA tasks in Jira
Use: mcp__atlassian__createJiraIssue
- projectKey: [Your project key]
- issueTypeName: "Task"
- summary: "QA: [Test Category] - [Story Name]"
- description: "[Test cases and validation steps]"
- parent: [Story Key] # Link to corresponding dev story
```

### Developer → Atlassian Integration

```bash
# Step 1: Update Jira task status when starting work
Use: mcp__atlassian__transitionJiraIssue
- issueIdOrKey: [TASK-KEY]
- transition: {"id": "[IN_PROGRESS_TRANSITION_ID]"}

# Step 2: Add implementation notes as task progresses
Use: mcp__atlassian__addCommentToJiraIssue
- issueIdOrKey: [TASK-KEY]
- commentBody: "[Implementation notes, blockers, or status updates]"

# Step 3: Mark task complete when finished
Use: mcp__atlassian__transitionJiraIssue
- issueIdOrKey: [TASK-KEY]  
- transition: {"id": "[DONE_TRANSITION_ID]"}
```

## Confluence Space Organization

### Recommended Space Structure
```
Project/Feature Root Page
├── Business Brief (from Business Analyst)
├── Product Requirements Document (from Product Manager)  
├── Architecture Document (from Architect)
├── Sprint Plans (from Engineering Manager)
├── Test Plans (from QA)
└── Implementation Notes (from Developer)
```

### Page Linking Strategy
- **Parent-child relationships**: Use Confluence page hierarchy
- **Cross-references**: Link between related pages using Confluence macros
- **Jira references**: Include Jira issue keys in all relevant pages

## Jira Project Structure

### Issue Hierarchy
```
Initiative (Project-level)
├── Epic 1 (Feature area)
│   ├── Story 1.1 (User story)
│   │   ├── Task 1.1.1 (Dev task)
│   │   └── Task 1.1.2 (QA task)
│   └── Story 1.2 (User story)
└── Epic 2 (Feature area)
```

### Custom Fields (Recommended)
- **Confluence Reference**: Link to related Confluence page
- **Architecture Impact**: High/Medium/Low impact on system architecture
- **Business Priority**: Must/Should/Could priority from Business Analyst

## Traceability Matrix

Maintain complete traceability from business requirements to implementation:

| Business Requirement | PRD Epic | Architecture Component | Jira Epic | Jira Stories | Implementation Tasks |
|--------------------- |----------|------------------------|-----------|--------------|-------------------- |
| | | | | | |

## Automation Opportunities

### Confluence Page Templates
Create Confluence page templates for each persona deliverable to ensure consistency.

### Jira Automation Rules
Set up automation rules for:
- Auto-linking stories to epics based on labels
- Automatically updating parent epic status when child stories complete
- Notifications when architecture changes affect development tasks

## Troubleshooting Common Issues

### Permission Issues
- Verify user has create permissions in target Confluence space
- Confirm create issue permissions in target Jira project
- Check if issue types exist in the Jira project

### Linking Issues
- Ensure Confluence pages include Jira issue keys in consistent format
- Use proper Confluence macros for Jira integration
- Verify bidirectional linking between Confluence and Jira

### Organization Issues
- Maintain consistent naming conventions across all artifacts
- Use labels and components in Jira for better organization
- Keep Confluence page hierarchy clean and logical

## Best Practices

1. **Consistent Naming**: Use consistent naming patterns across Jira and Confluence
2. **Proper Linking**: Always create bidirectional links between related items
3. **Regular Updates**: Keep documentation current as implementation progresses
4. **Clear Descriptions**: Write descriptions that provide context for future reference
5. **Template Usage**: Use templates consistently for professional presentation

## MCP Command Reference

### Essential MCP Commands for Workflow

#### Confluence Operations
- `mcp__atlassian__getAccessibleAtlassianResources` - Get cloud ID
- `mcp__atlassian__getConfluenceSpaces` - Find target space
- `mcp__atlassian__createConfluencePage` - Create documentation pages
- `mcp__atlassian__updateConfluencePage` - Update existing pages

#### Jira Operations  
- `mcp__atlassian__getVisibleJiraProjects` - Find target project
- `mcp__atlassian__createJiraIssue` - Create initiatives, epics, stories, tasks
- `mcp__atlassian__editJiraIssue` - Update issue details
- `mcp__atlassian__transitionJiraIssue` - Change issue status
- `mcp__atlassian__addCommentToJiraIssue` - Add progress updates

#### Search & Discovery
- `mcp__atlassian__searchJiraIssuesUsingJql` - Find existing issues
- `mcp__atlassian__searchConfluenceUsingCql` - Find existing pages

This integration ensures that all workflow artifacts are properly tracked, linked, and discoverable within your Atlassian ecosystem.