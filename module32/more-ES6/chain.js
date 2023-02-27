const users = [
    {id:1 , name: 'abul', job: 'doctor'}
]
console.log(users);
console.log(users[0]);
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id:2, name:'dadul', job: 'leader'}
    ]
}
console.log(data);
console.log(data.data);
console.log(data.data[0].job);

const user = {
    id:5001,
    name: 'Thomas alba adison',
    address: {
        street: {
            first: '35/A Kochukata lane',
            second: 'third floor',
            third:'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
const floor = user.address.street?.second;
console.log(floor);

const floorone = user.address.stret?.second;
console.log(floorone);