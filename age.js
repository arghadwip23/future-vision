 export var ag = (dob) =>{
var from = dob.split("-");
let cur = new Date().toISOString().substr(0, 10);
var dt = cur.split("-");
return dt[0]-from[0];
}