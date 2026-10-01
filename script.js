const formulario = document.getElementById("formularioRegistro");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const carrera = document.getElementById("carrera");
const terminos = document.getElementById("terminos");
const botonContrasena = document.getElementById("botonContrasena");
const iconoContrasena = document.getElementById("iconoContrasena");

const mensajeFormulario = document.getElementById("mensajeFormulario");


function mostrarError(campo, idError, mensaje) {

    const elementoError = document.getElementById(idError);

    elementoError.textContent = mensaje;

    campo.classList.remove("campo-correcto");
    campo.classList.add("campo-error");

    return false;
}


function mostrarCorrecto(campo, idError) {

    const elementoError = document.getElementById(idError);

    elementoError.textContent = "";

    campo.classList.remove("campo-error");
    campo.classList.add("campo-correcto");

    return true;
}


function validarNombre() {

    const valor = nombre.value.trim();

    if (valor === "") {
        return mostrarError(
            nombre,
            "errorNombre",
            "El nombre es obligatorio."
        );
    }

    if (valor.length < 3) {
        return mostrarError(
            nombre,
            "errorNombre",
            "El nombre debe tener al menos 3 caracteres."
        );
    }

    return mostrarCorrecto(
        nombre,
        "errorNombre"
    );
}



function validarCorreo() {

    const valor = correo.value.trim();

    const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === "") {
        return mostrarError(
            correo,
            "errorCorreo",
            "El correo electrónico es obligatorio."
        );
    }

    if (!expresionCorreo.test(valor)) {
        return mostrarError(
            correo,
            "errorCorreo",
            "Ingrese un correo electrónico válido."
        );
    }

    return mostrarCorrecto(
        correo,
        "errorCorreo"
    );
}


function validarContrasena() {

    const valor = contrasena.value;

    if (valor === "") {
        return mostrarError(
            contrasena,
            "errorContrasena",
            "La contraseña es obligatoria."
        );
    }

    if (valor.length < 8) {
        return mostrarError(
            contrasena,
            "errorContrasena",
            "La contraseña debe tener mínimo 8 caracteres."
        );
    }

    return mostrarCorrecto(
        contrasena,
        "errorContrasena"
    );
}



function validarEdad() {

    const valor = edad.value;

    if (valor === "") {
        return mostrarError(
            edad,
            "errorEdad",
            "La edad es obligatoria."
        );
    }

    if (isNaN(valor)) {
        return mostrarError(
            edad,
            "errorEdad",
            "La edad debe ser un número."
        );
    }

    if (Number(valor) < 18) {
        return mostrarError(
            edad,
            "errorEdad",
            "Debe tener al menos 18 años."
        );
    }

    if (Number(valor) > 100) {
        return mostrarError(
            edad,
            "errorEdad",
            "Ingrese una edad válida."
        );
    }

    return mostrarCorrecto(
        edad,
        "errorEdad"
    );
}




function validarTelefono() {

    const valor = telefono.value.trim();

    const expresionTelefono = /^[0-9]{10}$/;

    if (valor === "") {
        return mostrarError(
            telefono,
            "errorTelefono",
            "El teléfono es obligatorio."
        );
    }

    if (!expresionTelefono.test(valor)) {
        return mostrarError(
            telefono,
            "errorTelefono",
            "El teléfono debe contener 10 números."
        );
    }

    return mostrarCorrecto(
        telefono,
        "errorTelefono"
    );
}


function validarCarrera() {

    if (carrera.value === "") {
        return mostrarError(
            carrera,
            "errorCarrera",
            "Seleccione una carrera."
        );
    }

    return mostrarCorrecto(
        carrera,
        "errorCarrera"
    );
}




function validarTerminos() {

    const errorTerminos =
        document.getElementById("errorTerminos");

    const campoTerminos = terminos.closest(".campo");

    if (!terminos.checked) {

        errorTerminos.textContent =
            "Debe aceptar los términos y condiciones.";

        terminos.classList.add("campo-error");
        campoTerminos.classList.add("terminos-error");

        return false;
    }

    errorTerminos.textContent = "";
    terminos.classList.remove("campo-error");
    campoTerminos.classList.remove("terminos-error");

    return true;
}




botonContrasena.addEventListener(
    "click",
    function () {

        const estaVisible =
            contrasena.type === "text";

        contrasena.type =
            estaVisible ? "password" : "text";

        iconoContrasena.className = estaVisible
            ? "fa-solid fa-eye"
            : "fa-solid fa-eye-slash";

        botonContrasena.setAttribute(
            "aria-pressed",
            String(!estaVisible)
        );

        botonContrasena.setAttribute(
            "aria-label",
            estaVisible
                ? "Mostrar contraseña"
                : "Ocultar contraseña"
        );
    }
);





nombre.addEventListener("input", validarNombre);

correo.addEventListener("input", validarCorreo);

contrasena.addEventListener(
    "input",
    validarContrasena
);

edad.addEventListener("input", validarEdad);

telefono.addEventListener(
    "input",
    validarTelefono
);




nombre.addEventListener("blur", validarNombre);

correo.addEventListener("blur", validarCorreo);

contrasena.addEventListener(
    "blur",
    validarContrasena
);

edad.addEventListener("blur", validarEdad);

telefono.addEventListener(
    "blur",
    validarTelefono
);

carrera.addEventListener(
    "blur",
    validarCarrera
);



carrera.addEventListener(
    "change",
    validarCarrera
);

terminos.addEventListener(
    "change",
    validarTerminos
);




formulario.addEventListener(
    "submit",
    function (evento) {


        evento.preventDefault();


        const nombreValido = validarNombre();

        const correoValido = validarCorreo();

        const contrasenaValida =
            validarContrasena();

        const edadValida = validarEdad();

        const telefonoValido =
            validarTelefono();

        const carreraValida =
            validarCarrera();

        const terminosValidos =
            validarTerminos();


        if (
            nombreValido &&
            correoValido &&
            contrasenaValida &&
            edadValida &&
            telefonoValido &&
            carreraValida &&
            terminosValidos
        ) {

            mensajeFormulario.textContent =
                "Registro realizado correctamente.";

            mensajeFormulario.style.color =
                "#2e7d32";

            formulario.reset();

            formulario
                .querySelectorAll(
                    ".campo-correcto, .campo-error"
                )
                .forEach(function (campo) {
                    campo.classList.remove(
                        "campo-correcto",
                        "campo-error"
                    );
                });

            terminos
                .closest(".campo")
                .classList.remove("terminos-error");

            contrasena.type = "password";
            iconoContrasena.className =
                "fa-solid fa-eye";
            botonContrasena.setAttribute(
                "aria-pressed",
                "false"
            );
            botonContrasena.setAttribute(
                "aria-label",
                "Mostrar contraseña"
            );

        } else {

            mensajeFormulario.textContent =
                "Por favor, corrija los errores del formulario.";

            mensajeFormulario.style.color =
                "#c62828";

            const primerCampoInvalido =
                formulario.querySelector(".campo-error");

            if (primerCampoInvalido) {
                primerCampoInvalido.focus();
            }
        }
    }
);
