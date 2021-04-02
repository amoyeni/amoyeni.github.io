var images = document.getElementById('galleryimages');
var caption = document.getElementById('gallerycaption');
var prev = document.getElementById('galleryprevious')
var next = document.getElementById('gallerynext')


fetch("\Future.json") //fetching new json file

.then(function(res){
    res.json().then(function(json){
        json.forEach(function(el,i){

            var image = document.createElement('img'); //setting and creating atributes to the iage
            image.setAttribute('src', el.url);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);

            images.appendChild(image); //puts the image on dom
        });
                setupscroll(json);
    });
});

function setupscroll(json){ //uses the buttons and parse json

var imagecount = 9;
var currentimage = 1;
var imagewidth = 400;

prev.addEventListener('click', function() {
    if(currentimage !== 1){
        --currentimage;

        images.style.left = imagewidth-(currentimage*imagewidth) + 'px'
    }

    caption.innerText = json[currentimage-1].caption;
    
});

next.addEventListener('click', function() {
    if(currentimage !== imagecount){
        ++currentimage;

        images.style.left = imagewidth-(currentimage*imagewidth) + 'px'
    }
    caption.innerText = json[currentimage-1].caption;
});
}
