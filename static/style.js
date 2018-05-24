//  Romulo
//  Av. Rómulo No. 2154, Renacimiento, Sto. Dgo., Rep. Dom.

// Megacentro
//  1er Nivel, Paseo de la Fauna, 11519, Sto. Dgo., Rep. Dom.

// 27 de febrero
//  Av.27 de Febrero #452, Mirador Norte, Sto. Dgo., Rep. Dom.


/* Nombre*/
$("#nombre").on('keyup', function(){
    var value = $(this).val();
    
    if((this)!=""){            
        $('#dnombre').removeClass('hide');
        //$('#snombre').removeClass('hide');
        $("#snombre").html(value);
    }
}).keyup();


/* Posicion */
$("#posicion").on('keyup', function(){
    var value = $(this).val();
    
    if((this)!=""){            
        $('#dposicion').removeClass('hide');
        $("#sposicion").html(value);
    }
}).keyup();


/* Posicion */
$("#departamento").on('keyup', function(){
    var value = $(this).val();
    
    if((this)!=""){            
        $('#fdepartamento').removeClass('hide');
        $("#xdepartamento").html(value);
    }
}).keyup();


/* Telefono */
$("#extension").on('keyup', function(){
    var value = $(this).val();
    if((this)!=""){   
        $('#fextension').removeClass('hide');
        $("#sextension").html(value);
    }
}).keyup();


/* Flota */
$("#flota").on('keyup', function(){
    var value = $(this).val();
    
    if((this)!=""){            
        $('#fflota').removeClass('hide');
        $("#sflota").html(value);
    }
}).keyup();


/* Correo */
$("#correo").on('keyup', function(){
    var value = $(this).val();
    
    if((this)!=""){            
        $('#fcorreo').removeClass('hide');
        $("#scorreo").html(value);
    }
    else{
        $('#fcorreo').addClass('hide');        
    }
}).keyup();
