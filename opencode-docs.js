// OpenCode Documentation Content
// Comprehensive documentation for OpenCode AI coding agent

const opencodeDocs = {
    intro: {
        title: "Introduction",
        content: `
            <div class="opencode-page">
                <h1>🤖 OpenCode Documentation</h1>
                <p class="subtitle">Comprehensive guide to using and configuring OpenCode</p>
                
                <div class="opencode-info-box info">
                    <strong>What is OpenCode?</strong>
                    OpenCode is an open-source AI coding agent that runs in your terminal, desktop, or IDE. It reads your codebase, understands your project structure, writes code, runs commands, and learns your patterns.
                </div>
                
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Provider Freedom:</strong> Not locked to a single LLM provider</li>
                    <li><strong>Multi-Provider Support:</strong> Works with 75+ LLM providers out of the box</li>
                    <li><strong>Terminal Interface:</strong> TUI (Terminal User Interface) for interactive use</li>
                    <li><strong>Extensible:</strong> Commands, skills, agents, plugins, and MCP servers</li>
                    <li><strong>Open Source:</strong> 90K+ GitHub stars, active community</li>
                </ul>
                
                <h2>What You'll Learn</h2>
                <p>This documentation covers everything from first installation to production workflows:</p>
                <ol>
                    <li><strong>Getting Started</strong> - Installation, setup, and first run</li>
                    <li><strong>Configuration</strong> - opencode.json, permissions, formatters</li>
                    <li><strong>Core Concepts</strong> - Build/Plan modes, file references, images</li>
                    <li><strong>Daily Workflows</strong> - Asking questions, making changes, session management</li>
                    <li><strong>Extensibility</strong> - Commands, skills, and agents</li>
                    <li><strong>Plugins</strong> - Creating hooks and automation</li>
                    <li><strong>MCP Servers</strong> - External tools and data sources</li>
                    <li><strong>Production Workflows</strong> - Multi-agent code review, PR automation</li>
                </ol>
                
                <h2>Quick Links</h2>
                <ul>
                    <li>Official Documentation: <a href="https://opencode.ai/docs" target="_blank">opencode.ai/docs</a></li>
                    <li>GitHub Repository: <a href="https://github.com/anomalyco/opencode" target="_blank">github.com/anomalyco/opencode</a></li>
                    <li>OpenCode Zen: <a href="https://opencode.ai/zen" target="_blank">opencode.ai/zen</a></li>
                </ul>
            </div>
        `
    },
    
    prerequisites: {
        title: "Prerequisites",
        content: `
            <div class="opencode-page">
                <h1>Prerequisites</h1>
                <p>Before installing OpenCode, you need two things:</p>
                
                <h2>1. Modern Terminal Emulator</h2>
                <p>OpenCode's TUI requires true color and proper Unicode support. Recommended options:</p>
                
                <table>
                    <tr>
                        <th>Terminal</th>
                        <th>Platform</th>
                        <th>Notes</th>
                    </tr>
                    <tr>
                        <td><strong>WezTerm</strong></td>
                        <td>Cross-platform</td>
                        <td>Recommended, feature-rich</td>
                    </tr>
                    <tr>
                        <td><strong>Alacritty</strong></td>
                        <td>Cross-platform</td>
                        <td>Very fast, GPU-accelerated</td>
                    </tr>
                    <tr>
                        <td><strong>Ghostty</strong></td>
                        <td>Linux, macOS</td>
                        <td>Personal favorite</td>
                    </tr>
                    <tr>
                        <td><strong>Kitty</strong></td>
                        <td>Linux, macOS</td>
                        <td>Feature-rich, customizable</td>
                    </tr>
                </table>
                
                <div class="opencode-info-box tip">
                    <strong>Note:</strong> Default macOS Terminal.app works but you'll lose some visual polish.
                </div>
                
                <h2>2. API Keys</h2>
                <p>You'll need API keys for your chosen LLM provider(s). Have them ready before installation. At minimum, grab a key from one provider.</p>
                
                <h3>Common Provider Options:</h3>
                <ul>
                    <li><strong>Synthetic</strong> - Easiest option, flat-rate subscription, open-source models</li>
                    <li><strong>OpenCode Zen</strong> - Curated models, pay-as-you-go</li>
                    <li><strong>GitHub Copilot</strong> - Officially supported</li>
                    <li><strong>OpenAI</strong> - ChatGPT Plus/Pro subscription</li>
                    <li><strong>OpenRouter</strong> - Access to many models through single key</li>
                </ul>
            </div>
        `
    },
    
    "install-quick": {
        title: "Quick Install",
        content: `
            <div class="opencode-page">
                <h1>Quick Install</h1>
                <p>The easiest way to install OpenCode:</p>
                
                <pre><code>curl -fsSL https://opencode.ai/install | bash</code></pre>
                
                <p>This one-liner downloads and installs OpenCode on macOS, Linux, or Windows (via WSL).</p>
                
                <h2>Verification</h2>
                <p>After installation, verify it worked:</p>
                
                <pre><code>opencode --version</code></pre>
                
                <p>You should see something like <code>opencode v1.x.x</code>.</p>
                
                <div class="opencode-info-box tip">
                    <strong>Next Steps:</strong> After installation, navigate to your project directory and run <code>opencode</code> to launch the TUI.
                </div>
            </div>
        `
    },
    
    "install-homebrew": {
        title: "Homebrew Installation",
        content: `
            <div class="opencode-page">
                <h1>Homebrew Installation</h1>
                <p>For macOS and Linux users who prefer Homebrew:</p>
                
                <pre><code>brew install anomalyco/tap/opencode</code></pre>
                
                <h2>Updating</h2>
                <p>To update OpenCode via Homebrew:</p>
                
                <pre><code>brew update
brew upgrade opencode</code></pre>
                
                <h2>Uninstalling</h2>
                <p>If you need to remove OpenCode:</p>
                
                <pre><code>brew uninstall opencode</code></pre>
            </div>
        `
    },
    
    "install-npm": {
        title: "npm/Bun/pnpm Installation",
        content: `
            <div class="opencode-page">
                <h1>Node.js Package Managers</h1>
                <p>OpenCode is available via multiple Node.js package managers:</p>
                
                <h2>npm</h2>
                <pre><code>npm install -g opencode-ai</code></pre>
                
                <h2>Bun</h2>
                <pre><code>bun install -g opencode-ai</code></pre>
                
                <h2>pnpm</h2>
                <pre><code>pnpm install -g opencode-ai</code></pre>
                
                <div class="opencode-info-box warning">
                    <strong>Note:</strong> The package name is <code>opencode-ai</code>, not <code>opencode</code>.
                </div>
                
                <h2>Updating</h2>
                <pre><code>npm update -g opencode-ai</code></pre>
            </div>
        `
    },
    
    "install-windows": {
        title: "Windows Installation",
        content: `
            <div class="opencode-page">
                <h1>Windows Installation</h1>
                <p>OpenCode supports Windows through multiple package managers:</p>
                
                <h2>Chocolatey</h2>
                <pre><code>choco install opencode</code></pre>
                
                <h2>Scoop</h2>
                <pre><code>scoop install opencode</code></pre>
                
                <h2>npm (Recommended for Node.js developers)</h2>
                <pre><code>npm install -g opencode-ai</code></pre>
                
                <h2>WSL (Windows Subsystem for Linux)</h2>
                <p>For the best experience on Windows, install OpenCode inside WSL:</p>
                <ol>
                    <li>Install WSL2 with your preferred Linux distribution</li>
                    <li>Open a WSL terminal</li>
                    <li>Follow the Linux installation instructions</li>
                </ol>
            </div>
        `
    },
    
    "first-run": {
        title: "First Run & Setup",
        content: `
            <div class="opencode-page">
                <h1>First Run & Setup</h1>
                <p>After installation, it's time to connect a provider and start using OpenCode.</p>
                
                <h2>Launching OpenCode</h2>
                <p>Navigate to your project directory and launch:</p>
                
                <pre><code>cd ~/projects/my-app
opencode</code></pre>
                
                <p>You'll see the TUI (Terminal User Interface) load. Your first step is connecting a provider.</p>
                
                <h2>Connecting a Provider</h2>
                <p>Type:</p>
                
                <pre><code>/connect</code></pre>
                
                <p>This opens an interactive menu. Select your provider and follow the authentication flow.</p>
                
                <h3>Common Provider Setup:</h3>
                
                <p><strong>GitHub Copilot:</strong></p>
                <ol>
                    <li>Select "GitHub Copilot"</li>
                    <li>Accept browser OAuth2 authentication</li>
                    <li>Enter the code shown in your terminal</li>
                    <li>Authorize the connection</li>
                </ol>
                
                <p><strong>ChatGPT Plus/Pro:</strong></p>
                <ol>
                    <li>Select "OpenAI (ChatGPT Plus/Pro or API key)"</li>
                    <li>Accept browser OAuth2 authentication</li>
                    <li>Authorize the connection</li>
                </ol>
                
                <div class="opencode-info-box tip">
                    <strong>Pro Tip:</strong> Run <code>/models</code> after connecting to see available models for your provider.
                </div>
            </div>
        `
    },
    
    "init": {
        title: "Project Initialization",
        content: `
            <div class="opencode-page">
                <h1>Project Initialization</h1>
                <p>With a provider connected, initialize OpenCode for your project.</p>
                
                <h2>The /init Command</h2>
                <pre><code>/init</code></pre>
                
                <p>This scans your codebase and creates an <code>AGENTS.md</code> file in your project root. Think of this as your project's instruction manual for the AI.</p>
                
                <h2>What AGENTS.md Captures</h2>
                <ul>
                    <li>What language(s) you're using</li>
                    <li>Your project structure</li>
                    <li>Coding patterns and conventions</li>
                    <li>Build and test commands</li>
                </ul>
                
                <h2>Example AGENTS.md</h2>
                <pre><code># Project: Payment Processing API

This is a TypeScript monorepo using Bun workspaces.

## Structure
- \`packages/core/\` - Shared business logic
- \`packages/api/\` - Express API handlers
- \`packages/workers/\` - Background job processors

## Conventions
- Use Zod for all input validation
- All database queries go through the repository pattern
- Prefer composition over inheritance
- Test files live next to source files (*filename*.test.ts)

## Commands
- \`bun test\` - Run all tests
- \`bun run lint\` - Run ESLint and Prettier
- \`bun run build\` - TypeScript compilation</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Important:</strong> The more specific your AGENTS.md, the better OpenCode performs. Revisit it weekly to add patterns you want it to follow.
                </div>
            </div>
        `
    },
    
    "config-schema": {
        title: "Schema & Structure",
        content: `
            <div class="opencode-page">
                <h1>opencode.json Schema & Structure</h1>
                <p>Configuration lives in <code>opencode.json</code> in your project root.</p>
                
                <h2>Minimal Example</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "model": "provider/model-id",
  "theme": "opencode",
  "autoupdate": true
}</code></pre>
                
                <p>The schema provides autocomplete in any editor that supports JSON schemas.</p>
                
                <h2>JSONC Support</h2>
                <p>You can use <code>opencode.jsonc</code> (note the .jsonc extension) to add comments:</p>
                
                <pre><code>{
  // Use the official schema for autocomplete
  "$schema": "https://opencode.ai/config.json",
  
  // Primary model for most operations
  "model": "provider/model-id",
  
  // Theme for the TUI
  "theme": "opencode",
  
  // Auto-update to latest version
  "autoupdate": true
}</code></pre>
            </div>
        `
    },
    
    "config-precedence": {
        title: "Config Locations & Precedence",
        content: `
            <div class="opencode-page">
                <h1>Configuration Locations & Precedence</h1>
                <p>OpenCode loads configuration from multiple places, merged in this order (later overrides earlier):</p>
                
                <ol>
                    <li><strong>Remote config</strong> (from <code>.well-known/opencode</code>) - Organizational defaults</li>
                    <li><strong>Global config</strong> (<code>~/.config/opencode/opencode.json</code>) - Your personal preferences</li>
                    <li><strong>Project config</strong> (<code>opencode.json</code> in project root) - Project-specific settings</li>
                </ol>
                
                <div class="opencode-info-box info">
                    <strong>Why this matters:</strong> Your company can set baseline configurations that individual developers can override for personal preferences, which projects can further customize.
                </div>
                
                <h2>Remote Config</h2>
                <p>Place a config file at <code>.well-known/opencode</code> in your organization's domain:</p>
                
                <pre><code>https://your-company.com/.well-known/opencode</code></pre>
                
                <h2>Global Config Location</h2>
                <ul>
                    <li><strong>macOS/Linux:</strong> <code>~/.config/opencode/opencode.json</code></li>
                    <li><strong>Windows:</strong> <code>%APPDATA%\opencode\opencode.json</code></li>
                </ul>
            </div>
        `
    },
    
    "config-themes": {
        title: "Themes",
        content: `
            <div class="opencode-page">
                <h1>Themes</h1>
                <p>OpenCode supports different visual themes for the TUI.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "theme": "opencode"
}</code></pre>
                
                <h2>Available Themes</h2>
                <table>
                    <tr>
                        <th>Theme</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>opencode</code></td>
                        <td>Default theme, modern and clean</td>
                    </tr>
                </table>
                
                <div class="opencode-info-box tip">
                    <strong>Custom Themes:</strong> Advanced users can create custom themes by modifying the terminal colors and OpenCode's color configuration.
                </div>
            </div>
        `
    },
    
    "config-autoupdate": {
        title: "Auto-update",
        content: `
            <div class="opencode-page">
                <h1>Auto-update</h1>
                <p>Keep OpenCode up-to-date automatically.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "autoupdate": true
}</code></pre>
                
                <h2>Options</h2>
                <table>
                    <tr>
                        <th>Value</th>
                        <th>Behavior</th>
                    </tr>
                    <tr>
                        <td><code>true</code></td>
                        <td>Automatically check and install updates</td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td>Manual updates only</td>
                    </tr>
                </table>
                
                <h2>Manual Update</h2>
                <p>To update manually, run your installation method again:</p>
                <pre><code>curl -fsSL https://opencode.ai/install | bash</code></pre>
            </div>
        `
    },
    
    "perm-edit": {
        title: "Edit Permissions",
        content: `
            <div class="opencode-page">
                <h1>Edit Permissions</h1>
                <p>Control whether OpenCode can edit files without asking.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "edit": "ask"
  }
}</code></pre>
                
                <h2>Permission Levels</h2>
                <table>
                    <tr>
                        <th>Level</th>
                        <th>Behavior</th>
                    </tr>
                    <tr>
                        <td><code>"allow"</code></td>
                        <td>No approval needed - files are edited automatically</td>
                    </tr>
                    <tr>
                        <td><code>"ask"</code></td>
                        <td>Prompt before each file edit</td>
                    </tr>
                    <tr>
                        <td><code>"deny"</code></td>
                        <td>Block all file edits</td>
                    </tr>
                </table>
                
                <div class="opencode-info-box warning">
                    <strong>Security Tip:</strong> Use <code>"ask"</code> mode when working on critical systems or when you're learning OpenCode's behavior.
                </div>
            </div>
        `
    },
    
    "perm-bash": {
        title: "Bash Permissions",
        content: `
            <div class="opencode-page">
                <h1>Bash Permissions</h1>
                <p>Control whether OpenCode can run shell commands.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": "ask"
  }
}</code></pre>
                
                <h2>Permission Levels</h2>
                <table>
                    <tr>
                        <th>Level</th>
                        <th>Behavior</th>
                    </tr>
                    <tr>
                        <td><code>"allow"</code></td>
                        <td>Run commands without approval</td>
                    </tr>
                    <tr>
                        <td><code>"ask"</code></td>
                        <td>Prompt before running commands</td>
                    </tr>
                    <tr>
                        <td><code>"deny"</code></td>
                        <td>Block all command execution</td>
                    </tr>
                </table>
            </div>
        `
    },
    
    "perm-per-cmd": {
        title: "Per-Command Permissions",
        content: `
            <div class="opencode-page">
                <h1>Per-Command Permissions</h1>
                <p>Set different permissions for specific bash commands.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow",
      "git diff": "allow",
      "npm test": "allow",
      "rm -rf *": "deny"
    }
  }
}</code></pre>
                
                <h2>How It Works</h2>
                <ul>
                    <li>The <code>*</code> wildcard sets the default behavior</li>
                    <li>Specific commands override the wildcard</li>
                    <li>The last matching pattern wins</li>
                    <li>Put your <code>*</code> wildcard first</li>
                </ul>
                
                <h2>Common Safe Commands</h2>
                <pre><code>{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow",
      "git diff": "allow",
      "git log": "allow",
      "ls": "allow",
      "cat": "allow",
      "npm test": "allow",
      "npm run lint": "allow",
      "rm -rf *": "deny",
      "rm -rf /": "deny"
    }
  }
}</code></pre>
            </div>
        `
    },
    
    formatters: {
        title: "Formatters",
        content: `
            <div class="opencode-page">
                <h1>Formatters</h1>
                <p>OpenCode can auto-format code after writing it.</p>
                
                <h2>Built-in Formatters</h2>
                <h3>Prettier</h3>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {
    "prettier": {
      "extensions": [".js", ".ts", ".jsx", ".tsx", ".json"]
    }
  }
}</code></pre>
                
                <h3>Biome</h3>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {
    "biome": {
      "extensions": [".js", ".ts", ".jsx", ".tsx", ".json"]
    }
  }
}</code></pre>
                
                <h2>Custom Formatters</h2>
                <p>Add any CLI formatter:</p>
                
                <pre><code>{
  "formatter": {
    "black": {
      "command": ["black", "$FILE"],
      "extensions": [".py"]
    }
  }
}</code></pre>
                
                <p>The <code>$FILE</code> placeholder gets replaced with the file path.</p>
            </div>
        `
    },
    
    "custom-instructions": {
        title: "Custom Instructions",
        content: `
            <div class="opencode-page">
                <h1>Custom Instructions</h1>
                <p>Beyond AGENTS.md, you can point to additional instruction files.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "instructions": [
    "CONTRIBUTING.md",
    "docs/coding-guidelines.md",
    ".cursor/rules/*.md"
  ]
}</code></pre>
                
                <h2>Supported Patterns</h2>
                <ul>
                    <li><strong>Local files:</strong> <code>CONTRIBUTING.md</code></li>
                    <li><strong>Glob patterns:</strong> <code>.cursor/rules/*.md</code></li>
                    <li><strong>Remote URLs:</strong> <code>https://raw.githubusercontent.com/...</code></li>
                </ul>
                
                <h2>Remote Instructions</h2>
                <pre><code>{
  "instructions": [
    "https://raw.githubusercontent.com/my-org/shared-rules/main/style.md"
  ]
}</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Use Case:</strong> Remote instructions let organizations share coding standards across all their projects.
                </div>
            </div>
        `
    },
    
    modes: {
        title: "Build & Plan Modes",
        content: `
            <div class="opencode-page">
                <h1>Build & Plan Modes</h1>
                <p>OpenCode ships with two primary agents: <strong>Build</strong> and <strong>Plan</strong>.</p>
                
                <h2>Toggling Between Modes</h2>
                <p>Press the <strong>Tab</strong> key to toggle between modes.</p>
                
                <h2>Build Mode (🛠️)</h2>
                <ul>
                    <li>Has <strong>full access</strong></li>
                    <li>Can read files, write code, run commands</li>
                    <li>Makes changes to your codebase</li>
                    <li>Default working mode</li>
                </ul>
                
                <h2>Plan Mode (🗺️)</h2>
                <ul>
                    <li>Is <strong>restricted</strong></li>
                    <li>Can read and analyze only</li>
                    <li>Cannot modify anything</li>
                    <li>Use this when you want suggestions without changes</li>
                </ul>
                
                <h2>Recommended Workflow</h2>
                <ol>
                    <li>Start a feature in <strong>Plan mode</strong> - describe what you want</li>
                    <li>Ask OpenCode to outline an approach</li>
                    <li>Review the plan, ask clarifying questions</li>
                    <li>Switch to <strong>Build mode</strong> and say "Go ahead and implement this"</li>
                </ol>
                
                <div class="opencode-info-box tip">
                    <strong>Why this matters:</strong> This two-step pattern catches misunderstandings before they become wrong code.
                </div>
            </div>
        `
    },
    
    "file-refs": {
        title: "File References (@)",
        content: `
            <div class="opencode-page">
                <h1>File References (@)</h1>
                <p>The <code>@</code> symbol tells OpenCode to focus on specific files.</p>
                
                <h2>Basic Usage</h2>
                <pre><code>How is authentication handled in @packages/api/src/auth/index.ts?</code></pre>
                
                <h2>Broader Questions</h2>
                <p>You can also ask about your codebase in general:</p>
                
                <ul>
                    <li><code>Where are errors logged in this project?</code></li>
                    <li><code>Show me how API routes are structured.</code></li>
                    <li><code>What database migrations exist?</code></li>
                </ul>
                
                <h2>Onboarding to Unfamiliar Codebases</h2>
                <p>This feature is incredibly useful when onboarding to unfamiliar codebases. Instead of grepping and reading files manually, just ask OpenCode.</p>
                
                <div class="opencode-info-box tip">
                    <strong>Pro Tip:</strong> Use <code>@</code> references when you want to ensure OpenCode considers a specific file in its response.
                </div>
            </div>
        `
    },
    
    images: {
        title: "Images & Visual Context",
        content: `
            <div class="opencode-page">
                <h1>Images & Visual Context</h1>
                <p>You can drag-and-drop images into the terminal. OpenCode will scan them and include them in context.</p>
                
                <h2>Use Cases</h2>
                <ul>
                    <li><strong>UI Mockups:</strong> "Build a component that looks like this image"</li>
                    <li><strong>Error Screenshots:</strong> "I'm seeing this error, what's wrong?"</li>
                    <li><strong>Diagrams:</strong> "Implement the architecture shown here"</li>
                </ul>
                
                <h2>How It Works</h2>
                <ol>
                    <li>Drag an image file into your terminal window</li>
                    <li>OpenCode detects the image and processes it</li>
                    <li>The image content becomes part of the conversation context</li>
                    <li>OpenCode can reference visual elements in its responses</li>
                </ol>
                
                <div class="opencode-info-box tip">
                    <strong>Best Practice:</strong> Clear, high-resolution images work best. Screenshots with adequate contrast help OpenCode understand UI elements better.
                </div>
            </div>
        `
    },
    
    codebase: {
        title: "Codebase Understanding",
        content: `
            <div class="opencode-page">
                <h1>Codebase Understanding</h1>
                <p>OpenCode automatically understands your project structure and codebase.</p>
                
                <h2>How It Works</h2>
                <ul>
                    <li>Reads <code>AGENTS.md</code> for project context</li>
                    <li>Analyzes file structure and dependencies</li>
                    <li>Understands common patterns and conventions</li>
                    <li>Learns from your coding style over time</li>
                </ul>
                
                <h2>Questions You Can Ask</h2>
                <ul>
                    <li><code>How does the authentication system work?</code></li>
                    <li><code>What database models exist?</code></li>
                    <li><code>Where are the API routes defined?</code></li>
                    <li><code>What's the testing strategy?</code></li>
                </ul>
                
                <div class="opencode-info-box tip">
                    <strong>AGENTS.md is Critical:</strong> The quality of OpenCode's understanding depends heavily on how well your AGENTS.md is written. Keep it updated!
                </div>
            </div>
        `
    },
    
    "asking-questions": {
        title: "Asking Questions",
        content: `
            <div class="opencode-page">
                <h1>Asking Questions</h1>
                <p>OpenCode excels at answering questions about your codebase.</p>
                
                <h2>Effective Question Patterns</h2>
                <ul>
                    <li><strong>Specific:</strong> "How does the login flow work in @src/auth?"</li>
                    <li><strong>Broad:</strong> "What testing framework does this project use?"</li>
                    <li><strong>Comparative:</strong> "What's the difference between these two functions?"</li>
                    <li><strong>Debugging:</strong> "Why is this test failing?"</li>
                </ul>
                
                <h2>Context is Key</h2>
                <p>The more context you provide, the better the answer:</p>
                
                <pre><code>Bad: "Fix this"
Good: "The user login is failing with a 500 error. Here's the error trace and the auth middleware code @src/middleware/auth.ts"</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Remember:</strong> OpenCode can see your entire codebase, but it helps to point it to the relevant files with <code>@</code> references.
                </div>
            </div>
        `
    },
    
    "making-changes": {
        title: "Making Changes",
        content: `
            <div class="opencode-page">
                <h1>Making Changes</h1>
                <p>OpenCode can make changes to your codebase in multiple ways.</p>
                
                <h2>Simple Changes</h2>
                <p>For straightforward changes, just describe what you want:</p>
                
                <pre><code>Add a health check endpoint at GET /health that returns { status: "ok" }</code></pre>
                
                <h2>Complex Features</h2>
                <p>For complex features, use Plan mode first:</p>
                
                <pre><code>[Tab to Plan mode]

I need to add soft-delete functionality to notes:
- Flag notes as deleted instead of removing them
- Create a "Recently Deleted" screen
- Allow restore or permanent delete from that screen
How would you approach this?</code></pre>
                
                <p>Review the plan, then:</p>
                
                <pre><code>[Tab to Build mode]

Looks good. Go ahead.</code></pre>
                
                <div class="opencode-info-box warning">
                    <strong>Always Review:</strong> Even in Build mode, review changes before accepting them. Use permission settings to control what OpenCode can do automatically.
                </div>
            </div>
        `
    },
    
    "undo-redo": {
        title: "Undo & Redo",
        content: `
            <div class="opencode-page">
                <h1>Undo & Redo</h1>
                <p>Made a mistake? Use the undo and redo commands.</p>
                
                <h2>Undo Changes</h2>
                <pre><code>/undo</code></pre>
                
                <p>This reverts changes from the last response and shows your original prompt again, so you can rephrase and try again.</p>
                
                <h2>Redo Changes</h2>
                <pre><code>/redo</code></pre>
                
                <p>Brings back the changes you undid.</p>
                
                <div class="opencode-info-box tip">
                    <strong>Workflow:</strong> Experiment freely with the undo/redo cycle. It's better to try something and undo than to hesitate.
                </div>
            </div>
        `
    },
    
    sharing: {
        title: "Sharing Conversations",
        content: `
            <div class="opencode-page">
                <h1>Sharing Conversations</h1>
                <p>The <code>/share</code> command creates a shareable link to your current conversation.</p>
                
                <h2>Usage</h2>
                <pre><code>/share</code></pre>
                
                <p>This copies a URL to your clipboard.</p>
                
                <h2>Use Cases</h2>
                <ul>
                    <li>Getting help from teammates</li>
                    <li>Creating documentation</li>
                    <li>Showing others how you solved a problem</li>
                    <li>Sharing interesting solutions</li>
                </ul>
                
                <div class="opencode-info-box tip">
                    <strong>Privacy:</strong> Be careful what you share. The link contains your conversation history.
                </div>
            </div>
        `
    },
    
    "sessions-resume": {
        title: "Resuming Sessions",
        content: `
            <div class="opencode-page">
                <h1>Resuming Sessions</h1>
                <p>Closed OpenCode and want to pick up where you left off? Use the sessions command.</p>
                
                <h2>List Sessions</h2>
                <pre><code>/sessions</code></pre>
                
                <p>Aliases:</p>
                <ul>
                    <li><code>/resume</code></li>
                    <li><code>/continue</code></li>
                </ul>
                
                <h2>Keyboard Shortcut</h2>
                <pre><code>Ctrl+X L</code></pre>
                
                <p>This opens a session picker showing your recent conversations. Select one to resume it with full context intact.</p>
            </div>
        `
    },
    
    "sessions-cli": {
        title: "Command Line Session Control",
        content: `
            <div class="opencode-page">
                <h1>Command Line Session Control</h1>
                <p>You can control sessions from the command line without opening the TUI.</p>
                
                <h2>Continue Last Session</h2>
                <pre><code># Continue the most recent session
opencode --continue

# Or use the short flag
opencode -c</code></pre>
                
                <h2>Specific Session ID</h2>
                <p>If you know the specific session ID (from <code>opencode session list</code>):</p>
                
                <pre><code>opencode --session ses_abc123</code></pre>
                
                <h2>List All Sessions</h2>
                <pre><code>opencode session list</code></pre>
            </div>
        `
    },
    
    "sessions-naming": {
        title: "Naming Sessions",
        content: `
            <div class="opencode-page">
                <h1>Naming Sessions</h1>
                <p>By default, OpenCode auto-generates session titles from your first prompt.</p>
                
                <h2>Named Sessions</h2>
                <p>For sessions you'll want to find later, give them meaningful names upfront.</p>
                
                <h2>Using --title Flag</h2>
                <p>When using non-interactive mode with <code>opencode run</code>:</p>
                
                <pre><code>opencode run --title "Payment API refactor" "Refactor the payment processing module to use Stripe"</code></pre>
                
                <p>The <code>--title</code> flag requires a message argument, as it's designed for scripting and automation.</p>
                
                <div class="opencode-info-box tip">
                    <strong>Benefit:</strong> Named sessions are much easier to find when you run <code>/sessions</code> later — instead of scrolling through auto-generated titles like "Fix the bug in..." and "Update the function that...", you'll see exactly what each session was about.
                </div>
            </div>
        `
    },
    
    "prompt-tips": {
        title: "Prompt Engineering Tips",
        content: `
            <div class="opencode-page">
                <h1>Prompt Engineering Tips</h1>
                <p>How to get the best results from OpenCode.</p>
                
                <h2>Be Specific About Constraints</h2>
                <pre><code>Add input validation to the signup form.
Use Zod for schemas.
Show inline error messages.
Don't modify the submit button styling.</code></pre>
                
                <h2>Reference Files Explicitly</h2>
                <pre><code>Refactor @src/utils/date.ts to use date-fns instead of moment.
Keep the same function signatures.</code></pre>
                
                <h2>Ask for Explanations</h2>
                <pre><code>Why is this API route returning a 500 error?
Walk me through the request flow.</code></pre>
                
                <h2>Use Plan Mode for Complex Tasks</h2>
                <pre><code>[Tab to Plan mode]

I want to implement a caching layer for the user service.
Outline your approach before making any changes.</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Golden Rule:</strong> The more context and constraints you provide, the better the result. Think of OpenCode as a junior developer who needs clear instructions.
                </div>
            </div>
        `
    },
    
    "commands-overview": {
        title: "What Are Commands",
        content: `
            <div class="opencode-page">
                <h1>What Are Commands</h1>
                <p>Commands are predefined prompts you trigger with <code>/</code>.</p>
                
                <div class="opencode-info-box info">
                    <strong>One-sentence summary:</strong> Commands are <em>what to do</em>. Skills are <em>how to do it</em>. Agents are <em>who does it</em>.
                </div>
                
                <h2>Why Use Commands</h2>
                <ul>
                    <li>Running tests with specific flags</li>
                    <li>Generating boilerplate</li>
                    <li>Executing multi-step workflows</li>
                    <li>Any prompt you find yourself typing more than twice</li>
                </ul>
                
                <h2>Built-in Commands</h2>
                <ul>
                    <li><code>/connect</code> - Connect to a provider</li>
                    <li><code>/init</code> - Initialize project</li>
                    <li><code>/undo</code> - Undo last changes</li>
                    <li><code>/redo</code> - Redo undone changes</li>
                    <li><code>/share</code> - Share conversation</li>
                    <li><code>/sessions</code> - Resume sessions</li>
                    <li><code>/models</code> - List available models</li>
                </ul>
            </div>
        `
    },
    
    "commands-creating": {
        title: "Creating Commands",
        content: `
            <div class="opencode-page">
                <h1>Creating Commands</h1>
                <p>Create custom commands for repetitive tasks.</p>
                
                <h2>Command File Location</h2>
                <p>Create <code>.opencode/commands/test.md</code>:</p>
                
                <pre><code>---
description: Run tests with coverage
agent: build
---

Run the full test suite with coverage report.
Focus on failing tests and suggest fixes.</code></pre>
                
                <p>Now type <code>/test</code> to execute it.</p>
                
                <h2>Frontmatter Options</h2>
                <table>
                    <tr>
                        <th>Field</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>description</code></td>
                        <td>What shows in the command list</td>
                    </tr>
                    <tr>
                        <td><code>agent</code></td>
                        <td>Which agent to use (build, plan, or custom)</td>
                    </tr>
                </table>
            </div>
        `
    },
    
    "commands-args": {
        title: "Arguments & Placeholders",
        content: `
            <div class="opencode-page">
                <h1>Arguments & Placeholders</h1>
                <p>Commands can accept arguments for dynamic behavior.</p>
                
                <h2>Using $ARGUMENTS</h2>
                <pre><code>---
description: Create a new component
---

Create a new React component named $ARGUMENTS with TypeScript.
Include proper typing and basic structure.</code></pre>
                
                <p>Run as: <code>/component Button</code></p>
                
                <h2>Positional Placeholders</h2>
                <pre><code>---
description: Add API endpoint
---

Create a new endpoint at $1 that handles $2 requests.
Include validation and error handling.</code></pre>
                
                <p>Run as: <code>/endpoint /api/users POST</code></p>
            </div>
        `
    },
    
    "commands-shell": {
        title: "Shell Output Integration",
        content: `
            <div class="opencode-page">
                <h1>Shell Output Integration</h1>
                <p>Include live command output in your commands.</p>
                
                <h2>Using !\`command\`</h2>
                <pre><code>---
description: Review recent changes
---

Recent git commits:
!\`git log --oneline -10\`

Review these changes and suggest improvements.</code></pre>
                
                <h2>Dynamic Context</h2>
                <p>This brings live shell output into the prompt context. Useful for:</p>
                <ul>
                    <li>Reviewing recent commits</li>
                    <li>Checking test output</li>
                    <li>Including git diff in review commands</li>
                </ul>
                
                <h2>File References</h2>
                <pre><code>---
description: Review this file
---

Review the code in @src/components/Button.tsx.
Check for performance issues.</code></pre>
            </div>
        `
    },
    
    "skills-overview": {
        title: "What Are Skills",
        content: `
            <div class="opencode-page">
                <h1>What Are Skills</h1>
                <p>Skills are instruction files that teach OpenCode how to do something.</p>
                
                <div class="opencode-info-box info">
                    <strong>One-sentence summary:</strong> Commands are <em>what to do</em>. Skills are <em>how to do it</em>. Agents are <em>who does it</em>.
                </div>
                
                <h2>When to Use Skills</h2>
                <ul>
                    <li>Documenting coding standards</li>
                    <li>Capturing domain expertise</li>
                    <li>Defining workflows for specific tasks</li>
                    <li>Anything you'd write in a team wiki</li>
                </ul>
                
                <h2>Skills vs Commands</h2>
                <table>
                    <tr>
                        <th>Commands</th>
                        <th>Skills</th>
                    </tr>
                    <tr>
                        <td>Execute immediately</td>
                        <td>Inform and guide</td>
                    </tr>
                    <tr>
                        <td>Triggered with <code>/</code></td>
                        <td>Loaded on-demand</td>
                    </tr>
                    <tr>
                        <td>One-time action</td>
                        <td>Reusable knowledge</td>
                    </tr>
                </table>
            </div>
        `
    },
    
    "skills-creating": {
        title: "Creating Skills",
        content: `
            <div class="opencode-page">
                <h1>Creating Skills</h1>
                <p>Skills use the Agent Skills open standard and work across multiple tools.</p>
                
                <h2>Skill File Structure</h2>
                <p>Create <code>.opencode/skills/git-release/SKILL.md</code>:</p>
                
                <pre><code>---
name: git-release
description: Create consistent releases and changelogs
---

## What I do
- Draft release notes from merged PRs
- Propose a version bump
- Provide a copy-pasteable \`gh release create\` command

## When to use me
Use this when preparing a tagged release.
Ask clarifying questions if versioning scheme is unclear.

## Process
1. Run \`git log --oneline $(git describe --tags --abbrev=0)..HEAD\`
2. Categorise commits (features, fixes, chores)
3. Determine version bump (major/minor/patch)
4. Generate changelog entry
5. Output the release command</code></pre>
                
                <h2>Required Frontmatter</h2>
                <ul>
                    <li><code>name</code> - Unique identifier for the skill</li>
                    <li><code>description</code> - What shows in the skill list</li>
                </ul>
                
                <div class="opencode-info-box tip">
                    <strong>Skill Structure:</strong> Use clear sections like "What I do", "When to use me", and "Process" to help the AI understand the skill's purpose.
                </div>
            </div>
        `
    },
    
    "skills-loading": {
        title: "Loading Skills",
        content: `
            <div class="opencode-page">
                <h1>Loading Skills</h1>
                <p>Skills can be loaded automatically or manually.</p>
                
                <h2>Automatic Loading</h2>
                <p>OpenCode shows available skills in its <code>skill</code> tool. Agents see this list and load relevant skills automatically based on context.</p>
                
                <h2>Manual Loading</h2>
                <p>You can also load skills manually:</p>
                
                <pre><code>skill({ name: "git-release" })</code></pre>
                
                <h2>Skill Discovery</h2>
                <p>Skills are discovered from:</p>
                <ul>
                    <li><code>.opencode/skills/</code> directory (project-level)</li>
                    <li><code>~/.config/opencode/skills/</code> (global)</li>
                </ul>
            </div>
        `
    },
    
    "skills-permissions": {
        title: "Skill Permissions",
        content: `
            <div class="opencode-page">
                <h1>Skill Permissions</h1>
                <p>Control which skills agents can access.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "permission": {
    "skill": {
      "*": "allow",
      "internal-*": "deny",
      "experimental-*": "ask"
    }
  }
}</code></pre>
                
                <h2>Permission Levels</h2>
                <table>
                    <tr>
                        <th>Level</th>
                        <th>Behavior</th>
                    </tr>
                    <tr>
                        <td><code>"allow"</code></td>
                        <td>Skill can be loaded automatically</td>
                    </tr>
                    <tr>
                        <td><code>"ask"</code></td>
                        <td>Prompt before loading skill</td>
                    </tr>
                    <tr>
                        <td><code>"deny"</code></td>
                        <td>Block skill entirely</td>
                    </tr>
                </table>
                
                <h2>Pattern Matching</h2>
                <ul>
                    <li><code>"*"</code> - Matches all skills</li>
                    <li><code>"internal-*"</code> - Matches skills starting with "internal-"</li>
                    <li><code>"*-experimental"</code> - Matches skills ending with "-experimental"</li>
                </ul>
            </div>
        `
    },
    
    "agents-builtin": {
        title: "Built-in Agents",
        content: `
            <div class="opencode-page">
                <h1>Built-in Agents</h1>
                <p>OpenCode includes several built-in agents for different tasks.</p>
                
                <div class="opencode-info-box info">
                    <strong>One-sentence summary:</strong> Commands are <em>what to do</em>. Skills are <em>how to do it</em>. Agents are <em>who does it</em>.
                </div>
                
                <h2>Primary Agents</h2>
                <table>
                    <tr>
                        <th>Agent</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><strong>Build</strong></td>
                        <td>Primary</td>
                        <td>Full access, default working mode</td>
                    </tr>
                    <tr>
                        <td><strong>Plan</strong></td>
                        <td>Primary</td>
                        <td>Read-only, for analysis and planning</td>
                    </tr>
                </table>
                
                <h2>Subagents</h2>
                <table>
                    <tr>
                        <th>Agent</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><strong>General</strong></td>
                        <td>Subagent</td>
                        <td>For complex multi-step research</td>
                    </tr>
                    <tr>
                        <td><strong>Explore</strong></td>
                        <td>Subagent</td>
                        <td>Fast, read-only codebase exploration</td>
                    </tr>
                </table>
                
                <h2>Switching Primary Agents</h2>
                <p>Press <strong>Tab</strong> to cycle between Build and Plan modes.</p>
            </div>
        `
    },
    
    "agents-creating": {
        title: "Creating Custom Agents",
        content: `
            <div class="opencode-page">
                <h1>Creating Custom Agents</h1>
                <p>Create specialized AI assistants with specific configurations.</p>
                
                <h2>When to Use Custom Agents</h2>
                <ul>
                    <li>Creating role-specific assistants (reviewer, documenter, security auditor)</li>
                    <li>Restricting capabilities for safety</li>
                    <li>Using different models for different tasks</li>
                </ul>
                
                <h2>Agent File Location</h2>
                <p>Create <code>.opencode/agents/reviewer.md</code>:</p>
                
                <pre><code>---
description: Reviews code for quality and security
mode: subagent
temperature: 0.1
tools:
  write: false
  edit: false
  bash: false
---

You are a code reviewer. Focus on:
- Security vulnerabilities
- Performance issues
- Maintainability concerns
- Test coverage gaps

Provide constructive feedback without making changes.</code></pre>
                
                <h2>Frontmatter Options</h2>
                <table>
                    <tr>
                        <th>Field</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>description</code></td>
                        <td>What shows in agent lists</td>
                    </tr>
                    <tr>
                        <td><code>mode</code></td>
                        <td><code>primary</code> or <code>subagent</code></td>
                    </tr>
                    <tr>
                        <td><code>temperature</code></td>
                        <td>Creativity level (0.0 to 1.0)</td>
                    </tr>
                    <tr>
                        <td><code>tools</code></td>
                        <td>Which tools the agent can use</td>
                    </tr>
                </table>
            </div>
        `
    },
    
    "agents-invoking": {
        title: "Invoking Agents",
        content: `
            <div class="opencode-page">
                <h1>Invoking Agents</h1>
                <p>Different agents are invoked in different ways.</p>
                
                <h2>Primary Agents</h2>
                <p>Cycle with <strong>Tab</strong> key:</p>
                <ul>
                    <li>Build mode → Plan mode → Build mode</li>
                </ul>
                
                <h2>Subagents</h2>
                <p>Mention with <code>@</code>:</p>
                
                <pre><code>@reviewer Check the authentication module</code></pre>
                
                <h2>Example Workflow</h2>
                <pre><code>@review-frontend Check this component for accessibility issues
@review-backend Verify the API route security
@review-infra Review the deployment configuration</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Best Practice:</strong> Create specialized subagents for code review (frontend, backend, infrastructure) to get expert-level feedback from different perspectives.
                </div>
            </div>
        `
    },
    
    "agents-orchestration": {
        title: "Agent Orchestration",
        content: `
            <div class="opencode-page">
                <h1>Agent Orchestration</h1>
                <p>Agents can invoke other agents through the Task tool.</p>
                
                <h2>Multi-Agent Workflows</h2>
                <p>This enables workflows where a primary agent delegates to specialists:</p>
                
                <pre><code>---
description: Multi-lens code review
agent: build
---

Analyse the current diff with \`git diff main...HEAD\`.
Then invoke these reviewers in parallel:
- @review-frontend for any .tsx, .css, .scss files
- @review-backend for any .ts files in api/ or server/
- @review-infra for any config, yaml, or deployment files

Synthesise their findings into a single prioritised report.</code></pre>
                
                <p>Now <code>/review</code> gives you expert-level feedback from three perspectives.</p>
                
                <h2>Benefits</h2>
                <ul>
                    <li>Distribute complex tasks across specialized agents</li>
                    <li>Get multiple perspectives on code reviews</li>
                    <li>Parallel processing for faster results</li>
                    <li>Comprehensive analysis of changes</li>
                </ul>
            </div>
        `
    },
    
    "plugins-overview": {
        title: "Plugin System Overview",
        content: `
            <div class="opencode-page">
                <h1>Plugin System Overview</h1>
                <p>OpenCode's plugin system lets you hook into the agent's lifecycle.</p>
                
                <h2>Why Plugins</h2>
                <ul>
                    <li>Unlike Claude Code's JSON-based hooks, OpenCode plugins are TypeScript</li>
                    <li>Full type safety</li>
                    <li>Shell API for running commands</li>
                    <li>Complete control over when your code runs</li>
                </ul>
                
                <h2>Plugin Locations</h2>
                <ul>
                    <li><strong>Project-level:</strong> <code>.opencode/plugins/</code></li>
                    <li><strong>Global:</strong> <code>~/.config/opencode/plugins/</code></li>
                    <li><strong>npm:</strong> Via <code>plugin</code> option in opencode.json</li>
                </ul>
                
                <h2>Use Cases</h2>
                <ul>
                    <li>Auto-linting after code changes</li>
                    <li>Type checking after edits</li>
                    <li>Running tests automatically</li>
                    <li>Security scanning</li>
                    <li>Custom validators</li>
                </ul>
            </div>
        `
    },
    
    "plugins-locations": {
        title: "Plugin Locations",
        content: `
            <div class="opencode-page">
                <h1>Plugin Locations</h1>
                <p>Plugins can live in multiple locations.</p>
                
                <h2>Project-Level Plugins</h2>
                <pre><code>.opencode/plugins/
  ├── post-turn-check.ts
  ├── auto-format.ts
  └── custom-validator.ts</code></pre>
                
                <p>These are specific to your project and version-controlled.</p>
                
                <h2>Global Plugins</h2>
                <pre><code>~/.config/opencode/plugins/
  ├── my-global-plugin.ts
  └── shared-hooks.ts</code></pre>
                
                <p>These apply to all your OpenCode projects.</p>
                
                <h2>npm Plugins</h2>
                <p>Load published plugins from npm:</p>
                
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-helicone-session", "@my-org/custom-plugin"]
}</code></pre>
            </div>
        `
    },
    
    "events-tool-execute": {
        title: "tool.execute.after",
        content: `
            <div class="opencode-page">
                <h1>tool.execute.after Event</h1>
                <p>Fires after any tool runs (write, edit, bash, etc.).</p>
                
                <h2>Use Case</h2>
                <p>Track when files are edited to trigger follow-up actions:</p>
                
                <pre><code>"tool.execute.after": async (input) => {
  const editTools = [
    "write",
    "edit",
    "replace_content",
    "create_text_file",
  ];
  if (editTools.includes(input.tool)) {
    hasEdited = true;
  }
}</code></pre>
                
                <h2>Event Input</h2>
                <table>
                    <tr>
                        <th>Property</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>input.tool</code></td>
                        <td>Name of the tool that executed</td>
                    </tr>
                    <tr>
                        <td><code>input.result</code></td>
                        <td>Result of the tool execution</td>
                    </tr>
                </table>
            </div>
        `
    },
    
    "events-session-idle": {
        title: "session.idle",
        content: `
            <div class="opencode-page">
                <h1>session.idle Event</h1>
                <p>Fires when the agent finishes a turn and waits for input.</p>
                
                <h2>Use Case</h2>
                <p>Run checks after the agent completes its work:</p>
                
                <pre><code>event: async ({ event }) => {
  if (event.type !== "session.idle") return;
  if (!hasEdited) return;
  
  // Run linting, type checking, etc.
  const output = await runChecks();
  
  // Feed results back to agent
  await client.session.prompt({
    path: { id: event.properties.sessionID },
    body: {
      parts: [{ type: "text", text: output }]
    }
  });
}</code></pre>
                
                <h2>Common Pattern</h2>
                <p>Use <code>tool.execute.after</code> to track edits, then <code>session.idle</code> to run checks after the agent finishes.</p>
            </div>
        `
    },
    
    "plugins-creating": {
        title: "Creating Plugins",
        content: `
            <div class="opencode-page">
                <h1>Creating Plugins</h1>
                <p>A minimal plugin structure.</p>
                
                <h2>Basic Plugin</h2>
                <pre><code>import type { Plugin } from "@opencode-ai/plugin";

export const MyPlugin: Plugin = async ({ client, $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        // Agent just finished its turn
        console.log("Agent is waiting for input");
      }
    },
  };
};</code></pre>
                
                <h2>Plugin API</h2>
                <table>
                    <tr>
                        <th>Object</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>client</code></td>
                        <td>Send messages back to the agent</td>
                    </tr>
                    <tr>
                        <td><code>$</code></td>
                        <td>Bun's shell API for running commands</td>
                    </tr>
                </table>
                
                <h2>Dependencies</h2>
                <p>Add to <code>.opencode/package.json</code>:</p>
                
                <pre><code>{
  "dependencies": {
    "@opencode-ai/plugin": "^1.1.13"
  }
}</code></pre>
                
                <p>OpenCode installs dependencies automatically on startup.</p>
            </div>
        `
    },
    
    "plugins-example": {
        title: "Example: Auto-lint Hook",
        content: `
            <div class="opencode-page">
                <h1>Example: Auto-lint Hook</h1>
                <p>A plugin that runs Biome after the agent edits files.</p>
                
                <h2>Complete Plugin</h2>
                <pre><code>import { promises as fs } from "node:fs";
import type { Plugin } from "@opencode-ai/plugin";

let hasEdited = false;
const cooldownMs = 15_000;
let lastRunAt = 0;

export const PostTurnCheck: Plugin = async ({ client, $ }) => {
  return {
    "tool.execute.after": async (input) => {
      const editTools = [
        "write",
        "edit",
        "replace_content",
        "create_text_file",
      ];
      if (editTools.includes(input.tool)) {
        hasEdited = true;
      }
    },

    event: async ({ event }) => {
      if (event.type !== "session.idle") return;
      if (!hasEdited) return;
      
      const now = Date.now();
      if (now - lastRunAt < cooldownMs) return;
      
      lastRunAt = now;
      hasEdited = false;
      
      // Run Biome and capture output
      const outputFile = \`/tmp/opencode-check-\${Date.now()}.log\`;
      await \$\`sh -c \${"pnpm run check > " + outputFile + " 2>&1 || true"}\`;
      
      const output = await fs.readFile(outputFile, "utf8").catch(() => "");
      const message = \`
Post-turn lint check completed.

--- BEGIN BIOME OUTPUT ---
\${output || "No issues found."}
--- END BIOME OUTPUT ---

If there are errors, fix them. If something's unclear, ask.
      \`.trim();
      
      const sessionID = event.properties.sessionID;
      if (sessionID) {
        await client.session.prompt({
          path: { id: sessionID },
          body: {
            parts: [{ type: "text", text: message }],
          },
        });
      }
    },
  };
};</code></pre>
                
                <h2>How It Works</h2>
                <ol>
                    <li><strong>Track edits:</strong> Watch <code>tool.execute.after</code> and set flag when agent edits files</li>
                    <li><strong>Cooldown:</strong> 15-second cooldown prevents thrashing from rapid-fire edits</li>
                    <li><strong>Feed back:</strong> <code>client.session.prompt()</code> sends message as if you typed it</li>
                </ol>
            </div>
        `
    },
    
    "plugins-npm": {
        title: "Loading from npm",
        content: `
            <div class="opencode-page">
                <h1>Loading Plugins from npm</h1>
                <p>Use published plugins without writing code.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-helicone-session",
    "@my-org/custom-plugin"
  ]
}</code></pre>
                
                <h2>Finding Plugins</h2>
                <p>Search npm for packages starting with <code>opencode-</code> or tagged with <code>opencode-plugin</code>.</p>
                
                <h2>Community Plugins</h2>
                <p>As the plugin ecosystem matures, expect community plugins for:</p>
                <ul>
                    <li>Specific frameworks (React, Vue, Angular)</li>
                    <li>Workflow automation</li>
                    <li>Integration with external tools</li>
                    <li>Custom linting and formatting</li>
                </ul>
            </div>
        `
    },
    
    "mcp-what": {
        title: "What is MCP",
        content: `
            <div class="opencode-page">
                <h1>What is MCP</h1>
                <p>MCP (Model Context Protocol) lets you extend OpenCode with external tools and data sources.</p>
                
                <h2>What MCP Servers Provide</h2>
                <ul>
                    <li><strong>Tools:</strong> New actions the AI can take (search the web, query databases, etc.)</li>
                    <li><strong>Context:</strong> Additional information for the AI (documentation, project metadata)</li>
                    <li><strong>Resources:</strong> Files and data the AI can access</li>
                </ul>
                
                <h2>Think of it as...</h2>
                <p>A plugin system for capabilities. Instead of writing code, you connect to external services that provide specific functionality.</p>
                
                <div class="opencode-info-box tip">
                    <strong>Plugins vs MCP:</strong> Use plugins when you need custom logic and hooks. Use MCP when you want to connect to external services that follow the Model Context Protocol.
                </div>
            </div>
        `
    },
    
    "mcp-local": {
        title: "Local MCP Servers",
        content: `
            <div class="opencode-page">
                <h1>Local MCP Servers</h1>
                <p>Connect to MCP servers running locally on your machine.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "firecrawl": {
      "type": "local",
      "command": ["npx", "-y", "firecrawl-mcp"],
      "enabled": true
    }
  }
}</code></pre>
                
                <h2>How It Works</h2>
                <ol>
                    <li>OpenCode spawns the command as a subprocess</li>
                    <li>The MCP server communicates via stdio</li>
                    <li>Tools and resources become available to the AI</li>
                </ol>
                
                <h2>Common Pattern</h2>
                <p>Using <code>npx</code> to run MCP servers without installing them:</p>
                
                <pre><code>"command": ["npx", "-y", "firecrawl-mcp"]</code></pre>
            </div>
        `
    },
    
    "mcp-remote": {
        title: "Remote MCP Servers",
        content: `
            <div class="opencode-page">
                <h1>Remote MCP Servers</h1>
                <p>Connect to MCP servers hosted remotely.</p>
                
                <h2>Configuration</h2>
                <pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "my-server": {
      "type": "remote",
      "url": "https://my-mcp-server.example.com/mcp",
      "enabled": true
    }
  }
}</code></pre>
                
                <h2>When to Use Remote</h2>
                <ul>
                    <li>Shared team resources</li>
                    <li>Services that require authentication</li>
                    <li>Heavy compute that shouldn't run locally</li>
                    <li>Proprietary tools you can't distribute</li>
                </ul>
                
                <h2>Security Considerations</h2>
                <ul>
                    <li>Use HTTPS for remote connections</li>
                    <li>Authenticate requests when possible</li>
                    <li>Be careful what data you send to remote servers</li>
                </ul>
            </div>
        `
    },
    
    "mcp-popular": {
        title: "Popular MCP Servers",
        content: `
            <div class="opencode-page">
                <h1>Popular MCP Servers</h1>
                <p>Community-favorite MCP servers to extend OpenCode.</p>
                
                <h2>Firecrawl</h2>
                <p>Web scraping and search capabilities.</p>
                <pre><code>{
  "mcp": {
    "firecrawl": {
      "type": "local",
      "command": ["npx", "-y", "firecrawl-mcp"],
      "enabled": true
    }
  }
}</code></pre>
                
                <h2>Context7</h2>
                <p>Library documentation access.</p>
                
                <h2>pymupdf4llm</h2>
                <p>PDF processing for reading documentation and papers.</p>
                
                <h2>Finding More</h2>
                <p>The MCP ecosystem is growing. Look for:</p>
                <ul>
                    <li>MCP servers on npm</li>
                    <li>GitHub repositories tagged with <code>mcp-server</code></li>
                    <li>Community forums and discussions</li>
                </ul>
            </div>
        `
    },
    
    "workflow-review": {
        title: "Multi-Agent Code Review",
        content: `
            <div class="opencode-page">
                <h1>Multi-Agent Code Review</h1>
                <p>Give every PR the attention of your best frontend, backend, and DevOps engineers.</p>
                
                <h2>The Reviewers</h2>
                
                <h3>Frontend Specialist</h3>
                <pre><code>---
description: Frontend specialist review
mode: subagent
hidden: true
tools:
  edit: false
  write: false
  bash: false
  task: false
---

You are a frontend specialist. Focus on:
- React component patterns
- Accessibility
- Performance (bundle size, render cycles)
- CSS architecture</code></pre>
                
                <h3>Backend Specialist</h3>
                <pre><code>---
description: Backend specialist review
mode: subagent
hidden: true
tools:
  edit: false
  write: false
  bash: false
  task: false
---

You are a backend specialist. Focus on:
- API design
- Database queries (N+1 problems)
- Error handling
- Security</code></pre>
                
                <h3>Infrastructure Specialist</h3>
                <pre><code>---
description: Infrastructure specialist review
mode: subagent
hidden: true
tools:
  edit: false
  write: false
  bash: false
  task: false
---

You are a DevOps specialist. Focus on:
- Deployment configurations
- Environment variables
- Health checks
- Monitoring</code></pre>
                
                <h2>The Orchestrator Command</h2>
                <pre><code>---
description: Multi-lens code review
agent: build
---

Analyse the current diff with \`git diff main...HEAD\`.
Then invoke these reviewers in parallel:
- @review-frontend for any .tsx, .css, .scss files
- @review-backend for any .ts files in api/ or server/
- @review-infra for any config, yaml, or deployment files

Synthesise their findings into a single prioritised report.</code></pre>
                
                <p>Now <code>/review</code> gives you expert-level feedback from three perspectives.</p>
            </div>
        `
    },
    
    "workflow-feature": {
        title: "Feature Implementation",
        content: `
            <div class="opencode-page">
                <h1>Feature Implementation Pipeline</h1>
                <p>A structured approach to implementing features with OpenCode.</p>
                
                <h2>The Command</h2>
                <pre><code>---
description: Implement a feature from spec
---

Phase 1: Analysis
- Read the spec in @docs/specs/$ARGUMENTS.md
- Identify affected files
- List questions if spec is ambiguous

Phase 2: Planning
- Create implementation plan
- Identify tests needed
- List potential gotchas

Phase 3: Implementation
- Write the code
- Add tests
- Update documentation

Phase 4: Validation
- Run test suite
- Check for type errors
- Verify no regressions</code></pre>
                
                <h2>Usage</h2>
                <pre><code>/feature user-authentication</code></pre>
                
                <p>This assumes there's a spec at <code>docs/specs/user-authentication.md</code>.</p>
                
                <h2>Benefits</h2>
                <ul>
                    <li>Consistent process for every feature</li>
                    <li>Documentation stays in sync with code</li>
                    <li>Tests are part of the workflow</li>
                    <li>Validation catches issues early</li>
                </ul>
            </div>
        `
    },
    
    "workflow-explore": {
        title: "Codebase Exploration",
        content: `
            <div class="opencode-page">
                <h1>Codebase Exploration Skill</h1>
                <p>Systematic methodology for exploring unfamiliar codebases.</p>
                
                <h2>The Skill</h2>
                <pre><code>---
name: explore-codebase
description: Systematic codebase exploration methodology
---

## When exploring unfamiliar code
1. Start with package.json/composer.json to understand dependencies
2. Read AGENTS.md or README for project overview
3. Identify entry points (main, index, server files)
4. Trace request flow from entry to database
5. Note patterns: DI, repository, service layers
6. Document in a summary for future reference

## Questions to answer
- What framework(s)?
- What database(s)?
- How is auth handled?
- How are tests structured?
- What's the deployment target?</code></pre>
                
                <h2>Usage</h2>
                <pre><code>skill({ name: "explore-codebase" })

I'm new to this project. Help me understand the architecture.</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Pro Tip:</strong> Save the exploration summary as a project document for future reference.
                </div>
            </div>
        `
    },
    
    "workflow-pr": {
        title: "Automated PR Preparation",
        content: `
            <div class="opencode-page">
                <h1>Automated PR Preparation</h1>
                <p>Generate PR descriptions automatically from your changes.</p>
                
                <h2>The Command</h2>
                <pre><code>---
description: Prepare PR with description
---

1. Run \`git diff main...HEAD --stat\` to see changed files
2. Run \`git log main...HEAD --oneline\` to see commits
3. Load skill: git-release
4. Generate a PR description with:
   - Summary of changes
   - Testing notes
   - Migration steps (if any)
   - Screenshots (suggest placeholders)
5. Output the \`gh pr create\` command ready to paste</code></pre>
                
                <h2>Usage</h2>
                <pre><code>/prepare-pr</code></pre>
                
                <h2>Output Example</h2>
                <pre><code>Copy-paste this command to create your PR:

gh pr create \
  --title "Add user authentication flow" \
  --body "## Summary
  
  Implements JWT-based authentication with login/logout endpoints.
  
  ## Changes
  - Added auth middleware
  - Created login/logout routes
  - Added session management
  
  ## Testing
  - Run \`npm test\` to verify auth tests pass
  
  ## Migration
  - Add AUTH_SECRET to environment variables
  
  [ ] Add screenshots of login UI"</code></pre>
            </div>
        `
    },
    
    "bp-context": {
        title: "Managing Context",
        content: `
            <div class="opencode-page">
                <h1>Managing Context</h1>
                <p>Long sessions accumulate context. Here's how to manage it.</p>
                
                <h2>When Context Gets Heavy</h2>
                <p>Symptoms:</p>
                <ul>
                    <li>Responses slow down</li>
                    <li>Responses become confused or repetitive</li>
                    <li>AI loses track of earlier parts of the conversation</li>
                </ul>
                
                <h2>Solutions</h2>
                <ol>
                    <li><strong>Start a new session:</strong> <code>Ctrl+N</code> or <code>:new</code></li>
                    <li><strong>Compact command:</strong> <code>/compact</code> (if available)</li>
                    <li><strong>Be specific:</strong> Reference specific files with <code>@</code> to narrow focus</li>
                </ol>
                
                <h2>Best Practices</h2>
                <ul>
                    <li>Start fresh sessions for new features or topics</li>
                    <li>Reference files explicitly to help the AI focus</li>
                    <li>Use sessions for focused, time-boxed work</li>
                </ul>
            </div>
        `
    },
    
    "bp-cost": {
        title: "Cost Control",
        content: `
            <div class="opencode-page">
                <h1>Cost Control Strategies</h1>
                <p>Use different models for different tasks to optimize costs.</p>
                
                <h2>Model Tiers</h2>
                <table>
                    <tr>
                        <th>Task Type</th>
                        <th>Model Tier</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>Complex implementations</td>
                        <td>Expensive</td>
                        <td>Architecture decisions, complex refactoring</td>
                    </tr>
                    <tr>
                        <td>Most work</td>
                        <td>Mid-tier</td>
                        <td>Feature implementation, bug fixes</td>
                    </tr>
                    <tr>
                        <td>Simple questions</td>
                        <td>Cheap</td>
                        <td>Quick lookups, simple explanations</td>
                    </tr>
                </table>
                
                <h2>Per-Agent Models</h2>
                <pre><code>{
  "agent": {
    "plan": {
      "model": "provider/expensive-model"
    },
    "build": {
      "model": "provider/mid-tier-model"
    }
  }
}</code></pre>
                
                <div class="opencode-info-box tip">
                    <strong>Flat-Rate Providers:</strong> Consider providers like Synthetic that offer flat-rate subscriptions to eliminate per-token cost anxiety.
                </div>
            </div>
        `
    },
    
    "bp-debugging": {
        title: "Debugging Issues",
        content: `
            <div class="opencode-page">
                <h1>Debugging OpenCode Issues</h1>
                <p>Troubleshooting common problems.</p>
                
                <h2>Check Auth Setup</h2>
                <pre><code>opencode auth list</code></pre>
                
                <h2>List Available Models</h2>
                <pre><code>opencode models</code></pre>
                
                <h2>Verify MCP Servers</h2>
                <p>Look for startup errors in the TUI. MCP connection failures will show in the initial load messages.</p>
                
                <h2>Skill Not Loading?</h2>
                <ul>
                    <li>Verify <code>SKILL.md</code> is spelled correctly (all caps)</li>
                    <li>Check frontmatter includes <code>name</code> and <code>description</code></li>
                    <li>Ensure names are unique across locations</li>
                    <li>Check permissions aren't set to <code>deny</code></li>
                </ul>
                
                <h2>Get Help</h2>
                <ul>
                    <li>GitHub Issues: <a href="https://github.com/anomalyco/opencode/issues">github.com/anomalyco/opencode/issues</a></li>
                    <li>Documentation: <a href="https://opencode.ai/docs">opencode.ai/docs</a></li>
                </ul>
            </div>
        `
    },
    
    "bp-checklist": {
        title: "Getting Started Checklist",
        content: `
            <div class="opencode-page">
                <h1>Getting Started Checklist</h1>
                <p>Your action plan to master OpenCode.</p>
                
                <div class="opencode-info-box info">
                    <strong>Estimated time:</strong> 30-60 minutes to get fully set up
                </div>
                
                <h2>Setup (10 minutes)</h2>
                <ol>
                    <li><strong>Install OpenCode</strong> (5 min)
                        <ul><li><code>curl -fsSL https://opencode.ai/install | bash</code></li></ul>
                    </li>
                    <li><strong>Connect a provider</strong> (2 min)
                        <ul><li>Run <code>opencode</code>, then <code>/connect</code></li></ul>
                    </li>
                    <li><strong>Initialize a project</strong> (1 min)
                        <ul><li>Run <code>/init</code> in your project directory</li></ul>
                    </li>
                    <li><strong>Ask something about your codebase</strong> (2 min)
                        <ul><li>Try: "How is authentication handled in this project?"</li></ul>
                    </li>
                </ol>
                
                <h2>Level Up (20 minutes)</h2>
                <ol>
                    <li><strong>Create one custom command</strong> for something you do often
                        <ul><li>Example: <code>/test</code> to run tests with coverage</li></ul>
                    </li>
                    <li><strong>Create one agent</strong> for a specialized task
                        <ul><li>Example: A code reviewer agent</li></ul>
                    </li>
                    <li><strong>Set up a formatting hook</strong> so your AI writes clean code
                        <ul><li>Configure Prettier or Biome in <code>opencode.json</code></li></ul>
                    </li>
                </ol>
                
                <h2>Mastery (Ongoing)</h2>
                <ul>
                    <li>Build a multi-agent code review system</li>
                    <li>Create plugins for your workflow</li>
                    <li>Connect MCP servers for external tools</li>
                    <li>Share your commands and skills with your team</li>
                </ul>
                
                <div class="opencode-info-box tip">
                    <strong>The learning curve is gentle. The productivity gains are not.</strong>
                </div>
            </div>
        `
    },
    
    "ref-cli": {
        title: "CLI Commands",
        content: `
            <div class="opencode-page">
                <h1>CLI Commands</h1>
                <p>Command-line interface for OpenCode.</p>
                
                <h2>Basic Commands</h2>
                <table>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>opencode</code></td>
                        <td>Launch the TUI in current directory</td>
                    </tr>
                    <tr>
                        <td><code>opencode --version</code></td>
                        <td>Show version information</td>
                    </tr>
                    <tr>
                        <td><code>opencode --continue</code></td>
                        <td>Continue the most recent session</td>
                    </tr>
                    <tr>
                        <td><code>opencode -c</code></td>
                        <td>Short flag for --continue</td>
                    </tr>
                    <tr>
                        <td><code>opencode --session ID</code></td>
                        <td>Continue a specific session</td>
                    </tr>
                </table>
                
                <h2>Session Management</h2>
                <table>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>opencode session list</code></td>
                        <td>List all sessions</td>
                    </tr>
                    <tr>
                        <td><code>opencode auth list</code></td>
                        <td>List authenticated providers</td>
                    </tr>
                    <tr>
                        <td><code>opencode models</code></td>
                        <td>List available models</td>
                    </tr>
                </table>
                
                <h2>Non-Interactive Mode</h2>
                <pre><code>opencode run "Your prompt here"
opencode run --title "My task" "Your prompt here"</code></pre>
            </div>
        `
    },
    
    "ref-shortcuts": {
        title: "Keyboard Shortcuts",
        content: `
            <div class="opencode-page">
                <h1>Keyboard Shortcuts</h1>
                <p>Essential keyboard shortcuts for the TUI.</p>
                
                <h2>Mode Switching</h2>
                <table>
                    <tr>
                        <th>Shortcut</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><code>Tab</code></td>
                        <td>Toggle between Build and Plan modes</td>
                    </tr>
                </table>
                
                <h2>Sessions</h2>
                <table>
                    <tr>
                        <th>Shortcut</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><code>Ctrl+X L</code></td>
                        <td>Open session picker</td>
                    </tr>
                    <tr>
                        <td><code>Ctrl+N</code></td>
                        <td>Start new session</td>
                    </tr>
                </table>
                
                <h2>General</h2>
                <table>
                    <tr>
                        <th>Shortcut</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><code>Ctrl+C</code></td>
                        <td>Copy selection</td>
                    </tr>
                    <tr>
                        <td><code>Ctrl+V</code></td>
                        <td>Paste from clipboard</td>
                    </tr>
                    <tr>
                        <td><code>Up/Down</code></td>
                        <td>Navigate command history</td>
                    </tr>
                    <tr>
                        <td><code>Ctrl+L</code></td>
                        <td>Clear screen</td>
                    </tr>
                </table>
            </div>
        `
    },
    
    "ref-resources": {
        title: "Official Resources",
        content: `
            <div class="opencode-page">
                <h1>Official Resources</h1>
                <p>Links to official OpenCode resources.</p>
                
                <h2>Documentation</h2>
                <ul>
                    <li><strong>Official Docs:</strong> <a href="https://opencode.ai/docs" target="_blank">opencode.ai/docs</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/anomalyco/opencode" target="_blank">github.com/anomalyco/opencode</a></li>
                    <li><strong>OpenCode Zen:</strong> <a href="https://opencode.ai/zen" target="_blank">opencode.ai/zen</a></li>
                </ul>
                
                <h2>Community</h2>
                <ul>
                    <li>GitHub Discussions</li>
                    <li>Twitter/X: <a href="https://twitter.com/opencode" target="_blank">@opencode</a></li>
                    <li>Discord community (check GitHub for invite)</li>
                </ul>
                
                <h2>Related Articles</h2>
                <ul>
                    <li><a href="https://blog.devgenius.io/the-definitive-guide-to-opencode-from-first-install-to-production-workflows-aae1e95855fb" target="_blank">The Definitive Guide to OpenCode</a></li>
                    <li><a href="https://blog.devgenius.io/one-reviewer-three-lenses-building-a-multi-agent-code-review-system-with-opencode-21ceb28dde10" target="_blank">Multi-Agent Code Review System</a></li>
                    <li><a href="https://blog.devgenius.io/no-commands-skills-and-agents-in-opencode-whats-the-difference-cf16c950b592" target="_blank">Commands, Skills, and Agents</a></li>
                </ul>
                
                <div class="opencode-info-box tip">
                    <strong>Stay Updated:</strong> OpenCode is moving fast. Check the official docs and GitHub releases regularly for new features.
                </div>
            </div>
        `
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.opencodeDocs = opencodeDocs;
}
