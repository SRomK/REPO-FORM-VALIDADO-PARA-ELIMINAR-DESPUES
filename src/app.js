/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  let alert = document.querySelector(".myAlert");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert.classList.remove("dnone");
          alert.classList.add("dshow");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
