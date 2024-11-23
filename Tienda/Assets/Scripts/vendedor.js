// Funciones para manejar productos
const productList = document.getElementById('product-list');
const addProductForm = document.getElementById('add-product-form');

// Función para agregar un producto
addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;

    const product = {
        name: productName,
        price: parseFloat(productPrice),
        description: productDescription
    };

    const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    if (response.ok) {
        alert('Producto agregado correctamente');
        loadProducts();
    } else {
        alert('Error al agregar producto');
    }
});

// Función para cargar productos
async function loadProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${product.name}</strong><br>
            Precio: $${product.price}<br>
            Descripción: ${product.description}<br>
            <button class="delete-product" data-id="${product._id}">Eliminar</button>
        `;
        productList.appendChild(li);
    });
}

// Función para eliminar producto
productList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete-product')) {
        const productId = e.target.dataset.id;
        const response = await fetch(`/api/products/${productId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Producto eliminado');
            loadProducts();
        } else {
            alert('Error al eliminar producto');
        }
    }
});

// Cargar productos al cargar la página
loadProducts();
