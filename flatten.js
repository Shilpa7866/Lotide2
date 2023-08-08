const flatten = (arr) => {
	let flatArr = [];
	for (let i = 0; i < arr.length; i++){
		if (Array.isArray(arr[i])){
			for (var x = 0; x < arr[i].length; x++){
				flatArr.push(arr[i][x]);
			};
		} else {
			flatArr.push(arr[i]);
		}
	};
  return flatArr; 
};



module.exports = flatten;