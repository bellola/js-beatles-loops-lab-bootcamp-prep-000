function theBeatlesPlay(musicians, instruments) {
  var array = [];
   for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
 }

function johnLennonFacts(facts) {
  var i = facts.length - 1;
   while (i >= 0) {
    facts[i] += "!!!";
    i--;
   }
 return facts;
 }

 function iLoveTheBeatles(number) {
   var array = []
   do {
     array.push("I love the Beatles!");
     number++;
   } while (number < 15)
   return array;
 }
