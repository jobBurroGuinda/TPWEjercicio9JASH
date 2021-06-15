tablaDeno=$('#tablaVali').DataTable();  

//Editar        
$(document).on("click", ".btnEditar", function(){		
    var c_id=0;        
    opcion = 2;//editar
    fila = $(this).closest("tr");	        
    c_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
    nombre = fila.find('td:eq(2)').text();
    actividad = fila.find('td:eq(3)').text();
    horas = parseInt(fila.find('td:eq(4)').text());
    inicio = fila.find('td:eq(5)').text();	
    termino = fila.find('td:eq(6)').text();
    valida = parseInt(fila.find('td:eq(7)').text());
    denominacion = parseInt(fila.find('td:eq(8)').text());
    modalidad = parseInt(fila.find('td:eq(9)').text());
    observaciones = fila.find('td:eq(10)').text();
    $("#actividad").val(actividad);
    $("#inicio").val(inicio);
    $("#termino").val(termino);
    $("#horas").val(horas);
    $("#valida").val(valida);
    $("#denominacion").val(denominacion);
    $("#modalidad").val(modalidad);
    $("#observaciones").val(observaciones);
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white" );
    $("#tituloModal1").text("Validar constancia de " + nombre);		
    $('#modalCRUD').modal('show');		   
  });

$(document).on("click", "#verArchivo", function(){
    actividad = fila.find('td:eq(3)').text();
    horas = fila.find('td:eq(4)').text();
    documento = fila.find('td:eq(11)').text();
    $("#m2Constancia").val(actividad);
    $("#m2Horas").val(horas);
    $("#m2Constancia").text(actividad);		
    $("#m2Horas").text(horas);	
    $("#documento").html('<object class="PDFdoc" width="100%" height="500px" type="application/pdf" data="'+documento+'"></object>');		
    $('#modalCRUD2').modal('show');
});  