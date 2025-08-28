# Dev Team Workflow (DTW)

Claude Code commands for business analysis and workflow automation.

## 🚀 Quick Install

```bash
npx dev-team-workflow install
```

## 📋 Available Commands

### /dtw business-analyst
Interactive guided session with Alex, your Senior Business Analyst, for systematic business analysis using a proven 2-phase approach.

**Features:**
- **Phase 1:** Opportunity Canvas (Problem validation & stakeholder analysis)
- **Phase 2:** Customer Experience Brief (Solution design & user validation)  
- Template-driven questioning with built-in phase dependencies
- Confluence/Jira integration with proper parent location handling
- Evidence-based analysis and systematic brainstorming techniques

## 🗂️ Project Structure

```
.claude/
├── commands/
│   └── dtw/
│       └── business-analyst.md     # Business analyst command
└── resources/
    └── dtw/
        └── business-analyst/
            ├── brainstorming-techniques.md
            └── templates/
                ├── opportunity-canvas-template.md
                └── customer-experience-brief-template.md
```

## 📦 Installation

The installer creates a clean, namespaced installation in your global Claude config (~/.claude):
- Creates the `/dtw business-analyst` slash command in the commands directory
- Keeps all support files organized in the resources directory
- Avoids conflicts with other Claude commands
- Provides clean uninstall functionality

```bash
# Install
npx dev-team-workflow install

# Uninstall  
npx dev-team-workflow uninstall

# Help
npx dev-team-workflow help
```

## 🔧 Manual Installation

If the automated installer doesn't work, you can manually copy the files:

1. Copy `.claude/commands/dtw/` directory to your `~/.claude/commands/` directory
2. Copy `.claude/resources/dtw/` directory to your `~/.claude/resources/` directory

## 🎯 Usage

Once installed, use:

```
/dtw business-analyst
```

This will start an interactive session with Alex that guides you through the 2-phase business analysis process:
- **Phase 1:** Problem validation and opportunity assessment
- **Phase 2:** Solution design and customer validation (requires completed Phase 1)

**Template Customization:** The command uses templates from your home folder by default, but will prioritize any custom templates you place in your project's `.claude/resources/dtw/business-analyst/templates/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see LICENSE file for details.