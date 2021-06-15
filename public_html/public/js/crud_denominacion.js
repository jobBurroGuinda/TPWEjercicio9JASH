
tablaDeno=$('#tablaDeno').DataTable();   

$(document).on("click", ".btnBorrar", function(){
                fila = $(this);           
                var c_id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;        
                var opcion = 3; //eliminar        
                alertify.confirm("¿Seguro?", "¿Está seguro de borrar el registro "+c_id+"?",
                  function(){
                    $.ajax({
                      url: "bd/crud.php",
                      type: "POST",
                      datatype:"json",    
                      data:  {opcion:opcion, c_id:c_id},    
                      success: function() {
                          tablaDeno.row(fila.parents('tr')).remove().draw();                  
                       }
                    }); 
                    alertify.success('Eliminado');
                  },
                  function(){
                    alertify.error('Cancelado');
                  });
});

//Editar        
$(document).on("click", ".btnEditar", function(){		
  var c_id=0;        
  opcion = 2;//editar
  fila = $(this).closest("tr");	        
  c_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
  tematico = fila.find('td:eq(1)').text();
  modalidad = fila.find('td:eq(2)').text();
  creditos = fila.find('td:eq(3)').text();
  factor = fila.find('td:eq(4)').text();	
  actividades = fila.find('td:eq(5)').text();
  $("#tematico").val(tematico);
  $("#modalidad").val(modalidad);
  $("#creditos").val(creditos);
  $("#factor").val(factor);
  $("#actividades").val(actividades);
  $(".modal-header").css("background-color", "#007bff");
  $(".modal-header").css("color", "white" );
  $(".modal-title").text("Actualizar denominación");		
  $('#modalCRUD').modal('show');		   
});