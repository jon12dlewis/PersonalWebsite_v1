// JavaScript source code

const submitB = document.querySelector("submit");

function submitMessage() {
    var nameB = document.getElementById("nameT").value;
    var emailB = document.getElementById("email").value;
    var messageB = document.getElementById("message").value;
    var phoneB = document.getElementById("phone").value;


    var word = email.value;

    var re = /\S+@\S+\.\S+/;

    var test = re.test(word);



    if (test) {
        alert("Name: " + nameT.value + " \nemail: " + email.value + "\nphone: " + phone.value + " \nmessage: " + message.value);
    }
    else {
        alert("invalid email");
    }

    
}

