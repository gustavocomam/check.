if (localStorage.getItem('searchValue')) {
    searchInput.value = localStorage.getItem('searchValue');
  }
  
  searchInput.onkeyup = function() {
    localStorage.setItem('searchValue', searchInput.value);
}

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let searchTerm = searchInput.value;
});