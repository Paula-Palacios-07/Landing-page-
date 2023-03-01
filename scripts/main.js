'use strict'
//variables registrarse
const registro = document.getElementById('registrar');
const modalRegistro = document.querySelector('.modalRegistro');
const closeRegistro = document.querySelector('.closeRegistro');
//variables inicio
const inicio = document.getElementById('inicio');
const modalInicio = document.querySelector('.modalInicio');
const closeInicio = document.querySelector('.closeInicio');
//variable probar gratis
const probar= document.getElementById('probar');
//variable pagina de precio
const registroPrecio = document.getElementById('registrarP');
const modalRegistroP = document.querySelector('.modalRegistroP');
const closeRegistroP = document.querySelector('.closeRegistroP');
//variables inicio PAGINA DE PRECIO
const inicioP = document.getElementById('inicioP');
const modalInicioP = document.querySelector('.modalInicioP');
const closeInicioP = document.querySelector('.closeInicioP');
//registro aqui
const regiQui = document.getElementById('tegiQui');
//modal registrase index
registro.onclick = function () {
    modalRegistro.classList.add('modalShow');


};
closeRegistro.onclick = function () {
    modalRegistro.classList.remove('modalShow');
};
//modal inicio index
inicio.onclick = function () {
    modalInicio.classList.add('modalShow');
};
closeInicio.onclick = function () {
    modalInicio.classList.remove('modalShow');
};
//probar gratis btn index
probar.onclick = function () {
    modalRegistro.classList.add('modalShow');
};
closeRegistro.onclick = function () {
    modalRegistro.classList.remove('modalShow');
};
//modal registrase precio
registroPrecio.onclick = function () {
    modalRegistroP.classList.add('modalShow2');
};
closeRegistroP.onclick = function () {
    modalRegistroP.classList.remove('modalShow2');
};

//modal inicio index
inicioP.onclick = function () {
    modalInicioP.classList.add('modalShow2');
};
closeInicioP.onclick = function () {
    modalInicioP.classList.remove('modalShow2');
};

cerrar.onclick = function () {
    modalAlert("ingresa a su correo y active la cuenta")
}

regiQui.onclick = function () {
    modalRegistro.classList.add('modalShow');
};
closeRegistro.onclick = function () {
    modalRegistro.classList.remove('modalShow');
}; 



/*modal alerta*/
  const modalAlert = (cad) => {
  const alerta = document.createElement('div');
  const texto = document.createElement('p');
  const img = document.createElement('img');
  img.src = './assets/img/clear.png';
  img.className="close";
  texto.setAttribute("class","textAlerta");
  alerta.setAttribute("id","alerta");
  alerta.setAttribute("class","alerta");
  texto.innerHTML = `<strong>${cad}</strong>`;
  alerta.appendChild(img);
  alerta.appendChild(texto);
  document.body.appendChild(alerta);
  img.onclick = function(){
      document.getElementById("alerta").remove();
  }

}
//evento de envio link al correo cuando se registra
const suscribase = document.getElementById('suscribase');

suscribase.onclick = function () {
  const email = document.getElementById('email').value;
  modalAlert("Se envio un correo con el link de activación");
}
//modal inicio index
inicioP.addEventListener('click', (e) =>{
    e.preventDefault();
    modalInicioP.classList.add('modalShow');
});
closeInicioP.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInicioP.classList.remove('modalShow');
});