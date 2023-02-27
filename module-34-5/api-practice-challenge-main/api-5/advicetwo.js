const handleSearch = () => {
    const inputValue = document.getElementById("search-field").value;
    if (inputValue) {
    fetch(`https://api.adviceslip.com/advice/${inputValue}`)
    .then(res => res.json())
    .then(data => displaydata2(data))
}
}

const displaydata2 = data =>{
    const advicecontainer = document.getElementById("advice");
    advicecontainer.innerHTML = '';
        const advicediv = document.createElement('div');
    advicediv.innerHTML = `
        <div class="border-4  border-indigo-600">
        <div class=" my-24 mx-24 bg-slate-800 card w-auto h-auto bg-base-100 shadow-xl">
             <div class="card-body flex items-center">
                  <p class="text-white text-center text-1xl ">Advice<span class="ml-4">#</span>${data.slip.id}</p>
                  <p class="text-white text-center text-4xl ">${data.slip.advice}</p>
             </div>
        </div>
        </div>
        `;
        advicecontainer.appendChild(advicediv);
}