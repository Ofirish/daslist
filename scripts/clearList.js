document.getElementById('clear-list-button').addEventListener('click', function() {
    clearAllLists();
});

document.getElementById('clear-list-button').addEventListener('touchstart', function() {
    clearAllLists();
});

function clearAllLists() {
    document.getElementById('shopping-list-container').innerHTML = '';
    document.getElementById('bought-list-container').innerHTML = '';
    document.getElementById('pending-list-container').innerHTML = '';
}
