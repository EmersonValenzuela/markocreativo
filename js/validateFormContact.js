let btnSendMessage = document.querySelector("#btn-send-message");

let inputNameAndLastname = document.querySelector("#input-name-and-lastname");
let inputPhone = document.querySelector("#input-phone");
let inputEmail = document.querySelector("#input-email");
let textAreaDescription = document.querySelector("#text-area-description");

inputNameAndLastname.addEventListener("input", function(){getDataItems(inputNameAndLastname,inputNameAndLastname.value,"nameAndLastname")});
inputPhone.addEventListener("input", function(){getDataItems(inputPhone,inputPhone.value,"phone")});
inputEmail.addEventListener("input", function(){getDataItems(inputEmail,inputEmail.value,"email")});
textAreaDescription.addEventListener("input", function(){getDataItems(textAreaDescription,textAreaDescription.value,"message")});

btnSendMessage.addEventListener("click",validateFormContact);

function validateFormContact(){
	
	if(inputNameAndLastname.value.length <= 1){
		addClassNew(inputNameAndLastname,"warning-border");
	}else{
		setLocalStorage("nameAndLastname","");
	}
	if(inputPhone.value.length <= 1){
		addClassNew(inputPhone,"warning-border");
	}else{
		setLocalStorage("phone","");
	}
	if(inputEmail.value.length <= 1){
		addClassNew(inputEmail,"warning-border");
	}else{
		setLocalStorage("email","");
	}
	if(textAreaDescription.value.length <= 1){
		addClassNew(textAreaDescription,"warning-border");
	}else{
		setLocalStorage("message","");
	}
}


function getDataItems(item,value,key){
	if(value.length <= 0 ){
		return addClassNew(item,"warning-border")
	}else{
		addClassNew(item,"-");
		setLocalStorage(key,value);
	};
}


function setLocalStorage(key,value){
	localStorage.setItem(key,value);
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
	const nameAndLastname_ = localStorage.getItem("nameAndLastname");
	const phone_ = localStorage.getItem("phone");
	const email_ = localStorage.getItem("email");
	const message_ = localStorage.getItem("message");
	
	if(nameAndLastname_.length >= 1){
		inputNameAndLastname.value = nameAndLastname_;
	}
	if(phone_.length >= 1){
		inputPhone.value = phone_;
	}
	if(email_.length >= 1){
		inputEmail.value = email_;
	}
	if(message_.length >= 1){
		textAreaDescription.value = message_;
	}
};

function validateEmailFormat(valueEmail){
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(valueEmail).toLowerCase());
} 

defaultValueItems();