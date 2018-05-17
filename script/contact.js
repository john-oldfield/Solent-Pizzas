//##### CONTACT FORM VALIDATION #####//
function validation() 
{
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", formValidation);
}

function formValidation()
{
    var form = document.getElementById("contactForm");
    
    if(form.contactName.value == "")
        {
            document.getElementById("nameTick").style.display = "none";
            document.getElementById("nameCross").style.display = "inline";
            document.getElementById("nameCross").style.color = "red";
            event.preventDefault();
        }
    else
        {
            document.getElementById("nameTick").style.display = "inline";
            document.getElementById("nameTick").style.color = "green";
            document.getElementById("nameCross").style.display = "none";
        }
    
    if(form.contactEmail.value == "")
        {
            document.getElementById("emailTick").style.display = "none";
            document.getElementById("emailCross").style.display = "inline";
            document.getElementById("emailCross").style.color = "red";
            event.preventDefault();
        }
    else
        {
            document.getElementById("emailTick").style.display = "inline";
            document.getElementById("emailTick").style.color = "green";
            document.getElementById("emailCross").style.display = "none";
        }
    
    if(form.contactNumber.value == "")
        {
            document.getElementById("phoneTick").style.display = "none";
            document.getElementById("phoneCross").style.display = "inline";
            document.getElementById("phoneCross").style.color = "red";
            event.preventDefault();
        }
    else
        {
            document.getElementById("phoneTick").style.display = "inline";
            document.getElementById("phoneTick").style.color = "green";
            document.getElementById("phoneCross").style.display = "none";
        }
    
    if(form.contactMessage.value == "")
        {
            document.getElementById("messageTick").style.display = "none";
            document.getElementById("messageCross").style.display = "inline";
            document.getElementById("messageCross").style.color = "red";
            event.preventDefault();
        }
    else
        {
            document.getElementById("messageTick").style.display = "inline";
            document.getElementById("messageTick").style.color = "green";
            document.getElementById("messageCross").style.display = "none";
        }
    
    if(!form.contactMethod.checked)
        {
            document.getElementById("methodTick").style.display = "none";
            document.getElementById("methodCross").style.display = "inline";
            document.getElementById("methodCross").style.color = "red";
            event.preventDefault();
        }
    else
        {
            document.getElementById("methodTick").style.display = "inline";
            document.getElementById("methodTick").style.color = "green";
            document.getElementById("methodCross").style.display = "none";
        }
}

//##### END OF CONTACT VALIDATION #####//

//##### TIME AND DATE #####//
function currDate()
{
    var d = new Date();
    document.getElementById("date").innerHTML = d;    
    console.log("Timer has Started")

    setTimeout(currDate, 500) //Function for Live Time
}//##### END OF TIME AND DATE #####//