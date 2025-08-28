#!/bin/bash

# Business Analyst Command Installation Script

echo "Installing Business Analyst command for Claude Code..."

# Create the directory structure
mkdir -p .claude/commands/business-analyst/templates

# Copy files
cp business-analyst/command.md .claude/commands/business-analyst/
cp business-analyst/brainstorming-techniques.md .claude/commands/business-analyst/
cp business-analyst/templates/project-brief-template.md .claude/commands/business-analyst/templates/
cp business-analyst/templates/feature-brief-template.md .claude/commands/business-analyst/templates/

echo "✅ Business Analyst command installed!"
echo ""
echo "Usage: @business-analyst"
echo ""
echo "The command will guide you through creating project or feature briefs"
echo "with optional Confluence/Jira integration."