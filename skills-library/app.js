document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const navItems = document.querySelectorAll('.nav-item');
    const navSections = document.querySelectorAll('.nav-section');
    const skillTitle = document.getElementById('skillTitle');
    const skillDescription = document.getElementById('skillDescription');
    const skillContent = document.getElementById('skillContent');
    const actionBar = document.getElementById('actionBar');
    const copyBtn = document.getElementById('copyBtn');
    const copyFrontmatterBtn = document.getElementById('copyFrontmatterBtn');
    const copyBodyBtn = document.getElementById('copyBodyBtn');
    const copyFeedback = document.getElementById('copyFeedback');

    let currentSkill = null;

    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();

        if (query === '') {
            navItems.forEach(item => item.classList.remove('hidden'));
            navSections.forEach(section => section.classList.remove('hidden'));
        } else {
            navItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                const isVisible = text.includes(query);
                item.classList.toggle('hidden', !isVisible);
            });

            // Hide sections if all their items are hidden
            navSections.forEach(section => {
                const nextSibling = section.nextElementSibling;
                let hasVisibleItems = false;
                while (nextSibling && !nextSibling.classList.contains('nav-section')) {
                    if (nextSibling.classList.contains('nav-item') && !nextSibling.classList.contains('hidden')) {
                        hasVisibleItems = true;
                        break;
                    }
                    if (nextSibling.classList.contains('nav-section')) break;
                }
                section.classList.toggle('hidden', !hasVisibleItems);
            });
        }
    });

    // Skill selection
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const skillId = this.dataset.skill;
            selectSkill(skillId);

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function selectSkill(skillId) {
        const skill = skillsData[skillId];
        if (!skill) return;

        currentSkill = skill;

        // Update header
        const displayName = skillId.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        skillTitle.textContent = displayName;
        skillDescription.textContent = skill.description;

        // Build skill content
        let html = `
            <div class="skill-display">
                <div class="skill-meta">
                    <h3>
                        <span class="badge">Agent Skill</span>
                    </h3>
                    <p class="description">${skill.description}</p>
                </div>

                <div class="code-section">
                    <div class="code-header">
                        <span>YAML Frontmatter</span>
                    </div>
                    <div class="code-body">
                        <pre><code class="language-yaml">${escapeHtml(skill.frontmatter)}</code></pre>
                    </div>
                </div>

                <div class="code-section">
                    <div class="code-header">
                        <span>Markdown Body</span>
                    </div>
                    <div class="code-body">
                        <pre><code>${escapeHtml(skill.body)}</code></pre>
                    </div>
                </div>

                <div class="code-section">
                    <div class="code-header">
                        <span>Complete SKILL.md</span>
                    </div>
                    <div class="code-body">
                        <pre><code>${escapeHtml(skill.frontmatter)}\n\n${skill.body}</code></pre>
                    </div>
                </div>
            </div>
        `;

        skillContent.innerHTML = html;
        actionBar.style.display = 'flex';
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showFeedback(message) {
        copyFeedback.textContent = message;
        copyFeedback.classList.add('show');
        setTimeout(() => {
            copyFeedback.classList.remove('show');
        }, 2000);
    }

    function copyToClipboard(text, buttonName) {
        navigator.clipboard.writeText(text).then(() => {
            showFeedback(`${buttonName} copied!`);
        }).catch(err => {
            console.error('Failed to copy:', err);
            showFeedback('Copy failed');
        });
    }

    // Copy buttons
    copyBtn.addEventListener('click', function() {
        if (currentSkill) {
            const fullContent = `${currentSkill.frontmatter}\n\n${currentSkill.body}`;
            copyToClipboard(fullContent, 'SKILL.md');
        }
    });

    copyFrontmatterBtn.addEventListener('click', function() {
        if (currentSkill) {
            copyToClipboard(currentSkill.frontmatter, 'Frontmatter');
        }
    });

    copyBodyBtn.addEventListener('click', function() {
        if (currentSkill) {
            copyToClipboard(currentSkill.body, 'Body');
        }
    });

    // Category card click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryText = this.querySelector('span:last-child').textContent;
            const skillName = getSkillFromCategory(categoryText);

            if (skillName) {
                // Find and click the corresponding nav item
                const navItem = document.querySelector(`[data-skill="${skillName}"]`);
                if (navItem) {
                    navItem.click();
                    // Expand the section if needed
                    const section = navItem.previousElementSibling;
                    if (section && section.classList.contains('nav-section')) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }
        });
    });

    function getSkillFromCategory(categoryText) {
        const mapping = {
            'Design API': 'design-api',
            'Design Database': 'design-database',
            'Design Patterns': 'design-patterns',
            'System Design': 'system-design',
            'Best Practices': 'code-review-best-practices',
            'Performance': 'code-review-performance',
            'Refactor': 'code-review-refactor',
            'Security': 'code-review-security',
            'Debug Error': 'debug-error',
            'Performance Profile': 'debug-performance-profile',
            'Trace Issue': 'debug-trace-issue',
            'API Docs': 'docs-api-docs',
            'Changelog': 'docs-changelog',
            'Contributing': 'docs-contributing',
            'README': 'docs-readme',
            'Compare Tech': 'learning-compare-tech',
            'Explain Like I\'m 5': 'learning-eli5',
            'Explain Concept': 'learning-explain-concept',
            'Roadmap': 'learning-roadmap',
            'Best Practices': 'prompts-best-practices',
            'Create Template': 'prompts-create-template',
            'Improve': 'prompts-improve',
            'Coverage Analysis': 'testing-coverage-analysis',
            'Edge Cases': 'testing-edge-cases',
            'Generate E2E Tests': 'testing-generate-e2e-tests',
            'Generate Unit Tests': 'testing-generate-unit-tests',
            'Email': 'writing-email',
            'Presentation': 'writing-presentation',
            'Technical Blog': 'writing-technical-blog'
        };

        return mapping[categoryText];
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
});
