   // Team category switching
        function showCategory(categoryId) {
            // Hide all team grids
            document.querySelectorAll('.team-grid').forEach(grid => {
                grid.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected grid
            document.getElementById(categoryId).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Dynamic content switching
        function showContent(contentId) {
            // Hide all content
            document.querySelectorAll('.dynamic-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all badges
            document.querySelectorAll('.badge').forEach(badge => {
                badge.classList.remove('active');
            });
            
            // Show selected content
            document.getElementById(contentId).classList.add('active');
            
            // Add active class to clicked badge
            event.target.classList.add('active');
        }

        // Trigger counter animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Animate all counters on the page
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
            });
        });