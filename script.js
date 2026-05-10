// NPR Currency Formatter
const nprFormatter = new Intl.NumberFormat('ne-NP', {
    style: 'currency',
    currency: 'NPR',
    minimumFractionDigits: 0
});

// Sample Data
const projects = [
    { id: 'PRJ-001', name: 'Valley Road Expansion', amount: 45000000, status: 'Ongoing', progress: 65 },
    { id: 'PRJ-002', name: 'Smart City Hub', amount: 120000000, status: 'Pending', progress: 10 },
    { id: 'PRJ-003', name: 'River Dam Project', amount: 8500000, status: 'Completed', progress: 100 },
    { id: 'PRJ-004', name: 'Community Hospital', amount: 55000000, status: 'Delayed', progress: 40 }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderStats();
    renderTable();
    initCharts();
});

function renderStats() {
    const stats = [
        { label: 'Total Projects', val: '48', icon: 'layers', color: 'blue' },
        { label: 'Active Projects', val: '24', icon: 'activity', color: 'indigo' },
        { label: 'Total Budget (NPR)', val: nprFormatter.format(235000000), icon: 'wallet', color: 'emerald' },
        { label: 'Delayed', val: '03', icon: 'alert-triangle', color: 'rose' }
    ];

    const grid = document.getElementById('stats-grid');
    grid.innerHTML = stats.map(s => `
        <div class="stat-card">
            <div class="p-2 w-10 h-10 bg-${s.color}-50 dark:bg-${s.color}-900/20 text-${s.color}-600 rounded-lg flex items-center justify-center">
                <i data-lucide="${s.icon}" class="w-5 h-5"></i>
            </div>
            <p class="text-slate-500 text-xs mt-4 uppercase tracking-wider font-semibold">${s.label}</p>
            <p class="text-xl font-bold dark:text-white mt-1">${s.val}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderTable() {
    const tbody = document.getElementById('project-table-body');
    tbody.innerHTML = projects.map(p => `
        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
            <td class="px-6 py-4 text-xs font-mono">${p.id}</td>
            <td class="px-6 py-4 font-semibold text-sm">${p.name}</td>
            <td class="px-6 py-4 text-sm">${nprFormatter.format(p.amount)}</td>
            <td class="px-6 py-4">
                <span class="px-2 py-1 rounded-md text-[10px] font-bold uppercase ${getStatusStyle(p.status)}">
                    ${p.status}
                </span>
            </td>
            <td class="px-6 py-4">
                <div class="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
                    <div class="bg-indigo-600 h-1.5 rounded-full" style="width: ${p.progress}%"></div>
                </div>
            </td>
        </tr>
    `).join('');
}

function getStatusStyle(status) {
    if (status === 'Ongoing') return 'bg-blue-100 text-blue-700';
    if (status === 'Completed') return 'bg-emerald-100 text-emerald-700';
    if (status === 'Delayed') return 'bg-rose-100 text-rose-700';
    return 'bg-amber-100 text-amber-700';
}

function initCharts() {
    // Budget Chart
    new Chart(document.getElementById('budgetChart'), {
        type: 'bar',
        data: {
            labels: ['PRJ-001', 'PRJ-002', 'PRJ-003', 'PRJ-004'],
            datasets: [{ label: 'Budget in NPR', data: [450, 1200, 85, 550], backgroundColor: '#6366f1', borderRadius: 8 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    // Status Chart
    new Chart(document.getElementById('statusChart'), {
        type: 'doughnut',
        data: {
            labels: ['Ongoing', 'Completed', 'Delayed'],
            datasets: [{ data: [24, 15, 9], backgroundColor: ['#6366f1', '#10b981', '#f43f5e'], borderWidth: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, cutout: '75%' }
    });
}

// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
