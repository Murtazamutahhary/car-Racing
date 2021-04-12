canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=60;
rover_x=40;
rover_y=130;


car2_x=40;
car2_y=400;
car1_image="car2.png";
car2_image="car2.png";
background_image="track1.jpeg";
background_image2="track2.jpeg";
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;

    


}
function baner(){
    background_imageTag2=new Image();
    background_imageTag2.onload=uploadBackground2;
    background_imageTag2.src=background_image2;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}
function uploadBackground2(){
    ctx.drawImage(background_imageTag2,0,0,canvas.width,canvas.height);

    
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
   

}
function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
        up();
    }
    if (keypressed=='40'){
        down();
    }
    if (keypressed=='37'){
        left();
    }
    if (keypressed=='39'){
        right();
    }

}
window.addEventListener("keydown",my_keydown2);

function my_keydown2(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='87'){
        up2();
    }
    if (keypressed=='83'){
        down2();
    }
    if (keypressed=='65'){
        left2();
    }
    if (keypressed=='68'){
        right2();
    }

}

function up(){
    if (rover_y>=40){
        rover_y-=10;
        uploadBackground();
        uploadRover();
        uploadCar2();
        
    }
}


function down(){
    if (rover_y<=200){
        rover_y+=10;
        uploadBackground();
        uploadRover();
        uploadCar2();
        
    }
}


function left(){
    if (rover_x>=0){
        rover_x-=10;
        uploadBackground();
        uploadRover();
        uploadCar2();
        
    }
}


function right(){
    if (rover_x<=659){
        rover_x+=10;
        uploadBackground();
        uploadRover();
        uploadCar2();
        
    }
}





function up2(){
    if (car2_y>=300){
        car2_y-=10;
        uploadBackground();
        uploadCar2();
        uploadRover();
        
    }
}


function down2(){
    if (car2_y<=460){
        car2_y+=10;
        uploadBackground();
        uploadCar2();
        uploadRover();
        
    }
}


function left2(){
    if (car2_x>=0){
        car2_x-=10;
        uploadBackground();
        uploadCar2();
        uploadRover();
        
    }
}


function right2(){
    if (car2_x<=659){
        
        car2_x+=10;
        uploadBackground();
        uploadCar2();
        uploadRover();
        
    }
}

function win(){
    if (car2_x<=659){
        
       
        uploadBackground();
        uploadCar2();
        
        
    }
}

