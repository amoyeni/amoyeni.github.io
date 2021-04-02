var gallery = document.getElementById('gallery'); //creating a new variable from the html

fetch("\jason.json") //Fetching the json object

.then(function(res){ //calling the function
    res.json().then(function(json){ //calling the calling function
        json.forEach(function(el){ //
        
        var galleryItem = document.createElement('a'); //creating our items

        galleryItem.setAttribute('class','gallery-item'); //creating a gallery item
        galleryItem.setAttribute('href', el.url); //setting the gallery items url as the one in the json object
        galleryItem.setAttribute('target', '_blank'); //setting when the gallery item is clicked on a new webpage is opened

        
        var image = document.createElement('img'); //creating the image
        image.setAttribute('src', el.url); //setting the images location from the json object
        image.setAttribute('alt', el.caption); //setting the images caption for accessibility and if the image doesnt load
        image.setAttribute('title', el.caption); //giving the image a title

        var caption = document.createElement('caption'); // creating the variable caption
        caption.innerText = el.caption; //Setting the innertext as the caption from the json object

        galleryItem.appendChild(image); //pushing the image to the DOM
        galleryItem.appendChild(caption); //pushing the caption into the DOM
        gallery.appendChild(galleryItem); //pushing the gallery into the DOM


        });
    });
});