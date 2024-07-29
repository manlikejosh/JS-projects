const modalSelect = document.getElementById('modalSelect');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const backDrop = document.querySelector('.backDrop');

openBtn.addEventListener('click', () => {
    modal.classList.toggle('modalDisplay');
    modalSelect.classList.toggle('selectDisplay');
    backDrop.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('modalDisplay');
    modalSelect.classList.toggle('selectDisplay');
    backDrop.classList.toggle('visible');

});