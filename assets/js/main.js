// ------- tabs ---------
const tabcontents = document.querySelectorAll('.tab_content');
const tablinks = document.querySelectorAll('.tabs a');

const openTab = (event, tabName) => {
    tabcontents.forEach((a) => (a.style.display = 'none'));

    tablinks.forEach((i) => i.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).style.display = 'block';
}


// ------- Three dotted menu ----------
const toggle = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const list = document.querySelector('.list')
const menuOverlay = document.querySelector('.menu__overlay')

toggle.onclick = (() => {
    menu.classList.add('active');
    menuOverlay.classList.add('active');
});

menuOverlay.onclick = (() => {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
})

list.onclick = (() => {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
})


// -------- add drafts sample one ----------
const drop_btn = document.querySelector('.drop__btn');
const menu_wrapper = document.querySelector('.wrapper');
const caret = document.querySelector('.bxs-chevron-down')

drop_btn.onclick = (() => {
    menu_wrapper.classList.toggle('show');
    caret.classList.toggle('bxs-chevron-down')
    caret.classList.toggle('bxs-chevron-up')
    
});


// -------- add drafts sample two ----------
// -------- modals ------------

const openModalBtns = document.querySelectorAll('[data-modal-target]')
const closeModalBtns = document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementById('overlay')

openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.page__modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.page__modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

const openModal = (modal) => {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

const closeModal = (modal) => {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}