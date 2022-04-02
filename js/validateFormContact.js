//VALIDATE CONTENT FORM
function validateFormContactB() {
  let nameValue = document.querySelector("#input-name-b").value;
  let phoneValue = document.querySelector("#input-phone-b").value;
  let emailValue = document.querySelector("#input-email-b").value;
  let descriptionValue = document.querySelector("#input-description-b").value;

  let stateMessage = document.querySelector("#state-message");

  if (!nameValue || !phoneValue || !emailValue || !descriptionValue) {
    stateMessage.innerHTML = "*Ups te falto llenar el formulario";
    stateMessage.style.color = "red";
    return false;
  } else {
    //GET DATA RADIO GROUP
    getDataTypeContact(contactType);

    let userDataSt = {
      userName: nameValue.toLowerCase(),
      userPhone: phoneValue.toLowerCase(),
      userEmail: emailValue.toLowerCase(),
      userDescription: descriptionValue.toLowerCase(),
    };

    //SET DATA
    const refMessage = `https://api.whatsapp.com/send?phone=+51987523496&text=*_MENSAJE DE COTIZACIÓN DESDE WEB MARKOCREATIVO_*%0A%0A*Nombres y apellidos:*%0A${name}%0A%0A*Email:*%0A${emailValue}%0A%0A*Cell:*%0A${phoneValue}%0A%0A*Description:*%0A${userDescription}`;

    window.open(refMessage);

    nameValue = "";
    emailValue = "";
    phoneValue = "";
    descriptionValue = "";

    return true;
  }
}
