# JN LLM Workflow System - Quick Start Guide

Get started with the JN LLM Workflow System in 10 minutes.

## Before You Begin

### Prerequisites
- [ ] Claude Code or Cursor IDE with Atlassian MCP server configured
- [ ] Access to Atlassian Cloud (Jira + Confluence)
- [ ] Designated Confluence space for project documentation
- [ ] Jira project with appropriate permissions

### Quick Setup Check
```bash
# Verify Atlassian MCP access
mcp__atlassian__getAccessibleAtlassianResources()

# Find your Confluence space
mcp__atlassian__getConfluenceSpaces(cloudId: "your-cloud-id")

# Find your Jira project  
mcp__atlassian__getVisibleJiraProjects(cloudId: "your-cloud-id")
```

## Choose Your Workflow

### Option 1: Greenfield Project (New Application)
**When to use:** Building a new application from scratch  
**Follow:** `workflows/greenfield-workflow.md`
**Time estimate:** 15-20 hours of planning + development time

### Option 2: Brownfield Feature (Existing Application)  
**When to use:** Adding features to an existing application  
**Follow:** `workflows/brownfield-workflow.md`  
**Time estimate:** 8-12 hours of planning + development time

## 5-Minute Start: Business Analysis

### Step 1: Load Business Analyst Persona
1. **Open Claude Code or Cursor**
2. **Copy the complete prompt** from `personas/business-analyst/prompt.md`
3. **Paste as system prompt** in your AI assistant
4. **Add project context:**
   ```
   Project Context:
   - Project/Feature Name: [YOUR PROJECT NAME]
   - Type: [Greenfield/Brownfield]
   - Confluence Space ID: [YOUR SPACE ID]
   - Jira Project Key: [YOUR PROJECT KEY]
   ```

### Step 2: Start Requirements Session
**Copy and paste this starter prompt:**
```
I need to start a [greenfield project/brownfield feature] called "[PROJECT/FEATURE NAME]". 

Please begin the structured requirements elicitation session using the 5W2H framework. Start with the WHO questions to understand stakeholders and users.

My initial idea: [DESCRIBE YOUR PROJECT/FEATURE IDEA IN 1-2 SENTENCES]
```

### Step 3: Follow the Guided Interview
The Business Analyst persona will guide you through:
- WHO: Stakeholder and user identification
- WHAT: Problem definition and desired outcomes  
- WHEN: Timeline and milestone requirements
- WHERE: System location and integration needs
- WHY: Business drivers and value proposition
- HOW: Approach preferences and workflow needs
- HOW MUCH: Budget and resource constraints

### Step 4: Create Project/Feature Brief
The persona will create either a Project Brief or Feature Brief using the appropriate template and integrate with Atlassian.

## Next Steps After Business Analysis

### Immediate Next Actions
1. **Review and validate** the brief with stakeholders
2. **Obtain stakeholder approval** on scope and priorities
3. **Proceed to Product Manager persona** for detailed PRD creation

### Continuing the Workflow
- **Sequential approach:** Complete each persona in order for full documentation
- **Parallel approach:** Have team members work on different personas simultaneously
- **Iterative approach:** Loop back to refine earlier outputs based on later insights

## Tips for Success

### Persona Usage Best Practices
- **Stay in character:** Let each persona complete their full methodology
- **Provide context:** Give personas all relevant information from previous steps  
- **Follow templates:** Use the provided templates for consistency
- **Validate outputs:** Review each deliverable before moving to next persona

### Atlassian Integration Tips
- **Consistent naming:** Use consistent naming across Jira and Confluence
- **Proper linking:** Always create bidirectional links between artifacts
- **Regular updates:** Keep documentation current as implementation progresses
- **Template usage:** Use Confluence page templates for professional presentation

### Common Pitfalls to Avoid
- **Skipping validation:** Always validate outputs with stakeholders before proceeding
- **Incomplete context:** Provide complete context when switching between personas
- **Poor documentation:** Take time to create quality documentation - it pays off later
- **Missing integration:** Don't forget to create Jira items and Confluence pages

## Getting Help

### Documentation Reference
- **Individual Personas:** See `personas/[persona-name]/` for detailed prompts and methodologies
- **Workflow Guides:** See `workflows/` for step-by-step instructions
- **Templates:** Use `personas/[persona-name]/templates/` for document templates
- **Atlassian Integration:** See `workflows/atlassian-integration-guide.md` for detailed MCP instructions

### Common Questions

**Q: Can I skip personas or change the order?**  
A: While the system is designed to work sequentially, you can adapt it. However, ensure each persona has the context they need from previous work.

**Q: What if I'm working solo vs. with a team?**  
A: Solo: Use personas sequentially. Team: Different team members can adopt different personas and work in parallel.

**Q: How detailed should I be in each phase?**  
A: Follow the quality checklists in each persona prompt. Better to be thorough in planning than to discover gaps during implementation.

**Q: Can I customize the personas or methodologies?**  
A: Absolutely! These are starting points. Adapt them to your organization's needs and preferences.

## Sample Project Walkthrough

For a complete example of the workflow in action, see:
- `examples/sample-greenfield-project/` - Complete greenfield project walkthrough
- `examples/sample-brownfield-feature/` - Complete feature addition walkthrough

---

**Ready to start?** Pick your workflow type and load the Business Analyst persona to begin!