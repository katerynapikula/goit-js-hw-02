function getShippingCost(country) {
switch (country) {
case `China`:
return ('100 кредитів');
break;
case `Chile`:
return ('250 кредитів');
break;
case `Australia`:
return ('170 кредитів');
break;
case `Jamaica`:
return ('120 кредитів');
break;
default:
return ("Sorry, there is no delivery to your country");
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"