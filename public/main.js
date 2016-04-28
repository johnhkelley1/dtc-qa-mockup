$(function(){

	$("#submit-btn").click(function(){
		var isValid = true;
		var vals = [];
		vals[0] = $("input[name=group1]:checked").val();
		vals[1] = $("input[name=group2]:checked").val();
		vals[2] = $("input[name=group3]:checked").val();
		vals[3] = $("input[name=group4]:checked").val();
		vals[4] = $("input[name=group5]:checked").val();

		for(val in vals) {
			console.log(val);
			if(!vals[val]) {
				swal("Incomplete!", "Please complete the Q&A before signing.", "error")
				return;
			}
		}
		if(!$("#sig").val()) {
			swal("Incomplete!", "Please provide a signature before signing.", "error")
			return;
		}

		$( "h4" ).removeClass( "red-color" );

		if(vals[0] != 3) {
			isValid = false;
			$( "h4:eq( 0 )" ).addClass( "red-color" );
		}

		if(vals[1] != 2) {
			isValid = false;
			$( "h4:eq( 1 )" ).addClass( "red-color" );
		}

		if(vals[2] != 2) {
			isValid = false;
			$( "h4:eq( 2 )" ).addClass( "red-color" );
		}

		if(vals[3] != 1) {
			isValid = false;
			$( "h4:eq( 3 )" ).addClass( "red-color" );
		}

		if(vals[4] != 2) {
			isValid = false;
			$( "h4:eq( 4 )" ).addClass( "red-color" );
		}

		if(!isValid) {
			swal("Incomplete!", "Some of your answers were incorrect. Please correct your mistakes before signing.", "error");
			return;
		}

		swal("Done!", "Thanks for reading and signing our contract!", "success");
	});

})