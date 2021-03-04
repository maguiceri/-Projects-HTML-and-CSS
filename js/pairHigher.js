function pairHigher(array) {
	array.sort(function(a, b){return b-a});
    console.log(array[0] + ", " + array[1]);
}

pairHigher([40, 1, 5, 25, 10]);