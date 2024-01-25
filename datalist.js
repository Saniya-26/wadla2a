// Load user data from local storage or API endpoint and display in the list
document.addEventListener('DOMContentLoaded', function() {
    fetch('users.json') // You may need to change the URL depending on your server setup
        .then(response => response.json())
        .then(users => {
            const userDataList = document.getElementById('userDataList');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
                userDataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error if needed
        });
});
