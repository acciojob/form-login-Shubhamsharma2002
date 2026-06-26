function getFormvalue() {
    // Prevent the default form submission behavior (page reload)
    // alternative way if event is not passed: read from window.event
    if (window.event) {
        window.event.preventDefault();
    }

    // Access the form using document.getElementById or document.forms
    const form = document.getElementById('form1');
    
    // Retrieve the values of fname and lname, and trim extra edge spaces
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();

    // Concatenate the values into "FirstName LastName"
    const fullName = `${firstName} ${lastName}`;

    // Display the full name using alert()
    alert(fullName);
}