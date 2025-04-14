// product.js
import pancakes from 'asset/pancakes.png';

// Product data
const products = [
{
    id: 1,
    name: "House Plant",
    category: "new",
    image: pancakes
},
{
    id: 2,
    name: "Anthurium Flower",
    category: "featured",
    image: pancakes,
    description: "The flower of human being. It has meaningful of fact that the plant always grow whatever season and weather..."
},
{
    id: 3,
    name: "Cactus",
    category: "popular",
    image: pancakes
}
];

// Set product images
document.addEventListener('DOMContentLoaded', function() {
    // Set images for product cards
    document.getElementById('new-plant').src = pancakes;
    document.getElementById('featured-plant').src = pancakes;
    document.getElementById('popular-plant').src = pancakes;
    
    // Create dot decoration
    createDots();
    
    // Initialize product event listeners
    initProductEvents();
    
    // Add unique hover effects for dots
    addDotHoverEffects();
});

// Create dot pattern decoration
function createDots() {
    const dotsContainer = document.querySelector('.dots-decoration');
    
    // Create 36 dots (6x6 grid)
    for (let i = 0; i < 36; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dotsContainer.appendChild(dot);
    }
}

// Handle product click events
function initProductEvents() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            if (productId) {
                const product = products.find(p => p.id == productId);
                if (product) {
                    console.log(`Selected product: ${product.name}`);
                    // Add product view or add to cart functionality here
                }
            }
        });
    });
}

// Add unique hover effects to dots (added unique styling)
function addDotHoverEffects() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        // Add delay effect based on dot position
        const delay = index * 50;
        
        dot.addEventListener('mouseover', function() {
            this.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
            this.style.backgroundColor = '#004F44';
            this.style.transform = 'scale(1.5)';
            
            // Create ripple effect among neighboring dots
            setTimeout(() => {
                const neighbors = document.querySelectorAll('.dot');
                if (index > 0 && neighbors[index-1]) {
                    neighbors[index-1].style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }
                if (index < 35 && neighbors[index+1]) {
                    neighbors[index+1].style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }
            }, delay);
        });
        
        dot.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            this.style.transform = 'scale(1)';
            
            // Reset neighbors
            setTimeout(() => {
                const neighbors = document.querySelectorAll('.dot');
                if (index > 0 && neighbors[index-1]) {
                    neighbors[index-1].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                }
                if (index < 35 && neighbors[index+1]) {
                    neighbors[index+1].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                }
            }, delay);
        });
    });
}
