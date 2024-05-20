const revenueLink = document.getElementById('revenueLink');
const ordersLink = document.getElementById('ordersLink');
const closeOrdersBtn = document.getElementById('closeOrdersBtn');
const closeRevenueBtn = document.getElementById('closeRevenueBtn');
const dashboardPanel = document.querySelector('.dashboard');

revenueLink.addEventListener('click', () => {
    dashboardPanel.classList.add('show-revenue');
    scrollToTop();
})

closeRevenueBtn.addEventListener('click', () => {
    dashboardPanel.classList.remove('show-revenue');
})

ordersLink.addEventListener('click', () => {
    dashboardPanel.classList.add('show-orders');
    scrollToTop();
})

closeOrdersBtn.addEventListener('click', () => {
    dashboardPanel.classList.remove('show-orders');
})

function scrollToTop() {
    setTimeout(() => {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 110)
   }