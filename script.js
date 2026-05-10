// Sidebar Mobile Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function toggleSidebar() {
    const isOpen = !sidebar.classList.contains('-translate-x-full');
    
    if (isOpen) {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        sidebarOverlay.classList.remove('opacity-100');
    } else {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        setTimeout(() => sidebarOverlay.classList.add('opacity-100'), 10);
    }
}

mobileMenuBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar on mobile when a link is clicked
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) toggleSidebar();
    });
});

// Chart.js - Responsive Font Scaling
Chart.defaults.font.size = window.innerWidth < 768 ? 10 : 12;

// ... (Rest of your Chart.js and Theme toggle logic from the previous script)
