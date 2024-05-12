let customerInfoMssg = document.getElementById("customerInfoMssg");
 
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

// phone number validation
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

//  vehicle year validation
let vehicleYearMssg = document.getElementById("vehicleYearMssg");
document
.getElementById("vehicleYear")
.addEventListener("input", function (event) {
    // Check if the value contains any characters that are not digits or hyphens
    if (/[^0-9-]/.test(this.value)) {
    // If it does, replace those characters with an empty string and show the message
    vehicleYearMssg.innerHTML =
        "Please enter only numeric values for vehicle year";
    this.value = this.value.replace(/[^0-9-]/g, "");
    } else {
    vehicleYearMssg.innerHTML = "";
    }
});

// Function to handle form submission
document
.getElementById("apptmntForm")
.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show an alert message
    alert("Your appointment request is submitted");
});
