// Creates a template of a car object using contructor notation

function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.discount = (price * 10) / 100 ;
    this.finalPrice = function(){
        return this.price - this.discount;
    }
};

// Creates two instances from the Car object
var ford = new Car('Ford', 'FreeStyle 2008', 5300);
var nissan = new Car('Nissan', 'Sentra 2020', 13850);

// Update the HTML for the Ford object
var carMake = document.getElementById('make');
carMake.textContent ='Make: ' + ford.make;

var carModel = document.getElementById('model');
carModel.textContent = 'Model: ' + ford.model;

var carPrice = document.getElementById('price');
carPrice.textContent = 'Price: $' + ford.price;

var carDiscount = document.getElementById('discount');
carDiscount.textContent = "With our great discount of 10 %"

var carFinalPrice = document.getElementById('finalPrice');
carFinalPrice.textContent = 'After Discount $' + ford.finalPrice();


// Update the HTML for the Nissan object
var carMake2 = document.getElementById('make2');
carMake2.textContent ='Make: ' + nissan.make;

var carModel2 = document.getElementById('model2');
carModel2.textContent = 'Model: ' + nissan.model;

var carPrice2 = document.getElementById('price2');
carPrice2.textContent = 'Price: $' + nissan.price;

var carDiscount2 = document.getElementById('discount2');
carDiscount2.textContent = "With our great discount of 10 %"

var carFinalPrice2 = document.getElementById('finalPrice2');
carFinalPrice2.textContent = 'After Discount $' + nissan.finalPrice();
