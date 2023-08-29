function sendMail(){

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
    /*
        const serviceID = "service_x5vjoiq";
    const templateID = "template_9o7ribe";
    emailjs
    .send(serviceID,templateID,parameters)
    .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("reason").value = "";
            console.log(res);
            alert("Thanks for getting in touch with me! I will contact you as soon as possible.");
        })
        .catch((err) => console.log(err)); 
        */
    }
    