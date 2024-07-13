
const btn = document.querySelector("rsvp"); 
const modalClose = document.querySelector("modalClose"); 
const modal = document.querySelector("modal");
console.log(`HEHHEHE`,btn)
if (btn) { 
  btn.onclick = function () {
   console.log(`RSVVPPPP`)
    modal.classList.remove("hideModal");
  };
}

if(modalClose) {
  modalClose.onclick = function () {
   
    modal.classList.add("hideModal");
  };
}


