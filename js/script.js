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
        console.log(body)
        if (themePreferences.value == 'light') {
            body.style.backgroundColor = 'aliceblue'
        } else if (themePreferences.value == 'dark') {
            body.style.backgroundColor = 'black'
            console.log(body)
        }
    });


    const listPreferences =  document.getElementById('list-select')
    listPreferences.addEventListener('change', function(event) {
        const list = document.getElementById('item-list')
        if (listPreferences.value == 'black') {
            list.style.color = 'black'
        } else if (listPreferences.value == 'red') {
            list.style.color = 'red'
        } else if (listPreferences.value == 'green') {
            list.style.color = 'green'
        }
        else if (listPreferences.value == 'blue') {
            list.style.color = 'blue'
        }
        else if (listPreferences.value == 'purple') {
            list.style.color = 'purple'
        }
        else if (listPreferences.value == 'orange') {
            list.style.color = 'orange'
        }
    });
});