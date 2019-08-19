"use strict";

/* Класс продукта ES5 */
function Product (id, name, in_stock, sku, currency, price, old_price, subtitle, amount, images, desc, details, flag, status) {
    this.id = id,
    this.name = name,
    this.in_stock = in_stock,
    this.sku = sku,
    this.currency = currency,
    this.price = price,
    this.old_price = old_price,
    this.subtitle = subtitle,
    this.amount = amount,
    this.images = images,
    this.desc = desc,
    this.details = details,
    this.flag = flag,
    this.status = status
};

/* Класс продукта  в корзине ES5 */
function CartProduct (image, name, price, currency, details, amount) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.details = details;
    this.amount = amount;
};

/* Выводим список товаров в слайдеры на главной */
function getNewProducts (data) {
    var products = '';
    var special_products = '';
    var top_products = '';
    data.map(function(item){

        /* Получаем список флагов и выводим */
//        var flags = '';
//        item.flags.map(function(flag){
//            flags += "<li class=\"product_flag flag_".concat(flag.value, "\">").concat(flag.label, "</li>");
//        });

        /* Получаем список изображений товаров и выводим (не больше двух так как это превью) */
        var images = '';
        item.images.map(function(image, key){
            if (key == 0) {
                images += "<img class=\"img_prod_first\" src=\"".concat(image.src, "\" alt=\"").concat(image.alt, "\">");
            }  
            else {
                return false;
            }
        });

        /* собираем товар воедино в виде строки */
        var product = "<div class=\"product_top_wrap\">\n                       <span class=\"flags_".concat(item.flag.value, "\">").concat(item.flag.label, "</span>\n                        <a href=\"#\">").concat(images, "</a>\n                        <div class=\"price_wrap\">\n                            <span class=\"price_new\">").concat(item.currency).concat(item.price, "</span>\n                            <s>").concat(item.currency + item.old_price, "</s>\n                        </div>\n                        <a href=\"#\" class=\"span_wrap_prod\">").concat(item.name, "</a>\n                        <button class=\"button_prod\" data-product-value=\"").concat(item.id, "\"><ion-icon name=\"cart\"></ion-icon>ADD TO CART</button>\n                        <div class=\"stars\">\n                            <ion-icon name=\"star-outline\"></ion-icon>\n                            <ion-icon name=\"star-outline\"></ion-icon>\n                            <ion-icon name=\"star-outline\"></ion-icon>\n                            <ion-icon name=\"star-outline\"></ion-icon>\n                            <ion-icon name=\"star-outline\"></ion-icon>\n                            <a href=\"#\" class=\"review\">1 Review</a>\n                        </div>\n                        <div class=\"favour\">\n                            <a href=\"#\"><ion-icon name=\"heart-empty\"></ion-icon></a>\n                            <a href=\"#\" class=\"balance\"><img src=\"img/balance.svg\" alt=\"\"></a>\n                        </div>\n                  </div>");
        products += product;

        /* Проверяем является ли товар бестселлером и добавляем в бестселлеры для вывода */
        if (item.status == 'special_product') {
            special_products += product;
        }
        else if (item.status == 'top_product') {
            top_products += product;
        }
    });

    /* Выводим результат в соответствующие слайдеры */
    document.getElementById('slider_prod_top').innerHTML = top_products;
    document.getElementById('slider_prod_bottom').innerHTML = special_products;
    
}

