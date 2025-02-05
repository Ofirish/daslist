document.getElementById('load-list-button').addEventListener('click', function() {
    document.getElementById('load-list-input').click();
});

document.getElementById('load-list-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = JSON.parse(e.target.result);
            clearAllLists();
            data.shoppingList.forEach(item => addItemToShoppingList(item.name, item.qty, item.category));
            data.boughtList.forEach(item => {
                const row = addItemToShoppingList(item.name, item.qty, item.category);
                markAsBought(row);
            });
            data.pendingList.forEach(item => {
                const row = addItemToShoppingList(item.name, item.qty, item.category);
                markAsPending(row);
            });
        };
        reader.readAsText(file);
    }
});
