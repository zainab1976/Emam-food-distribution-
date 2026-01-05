// Simple Express Backend for Order Management
// Install dependencies: npm install express cors dotenv
// Run: node server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (replace with database in production)
let orders = [];

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Submit order endpoint
app.post('/api/orders', (req, res) => {
    try {
        const { customerInfo, items, totalItems } = req.body;
        
        // Validate request
        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'Cart is empty' });
        }

        // Create order
        const order = {
            id: Date.now().toString(),
            customerInfo: customerInfo || {},
            items: items,
            totalItems: totalItems || items.reduce((sum, item) => sum + item.quantity, 0),
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        // Store order (in production, save to database)
        orders.push(order);

        // Log order (in production, send email/notification)
        console.log('New order received:', order);

        res.json({ 
            success: true, 
            message: 'Order received successfully',
            orderId: order.id 
        });
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all orders (for admin - add authentication in production)
app.get('/api/orders', (req, res) => {
    res.json({ orders: orders });
});

// Get single order
app.get('/api/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === req.params.id);
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ order });
});

// Update order status
app.patch('/api/orders/:id/status', (req, res) => {
    const { status } = req.body;
    const order = orders.find(o => o.id === req.params.id);
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    order.status = status;
    res.json({ success: true, order });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints available at http://localhost:${PORT}/api`);
});

