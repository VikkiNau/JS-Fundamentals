/*
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, 
у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого 
випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. 
Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
Код HTML-сторінки:
<select name="country" id="country">
        <option value="ger">Germany</option>
        <option value="usa">USA</option>
        <option value="ukr">Ukraine</option>
</select>по
                    
<select name="cities" id="cities"></select>
<p></p>

https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png
*/
const selectCountry = document.querySelector('#country');
const selectCities = document.querySelector('#cities');

const cities = {
        ger: [' Berlin', 'Hamburg', 'Munich', 'Cologne', ' Frankfurt am Main'],
        usa: ['New York', 'California', 'Chicago', 'Las Vegas', 'Orlando'],
        ukr: ['Kyiv', 'Lviv', 'Yalta', 'Donetsk', 'Kharkiv']
}
selectCountry.addEventListener('change', function () {
        let valueSelectCountry = selectCountry.value;
        selectCities.innerHTML = '';
        if (cities.hasOwnProperty(valueSelectCountry)) {
                let selectedCities = cities[valueSelectCountry];
                selectedCities.forEach(element => {
                        const opt = document.createElement('option');
                        selectCities.appendChild(opt);
                        opt.innerText = element;
                });
        }
})
selectCities.addEventListener('change', function () {
        let valueSelectCities = selectCities.value;
        const textOnPage = document.querySelector('p');
        textOnPage.innerHTML += `${valueSelectCities}, `;
})




