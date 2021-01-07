const search = document.querySelector('.search_icon--wrapper');
const searchBar = document.querySelector('.search-bar');
const cancel = document.querySelector('.search-cancel');

search.addEventListener('click', () => {
    searchBar.classList.toggle('active');
})

cancel.addEventListener('click', () => {
    searchBar.classList.toggle('active');
})