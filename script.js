
const btn = document.querySelector("rsvp"); 
const modalClose = document.querySelector("modalClose"); 
const modal = document.querySelector("modal")
if (btn) { 
  btn.onclick = function () {
   
    modal.classList.remove("hidden");
  };
}

if(modalClose) {
  btn.onclick = function () {
   
    modal.classList.add("hidden");
  };
}


