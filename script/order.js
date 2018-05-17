//##### MAIN #####//
function validation()
{
    var form = document.getElementById("orderForm");
    form.addEventListener("submit", orderValidation);
    
}

function orderValidation()
{
    var form = document.getElementById("orderForm");
    var valid = false;
    
    if(form.size.value == "")
    {
        document.getElementById("errBase").style.display = "block";
        event.preventDefault();
    }
    
    else
    {
        document.getElementById("errBase").style.display = "none";
    }
    
    for(var i = 0; i < form.topping.length; i++)
    {
        if(form.topping[i].checked)
            {
                valid = true;
            }
    }
    
    if(valid == false)
    {
        document.getElementById("errTopping").style.display = "block";
        event.preventDefault();
    }
    
    else
    {
        document.getElementById("errTopping").style.display = "none";
    }
}

function order()
{
    var form = document.getElementById("orderForm"); 
    form.addEventListener("change", formChanged);
}

function formChanged(event)
{
    event.preventDefault();
    console.log("Form Changed")
    var form = document.getElementById("orderForm");
    var subTotal = 0;
    var delivery = 0;
    var total = 0;
    var desc = "";
    
    for(var i=0; i < form.size.length; i++)
    {
        if(form.size[i].checked)
            {
                var tmpNumber= parseFloat(form.size[i].dataset.price);
                subTotal = subTotal + tmpNumber;
                desc = desc + "<br>" + form.size[i].dataset.humanDesc; 
            }
    }
    
    for(var i=0; i < form.topping.length; i++)
    {
        if(form.topping[i].checked)
            {
                var tmpNumber= parseFloat(form.topping[i].dataset.price);
                subTotal = subTotal + tmpNumber;
                desc = desc + "<br>" + form.topping[i].dataset.humanDesc; 
            }
    }
    
    for(var i=0; i < form.extra.length; i++)
    {
        if(form.extra[i].checked)
            {
                var tmpNumber= parseFloat(form.extra[i].dataset.price);
                subTotal = subTotal + tmpNumber;
                desc = desc + "<br>" + form.extra[i].dataset.humanDesc;
            }
    }
    
    if(subTotal < 10)
                {
                    delivery = delivery + 2;
                }
    if(subTotal >= 10)
                {
                    delivery = 0;
                }
    total = subTotal + delivery;
    
    document.getElementById("items").innerHTML = desc;
    document.getElementById("deliveryCost").innerHTML = "£" + delivery.toFixed(2);
    document.getElementById("totalCost").innerHTML = "£" + total.toFixed(2);
    
    
} //##### END OF ORDER FORM #####//


//##### TIME AND DATE #####//
function currDate()
{
    var d = new Date();
    document.getElementById("date").innerHTML = d;    
    console.log("Timer has Started")

    setTimeout(currDate, 500) //Function for Live Time
}//##### END OF TIME AND DATE #####//