const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const addBtn = document.getElementById('addBtn');
const editBtn = document.getElementById('editBtn');
const main = document.querySelector('.main');
const form = document.querySelector('form');
const addAssignBtn = document.getElementById('addAssignBtn')
const cancelAddAssignBtn = document.getElementById('cancelAddAssignBtn')
const editBtns = document.querySelectorAll('[data=Edit]');
const historyBtns = document.querySelectorAll('[data="Previous Recommendations"]')
const assignBtns = document.querySelectorAll('[data="Assign Products"')
const cancelAssignBtn = document.getElementById('cancelAssignBtn');
const saveAssignBtn = document.getElementById('saveAssignBtn');
const seeDetailsBtns = document.querySelectorAll('.see-details-btn');
const closeAssignHistoryBtn = document.getElementById('closeAssignHistoryBtn');
const deleteDialog = document.getElementById('deleteDialog');
const deleteBtn = document.getElementById('deleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const deleteBtns = document.querySelectorAll('[data=Delete]');

editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.add('editing');
        scrollToTop();
    })
})

seeDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.add('showing-product-details');
        scrollToTop();
    })
})


addAssignBtn.addEventListener('click', () => {
    main.classList.remove('showing-product-details');
});
cancelAddAssignBtn.addEventListener('click', () => {
    main.classList.remove('showing-product-details');
})

assignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.add('assigning-products');
        scrollToTop();
    })
})

historyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.add('show-history');
        scrollToTop();
    })
})

closeAssignHistoryBtn.addEventListener('click', () => {
    main.classList.remove('show-history');
})


saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    main.classList.remove('adding');
    main.classList.remove('editing');
})

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    main.classList.remove('adding');
    main.classList.remove('editing');
})

saveAssignBtn.addEventListener('click', (e) => {
    main.classList.remove('assigning-products');
})

cancelAssignBtn.addEventListener('click', (e) => {
    main.classList.remove('assigning-products');
})

addBtn.addEventListener('click', () => {
    main.classList.add('adding');
    scrollToTop();
})

editBtn.addEventListener('click', () => {
    main.classList.add('editing');
    scrollToTop();
})

deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteDialog.classList.add('delete--active')
    })
})

deleteBtn.addEventListener('click', () => {
    deleteDialog.classList.remove('delete--active')
})

cancelDeleteBtn.addEventListener('click', () => {
    deleteDialog.classList.remove('delete--active')
})
function scrollToTop() {
   setTimeout(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }, 200)
  }