canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=100;
car1_height=60;
car1_x=40;
car1_y=130;


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

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;

    


}

function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}

function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
   

}
function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car1_width,car1_height);
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
    if (car1_x>=600){
        console.log("car1_x");
        document.getElementById("game_status").innerHTML="Car 1 Won";
    
    
    }
    else if (car2_x>=600){
       console.log("car2_x");
       document.getElementById("game_status").innerHTML="Car 2 Won";
    }
}

function up(){
    if (car1_y>=40){
        car1_y-=10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        
    }
}


function down(){
    if (car1_y<=200){
        car1_y+=10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        
    }
}


function left(){
    if (car1_x>=0){
        car1_x-=10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        
    }
}


function right(){
    if (car1_x<=659){
        car1_x+=10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        
    }
}





function up2(){
    if (car2_y>=300){
        car2_y-=10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        
    }
}


function down2(){
    if (car2_y<=460){
        car2_y+=10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        
    }
}


function left2(){
    if (car2_x>=0){
        car2_x-=10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        
    }
}


function right2(){
    if (car2_x<=659){
        
        car2_x+=10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
        
    }
}



