/********************Validaciones********************/
//Validar Contraseña con exprecion regular
/*
La contraseña debe tener al entre 8 y 16 caracteres,
al menos un dígito, </br>al menos una minúscula,
al menos una mayúscula y al menos un caracter no alfanumérico
*/

function validarContrasenia(id) {
    debugger;
    var campo = $("#" + id).val();
    var RegExPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    var errorMessage = 'Password Incorrecta.';
    if ((campo.match(RegExPattern)) && (campo.value != '')) {
        $(".msg_contrasenia").html("");
        $(".msg_contrasenia").removeClass("text-danger").addClass("text-success");
        $("#" + id).data("validarContrasenia", 1);
    } else {
        $(".msg_contrasenia").removeClass("text-success").addClass("text-danger");
        $(".msg_contrasenia").html("La contraseña debe tener al entre 8 y 16 caracteres, </br>al menos un dígito, </br>al menos una minúscula, </br>al menos una mayúscula y al menos un caracter no alfanumérico")
        $("#" + id).data("validarContrasenia", 0);
    }
}

function validarContrasenia(id) {
    debugger;
    var campo = $("#" + id).val();
    var RegExPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    var errorMessage = 'Password Incorrecta.';
    if ((campo.match(RegExPattern)) && (campo.value != '')) {
        $(".msg_contrasenia").html("");
        $(".msg_contrasenia").removeClass("text-danger").addClass("text-success");
        $("#" + id).data("validarContrasenia", 1);
    } else {
        $(".msg_contrasenia").removeClass("text-success").addClass("text-danger");
        $(".msg_contrasenia").html("La contraseña debe tener al entre 8 y 16 caracteres, </br>al menos un dígito, </br>al menos una minúscula, </br>al menos una mayúscula y al menos un caracter no alfanumérico")
        $("#" + id).data("validarContrasenia", 0);
    }
}


function validarContrasenia(id,clase) {
    debugger;
    var campo = $("#" + id).val();
    var RegExPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    var errorMessage = 'Password Incorrecta.';
    if ((campo.match(RegExPattern)) && (campo.value != '')) {
        $(clase).html("");
        $(clase).removeClass("text-danger").addClass("text-success");
        $("#" + id).data("validarContrasenia", 1);
    } else {
        $(clase).removeClass("text-success").addClass("text-danger");
        $(clase).html("La contraseña debe tener al entre 8 y 16 caracteres, </br>al menos un dígito, </br>al menos una minúscula, </br>al menos una mayúscula y al menos un caracter no alfanumérico")
        $("#" + id).data("validarContrasenia", 0);
    }
}


//Validar correo con exprecion regular
function ValidarCampoEmail(mail) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(mail)) return false;
    else return true;
}

//Validar numero con exprecion regular
function validarNumero(numero,idmsg,id) {
    if (!/^([0-9])*$/.test(numero)) {
        if (idmsg == "msg_telefonoFijo") {
            $("#msg_telefonoFijo").html("El valor " + numero + " no es un número");
            $("#" + id).val("");
        } else if (idmsg == "msg_telefonoMovil") {
            $("#msg_telefonoMovil").html("El valor " + numero + " no es un número");
            $("#" + id).val("");
        }
    } else {
        if (idmsg == "msg_telefonoFijo") {
            $("#msg_telefonoFijo").html("El valor " + numero + " es un número");
            $("#msg_telefonoFijo").removeClass("text-danger").addClass("text-success");
        } else if (idmsg == "msg_telefonoMovil") {
            $("#msg_telefonoMovil").html("El valor " + numero + " es un número");
            $("#msg_telefonoMovil").removeClass("text-danger").addClass("text-success");
        }
    }
         
}

//Validar solo letras
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        //alert('Tecla no aceptada');
        return false;
    }
}

//Validar solo numeros
function SoloNumeros(evt) {
    if (window.event) {//asignamos el valor de la tecla a keynum
        keynum = evt.keyCode; //IE
    }
    else {
        keynum = evt.which; //FF
    }
    //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6) {
        return true;
    }
    else {
        return false;
    }
}

/**************************Mascara en inputs***********************/
//Mascara para cantidad numerica
jquery.mask.min.js
 $('#').mask('000,000,000.00', { reverse: true });

/*************************Validacion de formularios********************/
jquery.form-validator.min.js
cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js

$.validate({
    modules: 'location, date, security, file',
    onModulesLoaded: function () {
        $('#country').suggestCountry();
    },
    decimalSeparator: ','
});


/*********************Validaciones de Fecha****************************/
$(".datepicker").change(function () {
    debugger;
    var hoy = new Date();
    var fecha = formatearFecha($(this).val());
    var fechaSeleccionada = new Date(fecha);

    hoy.setHours(0, 0, 0, 0);
    fechaSeleccionada.setHours(0, 0, 0, 0);
    if (fechaSeleccionada > hoy) {

        $(this).data("fechaValida", 1);
    }
    else {
        $("#modal").modal("show");
        $("#contenido").html("La fecha es invalida, debe ser mayor a la actual");
        $(this).data("fechaValida", 0);
        console.log("fecha: " + hoy.getUTCDay() + "-" + hoy.getUTCMonth() + "-" + hoy.getUTCFullYear());
        $(this).val(hoy.getUTCDay() + "/" + hoy.getUTCMonth() + "/" + hoy.getUTCFullYear());
    }
});


/********************************Validaciones de formato de archivos**********************************/
function ValidarFormatoArchivo() {
    debugger;
    var fileInput = document.getElementById('imagenEncabezado');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg)$/i;
    if (!allowedExtensions.exec(filePath)) {
        $("#modal").modal("show");
        $("#titulo").html("Advertencia");
        $("#contenido").html("Solo se permite el archivo en formato .JPG");
        fileInput.value = '';
        return false;
    }
}


 $("#video").change(function () {
    debugger;
    var archivo = $("#video").val();
    extensionesPermitidas = new Array(".mp4");
    miError = "";
    if (!archivo) { }
    else {
        extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
        permitida = false;
        for (var i = 0; i < extensionesPermitidas.length; i++) {
            if (extensionesPermitidas[i] == extension) {
                permitida = true;
                break;
            }
        }
        if (!permitida) {
            $("#modal").modal("show");
            $("#encabezadoModal").html("Advertencia");
            $("#contenido").html("Comprueba la extensión de los archivos a subir. </br> Sólo se pueden subir archivos con extension: " + extensionesPermitidas.join());
            $("#video ").val('');
        }
    }
});


 $(this).on('change', 'input[type="file"]', function () {
     if (this.files[0].size > 10000000) {
         //alert('El archivo no debe ser mayor de 3Mb');
         $("#modal").modal("show");
         $("#contenido").html("El archivo se excede en tamaño");
         this.files[0].name = '';
         $("#@Html.IdFor(m=>m.cartaPeticion)").data("archivoRequerido", 0);
         var input = $("#@Html.IdFor(m=>m.cartaPeticion)");
         input.replaceWith(input = input.val('').clone(true));
         $("#@Html.IdFor(m=>m.cartaPeticion)").addClass("validarErrorCampos");
     }else {
         $("#@Html.IdFor(m=>m.cartaPeticion)").data("archivoRequerido", 1);
         $("#@Html.IdFor(m=>m.cartaPeticion)").removeClass("validarErrorCampos");
     }
});


/* Función que suma o resta días a una fecha, si el parámetro
   días es negativo restará los días*/
function sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

var d = new Date();
console.log(sumarDias(d, -5));


/******************************* Geolocation **************************************************/
    var apiGeolocationSuccess = function (position) {
        obj.Latitude = position.coords.latitude.toString();
        obj.Longitude = position.coords.longitude.toString();
        alert("API geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);

    };

    var tryAPIGeolocation = function () {
        jQuery.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD1nmGDKgRwfG_D89d-y5shzn4_WdnJvOg", function (success) {
            apiGeolocationSuccess({ coords: { latitude: success.location.lat, longitude: success.location.lng } });
        })
            .fail(function (err) {
                alert("API Geolocation error! \n\n" + err);
            });
    };

    var browserGeolocationSuccess = function (position) {
        alert("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
    };

    var browserGeolocationFail = function (error) {
        switch (error.code) {
            case error.TIMEOUT:
                alert("Browser geolocation error !\n\nTimeout.");
                break;
            case error.PERMISSION_DENIED:
                if (error.message.indexOf("Only secure origins are allowed") == 0) {
                    tryAPIGeolocation();
                }
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Browser geolocation error !\n\nPosition unavailable.");
                break;
        }
    };

    var tryGeolocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                browserGeolocationSuccess,
                browserGeolocationFail,
                { maximumAge: 50000, timeout: 20000, enableHighAccuracy: true });
        }
    };

    tryGeolocation();

    function geoFindMe() {
        var output = document.getElementById("out");

        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
        }

        function error() {
            output.innerHTML = "Unable to retrieve your location";
        }

        output.innerHTML = "<p>Locating…</p>";

        navigator.geolocation.getCurrentPosition(success, error);
    }
