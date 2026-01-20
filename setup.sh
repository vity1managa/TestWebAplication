#!/bin/bash

# Script to set up and run the web service with copy-webpack-plugin and mockito-style testing

echo "Setting up Web Service with CopyWebpackPlugin and Mockito-style Testing..."

# Check if node and npm are installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm first."
    exit 1
fi

echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "Dependencies installed successfully!"
else
    echo "Failed to install dependencies. Trying with legacy peer deps..."
    npm install --legacy-peer-deps
fi

# Build the project
echo "Building the project..."
npm run build

# Run tests
echo "Running tests..."
npm test

echo "Setup complete! You can now run the server with 'npm start'"