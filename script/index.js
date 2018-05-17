//##### IMAGE SLIDER #####//
var images = ["img/pizza1.jpg", "img/pizza2.jpg", "img/pizza3.jpg"];
var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x)
{
    imageNumber += x;
    if (imageNumber > imageLength)
        {
            imageNumber = 0;
        }
    if (imageNumber < 0)
        {
            imageNumber = imageLength;
        }
    
    document.getElementById("slideshow").src = images [imageNumber];
    
    return false;
}

function autoRun()
{
    setInterval("changeImage(1)",3000);
}//##### END OF IMAGE SLIDER #####//

//##### TIME AND DATE #####//
function currDate()
{
    var d = new Date();
    document.getElementById("date").innerHTML = d;    
    console.log("Timer has Started")

    setTimeout(currDate, 500) //Function for Live Time
}//##### END OF TIME AND DATE #####//