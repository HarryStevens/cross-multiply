module.exports = function(options) {

	if (options == null){
		throw new Error("You must specify options")
	}	else if (typeof(options) !== "object"){
		throw new Error("Options must be an object")
	} else if (!options.n1 || !options.d1){
  	throw new Error("You must specify n1 & d1 in the options");
  } else if (!options.n2 && !options.d2) {
  	throw new Error("You must specify either n2 or d2 in the options");
  } else if (options.n2 && options.d2) {
  	throw new Error("You cannot specify both n2 & d2 in the options")
  } else {

  	if (options.n2){
  		return options.n2 * options.d1 / options.n1;
  	} else {
  		return options.n1 * options.d2 / options.d1;
  	}

  }

};