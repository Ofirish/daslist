// utility.js
function getListItems(listId) {
    const list = document.getElementById(listId);
    const items = [];
    list.querySelectorAll('tr').forEach(row => {
        const itemName = row.querySelector('td:nth-child(1)').textContent;
        const itemQty = row.querySelector('td:nth-child(2)').textContent;
        const itemCategory = row.querySelector('td:nth-child(3)').textContent;
        items.push({ name: itemName, qty: itemQty, category: itemCategory });
    });
    return items;
}

function markAsBought(itemRow) {
    const boughtListContainer = document.getElementById('bought-list-container');
    const itemCategory = itemRow.querySelector('td:nth-child(3)').textContent;
    let categorySection = document.getElementById(`bought-list-${itemCategory}`);
    
    if (!categorySection) {
        categorySection = document.createElement('div');
        categorySection.id = `bought-list-${itemCategory}`;
        categorySection.innerHTML = `<h3>${itemCategory}</h3><table><tbody></tbody></table>`;
        boughtListContainer.appendChild(categorySection);
    }
    
    const tbody = categorySection.querySelector('tbody');
    itemRow.querySelector('td:nth-child(1)').style.textDecoration = 'line-through';
    itemRow.querySelector('td:nth-child(2)').style.textDecoration = 'line-through';
    itemRow.querySelector('td:nth-child(3)').style.textDecoration = 'line-through';
    itemRow.querySelector('td:nth-child(4)').innerHTML = '<button onclick="moveToShoppingList(this.parentElement.parentElement)">Back to Items to Buy</button>';
    tbody.appendChild(itemRow);
}

function markAsPending(itemRow) {
    const pendingListContainer = document.getElementById('pending-list-container');
    const itemCategory = itemRow.querySelector('td:nth-child(3)').textContent;
    let categorySection = document.getElementById(`pending-list-${itemCategory}`);
    
    if (!categorySection) {
        categorySection = document.createElement('div');
        categorySection.id = `pending-list-${itemCategory}`;
        categorySection.innerHTML = `<h3>${itemCategory}</h3><table><tbody></tbody></table>`;
        pendingListContainer.appendChild(categorySection);
    }
    
    const tbody = categorySection.querySelector('tbody');
    itemRow.querySelector('td:nth-child(1)').style.textDecoration = 'none';
    itemRow.querySelector('td:nth-child(2)').style.textDecoration = 'none';
    itemRow.querySelector('td:nth-child(3)').style.textDecoration = 'none';
    itemRow.querySelector('td:nth-child(4)').innerHTML = '<button onclick="moveToShoppingList(this.parentElement.parentElement)">Back to Items to Buy</button>';
    tbody.appendChild(itemRow);
}

function moveToShoppingList(itemRow) {
    const shoppingListContainer = document.getElementById('shopping-list-container');
    const itemCategory = itemRow.querySelector('td:nth-child(3)').textContent;
    let categorySection = document.getElementById(`shopping-list-${itemCategory}`);
    
    if (!categorySection) {
        categorySection = document.createElement('div');
        categorySection.id = `shopping-list-${itemCategory}`;
        categorySection.innerHTML = `<h3>${itemCategory}</h3><table><tbody></tbody></table>`;
        shoppingListContainer.appendChild(categorySection);
    }
    
    const tbody = categorySection.querySelector('tbody');
    itemRow.querySelector('td:nth-child(1)').style.textDecoration = 'none';
    itemRow.querySelector('td:nth-child(2)').style.textDecoration = 'none';
    itemRow.querySelector('td:nth-child(3)').style.textDecoration = 'none';
    itemRow.querySelector('td:nth-child(4)').innerHTML = `
        <button onclick="markAsBought(this.parentElement.parentElement)">Bought</button>
        <button onclick="markAsPending(this.parentElement.parentElement)">Pending</button>
        <button onclick="editItem(this.parentElement.parentElement)">Edit</button>
    `;
    tbody.appendChild(itemRow);
}

// Add touch event listeners for mobile functionality
document.addEventListener('touchstart', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.click();
    }
});
