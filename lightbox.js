const image = document.querySelectorAll('.img-gallery')
const image_Light = document.querySelector('.Add-Image')
const container_light = document.querySelector('.imagen-light')
const Menu1 = document.querySelector('.Menu');

image.forEach( img =>{
    img.addEventListener('click', ()=>{
        viewImage(img.getAttribute('src'))
       
    })
})


container_light.addEventListener('click', (e)=>{
    if(e.target != image_Light){
        container_light.classList.toggle('show')
        image_Light.classList.toggle('Show-Image')
        Menu1.style.opacity = '1'
    }
})


const viewImage = (img)=>{
    image_Light.src = img;
    container_light.classList.toggle('show')
    image_Light.classList.toggle('Show-Image')
    Menu1.style.opacity = '0'

}