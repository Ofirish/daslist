document.addEventListener('DOMContentLoaded', function() {
    loadCategories();

    document.getElementById('item-category').addEventListener('change', function() {
        if (this.value === 'Other') {
            document.getElementById('new-category').style.display = 'block';
        } else {
            document.getElementById('new-category').style.display = 'none';
        }
    });

    document.getElementById('add-item-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const newCategory = document.getElementById('new-category').value;
        if (newCategory) {
            addCategory(newCategory);
        }
    });

    document.getElementById('item-category').addEventListener('touchstart', function() {
        if (this.value === 'Other') {
            document.getElementById('new-category').style.display = 'block';
        } else {
            document.getElementById('new-category').style.display = 'none';
        }
    });

    document.getElementById('add-item-form').addEventListener('touchstart', function(event) {
        event.preventDefault();
        
        const newCategory = document.getElementById('new-category').value;
        if (newCategory) {
            addCategory(newCategory);
        }
    });
});

function loadCategories() {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const categorySelect = document.getElementById('item-category');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function addCategory(category) {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    if (!categories.includes(category)) {
        categories.push(category);
        localStorage.setItem('categories', JSON.stringify(categories));
        
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        document.getElementById('item-category').appendChild(option);
    }
}
