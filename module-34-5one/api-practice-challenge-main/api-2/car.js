fetch('data.json')
.then(response => response.json())
.then(data => displaycars(data))

const displaycars = cars =>{
    cars.length=2;
    const carscontainer = document.getElementById('cars-container');
     cars.forEach(car =>{
            const cardiv = document.createElement('div');
        cardiv.classList.add('col');
        cardiv.innerHTML=`
                <div class="card" style="width: 39rem;">
                <img src="${car.imageURL}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="fs-1 ">Car Name:${car.name}</p>
                <p class="fs-2">Car Details: ${car.description}</p>
                    <a href="#" class="btn btn-primary fs-2">Car Price:${car.price}</a>
                </div>
                </div>
        `
        carscontainer.appendChild(cardiv);
       
    })
}