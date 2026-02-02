# AI Playbook 🚀

An interactive 90-day journey for Senior Engineers to master AI-assisted development — from basic prompting to production-ready features.

**[🔗 Live Demo](https://yourusername.github.io/ai-playbook/)**

![Dashboard Preview](preview.png)

## Features

### 📊 Interactive Dashboard
- Track your progress across all phases
- View completion stats and estimated time saved
- Quick access to all sections

### 📋 30-60-90 Day Checklists
- **Days 1-30 (Foundation)**: Basic prompting mastery
- **Days 31-60 (Acceleration)**: Agent workflows
- **Days 61-90 (Mastery)**: Advanced skills & scale

### 💬 Prompt Library
Ready-to-use prompts for:
- Code generation
- Testing
- Code review
- Agent workflows
- Documentation
- Quick one-liners

### 📚 Curated Resources
Links to the best learning resources:
- Prompt engineering guides (DAIR.AI, Anthropic, Microsoft)
- AI coding assistants (Copilot, Cursor, Cody)
- Agentic frameworks (Spec Kit, Agent OS, AGENTS.md)
- MCP (Model Context Protocol) resources
- Prompt collections & Claude skills

### 🧠 Context Engineering Guide
Learn the art of providing context to AI:
- Core strategies (selection, compression, ordering)
- Types of context
- Best practices
- Project setup tips

## Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Playbook"
   git remote add origin https://github.com/yourusername/ai-playbook.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

3. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/ai-playbook/`

## Local Development

Simply open `index.html` in your browser:

```bash
open index.html
# or
python -m http.server 8000
```

## File Structure

```
ai-playbook/
├── index.html          # Main HTML structure
├── styles.css          # Dark theme styling
├── data.js             # Prompts, resources, checklists
├── app.js              # Application logic
├── README.md           # This file
└── docs/               # Additional documentation
    ├── AI-First-Engineering-Roadmap.md
    ├── AI-Skills-Playbook-30-60-90.md
    ├── Executive-Summary-Deck.md
    ├── Implementation-Checklist.md
    └── Prompt-Cheatsheet.md
```

## Progress Persistence

Your progress is automatically saved to localStorage, so it persists across browser sessions. Use the "Reset Progress" button in the sidebar to start fresh.

## Customization

### Adding New Prompts
Edit `data.js` and add to the `PROMPTS_DATA.categories` array:

```javascript
{
    title: "Your Prompt Title",
    description: "Short description",
    preview: "First line of prompt...",
    full: `Full prompt content here`
}
```

### Adding New Resources
Edit `data.js` and add to `RESOURCES_DATA.categories`:

```javascript
{
    title: "Resource Name",
    url: "https://github.com/...",
    description: "Description of the resource",
    tags: ["Tag1", "Tag2"]
}
```

## Featured Resources

### Prompt Engineering
- [DAIR.AI Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)
- [Anthropic Prompt Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)
- [NirDiamant/Prompt_Engineering](https://github.com/NirDiamant/Prompt_Engineering)

### AI Coding Tools
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot)
- [Sourcegraph Awesome Code AI](https://github.com/sourcegraph/awesome-code-ai)
- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules)

### Agentic Development
- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [Agent OS](https://github.com/cline/agent-os)
- [AGENTS.md Specification](https://agents.md)

### MCP (Model Context Protocol)
- [Official MCP Spec](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [MCP Servers](https://github.com/modelcontextprotocol/servers)
- [MCP Documentation](https://modelcontextprotocol.io)

## License

MIT License - feel free to use and modify for your team!

---

Built with ❤️ for AI-first engineering teams
