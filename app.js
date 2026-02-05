// ========================================
// AI Engineering Playbook - Application
// ========================================

// State
let currentSection = 'dashboard';
let progress = {};
let currentPrompt = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderAllContent();
    updateStats();
    setupNavigation();
    loadOpencodePage(currentOpencodePage);
});

// Navigation
function setupNavigation() {
    // Main nav items
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            navigateTo(section);
        });
    });
    
    // Submenu toggles
    document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const submenuId = item.dataset.submenu;
            const submenu = document.getElementById(`submenu-${submenuId}`);
            if (submenu) {
                submenu.classList.toggle('expanded');
                item.classList.toggle('expanded');
            }
        });
    });
    
    // Subitems
    document.querySelectorAll('.nav-subitem[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const section = item.dataset.section;
            const phase = item.dataset.phase;
            navigateTo(section, phase);
        });
    });
    
    // Nested toggles
    document.querySelectorAll('.nav-subitem.has-nested').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const nestedId = item.dataset.nested;
            const nested = document.getElementById(`nested-${nestedId}`);
            if (nested) {
                nested.classList.toggle('expanded');
                item.classList.toggle('expanded');
            }
        });
    });
    
    // Nested2 toggles
    document.querySelectorAll('.nav-nesteditem.has-nested2').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const nested2Id = item.dataset.nested2;
            const nested2 = document.getElementById(`nested2-${nested2Id}`);
            if (nested2) {
                nested2.classList.toggle('expanded');
                item.classList.toggle('expanded');
            }
        });
    });
    
    // Nested items
    document.querySelectorAll('.nav-nesteditem[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const section = item.dataset.section;
            const opencodePage = item.dataset.opencodePage;
            navigateTo(section, null, opencodePage);
        });
    });
    
    // Nested2 items
    document.querySelectorAll('.nav-nested2item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const section = item.dataset.section;
            const opencodePage = item.dataset.opencodePage;
            navigateTo(section, null, opencodePage);
        });
    });
}

function navigateTo(sectionId, phaseName = null, opencodePage = null) {
    // Update nav active states
    document.querySelectorAll('.nav-item, .nav-subitem, .nav-nesteditem, .nav-nested2item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Set active for the clicked item
    if (opencodePage) {
        document.querySelectorAll(`[data-opencode-page="${opencodePage}"]`).forEach(item => {
            item.classList.add('active');
        });
    } else if (phaseName) {
        document.querySelectorAll(`.nav-subitem[data-phase="${phaseName}"]`).forEach(item => {
            item.classList.add('active');
        });
    } else {
        document.querySelectorAll(`.nav-item[data-section="${sectionId}"]`).forEach(item => {
            item.classList.add('active');
        });
    }

    // Update content
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });

    currentSection = sectionId;
    
    // Handle OpenCode page loading
    if (sectionId === 'opencode' && opencodePage) {
        loadOpencodePage(opencodePage);
    }
    
    // Handle phase switching
    if (sectionId === 'journey' && phaseName) {
        switchPhase(phaseName);
    }
}

// Navigate to journey section and activate specific phase
function navigateToPhase(phaseName) {
    navigateTo('journey');
    switchPhase(phaseName);
}

// Switch between phase tabs within the journey section
function switchPhase(phaseName) {
    // Update tab active states
    document.querySelectorAll('.phase-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.phase === phaseName);
    });

    // Update panel visibility
    document.querySelectorAll('.phase-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `phase-${phaseName}`);
    });
}

// Render Content
function renderAllContent() {
    renderPhase('phase1-content', PHASE1_DATA);
    renderPhase('phase2-content', PHASE2_DATA);
    renderPhase('phase3-content', PHASE3_DATA);
    renderPrompts();
    renderResources();
    renderAIToolsGuide();
    renderConceptsComparison();
    renderContextEngineering();
    renderSkillsLibrary();
}

function renderPhase(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    data.weeks.forEach(week => {
        const completedCount = week.tasks.filter(t => progress[t.id]).length;
        const progressPercent = Math.round((completedCount / week.tasks.length) * 100);

        html += `
            <div class="week-card">
                <div class="week-header" onclick="toggleWeek(this)">
                    <h3><span>📋</span> ${week.title}</h3>
                    <span class="week-progress">${completedCount}/${week.tasks.length} • ${progressPercent}%</span>
                </div>
                <div class="week-content">
                    <p style="color: var(--text-muted); margin-bottom: 1rem; font-size: 0.9rem;">${week.days}</p>
                    <ul class="checklist">
                        ${week.tasks.map(task => `
                            <li class="checklist-item">
                                <input type="checkbox" 
                                    id="${task.id}" 
                                    ${progress[task.id] ? 'checked' : ''} 
                                    onchange="toggleTask('${task.id}')">
                                <label for="${task.id}">${task.text}</label>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderPrompts() {
    const container = document.getElementById('prompts-content');
    if (!container) return;

    let html = '';
    PROMPTS_DATA.categories.forEach(category => {
        html += `
            <div class="resource-category">
                <h2>${category.icon} ${category.name}</h2>
                <div class="prompt-grid">
                    ${category.prompts.map(prompt => `
                        <div class="prompt-card">
                            <h4>${prompt.title}</h4>
                            <p>${prompt.description}</p>
                            <div class="prompt-preview">${escapeHtml(prompt.preview)}</div>
                            <div class="prompt-actions">
                                <button class="prompt-btn" onclick="viewPrompt('${escapeAttr(prompt.title)}', \`${escapeTemplate(prompt.full)}\`)">
                                    👁️ View
                                </button>
                                <button class="prompt-btn primary" onclick="copyToClipboard(\`${escapeTemplate(prompt.full)}\`)">
                                    📋 Copy
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderResources() {
    const container = document.getElementById('resources-content');
    if (!container) return;

    let html = '';
    RESOURCES_DATA.categories.forEach(category => {
        html += `
            <div class="resource-category">
                <h2>${category.name}</h2>
                <div class="resource-grid">
                    ${category.resources.map(resource => `
                        <a href="${resource.url}" target="_blank" rel="noopener" class="resource-card">
                            <h4>${resource.title} ↗</h4>
                            <p>${resource.description}</p>
                            <div class="resource-tags">
                                ${resource.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderContextEngineering() {
    const container = document.getElementById('context-content');
    if (!container) return;

    let html = '';
    CONTEXT_ENGINEERING_DATA.concepts.forEach(concept => {
        html += `
            <div class="concept-card">
                <h3>${concept.title}</h3>
                <ul class="concept-list">
                    ${concept.items.map(item => `
                        <li>
                            <strong>${item.term}:</strong>
                            <span>${item.description}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });

    // Add tips section
    html += `
        <div class="concept-card" style="border-left: 4px solid var(--accent-green);">
            <h3>💡 Quick Tips for Better Context</h3>
            <ul class="concept-list">
                <li><strong>DO include:</strong> <span>Language/framework versions, type definitions, related code, expected input/output, error messages</span></li>
                <li><strong>DON'T include:</strong> <span>Secrets, passwords, API keys, customer data, PII, irrelevant code</span></li>
                <li><strong>Magic pattern:</strong> <span>"Given this [type/interface/context]: [paste definitions]. Create [what you need] that [specific requirements]."</span></li>
            </ul>
        </div>
    `;

    container.innerHTML = html;
}

function renderConceptsComparison() {
    const container = document.getElementById('concepts-comparison-content');
    if (!container) return;

    const data = CONCEPTS_COMPARISON_DATA;
    let html = '';

    // Quick Reference Matrix
    html += `
        <div class="comparison-section">
            <h2>📊 Quick Reference Matrix</h2>
            <div class="table-responsive">
                <table class="comparison-table full-width">
                    <thead>
                        <tr>
                            ${data.quickReference.headers.map(h => `<th>${h}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${data.quickReference.rows.map(row => `
                            <tr>
                                <td><strong>${row.aspect}</strong></td>
                                ${row.values.map(v => `<td>${v}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // Detailed Concepts
    html += `<div class="concepts-grid">`;

    data.concepts.forEach(concept => {
        html += `
            <div class="concept-detail-card" id="concept-${concept.id}">
                <div class="concept-header-bar">
                    <span class="concept-icon-large">${concept.icon}</span>
                    <div>
                        <h3>${concept.name}</h3>
                        <span class="concept-subtitle">${concept.subtitle}</span>
                    </div>
                </div>
                
                <div class="concept-analogy">
                    <span class="analogy-icon">💡</span>
                    <p>${concept.analogy}</p>
                </div>

                <p class="concept-definition">${concept.definition}</p>

                <div class="concept-section">
                    <h4>✅ When to Use</h4>
                    <ul class="use-cases-list">
                        ${concept.whenToUse.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                ${concept.fileLocations ? `
                    <div class="concept-section">
                        <h4>📁 Configuration Files</h4>
                        <div class="file-locations">
                            ${Object.entries(concept.fileLocations).map(([tool, file]) => `
                                <div class="file-location">
                                    <strong>${tool}:</strong>
                                    <code>${file}</code>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.example ? `
                    <div class="concept-section">
                        <h4>📝 Example: ${concept.example.title}</h4>
                        ${concept.example.structure ? `
                            <div class="code-example">
                                <div class="code-header">
                                    <span>Folder Structure</span>
                                </div>
                                <pre><code>${escapeHtml(concept.example.structure)}</code></pre>
                            </div>
                        ` : ''}
                        <div class="code-example">
                            <div class="code-header">
                                <span>${concept.example.filename || 'Example'}</span>
                                <button class="copy-code-btn" onclick="copyToClipboard(\`${escapeTemplate(concept.example.code || concept.example.skillMd || '')}\`)">📋 Copy</button>
                            </div>
                            <pre><code>${escapeHtml(concept.example.code || concept.example.skillMd || '')}</code></pre>
                        </div>
                    </div>
                ` : ''}

                ${concept.beforeAfter ? `
                    <div class="concept-section">
                        <h4>🔄 Before vs After</h4>
                        <div class="before-after-grid">
                            <div class="before-box">
                                <span class="ba-label">❌ Without</span>
                                <p class="ba-prompt">${concept.beforeAfter.before.prompt}</p>
                                <pre><code>${escapeHtml(concept.beforeAfter.before.result)}</code></pre>
                            </div>
                            <div class="after-box">
                                <span class="ba-label">✅ With</span>
                                <p class="ba-prompt">${concept.beforeAfter.after.prompt}</p>
                                <pre><code>${escapeHtml(concept.beforeAfter.after.result)}</code></pre>
                            </div>
                        </div>
                    </div>
                ` : ''}

                ${concept.vsInstructions ? `
                    <div class="concept-section">
                        <h4>⚖️ Custom Instructions vs Skills</h4>
                        <table class="comparison-table small">
                            <thead>
                                <tr>${concept.vsInstructions.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                            </thead>
                            <tbody>
                                ${concept.vsInstructions.rows.map(row => `
                                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : ''}

                ${concept.vsSkills ? `
                    <div class="concept-section">
                        <h4>⚖️ Skills vs Agents</h4>
                        <table class="comparison-table small">
                            <thead>
                                <tr>${concept.vsSkills.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                            </thead>
                            <tbody>
                                ${concept.vsSkills.rows.map(row => `
                                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : ''}

                ${concept.executionPhases ? `
                    <div class="concept-section">
                        <h4>⚙️ Agent Execution Phases</h4>
                        <div class="execution-phases">
                            ${concept.executionPhases.map((phase, i) => `
                                <div class="phase-step">
                                    <span class="phase-number">${i + 1}</span>
                                    <div class="phase-info">
                                        <strong>${phase.phase}</strong>
                                        <p>${phase.description}</p>
                                        <small>${phase.duration}</small>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.examplePrompt ? `
                    <div class="concept-section">
                        <h4>💬 Prompt Best Practices</h4>
                        <div class="prompt-comparison">
                            <div class="bad-prompt">
                                <span class="prompt-label">❌ Vague</span>
                                <pre><code>${escapeHtml(concept.examplePrompt.bad)}</code></pre>
                            </div>
                            <div class="good-prompt">
                                <span class="prompt-label">✅ Clear</span>
                                <pre><code>${escapeHtml(concept.examplePrompt.good)}</code></pre>
                            </div>
                        </div>
                    </div>
                ` : ''}

                ${concept.autoActivation ? `
                    <div class="concept-section">
                        <h4>🔄 Auto-Activation Flow</h4>
                        <p class="trigger-prompt"><strong>Trigger:</strong> ${concept.autoActivation.trigger}</p>
                        <ol class="activation-steps">
                            ${concept.autoActivation.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                ` : ''}

                ${concept.builtInCommands ? `
                    <div class="concept-section">
                        <h4>⚡ Built-in Commands by Tool</h4>
                        <div class="builtin-commands-grid">
                            ${concept.builtInCommands.map(item => `
                                <div class="builtin-commands-item">
                                    <strong>${item.tool}</strong>
                                    <div class="commands-list">
                                        ${item.commands.map(cmd => `<code>${cmd}</code>`).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.builtInSubagents ? `
                    <div class="concept-section">
                        <h4>🔧 Built-in Subagents</h4>
                        <div class="subagents-grid">
                            ${concept.builtInSubagents.map(agent => `
                                <div class="subagent-item">
                                    <strong>${agent.name}</strong>
                                    <p>${agent.purpose}</p>
                                    <small>Tools: ${agent.tools}</small>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.vsAgents ? `
                    <div class="concept-section">
                        <h4>⚖️ Agents vs Subagents</h4>
                        <table class="comparison-table small">
                            <thead>
                                <tr>${concept.vsAgents.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                            </thead>
                            <tbody>
                                ${concept.vsAgents.rows.map(row => `
                                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : ''}

                ${concept.invocation ? `
                    <div class="concept-section">
                        <h4>📣 How to Invoke</h4>
                        <div class="invocation-examples">
                            ${Object.entries(concept.invocation).map(([tool, cmd]) => `
                                <div class="invocation-item">
                                    <strong>${tool}:</strong>
                                    <code>${cmd}</code>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.toolSupport ? `
                    <div class="concept-section">
                        <h4>🛠️ Tool Support</h4>
                        <div class="tool-support-list">
                            ${concept.toolSupport.map(item => `
                                <div class="tool-support-row">
                                    <strong>${item.tool}:</strong>
                                    <span>${item.mode}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.features ? `
                    <div class="concept-section">
                        <h4>✨ Key Features</h4>
                        <ul class="features-list">
                            ${concept.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                ${concept.keyCommands ? `
                    <div class="concept-section">
                        <h4>⌨️ Key Commands</h4>
                        <div class="key-commands-grid">
                            ${concept.keyCommands.map(item => `
                                <div class="key-command-item">
                                    <code>${item.command}</code>
                                    <span>${item.description}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${concept.comparison ? `
                    <div class="concept-section">
                        <h4>📊 Comparison</h4>
                        <table class="comparison-table small">
                            <thead>
                                <tr>${concept.comparison.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                            </thead>
                            <tbody>
                                ${concept.comparison.rows.map(row => `
                                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : ''}
            </div>
        `;
    });

    html += `</div>`;

    // Decision Scenarios
    html += `
        <div class="comparison-section">
            <h2>🎯 Which Concept Should I Use?</h2>
            <div class="scenarios-grid">
                ${data.scenarios.map(scenario => `
                    <div class="scenario-card">
                        <p class="scenario-question">"${scenario.question}"</p>
                        <div class="scenario-winner">
                            <span class="winner-label">Best Choice:</span>
                            <span class="winner-badge">${scenario.winner}</span>
                        </div>
                        <div class="scenario-reasoning">
                            ${Object.entries(scenario.reasoning).map(([concept, reason]) => `
                                <div class="reasoning-item ${reason.startsWith('✅') ? 'winner' : ''}">
                                    <strong>${concept}:</strong> ${reason}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Decision Flowchart
    html += `
        <div class="comparison-section">
            <h2>🔀 Decision Flowchart</h2>
            <div class="flowchart">
                ${data.decisionFlowchart.map((step, i) => `
                    <div class="flowchart-step">
                        <div class="flowchart-question">${step.question}</div>
                        <div class="flowchart-branches">
                            <div class="flowchart-yes">
                                <span class="branch-label">YES →</span>
                                <span class="branch-answer">${step.yes}</span>
                            </div>
                            <div class="flowchart-no">
                                <span class="branch-label">NO →</span>
                                <span class="branch-answer">${step.no}</span>
                            </div>
                        </div>
                    </div>
                    ${i < data.decisionFlowchart.length - 1 ? '<div class="flowchart-connector">↓</div>' : ''}
                `).join('')}
            </div>
        </div>
    `;

    // Summary Table
    html += `
        <div class="comparison-section">
            <h2>📋 Summary</h2>
            <div class="table-responsive">
                <table class="comparison-table full-width summary-table">
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Analogy</th>
                            <th>Typical Size</th>
                            <th>Activation</th>
                            <th>Best For</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.summary.map(row => `
                            <tr>
                                <td><strong>${row.concept}</strong></td>
                                <td>${row.analogy}</td>
                                <td>${row.size}</td>
                                <td>${row.activation}</td>
                                <td>${row.bestFor}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function renderAIToolsGuide() {
    const container = document.getElementById('ai-tools-content');
    if (!container) return;

    let html = '';

    AI_TOOLS_GUIDE_DATA.sections.forEach(section => {
        html += `
            <div class="tool-section" id="${section.id}">
                <div class="tool-header">
                    <h2>${section.title}</h2>
                    <p class="tool-description">${section.description}</p>
                </div>
                
                <div class="tool-analogy">
                    <span class="analogy-icon">💡</span>
                    <p><strong>In simple terms:</strong> ${section.analogy}</p>
                </div>
        `;

        // When to Use section
        if (section.whenToUse) {
            html += `
                <div class="tool-card">
                    <h4>✅ When to Use</h4>
                    <ul class="use-cases">
                        ${section.whenToUse.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Capabilities (for Copilot Coding Agent)
        if (section.capabilities) {
            html += `
                <div class="tool-card">
                    <h4>🎯 Capabilities</h4>
                    <ul class="use-cases">
                        ${section.capabilities.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Comparison table
        if (section.comparison) {
            html += `
                <div class="tool-card">
                    <h4>${section.comparison.title}</h4>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Aspect</th>
                                ${section.comparison.items[0].agent ? '<th>Agent Mode</th><th>Chat Mode</th>' : '<th>Skills</th><th>Instructions</th>'}
                            </tr>
                        </thead>
                        <tbody>
                            ${section.comparison.items.map(item => `
                                <tr>
                                    <td><strong>${item.aspect}</strong></td>
                                    ${item.agent ? `<td>${item.agent}</td><td>${item.chat}</td>` : `<td>${item.skills}</td><td>${item.instructions}</td>`}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Tool Support
        if (section.toolSupport) {
            html += `
                <div class="tool-card">
                    <h4>🛠️ Tool Support</h4>
                    <div class="tool-support-grid">
                        ${section.toolSupport.map(tool => `
                            <div class="tool-support-item">
                                <strong>${tool.tool}</strong>
                                <span>${tool.activation}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // How to Setup (MCP)
        if (section.howToSetup) {
            html += `
                <div class="tool-card">
                    <h4>🔧 ${section.howToSetup.title}</h4>
                    <ol class="setup-steps">
                        ${section.howToSetup.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                    <div class="code-example">
                        <div class="code-header">
                            <span>${section.howToSetup.example.tool}</span>
                            <button class="copy-code-btn" onclick="copyToClipboard(\`${escapeTemplate(section.howToSetup.example.code)}\`)">📋 Copy</button>
                        </div>
                        <pre><code>${escapeHtml(section.howToSetup.example.code)}</code></pre>
                    </div>
                </div>
            `;
        }

        // How to Create (Skills, Subagents)
        if (section.howToCreate) {
            html += `
                <div class="tool-card">
                    <h4>📝 ${section.howToCreate.title}</h4>
                    ${section.howToCreate.location ? `<p class="location-hint"><strong>Location:</strong> ${section.howToCreate.location}</p>` : ''}
                    ${section.howToCreate.steps ? `
                        <ol class="setup-steps">
                            ${section.howToCreate.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    ` : ''}
                    ${section.howToCreate.methods ? `
                        <div class="methods-list">
                            ${section.howToCreate.methods.map(method => `
                                <div class="method-item">
                                    <strong>${method.name}:</strong> ${method.steps || method.location}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    <div class="code-example">
                        <div class="code-header">
                            <span>${section.howToCreate.example.title}</span>
                            <button class="copy-code-btn" onclick="copyToClipboard(\`${escapeTemplate(section.howToCreate.example.code)}\`)">📋 Copy</button>
                        </div>
                        <pre><code>${escapeHtml(section.howToCreate.example.code)}</code></pre>
                    </div>
                </div>
            `;
        }

        // Types (Custom Instructions)
        if (section.types) {
            html += `
                <div class="tool-card">
                    <h4>📊 Instruction Levels</h4>
                    <table class="comparison-table">
                        <thead>
                            <tr><th>Level</th><th>Scope</th><th>Location</th></tr>
                        </thead>
                        <tbody>
                            ${section.types.map(type => `
                                <tr>
                                    <td><strong>${type.level}</strong></td>
                                    <td>${type.scope}</td>
                                    <td>${type.location}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Tool Files
        if (section.toolFiles) {
            html += `
                <div class="tool-card">
                    <h4>📁 Configuration Files by Tool</h4>
                    <table class="comparison-table">
                        <thead>
                            <tr><th>Tool</th><th>File</th></tr>
                        </thead>
                        <tbody>
                            ${section.toolFiles.map(item => `
                                <tr>
                                    <td><strong>${item.tool}</strong></td>
                                    <td><code>${item.file}</code></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Universal Format (AGENTS.md)
        if (section.universalFormat) {
            html += `
                <div class="tool-card highlight">
                    <h4>⭐ ${section.universalFormat.title}</h4>
                    <p>${section.universalFormat.description}</p>
                    <div class="code-example">
                        <div class="code-header">
                            <span>AGENTS.md Template</span>
                            <button class="copy-code-btn" onclick="copyToClipboard(\`${escapeTemplate(section.universalFormat.example)}\`)">📋 Copy</button>
                        </div>
                        <pre><code>${escapeHtml(section.universalFormat.example)}</code></pre>
                    </div>
                </div>
            `;
        }

        // Built-in Subagents
        if (section.builtIn) {
            html += `
                <div class="tool-card">
                    <h4>🔧 Built-in Subagents</h4>
                    <div class="builtin-grid">
                        ${section.builtIn.map(agent => `
                            <div class="builtin-item">
                                <strong>${agent.name}</strong>
                                <p>${agent.purpose}</p>
                                <small>Tools: ${agent.tools}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // How to Assign (Copilot Coding Agent)
        if (section.howToAssign) {
            html += `
                <div class="tool-card">
                    <h4>📤 How to Assign Tasks</h4>
                    <div class="assign-methods">
                        ${section.howToAssign.map(method => `
                            <div class="assign-item">
                                <strong>${method.method}</strong>
                                <span>${method.steps}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Workflow
        if (section.workflow) {
            html += `
                <div class="tool-card">
                    <h4>⚙️ Workflow</h4>
                    <ol class="workflow-steps">
                        ${section.workflow.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            `;
        }

        // Issue Template
        if (section.issueTemplate) {
            html += `
                <div class="tool-card">
                    <h4>📝 ${section.issueTemplate.title}</h4>
                    <div class="code-example">
                        <div class="code-header">
                            <span>Copilot-Friendly Issue</span>
                            <button class="copy-code-btn" onclick="copyToClipboard(\`${escapeTemplate(section.issueTemplate.code)}\`)">📋 Copy</button>
                        </div>
                        <pre><code>${escapeHtml(section.issueTemplate.code)}</code></pre>
                    </div>
                </div>
            `;
        }

        // Example Prompt
        if (section.examplePrompt) {
            html += `
                <div class="tool-card">
                    <h4>💬 Example Agent Prompt</h4>
                    <div class="code-example">
                        <div class="code-header">
                            <span>Feature Implementation Prompt</span>
                            <button class="copy-code-btn" onclick="copyToClipboard(\`${escapeTemplate(section.examplePrompt)}\`)">📋 Copy</button>
                        </div>
                        <pre><code>${escapeHtml(section.examplePrompt)}</code></pre>
                    </div>
                </div>
            `;
        }

        // Resources
        if (section.resources) {
            html += `
                <div class="tool-card resources">
                    <h4>📚 Resources</h4>
                    <div class="resource-links">
                        ${section.resources.map(res => `
                            <a href="${res.url}" target="_blank" rel="noopener">${res.title} ↗</a>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        html += '</div>'; // Close tool-section
    });

    container.innerHTML = html;
}

// Task Management
function toggleTask(taskId) {
    progress[taskId] = !progress[taskId];
    saveProgress();
    updateStats();
    renderAllContent();
}

function toggleWeek(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Progress Management
function loadProgress() {
    const saved = localStorage.getItem('ai-playbook-progress');
    if (saved) {
        progress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('ai-playbook-progress', JSON.stringify(progress));
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        progress = {};
        saveProgress();
        updateStats();
        renderAllContent();
        showToast('Progress reset successfully');
    }
}

// Stats
function updateStats() {
    const allTasks = [
        ...PHASE1_DATA.weeks.flatMap(w => w.tasks),
        ...PHASE2_DATA.weeks.flatMap(w => w.tasks),
        ...PHASE3_DATA.weeks.flatMap(w => w.tasks)
    ];

    const phase1Tasks = PHASE1_DATA.weeks.flatMap(w => w.tasks);
    const phase2Tasks = PHASE2_DATA.weeks.flatMap(w => w.tasks);
    const phase3Tasks = PHASE3_DATA.weeks.flatMap(w => w.tasks);

    const totalCompleted = allTasks.filter(t => progress[t.id]).length;
    const overallProgress = Math.round((totalCompleted / allTasks.length) * 100);

    const phase1Completed = phase1Tasks.filter(t => progress[t.id]).length;
    const phase2Completed = phase2Tasks.filter(t => progress[t.id]).length;
    const phase3Completed = phase3Tasks.filter(t => progress[t.id]).length;

    const phase1Progress = Math.round((phase1Completed / phase1Tasks.length) * 100);
    const phase2Progress = Math.round((phase2Completed / phase2Tasks.length) * 100);
    const phase3Progress = Math.round((phase3Completed / phase3Tasks.length) * 100);


    // Determine current phase
    let currentPhase = 'Day 1';
    if (phase1Progress === 100 && phase2Progress === 100) {
        currentPhase = 'Days 61-90';
    } else if (phase1Progress === 100) {
        currentPhase = 'Days 31-60';
    } else if (phase1Completed > 0) {
        currentPhase = 'Days 1-30';
    }

    // Update dashboard
    document.getElementById('overall-progress').textContent = `${overallProgress}%`;
    document.getElementById('tasks-completed').textContent = totalCompleted;
    document.getElementById('current-day').textContent = currentPhase;

    // Update phase progress bars
    const phase1Bar = document.getElementById('phase1-progress');
    const phase2Bar = document.getElementById('phase2-progress');
    const phase3Bar = document.getElementById('phase3-progress');

    if (phase1Bar) {
        phase1Bar.style.width = `${phase1Progress}%`;
        phase1Bar.parentElement.nextElementSibling.textContent = `${phase1Progress}% complete`;
    }
    if (phase2Bar) {
        phase2Bar.style.width = `${phase2Progress}%`;
        phase2Bar.parentElement.nextElementSibling.textContent = `${phase2Progress}% complete`;
    }
    if (phase3Bar) {
        phase3Bar.style.width = `${phase3Progress}%`;
        phase3Bar.parentElement.nextElementSibling.textContent = `${phase3Progress}% complete`;
    }
}

// Prompt Modal
function viewPrompt(title, prompt) {
    currentPrompt = prompt;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-prompt').textContent = prompt;
    document.getElementById('prompt-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('prompt-modal').classList.remove('active');
}

function copyPrompt() {
    copyToClipboard(currentPrompt);
    closeModal();
}

// Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! 📋');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy');
    });
}

// Toast Notifications
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Utility Functions
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttr(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function escapeTemplate(str) {
    return str.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/"/g, '\u0026quot;');
}

function renderSkillsLibrary() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    const data = SKILLS_LIBRARY_DATA;
    let html = '';

    data.categories.forEach(category => {
        html += `
            <div class="skills-category">
                <h2 class="category-title">
                    <span class="category-icon">${category.icon}</span>
                    ${category.name}
                </h2>
                <div class="skills-grid-inner">
                    ${category.skills.map(skill => `
                        <div class="skill-card">
                            <div class="skill-card-header">
                                <h3>${skill.name}</h3>
                            </div>
                            <p class="skill-card-description">${skill.description}</p>
                            <span class="skill-card-short">${skill.short}</span>
                            <div class="skill-card-buttons">
                                <button class="skill-btn skill-btn-view" onclick="viewSkill('${skill.id}')">
                                    <span>👁️</span> View
                                </button>
                                <button class="skill-btn skill-btn-copy" onclick="copySkill('${skill.id}')">
                                    <span>📋</span> Copy
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Add styles if not exists
    if (!document.getElementById('skills-styles')) {
        const styles = `
            .skills-category {
                margin-bottom: 2rem;
            }
            .category-title {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
                font-size: 1.125rem;
                color: var(--text-primary);
            }
            .category-icon {
                font-size: 1.25rem;
            }
            .skills-grid-inner {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                gap: 1rem;
            }
            .skill-card {
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: 1rem;
                display: flex;
                flex-direction: column;
                transition: all 0.2s ease;
            }
            .skill-card:hover {
                border-color: var(--accent-color);
                box-shadow: var(--shadow-md);
            }
            .skill-card-header h3 {
                font-size: 1rem;
                margin-bottom: 0.5rem;
                color: var(--text-primary);
            }
            .skill-card-description {
                font-size: 0.875rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
                line-height: 1.5;
                flex: 1;
            }
            .skill-card-short {
                font-size: 0.75rem;
                color: var(--text-muted);
                margin-bottom: 0.75rem;
            }
            .skill-card-buttons {
                display: flex;
                gap: 0.5rem;
                margin-top: auto;
            }
        `;
        const styleSheet = document.createElement('style');
        styleSheet.id = 'skills-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

// Current skill for modal/copy operations
let currentSkillData = null;

// View skill in modal
function viewSkill(skillId) {
    const skillData = getSkillData(skillId);
    if (!skillData) return;

    currentSkillData = skillData;

    // Update modal content
    document.getElementById('skill-modal-title').textContent = formatSkillName(skillId);
    document.getElementById('skill-modal-description').textContent = skillData.description;
    document.getElementById('skill-modal-frontmatter').textContent = skillData.frontmatter;
    document.getElementById('skill-modal-body').textContent = skillData.body;

    // Show modal
    document.getElementById('skill-modal').classList.add('active');
}

// Copy skill to clipboard
function copySkill(skillId) {
    const skillData = getSkillData(skillId);
    if (!skillData) return;

    const fullContent = `${skillData.frontmatter}\n\n${skillData.body}`;
    copyToClipboard(fullContent);
}

// Close skill modal
function closeSkillModal() {
    document.getElementById('skill-modal').classList.remove('active');
    currentSkillData = null;
}

// Copy full SKILL.md
function copySkillFull() {
    if (!currentSkillData) return;
    const fullContent = `${currentSkillData.frontmatter}\n\n${currentSkillData.body}`;
    copyToClipboard(fullContent);
    closeSkillModal();
}

// Copy frontmatter only
function copySkillFrontmatter() {
    if (!currentSkillData) return;
    copyToClipboard(currentSkillData.frontmatter);
}

// Copy body only
function copySkillBody() {
    if (!currentSkillData) return;
    copyToClipboard(currentSkillData.body);
}

// Get skill data from skills-data.js
function getSkillData(skillId) {
    if (typeof skillsData !== 'undefined' && skillsData[skillId]) {
        return skillsData[skillId];
    }
    return null;
}

// Format skill ID to readable name
function formatSkillName(skillId) {
    return skillId.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
        closeSkillModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========================================
// OpenCode Documentation Navigation
// ========================================

let currentOpencodePage = 'intro';

// Load OpenCode page content
function loadOpencodePage(pageId) {
    currentOpencodePage = pageId;
    
    // Update active states
    document.querySelectorAll('.nav-item, .nav-subitem, .nav-nesteditem, .nav-nested2item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelectorAll(`[data-opencode-page="${pageId}"]`).forEach(item => {
        item.classList.add('active');
    });
    
    // Load content
    const contentContainer = document.getElementById('opencode-page-content');
    if (contentContainer && typeof opencodeDocs !== 'undefined' && opencodeDocs[pageId]) {
        contentContainer.innerHTML = opencodeDocs[pageId].content;
        
        // Scroll to top
        document.querySelector('.main-content').scrollTop = 0;
    }
}
