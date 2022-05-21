const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');
    btn.addEventListener('click', () => {
        menu.classList.toggle('active')
    })

const menu1 = document.querySelector('.menu1');
    menu1.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
const menu2 = document.querySelector('.menu2');
menu2.addEventListener('click', () => {
    menu.classList.toggle('active')
})
const menu3 = document.querySelector('.menu3');
menu3.addEventListener('click', () => {
    menu.classList.toggle('active')
})
const menu4 = document.querySelector('.menu4');
menu4.addEventListener('click', () => { 
    menu.classList.toggle('active')
})
const menu5 = document.querySelector('.menu5');
menu5.addEventListener('click', () => {
    menu.classList.toggle('active') 
})
const menu6 = document.querySelector('.menu6');
menu6.addEventListener('click', () => {
    menu.classList.toggle('active')
})

function ocultarWhatsapp() { 
    document.getElementById('whatsappOnOff').style.display = 'none';
} 
function mostrarWhatsapp() {
    document.getElementById('whatsappOnOff').style.display = "block";
} 
  
         
document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('materialboxed');
    M.Materialbox.init(imgLightBox);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
