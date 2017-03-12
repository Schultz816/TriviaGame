$('#start').on('click',function(){
	game.start();

	// $('#start').remove();

	// for(var i=0; i<questions.length; i++){
	// 	$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
	// 	for(var j=0;j<questions[i].answers.length;j++){
	// 		$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
	// 	}
	// }
})

$(document).on('click','#end',function(){

	game.done();
})

var questions = [{
	question:"Whose face is the mask of Michael Myers in Halloween?",
	answers:["George Reeves","Leonard Nimoy","William Shatner","Mark Hamill"],
	correctAnswer: "William Shatner"
},	{
	question:"Which horror movie is set at Camp Crystal Lake?",
	answers:["Friday the 13th","American Gothic","House of 1000 Corpses","The Evil Dead"],
	correctAnswer: "Friday the 13th"
},	{
	question:"In what store does Ash (Bruce Campbell) work in Army of Darkness?",
	answers:["Farget","Gal Mart","XMS","S Mart"],
	correctAnswer: "S Mart"
},	{
	question:"Which of the following horror movies is NOT base on a true story?",
	answers:["Psycho","The Exorcist","Audrey Rose","Dr. Jekyll and Mr. Hyde"],
	correctAnswer: "Dr. Jekyll and Mr. Hyde"
},	{
	question:"In which American state is the fictional shopping mall in the Dawn of the Dead 2004?",
	answers:["Delaware","Pennsylvania","Wisconsin","Connecticut"],
	correctAnswer: "Wisconsin"
},	{
	question:"What was used for blood in the movie Psycho?",
	answers:["Catsup","Corn syrup and food coloring","Chocolate Syrup","Cow Blood"],
	correctAnswer: "Chocolate Syrup"
},	{
	question:"In the film Carrie, how does Carrie kill her mother?",
	answers:["Burns her","Hangs her","Knifes her","Shoots her"],
	correctAnswer: "Knifes her"
},	{
	question:"Who was the first to play Dracula in the movies?",
	answers:["Charlie Chaplin","Boris Karloff","Charles Ogle","Bela Lugosi"],
	correctAnswer: "Bela Lugosi"
},	{
	question:"In the movie Child's Play what was Chuckie?",
	answers:["A good guy's doll","Cabbage patch doll","Tickle me Elmo","Pokemon Pikachu"],
	correctAnswer: "A good guy's doll"
},	{
	question:"What kind of creature was The Thing?",
	answers:["Sea Monster","Mummy","Space Alien","A man made monster"],
	correctAnswer: "Space Alien"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("You're Finished!");
			game.done();
		}
	},
	
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
		$('#start').remove();
		for(var i=0; i<questions.length; i++){
		$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
		for(var j=0;j<questions[i].answers.length;j++){
			$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
		}
	}

		// timer = setInterval(game.countdown,1000);

		// $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');

		// $('#start').remove();

	// for(var i=0; i<questions.length; i++){
	// 	$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
	// 	for(var j=0;j<questions[i].answers.length;j++){
	// 		$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
	// 	}
	// }

		$('#subwrapper').append('<br><button id="end">Finished</button>');

	},

	done: function(){
		$.each($('input[name="question-0]":checked'),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
	
		$.each($('input[name="question-1]":checked'),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-2]":checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-3]":checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-4]":checked'),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-5]":checked'),function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-6]":checked'),function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-7]":checked'),function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-8]":checked'),function(){
			if($(this).val()==questions[8].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-9]":checked'),function(){
			if($(this).val()==questions[9].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();

			$('#subwrapper').html("<h2>All done!</h2>");
			$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answers: "+this.correct+"</h3>");
			$('#subwrapper').append("<h3>Unanswered: "+(questions.lengeth-(this.incorrect+this.correct))+"</h3>");

		}


	}
	// done: function(){
	// 	$.each($('input[name="<question-0></question-0>]":checked'),function(){
	// 		if($(this).val()==questions[1].correctAnswer){
	// 			game.correct==;
	// 		} else {
	// 			game.incorrect++;
	// 		}
	// 		}
	// 	})
// }