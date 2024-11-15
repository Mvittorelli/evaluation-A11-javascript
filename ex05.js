function isEnoughMoney(price, wallet) {
	if (wallet >= price){
      return true;
    } else {
      return false;
    }
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true
