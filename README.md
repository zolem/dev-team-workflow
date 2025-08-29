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

### /dtw product-manager
Interactive guided session with Jordan, your Senior Product Manager, for detailed requirements definition and go-to-market planning.

**Features:**
- **Requirements Planning:** Detailed iteration planning with in/out scope definition
- **GTM Strategy:** Comprehensive launch planning with phased rollout approach
- **Risk Assessment:** RAID analysis and pre-mortem planning
- **Stakeholder Management:** RACI matrix and influence mapping
- **Methodologies:** MoSCoW prioritization, RICE scoring, User Story Mapping, Kano Model
- **Pipeline Integration:** Requires completed BA phases, prepares handoff for Architect

## 🗂️ Project Structure

```
.claude/
├── commands/
│   └── dtw/
│       ├── business-analyst.md     # Business analyst command
│       └── product-manager.md      # Product manager command
└── resources/
    └── dtw/
        ├── business-analyst/
        │   ├── brainstorming-techniques.md
        │   └── templates/
        │       ├── opportunity-canvas-template.md
        │       └── customer-experience-brief-template.md
        └── product-manager/
            ├── pm-methodologies.md
            └── templates/
                └── requirements-gtm-template.md
```

## 📦 Installation

The installer creates a clean, namespaced installation in your global Claude config (~/.claude):
- Creates `/dtw business-analyst` and `/dtw product-manager` slash commands
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

Once installed, start with business analysis:

```
/dtw business-analyst
```

Interactive session with Alex for 2-phase business analysis:
- **Phase 1:** Problem validation and opportunity assessment
- **Phase 2:** Solution design and customer validation

Then proceed to product management:

```
/dtw product-manager
```

Interactive session with Jordan for requirements and go-to-market planning:
- Reads your completed BA documents automatically
- Creates detailed requirements with iteration planning
- Develops comprehensive GTM strategy and risk assessment

**Template Customization:** Commands prioritize project-local templates in `.claude/resources/dtw/` over global defaults.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see LICENSE file for details.