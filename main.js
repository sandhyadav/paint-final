
canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

color = "red"; 
width_of_line=8
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(200, 200, 70 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
   
    //addition activity ends
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
