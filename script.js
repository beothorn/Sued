Array.prototype.getRandomElement = function() {
	return this[Math.floor(Math.random()*this.length)];
}

var questions = [
"SUED, EU GOSTARIA MUITO DE SABER PORQUE",
"SERA QUE VOCE PODE ME DIZER COMO",
"POR FAVOR ME DIGA AGORA O QUE",
"VOCE PODERIA ME DIZER AGORA",
"SERIA POSSIVEL VOCE ME DIZER COMO",
"EU GOSTARIA MUITO DE SABER COMO",
"VOCE SERIA CAPAZ DE RESPONDER",
"SUED, ME DIGA AGORA COMO",
"EU QUERIA QUE VOCE ME DISSESSE",
"SUED, SERIA POSSIVEL VOCE ME DIZER",
];

var answers = [
"SAI FORA CURIOSO, AQUI VOCÊ NÃO TEM VEZ",
"VOCÊ ACHA QUE EU SOU UM OTÁRIO",
"VOCÊ NÃO TEM INTIMIDADE NENHUMA COMIGO",
"VÊ SE TIRA ESSE MONTE DE DEDOS DO MEU TECLADO",
"PARA DE OLHAR TROUXA, MEU VÍDEO NÃO É ESPELHO",
"VOCÊ DEVERIA PERGUNTAR COISAS MAIS INTERESSANTES",
"ONDE VOCÊ APRENDEU A DIGITAR ?",
"PRESTA ATENÇÃO, NÃO ESTOU AQUI PARA CONVERSAR FIADO",
"VOCÊ NÃO TEM PERGUNTA MAIS INTELIGENTE ?",
"PARE DE PERGUNTAR BOBAGENS, DEIXE QUEM ENTENDE FAZER AS PERGUNTAS",
"ME DEIXA EM PAZ",
"VOCÊ AINDA NÃO PERCEBEU QUE NÃO VOU RESPONDER NADA ?",
"DEFINITIVAMENTE VOCÊ É UM CHATO",
"QUANDO É QUE VOCÊ VAI PARAR DE ESCREVER BESTEIRAS ?",
"VOCÊ SÓ ESCREVE BESTEIRAS",
"SERÁ QUE VOCÊ NÃO TEM MAIS NADA O QUE FAZER ?",
"PERGUNTE COISAS QUE VOCÊ NÃO SAIBA, TALVEZ EU TE AJUDE",
"VOCÊ NÃO TEM COISA MAIS INTERESSANTE PARA PERGUNTAR ?",
"PARA DE FICAR PERGUNTANDO IDIOTICES",
"VÊ SE ACHA AI ALGUEM MAIS INTELIGENTE DO QUE VOCÊ",
"VOCÊ LAVOU AS MÃOS ANTES DE PEGAR NO TECLADO ?",
"ATÉ QUANDO VOU TER DE AGUENTAR VOCÊ ?",
"VOCÊ NÃO PERCEBEU QUE NÃO ESTOU QUERENDO CONVERSA ?",
"NÃO QUERO CONVERSAR.",
"VOCÊ TEM QUE ME ELOGIAR PARA EU RESPONDER",
"VOCÊ DEVIA DESISTIR, NÃO VOU DIZER NADA",
"VOCÊ NÃO ESTÁ AUTORIZADO A FAZER PERGUNTAS",
"ESTÁ PENSANDO QUE EU VOU TE DIZER ALGUMA COISA",
"SERÁ QUE VOCÊ NÃO PERCEBEU QUE ESTÁ ME INCOMODANDO ?",
"QUANTO TEMPO VOCÊ PRETENDE FICAR DIGITANDO MERDA ?"
];

var suedQuestion = questions.getRandomElement();
var question = "";
var isReplacingQuestion = false;
var answer = "";

$(function(){
	$(document).keypress(function(e){
			var key = e.keyCode;
			if(key == 13) return;
			var letter =  String.fromCharCode(key).toUpperCase();
			if(key == 44)
				letter = ',';
			if(key == 46)
				letter = '.';
			if(key == 63)
				letter = '?';
			if(key == 59){
				isReplacingQuestion = !isReplacingQuestion;
				return;
			}
			if(isReplacingQuestion){
				question += suedQuestion.charAt(question.length);
				answer += letter;
			}else{
				question += letter;
			}

			$("#text-entry").text(question);
	})
	$(document).keydown(function(e){
			var key = e.keyCode;
			if(key == 8){
				if(isReplacingQuestion){
					answer = answer.substring(0, question.length - 1);
				}
				question = question.substring(0, question.length - 1);
				e.preventDefault();
			}
			if(key == 13){
				if(answer == ""){
					answer = answers.getRandomElement();
				}
				$("#text-entry").text(answer);
				answer = "";
				question = "";
				return;
			}
			$("#text-entry").text(question);
	})
});
