const loadmeal = (searchtext) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0])
        data.meals.length=6;
        displaymeals(data.meals);


        fetch(url)
    .then(res => res.json())
    .then(data => {
        var submitButton = document.getElementById('show');
        let buttonClicked = false;
        data.meals.length=12;
        submitButton.addEventListener('click', function handleClick() {
            displaymeals(data.meals);
            if (buttonClicked) {
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    displaymeals(data.meals);
                    submitButton.style.display="none";
                })
               }
               buttonClicked = true;
        }) 
    }) 
       
         
     })
}

const displaymeals = meals =>{
    const mealscontainer = document.getElementById('meals-container');
    mealscontainer.innerHTML = '';
     meals.forEach(meal =>{
         //console.log(meal);
            const mealdiv = document.createElement('div');
        mealdiv.classList.add('col');
        mealdiv.innerHTML=`
        <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadmealdetail2(${meal.idMeal})"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealdetailsModal">
                      Details
                      </button>
                    </div>
                  </div> 
        `
        mealscontainer.appendChild(mealdiv);
       
    })
}

const searchmeals = () =>{
      const searchtext = document.getElementById("search-field").value;
      loadmeal(searchtext);
}

const loadMealDetail = idMeal =>{
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displaymealdetails(data.meals[0]))
      //error handle
      .catch(error => {
        console.log(error)
      })
    }

    //async await
    const loadmealdetail2 = async(idMeal) =>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        //without fatch error handle
        // const res = await fetch(url);
        // const data = await res.json();
        // displaymealdetails(data.meals[0]);
        //error handle
        try{
            const res = await fetch(url);
        const data = await res.json();
        displaymealdetails(data.meals[0]);
        }
        catch(error){
            console.log(error);
        }
    }

    const displaymealdetails = meal =>{
         document.getElementById("mealdetailsLabel").innerText = meal.strMeal;
         const mealdetails = document.getElementById("mealdetailsbody");
         mealdetails.innerHTML=`
          <img class="img-fluid"src = "${meal.strMealThumb}">
          <br>
          <br>
          <p>${meal.strInstructions}</P>
         `;
    }
loadmeal('chicken');