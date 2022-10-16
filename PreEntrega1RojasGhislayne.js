//Bienvenida y Menu
console.log("Bienvenido a nuestro local de comida TEX MEX");
console.log("Nuestros combos son:");
console.log("1. Combo Tacos ----> (2.5 us$)");
console.log("2. Combo Tostadas ----> (3 us$)");
console.log("3. Combo Burritos ----> (9 us$)");
console.log("4. Combo Nachos ----> (7 us$)");
//Pedir nombre del comprador
let nombre = prompt("Ingrese el nombre del comprador");
//Validacion que el nombre no este vacio
while(nombre==""){
    nombre = prompt(`Ingresa un nombre (Campo requerido)!!--> Ingrese nuevamente el nombre del comprador`);
}
//Elegir combo a comprar:
let comboElegido = parseInt(prompt(`Que combo deseas comprar ${nombre}`));
//Validacion de que el combo sea un numero y este en el rango de los combos ofrecidos
while((comboElegido > 0 && comboElegido>4) || (isNaN(comboElegido))){
    comboElegido = parseInt(prompt(`No es un combo del menu!!--> Ingrese nuevamente el combo que desea comprar ${nombre}`))
}

//Indica la cantidad del pedido:
let cantcomboElegido = parseInt(prompt(`Que cantidad del combo ${comboElegido} quieres comprar ${nombre} ?`));
//Validacion de que la cantidad a ordenar sea un numero
while(isNaN(cantcomboElegido)){
    console.log("No es dato válido");
    comboElegido = parseInt(prompt(`Revise el tipo de dato: Ingrese que cantidad del combo ${comboElegido} quieres comprar ${nombre} ?`))
}

let bandera = true
do{

//Funcion para repetir operaciones de calculo de total a pagar (combo y cantidad)  
        function montoAPagar(combo,cantidad){
            let subtotal=0;
            if(combo === 1){
                let precioCombo1=2.5;
                subtotal = precioCombo1*cantidad
            }else if(combo === 2){
                let precioCombo2=3;
                subtotal = precioCombo2*cantidad
            }else if(combo === 3){
                let precioCombo3=9;
                subtotal = precioCombo3*cantidad
            }else{
                let precioCombo4=7;
                subtotal = precioCombo4*cantidad
        }
        return subtotal;
        }
    //Cálculo de monto a pagar pedido inicial
    let total=montoAPagar(comboElegido,cantcomboElegido);
    let totalAdicional=0;
    //Pregunta si se añade un combo a su pedido inicial
    let pregunta = prompt(`Desea agregar un combo a su pedido? ("Y/N")`)
        if(pregunta.toUpperCase() === "N"){
            console.log(`${nombre} escogiste ${cantcomboElegido} combo ${comboElegido}, el monto a cancelar es: ${total.toFixed(2)} us$`)
            bandera = false 
        }
        else{
            console.log(`${nombre}: Escogiste ${cantcomboElegido} del combo ${comboElegido} `);
            let subtotalAdicional=total;
            while(pregunta.toUpperCase() === "Y"){
                let comboAdicional = parseInt(prompt(`Que combo deseas añadir ${nombre}`));
                //Validacion de que el combo adicional sea un numero y este en el rango de los combos ofrecidos
                while((comboAdicional > 0 && comboAdicional>4) || (isNaN(comboAdicional))){
                    comboAdicional = parseInt(prompt(`No es un combo del menu!!--> Ingrese nuevamente el combo que desea añadir ${nombre}`))
                }
                let cantcomboAdicional = parseInt(prompt(`Que cantidad del combo ${comboAdicional} quieres añadir ${nombre} ?`));
                //Validacion de que la cantidad adicional a añadir sea un numero
                while(isNaN(cantcomboAdicional)){ 
                    console.log("No es dato válido");
                    comboElegido = parseInt(prompt(`Revise el tipo de dato: Ingrese que cantidad del combo ${comboAdicional} quieres añadir ${nombre} ?`))
                }
                //Cálculo de monto a pagar del pedido total
                totalAdicional=montoAPagar(comboAdicional,cantcomboAdicional) +subtotalAdicional;
                subtotalAdicional=totalAdicional;
                console.log(`${nombre}: Añadiste ${cantcomboAdicional} del combo ${comboAdicional} `);
                //Pregunta si se añade un combo a su pedido
                pregunta = prompt(`Desea agregar un combo a su pedido? ("Y/N")`);
                if(pregunta.toUpperCase() === "N"){
                    bandera = false  
                }
            }
            console.log(`${nombre} el monto total a cancelar es: ${totalAdicional.toFixed(2)} us$`);
        }
    }while(bandera)
//Salida del algoritmo
alert("Gracias por comprar en nuestro negocio!! ");

