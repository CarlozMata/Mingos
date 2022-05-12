document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('materialboxed');
    M.Materialbox.init(imgLightBox);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
