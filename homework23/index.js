"use strict";
const humbrger = new Hamburger(SIZE_SMALL);

humbrger.addStuffing(STUFFING_CHEESE);
humbrger.addAdditives(ADDITIVE_MAYONNAISE);

console.log(`Calories: ${humbrger.getCalcCalories()}`);
console.log(`Price: ${humbrger.getCalcPrice()}`);

humbrger.addAdditives(ADDITIVES_SEASONING);

console.log(`Price with sauce: ${humbrger.getCalcPrice()}`);
