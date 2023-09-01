function sendMail(){
    /**function to send the emails and get values */

    var parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_x5vjoiq","template_321ex74",parameters,).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

    }

 