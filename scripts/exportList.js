// exportList.js
document.getElementById('export-list-button').addEventListener('click', function() {
    const shoppingList = getListItems('shopping-list');
    const boughtList = getListItems('bought-list');
    const pendingList = getListItems('pending-list');

    const data = {
        shoppingList,
        boughtList,
        pendingList
    };

    const fileName = (document.getElementById('export-file-name').value || 'list') + '.json';
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});
