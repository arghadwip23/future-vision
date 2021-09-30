export var checkAge = (age) =>{
  var dob = document.getElementById("dob");
  if (age<10){
    dob.classList.add("is-invalid");
    dob.classList.remove("is-valid");
  }else{
    dob.classList.add("is-valid");
    dob.classList.remove("is-invalid");
  }
}