
function drawPic() {

    var mouseEvent = "empty";
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    var colour = "black";
    var lineWidth = 1;
    var raduis = 20;
    
    canvas.addEventListener("mousedown",my_mousedown);
    
    function my_mousedown(e) {
       // alert("inside mouse down");
        colour = document.getElementById("colour").value;
        lineWidth = document.getElementById("width").value;
        raduis = document.getElementById("radius").value;
        mouseEvent = "mousedown";
    }
    
    canvas.addEventListener("mousemove",my_mousemove);
    
    function my_mousemove(e) {
        var current_x = e.clientX - canvas.offsetLeft;
        var current_y = e.clientY - canvas.offsetTop;
    
        if (mouseEvent=="mousedown") {
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_x + "y = " + current_y);        
            ctx.beginPath();
            ctx.strokeStyle = colour;
            ctx.lineWidth = lineWidth;
            ctx.arc(current_x,current_y,raduis,0,2 * Math.PI)
            ctx.stroke();
        }
    }
    canvas.addEventListener("mouseup",my_mouseup);
    
    function my_mouseup(e) {
        mouseEvent = "mousedown";
    }
    
    
    canvas.addEventListener("mouseleave",my_mouseleave);
    
    function my_mouseleave(e) {
        mouseEvent = "mouseleave";
    }
    
    
    }
    
    function clearArea() {
    
        var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }