# About this plugin

Zoom your image with hover or by tap (mobile). Perfect for ecommere stores.


# Installation

Using NPM

`npm install adi-imagezoom --save`


Using CDN

`<script src="https://unpkg.com/adi-imagezoom@1.0.0"></script>`


# Usage

Make sure that the HTML is arranged in following format 

```
<div id='root'>

    <img src="image.png" id="image">

</div>

```

Apply dimensions to the the parent (div) and image (img)

```
#root{
    width: 500px; /*as per your requirements*/
    height: 500px; /*as per your requirements*/
}

#image{
    width: 500px; /*as per your requirements*/
    height: 500px; /*as per your requirements*/
}

```

After that in your script  

Using NPM


```
import {zoomImage} from 'adi-zoomimage'

window.addEventListener('load', ()=>{
    zoomImage({
        root: '#root', 
        image: '#image',
        zoom: 2
    })
})

```


Using CDN

```
<!-- insert the script tag in your HTML head section -->

window.addEventListener('load', ()=>{
    zoomImage({
        root: '#root', 
        image: '#image',
        zoom: 2
    })
})

```



# Options

| Options        | Default Value           | Description  |
| ------------- |:-------------:| -----:|
| image    (required)  | '' | id or class of the img to zoom |
| root    (required)  | '' | id or class of the parent HTML tag of the img |
| zoom      |   2    |   zoom amount of the image |


