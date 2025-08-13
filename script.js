function validEmail(str) {
	const emailReg = /^[a-zA-Z0-9]+([.-_]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,}?$/;
	return emailReg.text(str);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
