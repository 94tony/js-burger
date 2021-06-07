var generator = document.getElementById("random-number")
var ResultsElement = document.getElementById("Results")
// prezzo
var discountCopoun = 30
var userCoupon  = document.getElementById("discount")

generator.addEventListener('click' , function() {
var sum = 20;

var selection = document.getElementsByClassName("toppings"); 

for(var x = 0 ;  x < selection.length  ; x++){
   if(selection[x].checked){
       sum += parseInt(selection[x].value)
   }
   if(userCoupon.value.length === 6){
       var prezzosconto = sum-sum/100 *50
    document.getElementById('Results').innerHTML = 'Il costo del tuo burger è:  ' +  " $ "  + parseInt(prezzosconto).toFixed(2);
}
 
 else{
    ResultsElement.innerHTML = 'Il costo del tuo burger è:  ' +  " $ "  +  sum.toFixed(2);
 }

}
})
