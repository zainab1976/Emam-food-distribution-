# Backend API Setup

This is a simple Express.js backend for managing orders.

## Installation

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (optional):
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Submit Order
- **POST** `/api/orders`
- Body:
  ```json
  {
    "customerInfo": {
      "name": "John Doe",
      "phone": "1234567890",
      "email": "john@example.com"
    },
    "items": [
      {
        "name": "Product Name",
        "size": "1kg",
        "quantity": 2
      }
    ],
    "totalItems": 2
  }
  ```

### Get All Orders
- **GET** `/api/orders`
- Returns all orders (add authentication in production)

### Get Single Order
- **GET** `/api/orders/:id`
- Returns order by ID

### Update Order Status
- **PATCH** `/api/orders/:id/status`
- Body:
  ```json
  {
    "status": "confirmed"
  }
  ```

## Deployment Options

### Railway
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Deploy automatically

### Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`

### Heroku
1. Install Heroku CLI
2. `heroku create`
3. `git push heroku main`

## Production Considerations

1. **Database**: Replace in-memory storage with MongoDB, PostgreSQL, or Firebase
2. **Authentication**: Add JWT tokens for admin access
3. **Validation**: Add input validation and sanitization
4. **Error Handling**: Improve error handling and logging
5. **Email Notifications**: Send order confirmation emails
6. **Rate Limiting**: Add rate limiting to prevent abuse

