//   function toCopitalize(str) {
//     let res = str.split(' ');
//     res = res.map(function(value){
//         return value[0].toUpperCase() + value.slice(1)
//     })
//     return res.join(' ');
//   }
//   console.log( toCopitalize('salom dunyo salom')) 




// objekt

// const car ={
//     name: "Tesla model Y",
//     year: 2023,
//     abaut: function(){
//         console.log(this.name+ " "+this.year)
//     },
    // weiggth: 900,
    // maxSpeedL: 400,
    // color: 'black', 
    // isExist: true

// };
// car.price = "$160 000";
// car.color = 'red';
// delete car.isExist  ;
// console.log(car);
// car.abaut()



// vaziifa masalalari 

// Obyektlar aloqador masalala.
// masala 1
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
// }
// console.log(person)

// masala 2
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
// }
// person.name = 'Vali'
// console.log(person)

// masala 3
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
// }
// person.address = 'Fergana'
// console.log(person)

// masala 4
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
// };
// delete person.job;
// console.log(person);

// masala 5
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
//     telephone:  {
//         uyRaqami: "+998911474546",
//         mobilRaqami: "+998944663210"
//     }

// };
// console.log(person);

// masala 6
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
//     telephone:  {
//         uyRaqami: "+998911474546",
//         mobilRaqami: "+998944663210"
//     }

// };
// for (let itirartsiya in person) {
//     console.log(`${itirartsiya}: ${person[itirartsiya]}`);
// }

// masala 7
// const person={
//     name: 'Avazbek',
//     age: 21,
//     job: 'Web programmer',
//     telephone:  {
//         uyRaqami: "+998911474546",
//         mobilRaqami: "+998944663210"
//     }
// };
// console.log(person.age);

// masala 8
// function person( name, age, job ){
//     return{
//         name: name,
//         age: age,
//         job: job, 
//     }
// }

// const res = person('Avazbek', 21, 'Fergana')
// console.log(res)


// Umumlashtiruvchi masalalar.


// masala 1
//   function toCopitalize(str) {
//     let res = str.split('');
//     let sum = []
//     res = res.map(function(value){
//         if (value == 3){
//             sum.push(value)
//         }
//     })
//     return sum.length;
//   }
//   console.log( toCopitalize('123546322135313')) 

// masala 2
// masala 3
//   function toCopitalize(str) {
//     let res = str.replaceAll('*', '');
//     return res;
//   }
//   console.log( toCopitalize('M*a*r*u*f*o*v')) 

// masala  4
// function toCopitalize(str) {
//     let res = str.replace("m", "" ).replace("a", "");
//     return res;
//   }
//   console.log( toCopitalize('Hammaga')) ;

// masala 5
// masala 6

// masala 7
//   function toCopitalize(str) {
//     let res = str.split('');
//     return res;
//   }
//   console.log( toCopitalize('Avazbek')) 

//   masala 10
// function massiv(arr) {
//     return arr.join('');
// }
// let str = ["Marufjonov", "Avazbek"];
// let res = massiv(str);
// console.log(res);

// masala 12
// function massiv(arr) {
//     return arr.reverse().join('');
// }
// let str = ["Marufjonov",  "Avazbek"];
// let res = massiv(str);

// console.log(res); 

// masala13
// function massiv(arr) {
//     return arr.split(' ');
// }
// let str = "Marufjonov Avazbek Davronbekovich";
// let res = massiv(str);

// console.log(res);  

// masala 14
// function massiv(arr) {
//     return arr.split(' ').reverse().join(' ');
// }
// let str = "Marufjonov Avazbek Davronbekovich";
// let res = massiv(str);
// console.log(res); 


// masala 15
// function massiv(arr) {
//     return arr.map(value => value.length);
// }
// let res = ["Sardor", "Malina ", "JavaScript"];
// console.log(massiv(res)); 

// masala 20
// function massiv(arr) {
//     return arr.split(' ').map(value => value.split('').reverse().join('')).join(' ');
// }
// let res = "Marufjonov Avazbek";
// console.log(massiv(res));

