function addToContacts() {
    window.open('content://contacts/people/?action=edit&name=Aymd%20Agency&phone=+2120644334136', '_blank');
}

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.menu-links');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
