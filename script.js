var image = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
var index = 0;
var img = document.getElementById('img');

setInterval(change, 1000);
function change(){
    index++;
    // img.src = image[index]
    if(index >= image.length){
        index = 0;
        img.src = image[index];
    }
    else{
        img.src = image[index];
    }
}