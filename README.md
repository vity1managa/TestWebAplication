# Web Service with CopyWebpackPlugin and Mockito-style Testing

This project demonstrates a web service built with:
- Webpack and copy-webpack-plugin for bundling
- TypeScript for type safety
- Jest for testing with Mockito-style mocking

## Project Structure
```
/workspace/
├── src/                    # Source files
│   ├── server.ts          # Main server implementation
│   └── UserService.ts     # Business logic service
├── test/                  # Test files
│   ├── UserService.test.ts # Unit tests
│   └── MockTesting.test.ts # Mock-based tests
├── config/                # Configuration files
│   └── webpack.config.js  # Webpack configuration with copy-webpack-plugin
├── public/                # Files to be copied by copy-webpack-plugin
├── static/                # Static files to be copied
├── assets/                # Asset files to be copied
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── jest.config.js         # Jest testing configuration
```

## Features

1. **Webpack with CopyWebpackPlugin**: 
   - Bundles the application using webpack
   - Copies static assets from public/, static/, and assets/ directories to the output

2. **Mockito-style Testing**:
   - Uses Jest with ts-jest for TypeScript support
   - Demonstrates various mocking techniques similar to Mockito:
     * Spying on methods
     * Mocking return values
     * Verifying interactions
     * Creating mock objects

3. **Express Web Service**:
   - Provides REST endpoints for user management
   - Implements CRUD operations

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Run tests:
```bash
npm test
```

4. Start the server:
```bash
npm start
```

## Endpoints

- GET `/` - Returns "Hello World!"
- GET `/users` - Returns all users
- GET `/users/:id` - Returns user with specified ID

## Testing Approach

The tests demonstrate Mockito-style testing patterns:
- `jest.spyOn()` - Similar to Mockito's spy()
- `.mockReturnValue()` - Similar to Mockito's when().thenReturn()
- `toHaveBeenCalledWith()` - Similar to Mockito's verify() with arguments
- `toHaveBeenCalledTimes()` - Similar to Mockito's verify() with call count
- `jest.fn()` - Creates mock functions similar to Mockito.mock()

## CopyWebpackPlugin Usage

The webpack configuration uses CopyWebpackPlugin to copy static assets:
- Public files go to `dist/public/`
- Static files go to `dist/static/`
- Asset files go to `dist/assets/`