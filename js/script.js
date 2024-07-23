
document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const themePreferences = document.getElementById('theme-select');

    // Example: Add item to the list
    function addItemToList(itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        itemList.appendChild(li);
    }

    // Example: Handle form submission to add item
    themePreferences.addEventListener('change', function(event) {
        const body = document.querySelector('body')
        console.log(themePreferences.value)
        if (themePreferences.value == 'light') {
            body.backgroundColor = '#FFFFFF'
        } else if (themePreferences.value == 'dark') {
            body.backgroundColor = '#717171'
        }
    });
});