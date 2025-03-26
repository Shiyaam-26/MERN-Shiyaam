// const user={
//     name: 'Kendrick',
//     age: '35',
//     'is Singer': 'true',
// }

// let a=25;
// let b=a;
// b=30;
// console.log(a);
// console.log(b);

// let obj={age:22}
// let objCopy=obj
// objCopy.age=25
// console.log(obj.age);

// for(let key in user){
//     console.log(key+":"+user[key]);
// }

// let array=[1,2,3,4,5,6,7,8]

// for(let value of array){
//     console.log(value);
// }

// let arrCopy=[...array,9,10]
// console.log(array)
// console.log(arrCopy)
// let arrMerge=[...array,...arrCopy]
// console.log(arrMerge);

// let user1={name:"name",age:30}
// let address={city:"CBE",country:"India"}
// let info={...user1,...address}
// console.log(info)

// const numbers=[2,3,4,1,7,8,9]
// const ans=numbers.map(num=>num*3)
// console.log(ans);

// const even=numbers.filter(num=>num%2==0)
// console.log(even);


// const print=obj.map(object=>object.name)
// console.log(print);

// const abv75=obj.filter(n=>n.mark>75)
// console.log(abv75);

// const print1=abv75.map(object=>object.name)
// console.log(print1)

const array=[22,11,33,44,5,55,66]
const total=array.reduce((sum,n)=>sum+n,0)
console.log(total);


const obj=[
    {name:"name1",mark:90},
    {name:"name2",mark:55},
    {name:"name3",mark:80},
    {name:"name4",mark:75},
    {name:"name5",mark:97}
]

const marktotal=obj.reduce((sum,n)=>sum+n.mark,0)
console.log(marktotal)
