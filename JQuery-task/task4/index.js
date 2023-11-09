/*
    В папці [task4](task4/) створіть HTML-сторінку з 6 чекбоксами. 
    Підключіть бібліотеку **JQuery** та напишіть скріпт, який після того, 
    як користувач позначив будь-які 3 чекбокси, 
    всі чекбокси робить неактивними.
*/

$(document).ready(function () {
    let checkboxes = $('input');
    checkboxes.on('change', function () {
        if (checkboxes.filter(':checked').length >= 3) {
            checkboxes.not(':checked').attr('disabled', true);
        } else {
            checkboxes.attr('disabled', false);
        }
    });
})