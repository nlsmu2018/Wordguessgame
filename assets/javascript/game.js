var wordList = [
    "india",
    "china",
    "mexico",
    "usa",
    "thailand",
   ]
   
   var chosenWord = "";
   var letterInChosenWord = [];
   var numBlanks = 0;
   var blanksAndSuccesses = [];
   var wrongGuesses = [];
   
   var winCounter = 0;
   var lossCounter = 1;
   var numGuesses = 10;
   
   function startGame(){
   wrongGuesses = [];
   console.log("this is wrong guesses in startGame", wrongGuesses);
   numGuesses = 10;
   blanksAndSuccesses = [];
   
   
   chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
   lettersInChosenWord = chosenWord.split("");
   numBlanks = lettersInChosenWord.length;
   console.log(chosenWord);
   console.log(numBlanks)
   
   for(var i = 0; i < numBlanks; i++){
       blanksAndSuccesses.push("_");
   }
   console.log(blanksAndSuccesses);
   document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
   document.getElementById('guesses-left').innerHTML = numGuesses;
   }
   
   
   function checkLetters(letter){
   
       var letterInWord = false;
   
       for(var i = 0; i < numBlanks; i++){
           if(chosenWord[i] === letter){
               letterInWord = true;
   
           }
       }
   
       if(letterInWord){
           for(i = 0; i < numBlanks; i++){
               if(chosenWord[i] === letter){
               blanksAndSuccesses[i] = letter;
   
           }
   
           }
       }else{
           numGuesses --;
           wrongGuesses.push(letter)
       }
   
    
   
   }
   
   
   function roundComplete(){
  
   
       document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
       document.getElementById('guesses-left').innerHTML = numGuesses;
       document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
   
   
       // if(blanksAndSuccesses.indexOf(letter >= 1)){
       //     console.log(letter)
       // }
       console.log(lettersInChosenWord);
       console.log(blanksAndSuccesses);
       if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
           winCounter++;
           alert("You win!!");
           document.getElementById('win-counter').innerHTML = winCounter;
           startGame();
       }else if(numGuesses === 0){
           document.getElementById('loss-counter').innerHTML  = lossCounter ++;
           document.getElementById('wrong-guesses').innerHTML = "";
           alert("you don't have any more guesses");        
           startGame();
       }
   
   
   
   
   }
   startGame();
   document.onkeyup = function(event){  
       var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
       console.log("this is the letter we typed", letterGuessed)
       checkLetters(letterGuessed)
       roundComplete();
   
   
   }
  