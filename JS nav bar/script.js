const toggleBtn = document.getElementById('toggleNavBar');
const links = document.getElementById('linkList')
toggleBtn.addEventListener('click', () => {
    // toggleBtn.classList.toggle('rotate90Deg')
    links.classList.toggle('showLink');
});