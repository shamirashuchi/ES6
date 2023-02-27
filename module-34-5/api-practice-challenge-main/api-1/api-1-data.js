const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  const data =person.result;

  const displaytext = (per) =>{
     const alltext = document.getElementById("text");
     alltext.innerText = `${per.message}`;
     displaydata(data);
  }



  const displaydata = (d) =>{
    console.log(data);
    const personcontainer = document.getElementById("container");
    //personcontainer.innerHTML = "";
    data.forEach(eachdata =>{
      const persondiv = document.createElement('div');
      persondiv.classList.add('col');
      persondiv.innerHTML = `
      <div class="card shadow-lg">
      <div class="card-header fs-4">
        Person Name:${eachdata.name.common}
      </div>
      <div class="card-body fs-4">
        <p>age:${eachdata.age}</p>
        <p>Street:${eachdata.address.street},House no:${eachdata.address.house}</p>
      </div>
    </div>
        `
        personcontainer.appendChild(persondiv);
    })
  }
  displaytext(person);