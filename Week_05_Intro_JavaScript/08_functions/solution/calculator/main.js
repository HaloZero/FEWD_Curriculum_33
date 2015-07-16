function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function max(a, b) {
	if (a > b) {
		return a; 
	} else {
		return b;
	}
}

function min(a, b) {
	if (a < b) {
		return a; 
	} else {
		return b;
	}
}

function maxOf3(a, b, c) {
	return max(max(a, b), c);
}

function minOf3(a, b, c) {
	return min(min(a, b), c);
}

function maxOfAll() {
	var maxTotal = 0;
	for (var i = 0; i < arguments.length; i++) {
		maxTotal = max(maxTotal, arguments[i]);
	}
	return maxTotal;
}

function minOfAll() {
	var minTotal = Number.MAX_VALUE;
	for (var i = 0; i < arguments.length; i++) {
		minTotal = min(minTotal, arguments[i]);
	}
	return minTotal;
}