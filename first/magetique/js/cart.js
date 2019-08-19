"use strict";
function checkCartInformer () {
    checkCartProducts();
    var cart_products_count = JSON.parse(localStorage.getItem('cart')).length;
    document.getElementById('cart_informer').innerHTML = (cart_products_count == 1) ? cart_products_count + ' item' : cart_products_count + ' items';
}

/* Добавление товара в корзину */
function addToCart (id, products, amount) {
    checkCartProducts();
    var cart_products = JSON.parse(localStorage.getItem('cart'));
    var newCartProduct = {};
    products.forEach(function(item){
        if (item.id === id) {
            newCartProduct = new CartProduct(
                item.images[0],
                item.name,
                item.price,
                item.currency,
                item.details,
                amount || 1,
            );
            cart_products.push(newCartProduct);
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart_products));
    checkCartInformer();
    renderCartProducts();
}

/* Вывод товаров корзины */
function renderCartProducts() {
    checkCartProducts();
    
    var cart_products = JSON.parse(localStorage.getItem('cart'));
    if (cart_products.length > 0) {
        getCartProducts(cart_products);
    } else {
        document.getElementById('cart').innerHTML = '<li class=/"cart_products_li/">Корзина пуста</li>';
    }
}

/* Проверка товаров корзины */
function checkCartProducts () {
    var cart_products = localStorage.getItem('cart');
    if (!cart_products) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

/* Получение товаров корзины */
function getCartProducts(data) {
    var cart = '';
    data.map(function(item){

        var cart_product = "<li class=\"cart_products_li\">\n                                 <div class=\"product_cart\">\n                                     <div class=\"img_cart\">\n                                       <div class=\"icon_cart\">\n                                            <div class=\"buttons_img_cart\">\n                                                <button class=\"pencil_cart\"><ion-icon name=\"trash\"></ion-icon></button>\n                                            </div>\n                                             <a href=\"#\"><img src=\"".concat(item.image.src, "\" alt=\"").concat(item.image.alt, "\"></a>\n                                         </div>\n                                         <a href=\"").concat(item.id, "\">").concat(item.name, "</a>\n                                     </div>\n                                     <div class=\"price_wrap_cart\">\n                                        <span class=\"display_none_cart\">Price</span>\n                                         <span>").concat(item.currency).concat(item.price, "</span>\n                                     </div>\n                                     <div class=\"col_prod_cart\">\n                                         <form action=\"\">\n                                             <span class=\"display_none_cart\">Qty</span>\n                                             <input type=\"number\" class=\"input_cart\" placeholder=\"1\" value=\"").concat(item.amount, "\"/>\n                                         </form>\n                                     </div>\n                                     <div class=\"totalprice_cart\">\n                                         <span class=\"display_none_cart\">Subtotal</span>\n                                         <span>").concat(item.currency).concat(item.price * item.amount, "</span>\n                                     </div>\n                                 </div>\n                             </li>");
        
        cart += cart_product;
    });
    console.log(cart);
    document.getElementById('cart').innerHTML = cart;
}