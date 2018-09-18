

function askThe8Ball() {

  

    var radioButtons = document.getElementsByName("question");
    var selectedValue = "";

    for(var radio of radioButtons) {
      console.log(radio.value + " -> checked: " + radio.checked);
    }

    for(var i=0; i < radioButtons.length; i = i + 1) {
        var currentRadio = radioButtons[i];

        if(currentRadio.checked === true) {
            selectedValue = currentRadio.value;
        }

    }

    //DEBUG: alert("code is working!");

    var answer = "";

    // switch(selectedValue) {
    //     case "quiz":
    //         answer = "Absolutely!";
    //         break;
    //     case "skip":
    //         answer = "You know better than that.";
    //         break;
    //     case "rewrite":
    //         answer = "You're funny.";
    //         break;
    //     case "shirt":
    //         answer = "Probably not";
    //         break;
    //     case "lunch":
    //         answer = "I see nothing in your future.";
    //         break;
    //     default:
    //         answer = "You need to pick a question, dummy.";
    //         break;
    // }

    answer = getRandomWord();

    alert(answer);

    //console.log("The question is: " + question);

    return false;
}






var words = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
};