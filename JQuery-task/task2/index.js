/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
  // ваш код
  $('a[href^="https://"]').attr('target', '_blank');
});