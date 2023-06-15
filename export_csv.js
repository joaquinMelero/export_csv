//código js que genera un archivo autodescargable de csv con los datos de la tabla 
//crea los datos CSV a partir de una tabla HTML y transforma dicha información


//método asociado al onclick del button de descarga. Recibe por parámetro el csv y el nombre del archivo 
function downloadCSV(csv, filename) {

    let csvFile;//variable para guardar el archivo csv
    let link;//varibale para guardar el link donde descargar el csv

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});//objeto Blob representa un objeto tipo fichero de datos planos inmutables. 

    //link para la descarga
    link = document.createElement("a");

    // File name
    link.download = filename;

    // Crear el link enla propiedad href
    link.href = window.URL.createObjectURL(csvFile); //método estático URL.createObjectURL() crea un DOMString que contiene una URL que representa al objeto pasado como parámetro

    // ocultar el estilo por defeco del link
    link.style.display = "none";

    // añado el link al  DOM
    document.body.appendChild(link);

    // Click de descarga
    link.click();
}

//método para pasar los datos de la tbal dom a csv. Recibe por parámetro el nombre del csv que se descargará
function exportTableToCSV(filename) {

    let csv = []; //array par guardar el csv

    let rows = document.querySelectorAll("table tr"); //guarda todas las filas de la tabla

    //recorro las filas guardadas en la variable rows
    for (let i = 0; i < rows.length; i++) {

        let row = []; //guardo la fila

        let cols = rows[i].querySelectorAll("td, th"); //guardo la cantidad de columnas de la fila
        
        //recorro todas las columnas de la fila  y guardo su contenido en el array row
        for (let j = 0; j < cols.length; j++) {

            row.push(cols[j].innerText);
        }   
        
        csv.push(row.join(";")); //join une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena. separo por ;     
    }

    //Llamo al método de descarga del csv, pasando como parámetros el csv con un salto de linea y el nombre del archivo 
    downloadCSV(csv.join("\n"), filename);
}




