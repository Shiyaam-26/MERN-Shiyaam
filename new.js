const user={
    name: 'Kendrick',
    age: '35',
    'is Singer': 'true',
}

let a=25;
let b=a;
b=30;
console.log(a);
console.log(b);

let obj={age:22}
let objCopy=obj
objCopy.age=25
console.log(obj.age);

for(let key in user){
    console.log(key+":"+user[key]);
}

let array=[1,2,3,4,5,6,7,8]

for(let value of array){
    console.log(value);
}