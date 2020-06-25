var button = document.getElementById('slide');
button.onclick = function () {
    var containerHC = document.getElementById('containerHC');
    sideScroll(containerHC,'right',25,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var containerHC = document.getElementById('containerHC');
    sideScroll(containerHC,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}