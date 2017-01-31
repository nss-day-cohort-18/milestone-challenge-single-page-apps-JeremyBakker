"use strict"

var CarLot = (function (originalCarLot) {

	originalCarLot.changeBorder = function(domElement, color){
		domElement.classList.add(color);
 	};

 	originalCarLot.resetBorder = function(domElement, color){
 		domElement.classList.remove(color)
 	};

 	return originalCarLot;

})(CarLot || {});