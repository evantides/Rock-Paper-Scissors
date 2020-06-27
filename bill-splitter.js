let yes = false;

function submitButton () {
	const submit = document.createElement("button");
	submit.id = "submit";
	submit.innerText = "Submit";

	document.querySelector('form').appendChild(submit);
	removeTipQ();

	submit.onclick = function () {
		submit.disabled = true;
		let value = splitIt();
		value = Math.round( value * 100 + Number.EPSILON ) / 100
		value = value.toFixed(2);

		const final = document.getElementById('finalBreakdown');
		final.innerText = "$" + value + " per patron!";

		const again = document.querySelector('#again');
		again.className = 'displayIt';
	}

	
}

function Indeed() {
	yes = true;
	const newLabel = document.createElement('label');
	newLabel.innerHTML = "Tip Amount <br>";
	newLabel.id = 'formThing';
	newLabel.for = 'tip';
	document.querySelector('form').appendChild(newLabel);
  
	const input = document.createElement('input');
	input.id = 'tip';
	input.name = 'tip';
	input.type = 'text';
	input.value = "15%";
	document.querySelector('form').appendChild(input); 
 
	const breaK = document.createElement('br');
	document.querySelector('form').appendChild(breaK);
	  
	submitButton();
}

function removeTipQ() {
	const divDestroy = document.querySelector(".separated").className = 'noShow';
}

function splitIt () {
	let tip = "0";

	let cost = document.querySelector('#totalCost').value;
	let patrons = document.querySelector('#patronNum').value;

	if (yes === true) {
		tip = document.querySelector('#tip').value;
	}

	

	try {
	    cost = parseFloat(cost);
	    patrons = parseFloat(patrons);
	    tip = parseFloat(tip);

	    tip = (tip / 100) * cost;

	    return ((tip + cost) / patrons)
  	}
	catch(err) {
    	alert("Try Again! The error you received was: " + err);
  	}
  
  
  	return (cost / patrons);

}

//reloads the webpage
function doItAgain() {
	location.reload();
	return false;
}