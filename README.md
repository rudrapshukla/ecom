# ✨ Luxora - Premium E-Commerce Website

A beautifully designed, fully functional e-commerce platform with stunning UI/UX, dark/light theme support, and persistent data storage.

## 🎨 Features

### Visual Design
- **Aesthetic UI/UX** - Modern, clean design with rounded corners and smooth animations
- **Dark & Light Theme** - Beautiful theme toggle with animated switch
- **Responsive Design** - Fully responsive from mobile (480px) to desktop (1400px+)
- **Smooth Animations** - Subtle transitions and hover effects throughout
- **Premium Color Palette** - Warm accent colors with elegant neutral tones

### Functionality
- **Product Catalog** - 12 curated premium products with detailed information
- **Search Bar** - Real-time search filtering across product title and description
- **Add to Cart** - Seamlessly add products with quantity management
- **Shopping Cart** - Elegant slide-out cart with item management
- **Product Modal** - Detailed product view with full information
- **Local Storage** - All cart data persists in browser localStorage
- **Order Management** - Checkout functionality with order data saved as JSON

### Technical Features
- **Pure JavaScript** - No dependencies, lightweight and fast
- **CSS Variables** - Easy theme customization with CSS custom properties
- **Smooth Scrolling** - HTML5 smooth scroll behavior
- **Keyboard Navigation** - ESC key closes modals
- **Accessibility** - Semantic HTML and ARIA labels

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudrapshukla/ecom.git
   cd ecom
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - No build process or dependencies required

3. **Start shopping!**
   - Browse products with the search bar
   - Toggle between dark and light themes
   - Add products to cart
   - Proceed to checkout

## 📁 Project Structure

```
ecom/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling with theme support
├── app.js          # All JavaScript functionality
└── README.md       # Documentation
```

## 🎯 Key Components

### Navigation Bar
- **Logo** - Animated Luxora branding
- **Search Bar** - Real-time product search with focus animations
- **Theme Toggle** - Beautiful animated switch between dark/light modes
- **Cart Button** - Sticky cart with item counter badge

### Hero Section
- Large title with gradient background
- Call-to-action button with smooth scroll animation
- Responsive typography

### Products Grid
- Dynamic product rendering
- Hover effects with elevation
- Add to cart buttons with feedback
- Star ratings and review counts

### Shopping Cart Modal
- Slide-in animation from the right
- Item quantity management (+/- buttons)
- Remove item functionality
- Total price calculation
- Checkout button

### Product Detail Modal
- Large product image/emoji
- Full product information
- Rating and review display
- Price information
- Add to cart action

## 💾 Data Persistence

### Local Storage Keys
- `luxora_theme` - Current theme setting (light/dark)
- `luxora_cart_data` - Shopping cart items
- `luxora_products` - Product catalog
- `luxora_orders` - Order history (JSON format)

### Data Structure

**Cart Item:**
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 99.99,
  "emoji": "🎧",
  "quantity": 2
}
```

**Order:**
```json
{
  "orderId": "ORD-1692864000000",
  "timestamp": "2024-08-24T10:00:00.000Z",
  "items": [...],
  "total": 299.99
}
```

## 🎨 Theme System

The application uses CSS custom properties (variables) for easy theme switching:

### Light Theme (Default)
- Primary Background: `#ffffff`
- Secondary Background: `#f8f7f5`
- Text Color: `#1a1a1a`
- Accent Color: `#d4a574` (warm gold)

### Dark Theme
- Primary Background: `#0f0f0f`
- Secondary Background: `#1a1a1a`
- Text Color: `#f5f5f5`
- Accent Color: `#d4a574` (maintains warmth)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768px - 1023px (adjusted grid)
- **Mobile**: 480px - 767px (single column)
- **Small Mobile**: Below 480px (optimized layout)

## 🎬 Animations

- **Float Animation** - Logo floating effect
- **Cart Bounce** - Item count badge animation
- **Slide Up** - Modal entrance animation
- **Fade In** - Products grid fade-in
- **Smooth Transitions** - All interactive elements

## 🛠️ Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers

## 🔧 Customization

### Change Accent Color
Edit CSS variables in `styles.css`:
```css
:root {
    --accent: #d4a574;
    --accent-dark: #c19860;
    --accent-light: #e8c4a0;
}
```

### Add Products
Edit the `defaultProducts` array in `app.js`:
```javascript
const defaultProducts = [
    {
        id: 1,
        title: "Product Name",
        description: "Product description",
        price: 99.99,
        emoji: "🎧",
        rating: 4.8,
        reviews: 324
    },
    // Add more products...
];
```

## 📊 File Sizes

- `index.html` - ~5.5 KB
- `styles.css` - ~19.3 KB
- `app.js` - ~13.2 KB
- **Total** - ~38 KB (uncompressed)

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS with custom properties and flexbox/grid
- Vanilla JavaScript DOM manipulation
- Browser localStorage API
- Responsive design patterns
- Smooth animations and transitions
- Component-based thinking

## 🐛 Known Limitations

- Products are stored in memory (reset on page refresh unless localStorage is used)
- No backend integration (all data is local)
- Checkout is simulated (no payment processing)
- Maximum 12 demo products included

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Product filtering by category
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Order history tracking
- [ ] Email notifications

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rudra Pratap Shukla**
- GitHub: [@rudrapshukla](https://github.com/rudrapshukla)
- Email: rudrapshukla@proton.me

## 🙏 Acknowledgments

- Clean, modern design inspiration
- Material Design principles
- Smooth animation techniques from modern web best practices

---

**Made with ❤️ for a beautiful e-commerce experience**
