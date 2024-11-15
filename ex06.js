function getReduction(price, age) {
	if (age < 5){
      return (price/100)*0;
    } else if(age <= 18){
      return (price/100)*50;
    } else if (age <= 25){
      return (price/100)*70;
    } else {
      return price;
    }
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
