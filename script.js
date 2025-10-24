const birthdayInput = document.getElementById("birthday");
const button = document.getElementById("Btn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    const birthday = new Date(birthdayInput.value);
    const today = new Date();

   
    let age = today.getFullYear() - birthday.getFullYear();

    
    if (today.getMonth() < birthday.getMonth() || 
       (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (age >= 18) {
        message.textContent = "Seu nome foi adicionado na lista! ✅";
    } else {
        message.textContent = "Você é menor de idade. Nome não adicionado! ❌";
    }
});
