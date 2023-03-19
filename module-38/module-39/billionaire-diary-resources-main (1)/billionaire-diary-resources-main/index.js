const handleSearch = () => {
    const inputValue = document.getElementById("search-field").value;
    if (inputValue) {
        loadQuote2(inputValue);
    }
    else {
    alert("empty input field ");
}
}

const loadQuote2 = async(inputValue) => {
    try{
        const res = await fetch(`https://api.adviceslip.com/advice/search/${inputValue}`)
        const data2 =  await res.json()
        const data =  data2.slips ? data2 : "";
        if(data){
            displaydata2(data.slips);
        }
        else{
                  alert("no data");
        }
    }
    catch(error){
        alert("Hello! I am an alert box!!");
    }
}

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