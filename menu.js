const Menu = document.querySelector('.Menu');
const opcion = document.querySelector('.menu-navegacion');

console.log('Menu')
console.log('opcion')

Menu.addEventListener('click', ()=> {
    opcion.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(opcion.classList.contains('spread')
      && e.target !=opcion && e.target != Menu ){


        opcion.classList.toggle("spread")

    }
})