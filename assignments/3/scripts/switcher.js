<!-- Theme Switcher -->
<div class="theme-switcher">
    <h3>Theme Switcher</h3>
    <div class="theme-buttons">
        <button class="theme-button active" data-theme="styles">Hand-Written</button>
        <button class="theme-button" data-theme="min">Minimalist</button>
        <button class="theme-button" data-theme="creative">Creative</button>
        <button class="theme-button" data-theme="pro">Professional</button>
        <button class="theme-button" data-theme="crazy">Crazy</button>
        <button class="theme-button" data-theme="ai-1">AI 1</button>
        <button class="theme-button" data-theme="ai-2">AI 2</button>
        <button class="theme-button" data-theme="ai-3">AI 3</button>
        <button class="theme-button" data-theme="ai-4">AI 4</button>
        <button class="theme-button" data-theme="ai-5">AI 5</button>
        <button class="theme-button" data-theme="ai-3">AI Image</button>
        <button class="theme-button" data-theme="hybrid">Hybrid</button>
    </div>
</div>

<!-- Theme Switcher Script -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Get all theme buttons
        const themeButtons = document.querySelectorAll('.theme-button');
        // Get the stylesheet link element
        const themeStylesheet = document.getElementById('css-theme');

        // Function to set active theme
        function setActiveTheme(themeName) {
            // Update stylesheet href
            themeStylesheet.href = `styles/${themeName}.css`;

            // Update active button state
            themeButtons.forEach(button => {
                if (button.dataset.theme === themeName) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });

            // Save preference to localStorage
            localStorage.setItem('preferredTheme', themeName);
        }

        // Add click event to all theme buttons
        themeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const themeName = this.dataset.theme;
                setActiveTheme(themeName);
            });
        });

        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem('preferredTheme');
        if (savedTheme) {
            setActiveTheme(savedTheme);
        }
    });
</script>
