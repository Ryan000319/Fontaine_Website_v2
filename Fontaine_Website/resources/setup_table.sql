-- SQL script to create 'inquiries' table for the 'genshin_impact' database
CREATE DATABASE IF NOT EXISTS genshin_impact;
USE genshin_impact;

-- Create 'inquiries' table
CREATE TABLE IF NOT EXISTS inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    streetAddress VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    enquiry TEXT NOT NULL
);


