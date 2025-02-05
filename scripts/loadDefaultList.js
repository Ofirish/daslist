document.getElementById('load-default-list-button').addEventListener('click', function() {
    const defaultList = [
        { name: 'Milk', qty: 2, category: 'Dairy' },
        { name: 'Bread', qty: 1, category: 'Bakery' },
        { name: 'Eggs', qty: 12, category: 'Dairy' }
    ];
    clearAllLists();
    defaultList.forEach(item => addItemToShoppingList(item.name, item.qty, item.category));
});

document.getElementById('load-default-list-button').addEventListener('touchstart', function() {
    const defaultList = [
        { name: 'Milk', qty: 2, category: 'Dairy' },
        { name: 'Bread', qty: 1, category: 'Bakery' },
        { name: 'Eggs', qty: 12, category: 'Dairy' }
    ];
    clearAllLists();
    defaultList.forEach(item => addItemToShoppingList(item.name, item.qty, item.category));
});
