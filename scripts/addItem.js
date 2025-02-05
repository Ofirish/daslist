document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('item-name').value;
    const itemQty = document.getElementById('item-qty').value;
    const itemCategory = document.getElementById('item-category').value || document.getElementById('new-category').value;
    
    addItemToShoppingList(itemName, itemQty, itemCategory);
    
    document.getElementById('item-name').value = '';
    document.getElementById('item-qty').value = '';
    document.getElementById('item-category').value = '';
    document.getElementById('new-category').value = '';
    document.getElementById('new-category').style.display = 'none';
    document.getElementById('item-name').focus();
});

document.getElementById('add-item-form').addEventListener('touchstart', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('item-name').value;
    const itemQty = document.getElementById('item-qty').value;
    const itemCategory = document.getElementById('item-category').value || document.getElementById('new-category').value;
    
    addItemToShoppingList(itemName, itemQty, itemCategory);
    
    document.getElementById('item-name').value = '';
    document.getElementById('item-qty').value = '';
    document.getElementById('item-category').value = '';
    document.getElementById('new-category').value = '';
    document.getElementById('new-category').style.display = 'none';
    document.getElementById('item-name').focus();
});

document.getElementById('item-category').addEventListener('change', function() {
    if (this.value === 'Other') {
        document.getElementById('new-category').style.display = 'block';
    } else {
        document.getElementById('new-category').style.display = 'none';
    }
});

function addItemToShoppingList(itemName, itemQty, itemCategory) {
    const shoppingListContainer = document.getElementById('shopping-list-container');
    let categorySection = document.getElementById(`shopping-list-${itemCategory}`);
    
    if (!categorySection) {
        categorySection = document.createElement('div');
        categorySection.id = `shopping-list-${itemCategory}`;
        categorySection.innerHTML = `<h3>${itemCategory}</h3><table><tbody></tbody></table>`;
        shoppingListContainer.appendChild(categorySection);
    }
    
    const tbody = categorySection.querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${itemName}</td>
        <td>${itemQty}</td>
        <td>${itemCategory}</td>
        <td>
            <button onclick="markAsBought(this.parentElement.parentElement)">Bought</button>
            <button onclick="markAsPending(this.parentElement.parentElement)">Pending</button>
            <button onclick="editItem(this.parentElement.parentElement)">Edit</button>
        </td>
    `;
    tbody.appendChild(row);
    return row;
}

function editItem(itemRow) {
    const itemName = itemRow.querySelector('td:nth-child(1)').textContent;
    const itemQty = itemRow.querySelector('td:nth-child(2)').textContent;
    const itemCategory = itemRow.querySelector('td:nth-child(3)').textContent;

    document.getElementById('item-name').value = itemName;
    document.getElementById('item-qty').value = itemQty;
    document.getElementById('item-category').value = itemCategory;
    if (itemCategory === 'Other') {
        document.getElementById('new-category').style.display = 'block';
        document.getElementById('new-category').value = itemCategory;
    } else {
        document.getElementById('new-category').style.display = 'none';
    }

    itemRow.remove();
}
