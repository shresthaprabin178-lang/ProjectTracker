// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateChartsTheme();
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
}

// Charts Initialization
const budgetCtx = document.getElementById('budgetChart').getContext('2d');
const statusCtx = document.getElementById('statusChart').getContext('2d');

let budgetChart = new Chart(budgetCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Estimated',
            data: [400, 450, 420, 500, 480, 600],
            borderColor: '#6366f1',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.1)'
        }, {
            label: 'Actual Bill',
            data: [380, 430, 460, 490, 510, 580],
            borderColor: '#10b981',
            tension: 0.4,
            borderDash: [5, 5]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            y: { beginAtZero: true, grid: { display: false } },
            x: { grid: { display: false } }
        }
    }
});

let statusChart = new Chart(statusCtx, {
    type: 'doughnut',
    data: {
        labels: ['Ongoing', 'Completed', 'Delayed', 'Pending'],
        datasets: [{
            data: [24, 15, 3, 6],
            backgroundColor: ['#6366f1', '#10b981', '#f43f5e', '#f59e0b'],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// Update chart colors on theme change
function updateChartsTheme() {
    const isDark = htmlElement.classList.contains('dark');
    const color = isDark ? '#94a3b8' : '#64748b';
    
    [budgetChart, statusChart].forEach(chart => {
        chart.options.scales?.x?.ticks && (chart.options.scales.x.ticks.color = color);
        chart.options.scales?.y?.ticks && (chart.options.scales.y.ticks.color = color);
        chart.options.plugins.legend.labels.color = color;
        chart.update();
    });
}

// Simple Router (Simulation)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
        
        const view = item.getAttribute('data-view');
        console.log(`Switching to view: ${view}`);
        // In a real app, you would swap the innerHTML or use a Framework router here
    });
});
