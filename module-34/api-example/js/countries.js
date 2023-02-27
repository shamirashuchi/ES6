const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displaycountries(data))
}
const displaycountries = countries =>{
    const countrycontainer = document.getElementById("all-countries");
    countries.forEach(country =>{
        console.log(country);
        const countrydiv = document.createElement('div');
        countrydiv.classList.add('country');
        countrydiv.innerHTML = `
            <h3>Name:${country.name.common} </h3>
            <p>Capital:${country.capital ? country.capital[0] : 'No capital'}</p>
            <button onclick="loadcountrydetails('${country.cca2}')">Details</button>
        `;
        countrycontainer.appendChild(countrydiv);
    } )
}

const loadcountrydetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    //console.log(url);
    //console.log(code);
    fetch(url)
    .then(res => res.json())
    .then(data => displaycountrydetails(data[0]))
}

const displaycountrydetails = country =>{
    const detailcontainer = document.getElementById('country-details')
    detailcontainer.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <img src ="${country.flags.png}">
    `;
}
loadCountries();