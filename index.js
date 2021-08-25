
function zoomImage(options)
{

    const defaultOptions = {
        zoom: 2,
    }

    const mergeOptions = Object.assign(defaultOptions, options)

    if(mergeOptions.hasOwnProperty('root') && mergeOptions.hasOwnProperty('image'))
    {
        const root = document.querySelector(mergeOptions.root), image = document.querySelector(mergeOptions.image)
        
        const rootStyle = {
            position: 'relative',
            overflow: 'hidden'
        }

        Object.assign(root.style, rootStyle)

        const imageStyle = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
        }

        Object.assign(image.style, imageStyle)

        root.addEventListener('mousemove', (e)=>{

           let posX = ( (e.clientX - root.offsetLeft) / root.offsetWidth ) * 100
           let posY =( (e.clientY - root.offsetTop) / root.offsetHeight ) * 100

           image.style.transform = 'translate(-' + posX + '%,-'+ posY + '%) scale(' + mergeOptions.zoom + ')'

        
        })

        root.addEventListener('mouseleave', ()=>{
            image.style.transform = `translate(-50%, -50%) scale(1)`
        })
        
    }
    else{
        console.error("root div and image not provided")
    }

}


module.exports.zoomImage = zoomImage
