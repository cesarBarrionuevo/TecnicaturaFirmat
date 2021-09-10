




// ==================== JS EMI C ========================== //

// ------ NOVEDADES Y ULTIMAS NOTICIAS ------- //

let animado = document.querySelectorAll(".animado"); //selecciono todos los elementos que tengan la clase animado

//Detecto la cantidad de scroll y por consecuencia haré que aparezcan los elementos

//@scrollTop
//  es la cantidad de scroll que voy haciendo a medida que voy bajando

//Luego hago un for porque la clase animado tiene varios elementos

//offsetTop
//  detecta la altura que hay desde el inicio de la ventana hasta donde está el elemento

//@alturaAnimado
//  guardo el resultado de offsetTop

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;   //detecto la altura de cada elemento 
    if (alturaAnimado -550 < scrollTop) {
      animado[i].style.opacity = 1;
      //animado[i].classList.add("mostrarArriba");
      animado[i].classList.add("mostrarDerecha");
    }
  }
}

window.addEventListener('scroll',mostrarScroll);
//Cuando escuche el elemento scroll, se va a ejecutar la función mostrarScroll

