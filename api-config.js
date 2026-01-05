// API Configuration for Backend Integration
// Uncomment and configure if you want to use the backend API

// Backend API URL (update this with your deployed backend URL)
// const API_BASE_URL = 'http://localhost:3000/api';
// const API_BASE_URL = 'https://your-backend-url.railway.app/api';
// const API_BASE_URL = 'https://your-backend-url.render.com/api';

// Uncomment the function below and update checkoutBtn event listener in script.js to use this

/*
// Submit order to backend API
async function submitOrderToAPI(cart, customerInfo = {}) {
    try {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerInfo: customerInfo,
                items: cart,
                totalItems: totalItems
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit order');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting order:', error);
        throw error;
    }
}

// Usage in script.js checkout button:
// Replace the WhatsApp code with:
// 
// if (checkoutBtn) {
//     checkoutBtn.addEventListener('click', async () => {
//         if (cart.length === 0) {
//             alert('Your cart is empty!');
//             return;
//         }
//         
//         try {
//             // Option 1: Submit to backend API
//             const result = await submitOrderToAPI(cart);
//             alert('Order submitted successfully! Order ID: ' + result.orderId);
//             
//             // Option 2: Also send WhatsApp (hybrid approach)
//             // ... existing WhatsApp code ...
//             
//             // Clear cart
//             cart = [];
//             saveCart();
//         } catch (error) {
//             alert('Error submitting order. Please try again or use WhatsApp.');
//         }
//     });
// }
*/

