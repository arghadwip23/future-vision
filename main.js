import { ag } from "/age.js";
import { checkAge } from "/checkAge.js";
import { gender} from "/gender.js";
//const anime = require('animejs');
console.log('Hello World!');

//current date
let today = new Date().toISOString().substr(0, 10);

//Doms
var btn = document.getElementById('btn');
const dob = document.getElementById("dob");
var greet = document.getElementById("head");
var name = document.getElementById("name");
var avtar = document.getElementById("avtar");
var sex = document.getElementById("gender");

//set default to the date input
dob.defaultValue = today;

dob.addEventListener("change", () => {
  var age = ag(dob.value);
  checkAge(age);
})
btn.addEventListener("click" , ()=>{
 greet.innerHTML = `Hello ${gender()} ${name.value}`  ;
 avtar.src=`https://joeschmoe.io/api/v1/${sex.value}/${name.value}`
  
  var a=78 ;
  document.getElementById("modal").style.display="flex";
  
  anime({
    targets: '#dm',
    value: [0, a],
    round: .1,
    easing: 'easeInOutExpo',
    duration : 2000
  })

})
