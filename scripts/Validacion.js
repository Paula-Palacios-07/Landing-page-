class Validacion{

    constructor(){}

    inputValid(input, regex){
        return input.match(regex) ? true : false;
    };

    valid_name(cad){
        const nombreRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const response = this.inputValid(cad, nombreRX);
        return response;
    }

    valid_apellidos(cad){
        const apellidoRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const response = this.inputValid(cad, apellidoRX);
        return response;
    }

    valid_email(cad){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const response = this.inputValid(cad, mailRX);
        return response;
    }

    valid_tel(cad){
        const telRX = /^([0-9]{10}(\.[0-9]{1,2})?)$/g;
        const response = this.inputValid(cad, telRX);
        return response;
    }
    validarForm = (object) => {
        const valores = Object.values(object);
        let respuesta = valores.findIndex(e => e === false);
        return respuesta;

    }

}

export {Validacion};