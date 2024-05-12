      // phone number validation
      let customerInfoMssg = document.getElementById("customerInfoMssg");
      document
      .getElementById("phone")
      .addEventListener("input", function (event) {
          // Check if the value contains any characters that are not digits or hyphens
          if (/[^0-9-]/.test(this.value)) {
          // If it does, replace those characters with an empty string and show the message
          customerInfoMssg.innerHTML =
              "Please enter only numeric values or hyphen for phone number";
          this.value = this.value.replace(/[^0-9-]/g, "");
          } else {
            customerInfoMssg.innerHTML = "";
          }
      });

      //  customer name validation
      document
      .getElementById("customerName")
      .addEventListener("input", function (event) {
          // Check if the value contains any characters that are  not english alphabet or space
          if (/[^a-zA-Z\s]/.test(this.value)) {
          // If it does, replace those characters with an empty string and show the message
          customerInfoMssg.innerHTML =
              "Please enter only alphabets and spaces for name";
          this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
          } else {
            customerInfoMssg.innerHTML = "";
          }
      });

      // Function to handle form submission
      document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent the default form submission behavior

          // Show an alert message
          alert("Your message is sent");
      });
  