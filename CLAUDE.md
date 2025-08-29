# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Claude Code command package called "dev-team-workflow" that provides business analysis and workflow automation commands. The primary focus is on generating detailed technical tasks that coding agent LLMs can fulfill with precision through a multi-persona pipeline approach.

### Multi-Persona Pipeline Vision
The workflow follows this sequence:
**Business Analyst → Product Manager → Architect → Engineering Manager → Quality Assurance Engineer → Developer**

Each persona produces documents that feed the next persona in the chain, ultimately resulting in coding tasks executable by LLM agents with high precision.

## Commands

### Installation/Distribution
```bash
# Install the package globally
npm install -g .

# Test local installation 
npx dev-team-workflow install

# Uninstall
npx dev-team-workflow uninstall

# Get help
npx dev-team-workflow help
```

### Package Development
- Build/test: Currently no build process - pure Node.js with no dependencies
- The installer (`bin/install.js`) downloads files from GitHub API and installs to user's global Claude config

## Architecture & Structure

### Core Components

**Installation System (`bin/install.js`)**
- Downloads `.claude/` directory structure from GitHub repository
- Installs to user's global Claude config directory (`~/.claude/`)
- Provides clean install/uninstall functionality
- Handles cross-platform path resolution

**Claude Command Structure**
```
.claude/
├── commands/dtw/business-analyst.md    # Interactive BA command
└── resources/dtw/business-analyst/
    ├── brainstorming-techniques.md
    └── templates/
        ├── opportunity-canvas-template.md
        └── customer-experience-brief-template.md
```

### Business Analysis Templates

The system implements a two-phase business analysis approach:

**Phase 1: Opportunity Canvas**
- Problem validation and stakeholder analysis
- Evidence-based opportunity assessment
- Business case development

**Phase 2: Customer Experience Brief** 
- Solution design and user validation
- Requires completed Phase 1
- User research and journey mapping

### Template Philosophy

Templates are designed to:
- Generate documents consumable by downstream LLM agents
- Maintain compatibility with existing JobNimbus Confluence templates
- Provide structured markdown for reliable parsing
- Capture complete context to prevent information loss between phases

## Key Development Patterns

### File Location Priority
The system uses a fallback approach for template files:
1. Try project-local `.claude/resources/` first
2. Fall back to global `$HOME/.claude/resources/`

This allows project customization while maintaining global defaults.

### Confluence Integration
Commands are designed to integrate with Atlassian/Confluence via MCP tools:
- Uses `mcp__atlassian__*` tools for reading/writing Confluence pages
- Handles parent location mapping for proper document hierarchy
- Maintains professional formatting consistency

### Interactive Command Structure
The Business Analyst command (`business-analyst.md`) follows this pattern:
- Persona-based introduction (Alex, Senior BA)
- Setup instructions that run immediately
- Template loading with fallback priority
- Systematic Q&A flow with validation
- Phase dependency enforcement (Phase 2 requires Phase 1)

## Working with This Codebase

### Adding New Commands
1. Create command file in `.claude/commands/dtw/[command-name].md`
2. Add supporting resources to `.claude/resources/dtw/[command-name]/`
3. Test locally by copying to `~/.claude/` directory
4. Update installer if new directory structure is needed

### Template Development
- Follow the existing template structure in `templates/` directory
- Maintain markdown formatting for LLM compatibility
- Include handoff sections for next persona in pipeline
- Test integration with Confluence MCP tools

### Installer Modifications
- Modify `bin/install.js` for new directory structures
- Test cross-platform compatibility (Windows/macOS/Linux)
- Ensure clean uninstall removes all installed files
- Update repository references if forking/renaming

## Quality Assurance

### Before Committing
- Test installation/uninstallation process
- Verify template files load correctly in Claude Code
- Ensure Confluence integration works (if available)
- Test command execution flow end-to-end

### Release Process
1. Update version in `package.json`
2. Test npm installation process
3. Verify GitHub API endpoints work for installer
4. Test command functionality in clean Claude Code environment

## Integration Notes

### Confluence/Jira Integration
Commands use MCP Atlassian tools for:
- Reading existing documents
- Creating new pages with proper hierarchy
- Maintaining document relationships
- Professional template formatting

### Future Pipeline Integration
Templates are designed for eventual integration with:
- Product Manager commands (Phase 4: Requirements & GTM)
- Engineering Manager commands (Phase 3: Technical Feasibility) 
- Developer task generation from completed analysis