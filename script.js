function convertTemp(temp, unitTo) {
	if (unitTo === "F") {
		var convertedTemp = temp * (9/5) + 32;
	} else if (unitTo === "C") {
		convertedTemp = (temp - 32) * (5/9);
	}
	console.log("The temperature is " + convertedTemp + " " + unitTo + ".");
}

convertTemp(212, "C"); //>100
convertTemp(32, "C"); //>0
convertTemp(65, "C"); //>18.33
convertTemp(0, "F"); //>32