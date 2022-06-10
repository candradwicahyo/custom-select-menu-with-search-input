window.onload = () => {
  
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('select')) {
      const box = document.querySelector('.item-box');
      box.classList.toggle('active');
      const items = document.querySelectorAll('.select-item');
      items.forEach(item => {
        selectItem(item);
        searchItem(item);
      });
    }
  });
  
  function selectItem(item) {
    item.addEventListener('click', function() {
      const value = this.textContent;
      const text = document.querySelector('.text');
      text.textContent = value;
    });
  }
  
  function searchItem(item) {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keyup', function() {
      const value = this.value.toLowerCase();
      const itemText = item.textContent.toLowerCase();
      item.style.display = (itemText.indexOf(value) != -1) ? '' : 'none';
    });
  }
  
}