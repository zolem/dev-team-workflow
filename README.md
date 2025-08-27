# JN LLM Workflow System

A simplified workflow system inspired by the BMAD method for structured project delivery using AI personas within Claude Code or Cursor.

## Overview

This system provides six specialized AI personas with specific methodologies to guide projects from concept to implementation. Each persona has structured prompts and workflows that integrate with Atlassian tools (Jira/Confluence).

## Personas & Workflows

1. **Business Analyst** - Requirements elicitation using structured interview methodology
2. **Product Manager** - PRD generation using templated approach  
3. **Architect** - Technical documentation using system design patterns
4. **Engineering/Project Manager** - Task breakdown into 1-3 day implementable units
5. **QA** - Test planning with comprehensive edge case analysis
6. **Developer** - Implementation following structured development patterns

## Integration Features

- **Atlassian MCP Integration**: Automatic creation of Jira initiatives → epics → stories
- **Confluence Documentation**: All artifacts stored in Confluence with proper Jira references
- **Traceability**: Complete linkage from requirements to implementation

## Usage

Each persona folder contains:
- `prompt.md` - Core persona prompt for Claude Code/Cursor
- `methodology.md` - Specific methodology and approach
- `templates/` - Document templates for outputs
- `examples/` - Sample workflows and outputs

## Workflow Types

### Greenfield Projects
Complete end-to-end project creation from initial concept

### Brownfield Features  
Feature additions to existing applications with impact analysis

## Getting Started

1. Choose your workflow type (greenfield/brownfield)
2. Start with the Business Analyst persona
3. Follow the sequential workflow through each persona
4. Use Atlassian integration to create trackable work items

See `workflows/` directory for detailed step-by-step guides.