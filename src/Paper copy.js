import React from 'react';

const Paper =() =>{
   
// const x = 'hello' ;
// const y = 'world';
const z= 4
// const str = `${x}${z+5}`


const arr = [10 ,20 ,30 ]
const arr2 = [30 , 50 , 50]
const arr5 = [30 , 50 , 50]
const result10 = [...arr , ...arr2 , ...arr5]
console.log(result10)


const result = arr.map((item) => {
    return (item +10)
    console.log(item )
})

const result1 = arr.find((item) => {
   return item === '2' 
})

const result2 = arr.filter((item) => {
    return item < 25
 })
 
console.log(result2)
// console.log(arr[3])

const obj = {
    x: 1 ,
    y:2,
    z:'dsdsds',
    
}
const child = {
    a : 5, 
    c : true
}

const res = {...obj , ...child}
console.log(res)
//  const z= 6;

// const child = obj.child
for (let  item in child){
    console.log(item)
}
// const z = obj.z
// const y = obj.y  
// const {z } = obj

// console.log(z)


// console.log(str)
   return(
       <p> test</p>
   ) 



}
export default Paper;

