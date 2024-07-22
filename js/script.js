
document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const preferencesForm = document.getElementById('preferences-form');

    // Example: Add item to the list
    function addItemToList(itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        itemList.appendChild(li);
    }

    // Example: Handle form submission to add item
    preferencesForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newItemText = event.target.elements.item.value;
        addItemToList(newItemText);
        event.target.reset(); // Clear the form input
    });
});