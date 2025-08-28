# Business Analyst Template Design Context

**Created:** [DATE]  
**Last Updated:** [DATE]  
**Purpose:** Document design decisions and context for BA template creation

---

## Project Context & Goals

### Repository Purpose
This repository is designed to **generate documents that help create detailed technical tasks that coding agent LLMs can fulfill with exactness**. The focus is on producing specifications that can be consumed by downstream LLM agents for precise code implementation.

### Multi-Persona Pipeline Vision
The envisioned workflow is:
**Business Analyst → Product Manager → Architect → Engineering Manager → Quality Assurance Engineer → Developer**

Each persona produces documents that feed the next persona in the chain, ultimately resulting in coding tasks that can be executed by LLM agents with high precision.

## Template Development Decisions

### Source Material Analysis
We analyzed the existing templates in the repository and compared them with JobNimbus company templates found in Confluence:

**Existing Repository Templates:**
- `feature-brief-template.md` - Comprehensive business analyst template for single features
- `project-brief-template.md` - High-level project template for larger initiatives

**JobNimbus Confluence Templates (4-phase approach):**
1. **Product Discovery Hub** - Main coordination page with document ownership
2. **Opportunity Canvas** - Problem definition and validation
3. **Customer Experience Brief** - Solution design and user testing
4. **Technical Feasibility** - Engineering assessment and architecture review
5. **Full Requirements & GTM Timeline** - Detailed specs and launch planning

### Key Insights from Analysis

#### JobNimbus Approach Benefits
- **Phased validation**: Each phase validates assumptions before moving forward
- **Risk mitigation**: Avoids over-investing in solutions for unvalidated problems
- **Resource efficiency**: Iterative approach prevents waste on wrong solutions
- **Clear handoffs**: Each phase has specific outcomes and next steps

#### Repository Template Benefits  
- **Comprehensive analysis**: Detailed business context and decision documentation
- **LLM-friendly structure**: Organized for downstream consumption by coding agents
- **Complete specifications**: Single documents with full context

### Persona Responsibility Mapping

After analysis, we determined the optimal persona split for the 4-phase approach:

**Business Analyst (Phases 1-2):**
1. **Opportunity Canvas** - Problem definition, stakeholder analysis, evidence gathering
2. **Customer Experience Brief** - User research, journey mapping, solution validation

**Engineering Manager/Architect (Phase 3):**
3. **Technical Feasibility** - Architecture review, spike work, effort estimation, technical risk assessment

**Product Manager (Phase 4):**
4. **Requirements & GTM** - Detailed requirements, go-to-market planning, delivery coordination

### Rationale for BA Owning Phases 1-2
- Both phases are heavily **research and analysis focused**
- BA has the core skills for **user research and customer validation**
- Creates a **comprehensive handoff package** to the next persona
- Allows PM to focus on **technical coordination and delivery planning**
- EM/Architect handles **technical feasibility** (their core expertise area)

## Template Design Philosophy

### Structure Approach
We chose to **maintain the familiar Confluence template structure** while **enhancing each section with additional detail**. This approach provides:
- **Familiarity** for users already using JobNimbus templates
- **Enhanced analysis** with more comprehensive guidance
- **Logical organization** of detailed content under recognizable headings
- **Professional consistency** with company standards

### Content Enhancement Strategy
For each Confluence section, we:
1. **Kept the original section heading and core purpose**
2. **Added subsections** with detailed guidance and prompts
3. **Included tables and frameworks** for structured analysis
4. **Provided examples** and formatting guidance
5. **Added handoff checklists** to ensure completeness

### LLM-Pipeline Considerations
While these templates focus on business analysis, they're designed with the downstream LLM pipeline in mind:
- **Structured markdown** for easy parsing by downstream personas
- **Clear handoff sections** that identify what the next persona needs
- **Consistent formatting** that other LLM agents can reliably consume  
- **Complete context capture** so information doesn't get lost between phases

## Template Specifications

### Opportunity Canvas Template
**Purpose:** Problem validation and opportunity assessment
**Key Enhancements:**
- Detailed current state vs opportunity analysis
- Comprehensive stakeholder mapping with decision authority
- Evidence framework (quantitative and qualitative)
- Success measurement planning
- Risk and assumption documentation
- Strategic alignment validation

**Handoff Output:** Clear problem definition with validated business case for solution exploration

### Customer Experience Brief Template  
**Purpose:** Solution design and user validation
**Key Enhancements:**
- Current vs future state journey mapping
- Detailed design and prototype documentation
- Comprehensive user testing methodology and results
- Event and data architecture considerations (for technical handoff)
- Risk assessment with mitigation strategies
- Success metrics with analytics requirements

**Handoff Output:** Validated solution approach with complete user experience design ready for technical assessment

## Implementation Guidelines

### When to Use These Templates
- **Complex initiatives** requiring thorough business analysis and user validation
- **Cross-functional projects** with multiple stakeholders and dependencies
- **High-risk solutions** where validation is critical before technical investment
- **Strategic features** that require comprehensive business case development

### Integration with Existing Templates
These new templates **complement rather than replace** the existing templates:
- Use **existing feature-brief-template.md** for simpler, single-feature analysis
- Use **existing project-brief-template.md** for high-level project scoping
- Use **new opportunity-canvas + customer-experience-brief** for complex initiatives requiring phased validation

### Workflow Integration
1. **Business Analyst** completes Opportunity Canvas → validates problem and business case
2. **Business Analyst** completes Customer Experience Brief → validates solution with users  
3. **Handoff to Engineering Manager/Architect** → technical feasibility assessment
4. **Handoff to Product Manager** → detailed requirements and launch planning
5. **Continue down pipeline** → to developer-ready technical specifications

## Success Criteria

### For These Templates
- **Business problems are thoroughly validated** before solution investment
- **User experience is tested and refined** before technical implementation  
- **Complete business context is captured** for downstream personas
- **Clear, actionable handoffs** guide the next phase of work
- **Risk and assumptions are identified** early in the process

### For the Overall Pipeline
- **Technical specifications are precise** and ready for LLM coding agents
- **Context is preserved** throughout the persona handoffs
- **Resource efficiency is maximized** through validated, iterative approach  
- **Quality is improved** through comprehensive upfront analysis

## Future Enhancements

### Potential Template Additions
- **Template selection guide** - When to use which template approach
- **Handoff checklists** - Standardized validation criteria between personas
- **Integration guides** - How these templates connect to Jira, Confluence, and other tools

### Process Improvements
- **Validation workshops** - Structured sessions for template review and approval
- **Stakeholder alignment tools** - Frameworks for ensuring cross-functional buy-in
- **Measurement frameworks** - Standard approaches for tracking template effectiveness

---

## File Organization

```
.claude/resources/dtw/business-analyst/templates/
├── feature-brief-template.md (existing)
├── project-brief-template.md (existing)  
├── opportunity-canvas-template.md (new)
├── customer-experience-brief-template.md (new)
```

## Related Documentation
- **JobNimbus Confluence Templates:** https://jobnimbus.atlassian.net/wiki/spaces/PROD/pages/4325376054/TEMPLATE+Initiative+Name+-+Product+Discovery+Hub
- **Repository README:** [Link when available]
- **Command Documentation:** [Link to BA command documentation when available]