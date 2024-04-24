function addToContacts() {
    window.open('content://contacts/people/?action=edit&name=Aymd%20Agency&phone=+2120644334136', '_blank');
}

function openMenu() {
    console.log('button was clicked!');
    var menu = document.querySelector('.menu-links');
    var button = document.querySelector('.menu-toggle');
    var menuContainer = document.querySelector('.menu-container');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        button.classList.remove('show');
        menuContainer.style.flexDirection = "row";  
    } else {
        menu.classList.add('show');
        button.classList.add('show');
        menuContainer.style.flexDirection = "column";   
    }
}

function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    window.addEventListener('scroll', function() {
        // Check if the page is scrolled more than 50 pixels
        if (window.scrollY > 50) {
            menuToggle.style.position = 'absolute';  // or 'menuToggle.style.display = 'none';' to hide it
        } else {
            menuToggle.style.position = 'fixed';
        }
    });
}

// Call setup function on page load
window.onload = function() {
    setupMenuToggle();
    // other setup code can go here
};