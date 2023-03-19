const handleSearch = () => {
    const inputValue = document.getElementById("search-field").value;
    if (inputValue) {
    fetch(`https://api.adviceslip.com/advice/search/${inputValue}`)
    .then(res => res.json())
    .then(data => {
        data.slips ? displaydata2(data.slips) : alert("no data ");
    });
}
else {
    alert("empty input field ");
}
}

//country.capital
//? country.capital.join(", ")
//: "No Capital";

const displaydata2 = data =>{
    console.log(data.length);
    const inputValue = document.getElementById("search-field").value;
    const container = document.getElementById("length");
    container.innerHTML = '';
    const lengthdiv = document.createElement('div');
    lengthdiv.innerHTML = `
            <p>Total result:<span class="ml-5">${data.length}</span></P>
            <p>Query:<span class="ml-5">${inputValue}</span></p>
    `;
    container.appendChild(lengthdiv);
    const advicecontainer = document.getElementById("advice");
    advicecontainer.innerHTML = '';
    data.forEach(datas =>{
        const advicediv = document.createElement('div');
    advicediv.innerHTML = `
        <div>
             <p>${datas.advice}</p>
        </div>
        `;
        advicecontainer.appendChild(advicediv);
    })
}