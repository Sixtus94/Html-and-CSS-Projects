//javascript
function openContactForm() {
    document.getElementById("contact-modal").style.display = "block";
  }
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("contact-modal")) {
      document.getElementById("contact-modal").style.display = "none";
    }
  });
  //This code creates a sticky contact button that opens a modal window with a contact form when clicked. The modal window can be closed by clicking on the close button or outside the modal window.