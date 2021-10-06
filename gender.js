export var gender = ()=>{
  var gender_input = document.getElementById("gender").value;
  if (gender_input == "female") {
    return "Mr.";
  } else {
    return "Mrs." ;
  }
}