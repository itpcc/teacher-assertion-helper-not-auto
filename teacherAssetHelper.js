var questionList = document.querySelectorAll('#tblDetailCaption tr[style="background-color:White;"]');
var currQuestion = 1;

function getQuestionObject(questionIndex){
	if(questionIndex >= questionList.length) return undefined;
	var cellList = questionList[questionIndex].querySelectorAll('td');
	if(cellList.length < 3) return undefined;
	return cellList;
}

function highlightQuestion(questionIndex){
	var questionCell = getQuestionObject(questionIndex)[1];
	if(!questionCell) return false;
	
	questionCell.style.backgroundColor = "#F99";
	questionCell.style.fontWeight = 'bold';
	questionCell.style.fontSize = '2rem';
	console.log(questionCell.scrollHeight+questionCell.clientHeight);
	questionCell.scrollIntoView();
	//window.scrollTo(0, questionCell.scrollHeight+questionCell.clientHeight);
	return true;
}

function unHighlighQuestion(questionIndex){
	var questionCell = getQuestionObject(questionIndex)[1];
	if(!questionCell) return false;

	questionCell.style.backgroundColor = "";
	questionCell.style.fontWeight = '';
	questionCell.style.fontSize = '';
	return true;
}

highlightQuestion(currQuestion-1);

document.onkeypress = function (e) {
    e = e || window.event;
    var choice = e.keyCode - 48;
    if(currQuestion < questionList.length){
	    if(!(choice >= 0 && choice <= 5)) return;
	    var questionCell = getQuestionObject(currQuestion-1)[2];
		if(!questionCell) return;

		questionCell.querySelector('input[name="RBL'+(currQuestion-1)+'"][value="'+choice+'"]').checked = true;
		unHighlighQuestion(currQuestion-1);
		highlightQuestion(currQuestion);
		currQuestion++;
	}
};