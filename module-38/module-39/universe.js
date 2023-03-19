const loaddata = async(datalimit) => {
    toggleSpinner(true);
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        const data2 =  await res.json()
        const data =  data2 ? data2 : "";
        
        if(data){
            displaydata(datalimit,data.data.tools);
        }
       else{
        alert("No  data");
       }
    }
    catch(error){
        alert("No  data found");
    }
}


const loaddatasort = async(datalimit) => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        const data2 =  await res.json()
        const data =  data2 ? data2 : "";
        
        if(data){
             sorted(datalimit,data);
        }
       else{
        alert("No  data");
       }
    }
    catch(error){
        alert("No  data found");
    }
}



const displaydata = (dataLimit,data) =>{
    const showAll = document.getElementById('show-all');
    if(dataLimit && data.length > 6) {
        data = data.slice(0, 6);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }

    const universeContainer = document.getElementById('universe-container');
    universeContainer.textContent = '';
    data.forEach(datas =>{
        const universeDiv  = document.createElement('div');
        universeDiv.classList.add('col');
        universeDiv.innerHTML = `
            <div class="card p-4">
            <img src="${datas.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h5 style="margin-top:20px; font-weight:bold; font-size:30px;">Features</h5>
            <p>1.${datas.features[0] ?  datas.features[0] : "No take a break"}</p>
            <p>2.${datas.features[1] ?  datas.features[1] : 'No take a break'}</p>
            <p>3.${datas.features[2] ?  datas.features[2] : 'No take a break'}</p>
            <p>4.${datas.features[3] ?  datas.features[3] : "No take a break"}</p>
                <div style="background-color:white;"class="card-footer d-flex align-items-center justify-content-between">
                <div>
                <h5 style="margin-top:20px; font-weight:bold; font-size:30px;"class="card-title">${datas.name}</h5>
                <p><i class="fa-sharp fa-solid fa-calendar-days"></i>${datas.published_in ? datas.published_in : "No take a break"}</p>
                </div>
                <button  onclick="loadAIDetails('${datas.id}')"style="color:#FF00FF; height:40px;background-color:pink;"type="button" class="btn  rounded-circle" data-bs-toggle="modal" data-bs-target="#AIDetailModal"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                </div>
                
            </div>
            <div>
     
        `;
        universeContainer.appendChild(universeDiv); 
    })
    toggleSpinner(false);
}
const loadAIDetails = async id =>{
        try{
            const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
            const res = await fetch(url);
            const data = await res.json();
            if(data){
            displayuniverseDetails(data);
            }
            else{
                alert("No data found");
            }
        }
        catch(error){
            alert("No  details data found");
        }
    }

    const displayuniverseDetails = AI =>{
            const AIDetails = document.getElementById('AI-details');
            AIDetails.innerHTML = `
            <img style="position:relative;z-1"src="${AI.data.image_link[0]}" class="card-img-top img-fluid" alt="...">
            
            <p style="font-weight:bold; font-size:30px;">${AI.data.input_output_examples  ?  AI.data.input_output_examples[0].input : "No take a break"}</p>
            <p  class="text-secondary-emphasis">${AI.data.input_output_examples  ?  AI.data.input_output_examples[0].output : "No take a break"}</p>   
            `
            
            const DetailsAI = document.getElementById('AI');
            if(AI.data.accuracy.score){

            
            DetailsAI.innerHTML = `
                             <p>Accuracy:${AI.data.accuracy.score}</P>
            `
            }
            else{
                DetailsAI.classList.add('d-none');
            }




            const modalTitle = document.getElementById('AIDetailModalLabel');
            modalTitle.innerText = AI.data.description;
            const universeDetails = document.getElementById('universe-details');
           
            
            universeDetails.innerHTML = `
                <div class="d-flex justify-content-between">
                
                <div class="border  fs-5 text-danger bg-white">
                     <p class="text-center">${AI.data.pricing ? AI.data.pricing[0].price : "Free of Cost"}</p>
                     <p class="mb-1 text-center">${AI.data.pricing ? AI.data.pricing[0].plan : ''}</p>
                </div> 
                <div  class="border  fs-5 text-danger bg-white ms-2">
                    <p class="text-center">${AI.data.pricing ?  AI.data.pricing[1].price : "Free of Cost"}</p>
                    <p class="mb-1 text-center">${AI.data.pricing ? AI.data.pricing[1].plan : ''}</p>
                </div>
                <div  class="border fs-5 text-danger bg-white ms-2">
                    <p class="me-2 text-center">${AI.data.pricing ? AI.data.pricing[2].price : "Free of Cost"}</p>
                    <p class="mb-1 text-center">${AI.data.pricing ? AI.data.pricing[2].plan : ''}</p>
                </div>
                
                
                </div> 
            `


            const modal = document.getElementById('modalAI');
            modal.innerHTML = `<h5 style="margin-top:20px; font-weight:bold; font-size:20px;">Features</h5>
                               <li>${AI.data.features[1].feature_name ? AI.data.features[1].feature_name : "No take a break"}</li>
                               <li>${AI.data.features[2].feature_name ? AI.data.features[2].feature_name: "No take a break"}</li>
                               <li>${AI.data.features[3].feature_name ? AI.data.features[3].feature_name: "No take a break"}</li>

            ;`;



                const modalone = document.getElementById('modaluniverse')

                modalone.innerHTML = `<h5 style="margin-top:20px; font-weight:bold; font-size:20px;">Integrations</h5>
                            <li class="text-secondary-emphasis">${AI.data.integrations ? AI.data.integrations[0] : "No data found"}</li>
                            <li>${AI.data.integrations ? AI.data.integrations[1] : "No data found"}</li>
                            <li>${AI.data.integrations ? AI.data.integrations[2] : "No data found"}</li>
                `;
        }

        const sorted = (dataLimit,data) =>{
            data.data.tools.sort(function(a,b){
                
                return new Date(a.published_in)-new Date(b.published_in);
               
            })
             displaydata(dataLimit,data.data.tools);
        }

        document.getElementById('btn-show-all').addEventListener('click', function(){
            loaddata();
        })



        const toggleSpinner = isLoading => {
            const loaderSection = document.getElementById('loader');
            if(isLoading){
                loaderSection.classList.remove('d-none')
            }
            else{
                loaderSection.classList.add('d-none');
            }
        }




        loaddata(7);