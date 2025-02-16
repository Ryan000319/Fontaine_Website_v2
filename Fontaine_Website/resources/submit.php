<?php
header('Content-Type: application/json'); // Ensure the output is treated as JSON

$servername = "localhost";
$username = "root";
$password = ""; // Update with your password
$dbname = "genshin_impact";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get the posted data from the frontend
$data = json_decode(file_get_contents("php://input"), true);

if(isset($data['name'])) {
    $name = $data['name'];
    $lastName = $data['lastName'];
    $phoneNumber = $data['phoneNumber'];
    $email = $data['email'];
    $streetAddress = $data['streetAddress'];
    $city = $data['city'];
    $subject = $data['subject'];
    $category = $data['category'];
    $enquiry = $data['enquiry'];

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO inquiries (name, lastName, phoneNumber, email, streetAddress, city, subject, category, enquiry) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die(json_encode(["error" => "Prepare failed: " . $conn->error]));
    }
    $stmt->bind_param("sssssssss", $name, $lastName, $phoneNumber, $email, $streetAddress, $city, $subject, $category, $enquiry);

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(["message" => "Data submitted successfully"]);
    } else {
        echo json_encode(["error" => "Error submitting data: " . $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(["error" => "No data provided"]);
}

$conn->close();
?>
