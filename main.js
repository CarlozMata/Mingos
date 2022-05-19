const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
 
document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('materialboxed');
    M.Materialbox.init(imgLightBox);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
