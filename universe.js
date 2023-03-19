const loaddata = async() => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        const data2 =  await res.json()
        const data =  data2 ? data2 : "";
        
        if(data){
          
             sorted(data);
            //displaydata(data.data.tools);

            
        }
       else{
        alert("No  data");
       }
    }
    catch(error){
        alert("No  data found");
    }
}

const displaydata = (data) =>{
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
            <p>1.${datas.features[0] ?  datas.features[0] : "This field is empty"}</p>
            <p>2.${datas.features[1] ?  datas.features[1] : 'This field is empty'}</p>
            <p>3.${datas.features[2] ?  datas.features[2] : 'This field is empty'}</p>
            <p>4.${datas.features[3] ?  datas.features[3] : "This field is empty"}</p>
                <div style="background-color:white;"class="card-footer d-flex align-items-center justify-content-between">
                <div>
                <h5 style="margin-top:20px; font-weight:bold; font-size:30px;"class="card-title">${datas.name}</h5>
                <p><i class="fa-sharp fa-solid fa-calendar-days"></i>${datas.published_in ? datas.published_in : "This field is empty"}</p>
                </div>
                <button  onclick="loadAIDetails('${datas.id}')"style="color:#FF00FF; height:40px;background-color:pink;"type="button" class="btn  rounded-circle" data-bs-toggle="modal" data-bs-target="#AIDetailModal"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                </div>
                
            </div>
            <div>
     
        `;
        universeContainer.appendChild(universeDiv); 
    })
}
const loadAIDetails = async id =>{
        try{
            const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
            const res = await fetch(url);
            const data = await res.json();
            if(data){
                displayPhoneDetails(data);
            }
           else{
            alert("No details data");
           }
        }
        catch(error){
            alert("No  details data found");
        }
    }

    const displayPhoneDetails = AI =>{
           
            console.log(AI);
            const AIDetails = document.getElementById('AI-details');
            AIDetails.innerHTML = `
            <img style="position:relative;z-1"src="${AI.data.image_link[0]}" class="card-img-top img-fluid" alt="...">
            
            <p style="font-weight:bold; font-size:30px;">${AI.data.input_output_examples[0].input  ?  AI.data.input_output_examples[0].input : "This field is empty"}</p>
            <p>${AI.data.input_output_examples[0].output  ?  AI.data.input_output_examples[0].output : "This field is empty"}</p>   
            `
            
            const DetailsAI = document.getElementById('AI');
            DetailsAI.innerHTML = `
                             <p>Accuracy:${AI.data.accuracy.score ? AI.data.accuracy.score : "novalue"}</P>
            `




            const modalTitle = document.getElementById('AIDetailModalLabel');
            modalTitle.innerText = AI.data.description;
            const universeDetails = document.getElementById('universe-details');
            
            universeDetails.innerHTML = `
                <div class="d-flex">
                
                <div class="border bg-blue">
                     <p class="text-center">${AI.data.pricing[0].price ? AI.data.pricing[0].price :  "This field is empty"}</p>
                </div> 
                <div  class="border  bg-blue">
                    <p>${AI.data.pricing[1].price ? AI.data.pricing[1].price : "This field is empty"}</p>
                </div>
                <div  class="border bg-blue">
                    <p class="me-2">${AI.data.pricing[2].price ? AI.data.pricing[2].price : "This field is empty"}</p>
                </div>
                
                
                </div> 
            `


            const modal = document.getElementById('modalAI');
            modal.innerHTML = `<li>${AI.data.features[1].feature_name ? AI.data.features[1].feature_name : "This field is empty"}</li>
                               <li>${AI.data.features[2].feature_name ? AI.data.features[2].feature_name: "This field is empty"}</li>
                               <li>${AI.data.features[3].feature_name ? AI.data.features[3].feature_name: "This field is empty"}</li>

            ;`;



                const modalone = document.getElementById('modaluniverse')

                modalone.innerHTML = `
                            <li>${AI.data.integrations[0] ? AI.data.integrations[0] : "This field is empty"}</li>
                            <li>${AI.data.integrations[1] ? AI.data.integrations[1] : "This field is empty"}</li>
                            <li>${AI.data.integrations[2] ? AI.data.integrations[2] : "This field is empty"}</li>
                `;
        }

        const sorted = data =>{
            data.data.tools.sort(function(a,b){
                return new Date(a.published_in)-new Date(b.published_in);
            })
             //data.sort((a, b) => a.date.getTime() - b.date.getTime());
             console.log(data);
             displaydata(data.data.tools);
        }
        //loaddata();



