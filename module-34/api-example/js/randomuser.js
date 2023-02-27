const loaduser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayuser(data))
}
const displayuser = user => {
    const gendertag = document.getElementById('gender')
    gendertag.innerHTML = user.results[0].gender;
    const nametag = document.getElementById('name')
    nametag.innerHTML =user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    const image = document.getElementById('img')
    image.src =user.results[0].picture.large;
    console.log(user);
}
loaduser();