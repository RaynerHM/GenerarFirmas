//  Romulo
//  Av. Rómulo No. 2154, Renacimiento, Sto. Dgo., Rep. Dom.

// Megacentro
//  1er Nivel, Paseo de la Fauna, 11519, Sto. Dgo., Rep. Dom.

// 27 de febrero
//  Av.27 de Febrero #452, Mirador Norte, Sto. Dgo., Rep. Dom.

console.log("hola")
$(function() {

	/* Nombre*/
	$("#nombre").on('keyup', function(){
		var value = $(this).val();

		if($(this).val() !=""){ 
			$('#dnombre').removeClass('hide');
			$("#snombre").html(value);
		}
		else{
			$('#dnombre').addClass('hide');
		}
	}).keyup();


	/* Posicion */
	$("#posicion").on('keyup', function(){
		var value = $(this).val();
		
		if($(this).val() !=""){ 
			$('#dposicion').removeClass('hide');
			$("#sposicion").html(value);
		}
		else{
			$('#dposicion').addClass('hide');
		}
	}).keyup();


	/* Departamento */
	$("#departamento").on('keyup', function(){
		var value = $(this).val();
		if($(this).val() !=""){ 
			console.log($(this))           
			$('#fdepartamento').removeClass('hide');
			$("#xdepartamento").html(value);
		}
		else{
			$('#fdepartamento').addClass('hide');
		}
	}).keyup();


$('select#select').on('change',function(){
    var valor = $(this).val();
    var v_27f = "Av.27 de Febrero #452, Mirador Norte, Sto. Dgo., Rep. Dom."
	var v_meg = "1er Nivel, Paseo de la Fauna, 11519, Sto. Dgo., Rep. Dom."
	var v_rom = "Av. Rómulo No. 2154, Renacimiento, Sto. Dgo., Rep. Dom."

    if(valor =="27 de Febrero"){ 
		$('#fdireccion').removeClass('hide');
		$("#sdireccion").html(v_27f);
	}
	else if(valor =="Rómulo Betancourt"){ 
		$('#fdireccion').removeClass('hide');
		$("#sdireccion").html(v_rom);
	}
	else if(valor =="Megacentro"){ 
		$('#fdireccion').removeClass('hide');
		$("#sdireccion").html(v_meg);
	}
	else
	{
		$('#fdireccion').addClass('hide');
	}
});





	/* Extension */
	$("#extension").on('keyup', function(){
		var value = $(this).val();
		if($(this).val() !=""){ 
			$('#fextension').removeClass('hide');
			$("#sextension").html(value);
		}
		else{
			$('#fextension').addClass('hide');
		}
	}).keyup();


	/* Flota */
	$("#flota").on('keyup', function(){
		var value = $(this).val();
		
		if($(this).val() !=""){ 
			$('#fflota').removeClass('hide');
			$("#sflota").html(value);
		}
		else{
			$('#fflota').addClass('hide');
		}
	}).keyup();


	/* Correo */
	$("#correo").on('keyup', function(){
		var value = $(this).val();
		
		if($(this).val() !=""){ 
			$('#fcorreo').removeClass('hide');
			$("#scorreo").html(value);
		}
		else{
			$('#fcorreo').addClass('hide');        
		}
	}).keyup();

});
