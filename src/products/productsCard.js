'use strict';
import ProductsService from '../services/productsService.js';

const productsList = document.getElementById('products-list');

renderProducts();
async function renderProducts() {
    try {
        const products = await ProductsService.getProducts();

        products.forEach((product) => {
            const card = document.createElement('div');

            card.className = 'product-cart';

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" />
                <h4>${product.title}</h4>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button>Add to cart</button>
            `;

            card.querySelector('button').addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('add-to-cart', { detail: product }));
            });

            productsList.appendChild(card);
        });
    } catch (err) {
        productsList.innerHTML =
            '<p class="error">Failed to load products. Please try again later</p>'
        ;

        console.error('Error rendering products:', err);
    }
}
