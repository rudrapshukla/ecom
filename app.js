// ===== Data Management =====
const STORAGE_KEY = 'luxora_cart_data';
const PRODUCTS_KEY = 'luxora_products';

// Sample products data
const defaultProducts = [
    {
        id: 1,
        title: 'Premium Wireless Headphones',
        description: 'High-quality sound with noise cancellation and 30-hour battery life',
        price: 299.99,
        emoji: '🎧',
        rating: 4.8,
        reviews: 324
    },
    {
        id: 2,
        title: 'Smart Watch Ultra',
        description: 'Advanced fitness tracking and always-on display technology',
        price: 399.99,
        emoji: '⌚',
        rating: 4.7,
        reviews: 256
    },
    {
        id: 3,
        title: 'Portable USB-C Hub',
        description: '7-in-1 connectivity hub with Thunderbolt 3 support',
        price: 89.99,
        emoji: '🔌',
        rating: 4.6,
        reviews: 512
    },
    {
        id: 4,
        title: 'Mechanical Keyboard Pro',
        description: 'RGB backlit with custom switches and aluminum frame',
        price: 199.99,
        emoji: '⌨️',
        rating: 4.9,
        reviews: 678
    },
    {
        id: 5,
        title: '4K Webcam',
        description: 'Professional streaming camera with auto-focus and built-in mic',
        price: 149.99,
        emoji: '📹',
        rating: 4.7,
        reviews: 189
    },
    {
        id: 6,
        title: 'Wireless Charging Pad',
        description: 'Fast 15W charging for all Qi-enabled devices',
        price: 49.99,
        emoji: '🔋',
        rating: 4.5,
        reviews: 743
    },
    {
        id: 7,
        title: 'Premium Phone Stand',
        description: 'Adjustable aluminum stand for all devices',
        price: 34.99,
        emoji: '📱',
        rating: 4.8,
        reviews: 421
    },
    {
        id: 8,
        title: 'Portable SSD 1TB',
        description: 'Ultra-fast USB-C external storage with 1050MB/s speed',
        price: 129.99,
        emoji: '💾',
        rating: 4.9,
        reviews: 856
    },
    {
        id: 9,
        title: 'Desk Lamp Pro',
        description: 'LED lamp with adjustable color temperature and brightness',
        price: 79.99,
        emoji: '💡',
        rating: 4.6,
        reviews: 334
    },
    {
        id: 10,
        title: 'Bluetooth Speaker',
        description: '360° sound with 12-hour battery and IPX7 waterproof rating',
        price: 119.99,
        emoji: '🔊',
        rating: 4.7,
        reviews: 567
    },
    {
        id: 11,
        title: 'Cable Organizer Set',
        description: 'Premium cable management solutions for your desk',
        price: 24.99,
        emoji: '📦',
        rating: 4.4,
        reviews: 298
    },
    {
        id: 12,
        title: 'Ergonomic Mouse',
        description: 'Vertical design with precision tracking and 6 buttons',
        price: 59.99,
        emoji: '🖱️',
        rating: 4.8,
        reviews: 445
    }
];

// ===== DOM Elements =====
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');
const noResults = document.getElementById('noResults');
const checkoutBtn = document.getElementById('checkoutBtn');

// ===== State Management =====
let cart = [];
let currentProducts = [];
let currentSearchQuery = '';

// ===== Initialization =====
function init() {
    loadTheme();
    loadProducts();
    loadCart();
    renderProducts(currentProducts);
    setupEventListeners();
}

// ===== Theme Management =====
function loadTheme() {
    const isDarkMode = localStorage.getItem('luxora_theme') === 'dark';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('luxora_theme', isDarkMode ? 'dark' : 'light');
}

// ===== Product Management =====
function loadProducts() {
    const stored = localStorage.getItem(PRODUCTS_KEY);
    currentProducts = stored ? JSON.parse(stored) : defaultProducts;
}

function saveProducts() {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(currentProducts));
}

function renderProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">${product.emoji}</div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <div class="product-rating">
                        <span class="stars">${generateStars(product.rating)}</span>
                        <span>${product.reviews}</span>
                    </div>
                </div>
            </div>
            <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    return stars;
}

// ===== Search Functionality =====
function handleSearch(query) {
    currentSearchQuery = query.toLowerCase();

    if (!query.trim()) {
        currentProducts = defaultProducts;
    } else {
        currentProducts = defaultProducts.filter(product =>
            product.title.toLowerCase().includes(currentSearchQuery) ||
            product.description.toLowerCase().includes(currentSearchQuery)
        );
    }

    renderProducts(currentProducts);
}

// ===== Modal Management =====
function openProductModal(productId) {
    const product = defaultProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').textContent = product.emoji;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalRating').textContent = generateStars(product.rating);
    document.getElementById('modalReviews').textContent = `${product.reviews} reviews`;
    document.getElementById('addToCartBtn').onclick = () => addToCart(productId);

    productModal.style.display = 'flex';
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.style.display = 'none';
    modalOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// ===== Cart Management =====
function loadCart() {
    const stored = localStorage.getItem(STORAGE_KEY);
    cart = stored ? JSON.parse(stored) : [];
}

function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const product = defaultProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            emoji: product.emoji,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    animateCartCount();

    // Show feedback
    const btn = event.target.closest('button');
    if (btn) {
        const originalText = btn.textContent;
        btn.textContent = '✓ Added!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    }

    // Close modal if open
    if (productModal.style.display === 'flex') {
        closeProductModal();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-content">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

function animateCartCount() {
    cartCount.classList.remove('active');
    setTimeout(() => {
        cartCount.classList.add('active');
    }, 10);
}

function openCart() {
    cartModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const orderData = {
        orderId: 'ORD-' + Date.now(),
        timestamp: new Date().toISOString(),
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    // Save to localStorage
    const allOrders = JSON.parse(localStorage.getItem('luxora_orders') || '[]');
    allOrders.push(orderData);
    localStorage.setItem('luxora_orders', JSON.stringify(allOrders));

    // Show confirmation
    alert(`Order placed successfully!\nOrder ID: ${orderData.orderId}\nTotal: $${orderData.total.toFixed(2)}`);

    // Clear cart
    cart = [];
    saveCart();
    renderCart();
    closeCart();
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Search
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', handleCheckout);

    // Product Modal
    closeModalBtn.addEventListener('click', closeProductModal);
    modalOverlay.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal || e.target.classList.contains('product-modal-content')) {
            return;
        }
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (cartModal.classList.contains('open')) closeCart();
            if (productModal.style.display === 'flex') closeProductModal();
        }
    });
}

// ===== Export Functions for Global Use =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.handleSearch = handleSearch;
window.toggleTheme = toggleTheme;
window.openCart = openCart;
window.closeCart = closeCart;

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
