//variable declaration
function totalCalcu(){

const ADMIN_FEE = 50.00;
const TICKET_PRICE = 250.00;

let quantity = document.getElementById("quantity").value;

let subtotal = quantity * TICKET_PRICE;
let total = subtotal + ADMIN_FEE;

document.getElementById("subtotal").value = subtotal.toFixed(2);
document.getElementById("total").innerHTML = total.toFixed(2);

}
