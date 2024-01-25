function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Validate form data (you can add more validation if needed)

    const userData = {
        username: username,
        email: email
    };

    // Using Fetch API for AJAX POST request
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        // Data successfully submitted, redirect to the data list page
        window.location.href = 'data-list.html';
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error if needed
    });
}
