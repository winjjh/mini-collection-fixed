//creating new elements and adding them to the page

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "My 18th Mini Album Collection"

// defininng where we want our new element to go
let container = document.querySelector(".container");
// add the new h1 message to our page
container.append(title);


//hoya section
//let bubble = document.createElement("div");
//bubble.classList.add("bubble");
// Question: After I create div using createElement,
// how can I target each div to give style?
//ex like in css, I can chnage the position of the image
// but when I try createElement("div"), I cannot use button.style.top=""
// Also do I have to repeat createElement("div") for click, 
//createElement("div") for click2, and go on.

let button = document.querySelector(".click");
button.addEventListener("mouseover", function(){
    let hoya = document.createElement("img");
    hoya.classList.add("hoya");
    hoya.src = "./assets/hoya.jpg";
    container.append(hoya);
})

button.style.top = "200px";
button.style.right = "1400px";

container.addEventListener("mouseout", function (event){
    //console.log(event);
    if (event.target.classList.contains("hoya")){
        event.target.remove();
    }
});




//green beige section
let button2 = document.querySelector(".click2");
button2.addEventListener("mouseover", function(){
    let green = document.createElement("img");
    green.classList.add("green");
    green.src = "./assets/green beige.jpg";
    container.append(green);
})

button2.style.top = "200px";
button2.style.left = "350px";

container.addEventListener("mouseout", function (event){
    //console.log(event);
    if (event.target.classList.contains("green")){
        event.target.remove();
    }
});


//IU section
let button3 = document.querySelector(".click3");
button3.addEventListener("mouseover", function(){
    let iu = document.createElement("img");
    iu.classList.add("iu");
    iu.src = "./assets/IU_1.jpg";
    container.append(iu);
})

button3.style.top = "200px";
button3.style.left = "650px";

container.addEventListener("mouseout", function (event){
    //console.log(event);
    if (event.target.classList.contains("iu")){
        event.target.remove();
    }
});

//BTS section
let button4 = document.querySelector(".click4");
button4.addEventListener("mouseover", function(){
    let bts = document.createElement("img");
    bts.classList.add("bts");
    bts.src = "./assets/dynamaite.jpg";
    container.append(bts);
})

button4.style.top = "200px";
button4.style.left = "950px";

container.addEventListener("mouseout", function (event){
    //console.log(event);
    if (event.target.classList.contains("bts")){
        event.target.remove();
    }
});

//ayokay section
let button5 = document.querySelector(".click5");
button5.addEventListener("mouseover", function(){
    let ayokay = document.createElement("img");
    ayokay.classList.add("ayokay");
    ayokay.src = "./assets/ayokay.jpg";
    container.append(ayokay);
})

button5.style.top = "200px";
button5.style.left = "1250px";

container.addEventListener("mouseout", function (event){
    //console.log(event);
    if (event.target.classList.contains("ayokay")){
        event.target.remove();
    }
});





//for (let i = 0; i < 10; i++){
    //let hoya = document.createElement("img");
    //hoya.classList.add("hoyaImage");
    //hoya.src = "./assets/hoya.jpg";
    //container.appendChild(hoya);
    //}


    













// define image
//let image = document.querySelector(".image");

//image.addEventListener("click", function(){
    // creating a new image element
    //let albumImage = document.createElement("img");
    //albumImage.classList.add("album-image");
    //albumImage.src = "./assets/ayokay.jpg";
    
    //add image to the paage
    //container.append(albumImage);
//})