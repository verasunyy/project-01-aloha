
// //Initialize Flickity with vanilla JavaScript
// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });




// validating email and display alart box
const emailSubscribe = document.getElementById("emailSubscribe");
const emailInput = document.getElementById("emailInput");

emailSubscribe.addEventListener("submit", function(event){
    event.preventDefault();
    if(emailInput.value != ""){
        alert("Thank You for Subscribe!");
        emailInput.value = "";
    }
    else{
        alert("Please Enter a Valid Email");
    }
})

// add products to shopping cart
const numberOfItems = document.getElementById("numberOfItems");
// const product = document.getElementsByClassName("carousel-cell");
const products = document.getElementById("featured");
let index=0;
products.addEventListener("click", function(event){
    event.preventDefault();

    if(index<10){
        alert("Adding this item to cart!");   
    index++;
    numberOfItems.innerHTML = index;
    }
    else{
        alert("You are buying too many itmes! Your cart is full!")
    }
})

// product.addEventListener("click", function(event){
//     event.preventDefault();
//     alert(this.id);

//     if(index<10){
//     index++;
//     numberOfItems.innerHTML = index;
//     }
//     else{
//         alert("You are buying too many itmes! Your cart is full!")
//     }
// })












