// ex07.js
function isNationalIDValid(name, age, zip, password) {
	if (name === "") {
		return false;
	} else if (age >= 18 && age <= 65) {
		if (zip <= 99999 && zip >= 0) {
			if (password != "qwerty" || password != "azerty" || password != 1234) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true
