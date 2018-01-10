$(document).ready(function(){

	var btn = $('button');
	var calculations = [];
	var joinedCalculations = [];
	$('#screen_once').html('0');
	var sum = 0;
	var sign = 0;
  var second_screen = [];

	btn.on('click',function(){

		if (this.value === '*' || this.value === '/' || this.value === '+' || this.value === '-'       ||this.value === '=' ){
			let joined = calculations.join('');
      if(joined !== ""){
			joinedCalculations.push(joined);
      second_screen.push(joined, this.value); 
			}// ,this.value
      $('#screen_two').html(second_screen);
			calculations = [];
			$('#screen_one').html(this.value);
			console.log(joinedCalculations);

			if(this.value === '+'){
				sign=1;
			}
			else if(this.value === '-'){
				sign=2;
			}
			else if(this.value === '*'){
				sign=3;
			}
			else if(this.value === '/'){
				sign=4;
			}
      
		}


		else if(this.value === '<'){
		 		calculations.pop();
		 		console.log(calculations);
				$('#screen_one').html(calculations);
		 	}

		else if(this.value === 'c'){
				calculations = [];
				joinedCalculations = [];
        second_screen = [];
				$('#screen_one').html('cleared');
        $('#screen_two').html('');
				console.log("cleared");
		}

		else{
			calculations.push(this.value);
			console.log(calculations);
			$('#screen_one').html(calculations);
		}

	});

	$('#do_it').on( "click",function(){

    if(sign===1){
			sum = joinedCalculations.reduce((a, b) => parseFloat(a) + parseFloat(b));
		}
		else if(sign===2){
			sum = joinedCalculations.reduce((a, b) => parseFloat(a) - parseFloat(b));
		}
		else if(sign===3){
			sum = joinedCalculations.reduce((a, b) => parseFloat(a) * parseFloat(b));
		}
		else if(sign===4){
			sum = joinedCalculations.reduce((a, b) => parseFloat(a) / parseFloat(b));
		}
    
		let string_sum = sum.toString();
		
   	if(string_sum.length>20){
      
	 		$('#screen_one').html("too long number");
   	}

   	else{
        
	 		$('#screen_one').html(sum);

		}
    
		joinedCalculations=[];
		joinedCalculations.push(sum);
    second_screen.push(sum);
    second_screen = [];
    $('#screen_two').html(second_screen);
	});

});