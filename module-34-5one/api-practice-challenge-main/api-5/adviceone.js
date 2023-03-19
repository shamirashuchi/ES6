const loaddata = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displaydata(data))
}

const displaydata = advices =>{
    console.log(advices);
    const advicecontainer = document.getElementById("advice");
        const advicediv = document.createElement('div');
        advicediv.innerHTML = `
        <div class="my-24 mx-24 bg-slate-800 card w-auto h-auto bg-base-100 shadow-xl">
             <div class="card-body flex items-center">
                  <p class="text-white text-center text-1xl ">Advice<span class="ml-4">#</span>${advices.slip.id}</p>
                  <p class="text-white text-center text-4xl ">${advices.slip.advice}</p>
             </div>
        </div>
        `;
        advicecontainer.appendChild(advicediv);
    }
loaddata();