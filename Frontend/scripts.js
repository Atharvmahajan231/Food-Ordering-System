// Sample JavaScript for handling frontend interactions

document.addEventListener('DOMContentLoaded', function() {
    // Sample data (replace with actual data fetched from backend)
    const menuItems = [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 8 },
        { id: 3, name: 'Salad', price: 6 },
        { id: 4, name: 'Pasta', price: 12 }
    ];

    const orders = [
        { id: 1, item: 'Pizza', price: 10, date: '2024-06-20' },
        { id: 2, item: 'Burger', price: 8, date: '2024-06-19' }
    ];

    // Function to populate menu items
    function populateMenuItems() {
        const menuContainer = document.getElementById('menuItems');
        menuContainer.innerHTML = '';

        menuItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;
            menuContainer.appendChild(menuItemElement);
        });
    }

    // Function to populate orders history
    function populateOrders() {
        const orderListContainer = document.getElementById('orderList');
        orderListContainer.innerHTML = '';

        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order-item');
            orderElement.innerHTML = `
                <h3>${order.item}</h3>
                <p>Price: $${order.price}</p>
                <p>Date: ${order.date}</p>
            `;
            orderListContainer.appendChild(orderElement);
        });
    }

    // Initial population of menu items and orders
    populateMenuItems();
    populateOrders();

    // Sample function for adding an item to cart (replace with actual logic)
    window.addToCart = function(itemId) {
        const selectedItem = menuItems.find(item => item.id === itemId);
        alert(`Added ${selectedItem.name} to cart!`);
        // Here you would typically send an API request to backend to add item to cart
    }

    // Sample function for updating profile (replace with actual logic)
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        // Here you would typically send an API request to backend to update profile
        alert(`Profile updated successfully!\nName: ${name}\nEmail: ${email}`);
    });
});
