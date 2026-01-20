# How to Run the Project

After dependencies are installed, here's how to use the web service:

## Installation
```bash
npm install
```

If you encounter issues with peer dependencies, try:
```bash
npm install --legacy-peer-deps
```

## Building the Project
```bash
npm run build
```

This will:
1. Compile TypeScript files
2. Bundle the application with Webpack
3. Copy static assets using CopyWebpackPlugin to the dist folder

## Running Tests
```bash
npm test
```

This runs Jest tests that demonstrate Mockito-style testing patterns.

## Development Mode
To run in development mode with automatic rebuilds:
```bash
npm run dev
```

To run the server directly without building (requires ts-node):
```bash
npm run dev:start
```

## Production Mode
To run the built application:
```bash
npm start
```

## Expected Output

After building, you should see a `dist` directory with:
- `server.js` - The bundled application
- `public/` - Copied from the public directory
- `static/` - Copied from the static directory  
- `assets/` - Copied from the assets directory

The server will start on port 3000 by default and expose the API endpoints defined in the README.

## Troubleshooting

1. If you get TypeScript errors during build, ensure all dependencies are properly installed
2. If copy-webpack-plugin doesn't work, check that the source directories exist
3. For test failures, make sure all dev dependencies are installed