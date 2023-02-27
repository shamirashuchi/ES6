const user = {id:1 , name:'Gorib Aamir', job: 'actor'};
console.log(user);
const  stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukata voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop','mic','monitor','keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
console.log(typeof(shop));

//object to json
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//it is a string .so we can find length
console.log(typeof(shopJSON));

//json to object
const shopobj = JSON.parse(shopJSON);
console.log(shopobj);