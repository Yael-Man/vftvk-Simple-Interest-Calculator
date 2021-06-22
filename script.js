function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // compute the interest
    var interest = principal * years * rate / 100;
    // compute the year to receive the interest
    var year = new Date().getFullYear()+parseInt(years);
    // write the results
    var result = document.getElementById("result").innerHTML=
        "if you deposit " +  "<mark>" + principal + "</mark>" +"," +
        "<br/> at an iterest rate of " +  "<mark>" + rate + "</mark>" + "." +
        "<br/>You will receive anamount of " + "<mark>" + interest + "</mark>" + "," +
        "<br/>it the year " +  "<mark>" + year + "</mark>";
       
  
}

function checkPrincipal() 
{
  // Get the value of the input field with id="principal"
  let x = document.getElementById("principal").value;
  // If x is Not a positive number
  if (x < 1) {
    alert("Enter a positive number");
    return false;
  }
}

function updateRate() 
// update the rate value on the screen
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 

