import {ag} from "/age.js";
import {checkAge} from "/checkAge.js" ;
console.log('Hello World!');
let today = new Date().toISOString().substr(0, 10);
const dob = document.getElementById("dob");
dob.defaultValue=today;
console.log(today.split("-"));

dob.addEventListener("change" , ()=>{
 var age = ag(dob.value);
 checkAge(age);
})