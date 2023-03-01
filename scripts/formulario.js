import { Validacion } from "./Validacion.js";
//instanciar objeto
const validacion = new Validacion();
//selecion formulario y boton
const formulario = document.getElementById("form");
const btn = document.getElementById("btn");
//objeto de validacion
const formValid = {
  nombres: false,
  apellidos: false,
  mail: false,
  tel: false,
};
//validacion
formulario.addEventListener("change", (e) => {
  const inputId = e.target.id;
  const miValue = e.target.value;
  const miClass = e.target.classList;
  const validClass = () => {
    miClass.add("is-valid");
    miClass.remove("is-invalid");
  };
  const invalidClass = () => {
    miClass.add("is-invalid");
    miClass.remove("is-valid");
  };

  switch (inputId) {
    case "nombre":
      formValid.nombres = validacion.valid_name(miValue);
      formValid.nombres ? validClass() : invalidClass();
      console.log(Object.values(formValid));
      break;

    case "apellido":
      formValid.apellidos = validacion.valid_name(miValue);
      formValid.apellidos ? validClass() : invalidClass();
      console.log(Object.values(formValid));
      break;

    case "mail":
      formValid.mail = validacion.valid_email(miValue);
      formValid.mail ? validClass() : invalidClass();
      console.log(Object.values(formValid));
      break;

    case "telefono":
      formValid.tel = validacion.valid_tel(miValue);
      formValid.tel ? validClass() : invalidClass();
      console.log(Object.values(formValid));
      break;
  }
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validacion.validarForm(formValid) === -1) {
    alert("Hola!, revisa tu bandeja de entrada");
    let datos = new FormData(document.getElementById("form"));
    console.log(datos);
  }
});
