# Business Analyst Command

Interactive brainstorming and requirements elicitation command that systematically gathers information to create comprehensive project or feature briefs.

## Structure

```
business-analyst/
├── command.md              # Main interactive command
├── README.md              # This documentation
└── templates/
    ├── project-brief-template.md   # Template for new projects
    └── feature-brief-template.md   # Template for feature enhancements
```

## Usage

Run `/business-analyst` to start an interactive session that will:

1. Determine if you need a project brief or feature brief
2. Ask where to output the final brief (local `/docs/` or Confluence)  
3. Guide you through systematic brainstorming and questioning
4. Loop until all template requirements are gathered
5. Generate a complete, professional brief

## Brainstorming Techniques Used

- **Mind Mapping** - Explore related concepts
- **SCAMPER** - Refine and expand ideas  
- **"How Might We"** - Turn challenges into opportunities
- **Rapid Ideation** - Generate multiple concepts quickly
- **Starbursting** - Comprehensive question generation (5W2H)
- **5 Whys** - Root cause analysis

## Templates

### Project Brief Template
Covers: Business Context, Stakeholder Analysis, MoSCoW Requirements, Constraints, Risk Assessment, Timeline & Success Criteria

### Feature Brief Template  
Covers: Current State Analysis, Gap Analysis, Feature Requirements, Impact Analysis, Integration Requirements, Success Metrics

Both templates integrate with Atlassian (Confluence pages + Jira Initiative/Epic creation).