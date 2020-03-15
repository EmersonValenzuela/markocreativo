let btnSendMessage = document.querySelector("#btn-send-message");
let warningMessage = document.querySelector("#warning-message");

let inputNameAndLastname = document.querySelector("#input-name-and-lastname");
let inputPhone = document.querySelector("#input-phone");
let inputEmail = document.querySelector("#input-email");
let textAreaDescription = document.querySelector("#text-area-description");

inputNameAndLastname.addEventListener("input", function(){getDataItems(inputNameAndLastname,inputNameAndLastname.value,"nameAndLastname")});
inputPhone.addEventListener("input", function(){getDataItems(inputPhone,inputPhone.value,"phone")});
inputEmail.addEventListener("input", function(){getDataItems(inputEmail,inputEmail.value,"email")});
textAreaDescription.addEventListener("input", function(){getDataItems(textAreaDescription,textAreaDescription.value,"message")});


function validateFormContact(){		

	if (inputNameAndLastname.value == "" || inputPhone.value == "" || inputEmail.value == "" || textAreaDescription.value == "") return false;

	if(validateEmailFormat("email",inputEmail.value)){
		return true;
	}else{
		return false;
	}
		
}


function getDataItems(item,value,key){
	if(value.length <= 0 ){
		return addClassNew(item,"warning-border")
	}else{
		addClassNew(item,"-");
		setSessionStorage(key,value);
		validateEmailFormat(key,value);
	};
}


function setSessionStorage(key,value){
	sessionStorage.setItem(key,value);
}

function addClassNew(item,value){
		return item.className = value;
};

function setClassNameAll(value){
	inputNameAndLastname.className = value;
	inputPhone.className = value;
	inputEmail.className = value;
	textAreaDescription.className = value;
}

function defaultValueItems(){
	const nameAndLastname_ = sessionStorage.getItem("nameAndLastname");
	const phone_ = sessionStorage.getItem("phone");
	const email_ = sessionStorage.getItem("email");
	const message_ = sessionStorage.getItem("message");
	
	if(nameAndLastname_.length >= 1){
		inputNameAndLastname.value = nameAndLastname_;
	}
	if(phone_.length >= 1 && phone_.length !== null){
		inputPhone.value = phone_;
	}
	if(email_.length >= 1 && email_.length !== null){
		inputEmail.value = email_;
	}
	if(message_.length >= 1 && message_.length !== null){
		textAreaDescription.value = message_;
	}
};

function validateEmailFormat(key,valueEmail){
	let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (key === "email") {
    	let result = regexEmail.test(String(valueEmail).toLowerCase());
	    if(result){
	    	warningMessage.style.display = "none";
	    	return result;
	    }else{
	    	warningMessage.style.display = "inherit";
	    	return result;
	    }
    }
} 

defaultValueItems();

