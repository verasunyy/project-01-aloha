
document.addEventListener("DOMContentLoaded", function () {


    // validating email and display alart box
    const emailSubscribe = document.getElementById("emailSubscribe");
    const emailInput = document.getElementById("emailInput");

    emailSubscribe.addEventListener("submit", function (event) {
        event.preventDefault();
        if (emailInput.value != "") {
            alert("Thank You for Subscribe!");
            emailInput.value = "";
        }
        else {
            alert("Please Enter a Valid Email");
        }
    });


    // products list
    const productList = [];
    // add products to shopping cart
    const numberOfItems = document.getElementById("numberOfItems");
    const buttonList = document.querySelectorAll("#featured button");
    let index = 0;
    buttonList.forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            if (index < 10) {
                // alert("Adding this item to cart!");
                index++;
                numberOfItems.innerHTML = index;
                //add item to the product list
                productList.push(element.getAttribute("id").substring(0));
                console.log(productList);
            }
            else {
                alert("You are buying too many itmes! Your cart is full!");
            }
        });
    });

    //show products list when click cart
    const showCart = document.getElementById("cartNumber");
    console.log(showCart);
    showCart.addEventListener("click", function (event){
        event.preventDefault();
        alert("you have " + index + " items in your shopping cart: " + productList);
    });


    // smooth scroll
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (element) {
        let ids = element.getAttribute("href").substring(1);
        let section = document.getElementById(ids);
        element.addEventListener("click", function (event) {
            event.preventDefault();
           section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        //    window.scrollBy(0,-89);
        });
    });
});
    /*
    //smooth scrooll using window.scrollTo();
    //not working properly when click a link twice-its went back to the top
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(function (element) {
        let ids = element.getAttribute("href").substring(1);
        let section = document.getElementById(ids);
        let sectionPosition = section.getBoundingClientRect().top;
        let offsetPosition = sectionPosition - 89;
        //to reset the top position;
        window.scroll(0, 0);
        element.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
    */
