function animateValue(id){
    var obj = document.getElementById(id);
    var current = 0;
    setInterval(function(){
        if (obj.innerHTML==="9.8"){
            return;
        }
        else {
            current+=0.1;
            obj.innerHTML = current.toFixed(1);
        }
    },50);
}
var review = document.getElementById("review_img");
var value = document.getElementById("value");
var ten = document.getElementById("outtaten");
review.onclick = function(){
    review.classList.add("active");
    value.classList.add("active");
    ten.classList.add("active");
    animateValue('value');
}
