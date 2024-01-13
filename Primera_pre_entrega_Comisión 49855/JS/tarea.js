// código para comprar en una tienda de instrumetos
// crear usuario y contraseña
alert("Bienvenido a la Tienda Online")
alert("Crear usuario y Contraseña")
let usuario = window.prompt("Ingresa tu usuario")
let contraseña = window.prompt("Ingresa tu contraseña")

//Iniciar sesion
alert("Iniciar sesión")
let usuario1 = window.prompt("Ingresa tu usuario para iniciar sesión")
let contraseña1 = window.prompt("Ingresa tu contraseña")

function recargarSaldo (saldoActual){
    let saldoARecargar = window.prompt("¿Cuánto saldo deseas recargar?")
    return parseFloat(saldoActual) + parseFloat(saldoARecargar)
}

//Comparacion para entrar a la tienda
if(usuario == usuario1 && contraseña === contraseña1)
{
    alert("Bienvenido "+usuario)
    //agregar saldo a la cuenta
    let saldo = parseFloat(window.prompt("¿cuánto saldo deseas agregar a la cuenta?"))
    //declarar cuenta total
    let total = 0
    let salir 

    do{

        let compra = window.prompt("¿Que deseas comprar? guitarra, bajo o batería")
        switch (compra){
            // Comprar Guitarra
            case "guitarra":
                let compraGuitarra = window.prompt ("¿Qué guitarra desa compar? gibson $5500, fender $3200, ESP $2500")
                if(compraGuitarra == "gibson"){
                    if(saldo >= 5500){
                    total = total + 5500
                    saldo = saldo - 5500
                    alert("se ha agregado una Gibson al carrito")
                    }
                    else {
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                        if (saldoRecarga == "si"){
                            saldo = recargarSaldo(saldo)
                            alert("Tu saldo actual es: $" +saldo)
                        }
                    }
                }
                else if( compraGuitarra == "fender"){
                    if(saldo >= 3200){
                    total = total + 3200
                    saldo = saldo - 3200
                    alert("se ha agregado una Fender al carrito")
                    }
                    else{ 
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                            if (saldoRecarga == "si"){
                                saldo = recargarSaldo(saldo)
                                alert("Tu saldo actual es: $" +saldo)
                            }
                        }
                }
                else if (compraGuitarra == "ESP"){
                    if(saldo >= 2500){
                    total = total + 2500
                    saldo = saldo - 2500
                    alert("se ha agregado una ESP al carrito")
                    }
                    else{
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                        if (saldoRecarga == "si"){
                            saldo = recargarSaldo(saldo)
                            alert("Tu saldo actual es: $" +saldo)
                        }
                    }
                }
                break;
                // Comprar Bajo
                case "bajo":
                let comprBajo = window.prompt ("¿Qué bajo desa compar? gibson $8500, fender $4200, ESP $3500")
                if(comprBajo == "gibson"){
                    if(saldo >= 8500){
                    total = total + 8500
                    saldo = saldo - 8500
                    alert("se ha agregado una Gibson al carrito")
                    }
                    else {
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                        if (saldoRecarga == "si"){
                            saldo = recargarSaldo(saldo)
                            alert("Tu saldo actual es: $" +saldo)
                        }
                    }
                }
                else if( comprBajo == "fender"){
                    if(saldo >= 4200){
                    total = total + 4200
                    saldo = saldo - 4200
                    alert("se ha agregado una Fender al carrito")
                    }
                    else{ 
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                            if (saldoRecarga == "si"){
                                saldo = recargarSaldo(saldo)
                                alert("Tu saldo actual es: $" +saldo)
                            }
                        }
                }
                else if (comprBajo == "ESP"){
                    if(saldo >= 3500){
                    total = total + 3500
                    saldo = saldo - 3500
                    alert("se ha agregado una ESP al carrito")
                    }
                    else{
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                        if (saldoRecarga == "si"){
                            saldo = recargarSaldo(saldo)
                            alert("Tu saldo actual es: $" +saldo)
                        }
                    }
                }
                break;
                //Comprar Batería
                case "bajo":
                let comprBateria = window.prompt ("¿Qué Batería desa compar? pearl $10500, tama $8200, mapex $7500")
                if(comprBateria == "pearl"){
                    if(saldo >= 10500){
                    total = total + 10500
                    saldo = saldo - 10500
                    alert("se ha agregado una pearl al carrito")
                    }
                    else {
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                        if (saldoRecarga == "si"){
                            saldo = recargarSaldo(saldo)
                            alert("Tu saldo actual es: $" +saldo)
                        }
                    }
                }
                else if( comprBajo == "tama"){
                    if(saldo >= 8200){
                    total = total + 8200
                    saldo = saldo - 8200
                    alert("se ha agregado una Tama al carrito")
                    }
                    else{ 
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                            if (saldoRecarga == "si"){
                                saldo = recargarSaldo(saldo)
                                alert("Tu saldo actual es: $" +saldo)
                            }
                        }
                }
                else if (comprBajo == "mapex"){
                    if(saldo >= 7500){
                    total = total + 7500
                    saldo = saldo - 7500
                    alert("se ha agregado una Mapex al carrito")
                    }
                    else{
                        alert("Saldo Insuficiente")
                        let saldoRecarga = window.prompt ("¿Quieres recargar saldo?")
                        if (saldoRecarga == "si"){
                            saldo = recargarSaldo(saldo)
                            alert("Tu saldo actual es: $" +saldo)
                        }
                    }
                }
                break;

                default:
                    alert("No tenemos ese producto")
        }
    salir = window.prompt("¿Quieres comprar otra cosa?")
    }while (salir == "si")
    alert("Gracias por visitar la tienda online, su total es $" +total)
    alert("saldo restante es: $" +saldo)
    alert("Adios")
}

else 
alert("Usuario no reconocido")
