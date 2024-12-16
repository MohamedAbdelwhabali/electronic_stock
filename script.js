// تحديد الأسعار لكل منتج
const productPrices = {
    laptop: 5000,
    phone: 1500,
    tablet: 2000,
    headphones: 300,
    watch: 800
};

// تحديث السعر تلقائيًا عند اختيار المنتج
document.getElementById('product-name').addEventListener('change', function() {
    const productName = this.value;
    const productPrice = productPrices[productName] || 0;
    document.getElementById('product-price').value = productPrice;
});

// إضافة المنتج إلى السلة
document.getElementById('add-to-cart').addEventListener('click', function() {
    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const productPrice = document.getElementById('product-price').value;

    if (productName && quantity > 0) {
        const total = productPrice * quantity;
        const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = cart.insertRow();

        const cellName = newRow.insertCell(0);
        const cellPrice = newRow.insertCell(1);
        const cellQuantity = newRow.insertCell(2);
        const cellTotal = newRow.insertCell(3);

        cellName.textContent = productName;
        cellPrice.textContent = productPrice;
        cellQuantity.textContent = quantity;
        cellTotal.textContent = total;
    } else {
        alert("يرجى تحديد المنتج والكمية.");
    }
});

// إتمام عملية الدفع
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const paymentMethod = document.getElementById('payment-method').value;
    alert("تم إتمام الدفع باستخدام: " + paymentMethod);
});