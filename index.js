var checkbox = document.querySelector(".checkbox");
var amounts = document.querySelectorAll(".amount");
var monthly_amount = [19.99, 24.99, 39.99];
var yearly_amount = [199.99, 249.99, 399.99];
checkbox.addEventListener("input", ()=>{
    amounts.forEach( (amount, index) =>{
        amount.textContent = checkbox.checked? monthly_amount[index] : yearly_amount[index];
    });
});