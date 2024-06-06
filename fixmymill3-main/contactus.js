const scriptURL ="https://script.google.com/macros/s/AKfycbxr9XCLUIpmKa_gWm50uswwRx9T2KrHHFgsMF6yUBmrePPV9pjWEHxkhAKbW5wtWFeJ/exec";
const form = document.forms['myForm'];
// console.log(form);
let loader=false;


form.addEventListener('submit', e => {
  document.getElementById("loader").classList.add("loading");
  // document.getElementById("submitele").innerHTML="submitting the message";
  loader=true;
  e.preventDefault()
  body=new FormData(form)
  console.log(body);
  let button=document.querySelector("#submit");
  fetch(scriptURL, { method: 'post', body: new FormData(form) })
    .then(response => {
      document.getElementById("loader").classList.remove("loading");
      document.getElementById("submitele").style.color="green";
      document.getElementById("submitele").innerHTML="Submitted";
    })
    .then(() => { 
      
      window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

