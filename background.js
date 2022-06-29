const images=["1.jpg","2.jpg","3.jpg"];

const chooseImage=images[Math.floor(Math.random() *images.length)];

const bgImage=document.createElement("img");
bgImage.src=`img/${chooseImage}`;

document.body.appendChild(bgImage);