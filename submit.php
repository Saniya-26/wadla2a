<?php
header('Content-Type: application/json');

// Retrieve data from POST request
$data = json_decode(file_get_contents('php://input'), true);

// Validate and process the data (you can customize this part)

// For demonstration purposes, we'll store data in an array
$users = [];

// Load existing data if available
if (file_exists('users.json')) {
    $users = json_decode(file_get_contents('users.json'), true);
}

// Add new user data
$users[] = $data;

// Save data back to file
file_put_contents('users.json', json_encode($users));

// Return success response
echo json_encode(['status' => 'success']);
?>
