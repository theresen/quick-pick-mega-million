console.log('\'Allo \'Allo!');

function luckyFive() {
	'use strict';
  var randomNumbers = Math.floor ( Math.random() * 72 ) + 1;
  return randomNumbers;
}


function megaNumber() {
	'use strict';
  var randomMegaNumber = Math.floor ( Math.random() * 15 ) + 1;
  return randomMegaNumber;
}

function quickPick() {
	'use strict';
	return('The five lucky numbers are ' + 
	luckyFive() + ', '+
	luckyFive() + ', '+
	luckyFive() + ', ' +
	luckyFive() + ', ' +
	luckyFive() +
	', and the mega number is ' + megaNumber() + '.');
}

// document.getElementById("clickMe").onclick = quickPick;

// function myFunction() {
//     var str = document.getElementById("lead").innerHTML; 
//     var res = str.replace("Click the button to display the numbers", "The five lucky numbers are " + 
// 	luckyFive() + ", " +
// 	luckyFive() + ", " +
// 	luckyFive() + ", " +
// 	luckyFive() + ", " +
// 	luckyFive() +
// 	", and the mega number is " + megaNumber() + ".");
//     document.getElementById("lead").innerHTML = res;
// }


function myFunction() {
	'use strict';
    var str = document.getElementById('lead').innerHTML; 
    var res = str.replace( 'Click the button to display the numbers' ,quickPick() );
    document.getElementById('lead').innerHTML = res;
}

document.getElementById('clickMe').onclick = myFunction;