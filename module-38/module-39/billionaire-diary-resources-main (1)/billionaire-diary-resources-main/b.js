const handleSearch = (inputValue) => {
    if (inputValue) {
        loadQuote2(inputValue);
    }
    else {
    alert("empty input field ");
}
}

const loadQuote2 = async(inputValue) => {
    try{
        const res = await fetch(`https://forbes400.onrender.com/api/forbes400/getAllBillionaires`)
        const data2 =  await res.json()
        const data =  data2 ? data2 : "";
        //let result = data.find(item => item)
        if(data){
            data.forEach(x =>{
                for (let k in x) {
                   if (!x.hasOwnProperty(k)) continue;
                   if (x[k] === inputValue) {
                    displaydata2(x);
                       break;
                   }
                 }
       })
        }
        else{
                  alert("no data");
        }
    }
    catch(error){
        alert("Hello! I am an alert box!!");
    }
}

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch();
    }
});

//get  the value from search
const processSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    handleSearch(searchText);
}

const displaydata2 = (data) =>{
    //console.log(inputValue)
    console.log(2)
    console.log(data)
    //console.log(data);
    // data.forEach(x =>{
    //              for (let k in x) {
    //                 if (!x.hasOwnProperty(k)) continue;
                   
    //                 if (x[k] === inputValue) {
    //                     console.log(x)
    //                     break;
    //                 }
    //               }
    //     })
    //     console.log(datas)
    //     console.log(datas.rank)
    // console.log(datas.personName)
        //const asArray = Object.entries(datas);
        // var result = datas.find(item => item.rank === inputValue);
        // //let result = asArray.find(([value]) => value === inputValue)
        // console.log(result)
        // console.log(result.rank)
    //})
    // console.log(data.length);
    // const inputValue = document.getElementById("search-field").value;
    // const container = document.getElementById("length");
    // container.innerHTML = '';
    // const lengthdiv = document.createElement('div');
    // lengthdiv.innerHTML = `
    //         <p>Total result:<span class="ml-5">${data.length}</span></P>
    //         <p>Query:<span class="ml-5">${inputValue}</span></p>
    // `;
    // container.appendChild(lengthdiv);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = data.rank;
    const phoneDetails = document.getElementById('phone-details');
    //console.log(phone.mainFeatures.sensors[0]);
    phoneDetails.innerHTML = `
    <p>${data.rank}</p>

    `
}








    // const advicecontainer = document.getElementById("advice");
    // advicecontainer.innerHTML = '';
    // //data.forEach(datas =>{
    //     const advicediv = document.createElement('div');
    // advicediv.innerHTML = `
    // const modalTitle = document.getElementById('phoneDetailModalLabel');
    // modalTitle.innerText = data.rank;
    //          <p>${data.rank}</p>
    //     `;
    //     advicecontainer.appendChild(advicediv);
