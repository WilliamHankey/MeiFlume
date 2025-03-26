import express from 'express';
import path from 'path';
import { securityMiddleware } from './src/middleware/security';

const app = express();
const PORT = process.env.PORT || 3000;

// Apply security middleware
app.use(securityMiddleware);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 