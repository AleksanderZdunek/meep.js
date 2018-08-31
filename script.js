'use strict'
let meep = (function()
{
	let counter = 0;
	return function(string)
	{
		console.log(string);
		document.body.innerHTML += ++counter + ": " + string + "<br>";  
	};
})();
//-----------------//

meep("Hello, World!");
