import './style.scss'

//“Cógeme todas las puertas”
document.querySelectorAll('.accordion-collapse').forEach((item) => {
  item.addEventListener('shown.bs.collapse', function () {
    setTimeout(() => {
      this.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 2);
  });
});


