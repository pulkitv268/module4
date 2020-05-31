var speakWord = "Hello";
function speak(name) {
  console.log(speakWord + " " + name);
}
var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}

var people = ["John", "brad" , "Dev" , "julia"];
for (var i=0; i<= people.length; i++){
	var firstChar= people[i].charAt(0).tolowercase();
    if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}