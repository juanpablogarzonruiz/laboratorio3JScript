class Car {
  constructor(name, year) {
    this.marca = name;
    this.modelo = year;

  }
}


let carros = [];
//localStorage.setItem('loscarros', JSON.stringify(carros));

//Los datos creadors se guardaran al actualizar el navegador
if(localStorage.getItem("loscarros") === null) {
	localStorage.setItem('loscarros', JSON.stringify(carros))
}

function adicionar(valor){
    let peso = 0.1;
    let ejemplo = "ejemplo";
    let carro_ejemplo = new Car(document.getElementById('nombre').value, 
                                document.getElementById('year').value);
    let daton = document.getElementById('nombre').value.toUpperCase();
    let datoy = document.getElementById('year').value.toUpperCase();
    // Obtenemos el array localStorage de carros y lo convertimos en objeto con parse
    let carrosLocal = JSON.parse(localStorage.getItem("loscarros"));
    
    let elc = new Car(daton,datoy);
    // Agregamos el nuevo al array
    carrosLocal.push(elc);
    //alert (elc.age());
    
    // Lo pasamos por stringify para que se guarde como array
    let carrosLocalNew = JSON.stringify(carrosLocal);
    // Mostramos un alert para ver que todo este bien
    alert(carrosLocalNew);
    // Guardamos el nuevo array
    localStorage.setItem('loscarros', carrosLocalNew);
}

function buscar(){
    let dato = document.getElementById('nombre').value.toUpperCase();
    // Obtenemos el array localStorage de carros y lo convertimos en objeto con parse
    let carrosLocal = JSON.parse(localStorage.getItem("loscarros"));
    // Lo pasamos por stringify para que se guarde como array
    let carrosLocalNew = JSON.stringify(carrosLocal);
    // Mostramos un alert para ver que todo este bien
    alert(carrosLocalNew);
    let muchos=[];
    muchos = JSON.parse(carrosLocalNew);
    alert("La cantidad de carros guardados es de "+ muchos.length);
    for (let vc=0; vc< muchos.length; vc++){
        let datoenelarreglo = muchos[vc];
        //alert("El nombre del carro es de " + datoenelarreglo.marca + 
        //      "y una antiguedad de " + datoenelarreglo.modelo);
    }
    alert ("el dato es de..... " + muchos[5].marca);
/**
<table id="tabla_productos" style="border:4px solid blue;">
    
<tr>
<td style="border:2px solid blue;">
    Disco Duro <br> Cantidad de productos: 1 <br> Precio unitario: $280.000 <br> Disco Duro HDD de Capacidad 500 GB de datos y ejemplo de texto más largo
</td>    
<td  style="border:2px solid blue;">
    Producto 2 Ejemplo
</td>      
</tr>    
    
<tr>
<td style="border:2px solid blue;">
    Producto 3 Ejemplo
</td>    
<td style="border:2px solid blue;">
    Producto 4 Ejemplo
</td>      
</tr>    
</table>
**/
    
// En Diseño toca tomar la decisión de cuantos productos por fila. Coloquemos 2 productos por fila en código.
   
    let rta = "";
    cont = 0;
    for (let vcf=0; vcf < muchos.length/2; vcf++ ){
        alert ("la fila es "+vcf);
        rta = rta + "<tr>";
        for (let vcc=0; vcc < 2; vcc++){
            //alert ("la columan es " + vcc);
            //let ela = muchos[cont];
            if (cont<muchos.length){
                rta = rta + "<td style='border:2px solid blue;'>";
                rta = rta + "Marca del automovil" + muchos[cont].marca + "<br>" + 
                    "Modelo del automovil:  " + muchos[cont].modelo ;
                rta = rta +  "</td>";
            }else{
                rta = rta + "<td style='border:2px solid blue;'>";
                rta = rta +  "</td>";
            }
            cont++;
        }
        rta = rta +  "</tr>";
    }
    
    alert ("La respuesta es de " + rta);
    let latabla = document.getElementById("tabla_productos").innerHTML = rta;
}
