function sendMail(){

    var parameters = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        reason: document.getElementById("reason").value,
    };
    const serviceID = "service_x5vjoiq";
    const templateID = "template_9o7ribe";
    emailjs.send("service_x5vjoiq","template_9o7ribe",parameters).then(function (res) {
        alert("Success "+res.status);
    })
    /*
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
    