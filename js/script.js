let btnStart = document.getElementById('start'),
	  squareBoxElem = document.getElementById('animation'),
	  containerArea = document.getElementById('container');

let count = 0;
let topPosition = squareBoxElem.style.top;
let leftPosition = squareBoxElem.style.left;

function moveBoxElem() {
	btnStart.disabled = true;

	let forwardBoxMove = setInterval(function() {
		plus()
		if (count == 351) {
			clearInterval(forwardBoxMove);

			let backBoxMove = setInterval(() => {
					minus()
					if (count == 0) {
						clearInterval(backBoxMove);
						btnStart.disabled = false;
					}
				// }
			}, 1)
		}
	}, 1);
}

function plus() {
	count++
	squareBoxElem.style.top = count + 'px';
	squareBoxElem.style.left = count + 'px';
}

function minus() {
		count--;
		squareBoxElem.style.left = count + 'px';
		squareBoxElem.style.top = count + 'px';
}

btnStart.addEventListener('click', moveBoxElem)
