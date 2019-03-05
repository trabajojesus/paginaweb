
 $(document).ready(function () {
    var $inputs = $('#formulario :input');

        $('#boton-enviar').click(function () {
            $inputs.each(function() {
                if( ($(this).val() == '' || $(this).val().length == 0) && $(this).is(":visible")){
                    $(this).attr("required",true);
                    
                }
            });
            $("#formulario").valid();
            $("#formulario").submit();
        
            
        });
     
       $("select[id=combo-atributos]").change(function(){
           if($('select[id=combo-atributos]').val() == 3)
               {
                   $('#div-atributo-4').attr("class","Mostrar-Atributo");
                   $('.input-atributo-1').val("");
               }
           if($('select[id=combo-atributos]').val() == 4)
               {
                   $('#div-atributo-4').attr("class","Mostrar-Atributo");
                   $('#div-atributo-5').attr("class","Ocultar-Atributo");
                   $('#div-atributo-6').attr("class","Ocultar-Atributo");
                   $('#div-atributo-7').attr("class","Ocultar-Atributo");
                   $('#div-atributo-8').attr("class","Ocultar-Atributo");
                   
               }
        });
     
     
    });