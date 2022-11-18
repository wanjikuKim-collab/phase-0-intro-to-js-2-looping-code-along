// Code your solutions in this file
for (let age = 30; age<40; age++){
    console.log(`I'm ${age} years old.happy birthday to  me!`);

}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log (`wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}

function writeCards(names, eventName){
    //creates an empty array
    let newArray = [];   

    for(let index=0; index<names.length;index++){
    //displays the message 
    let message = `Thank you, ${names[index]}, for the wonderful ${eventName} gift!` 
    newArray.push(message);
      
    }
    return newArray// returns the value of the array to the world
  }
  //function call with assigned arguments
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
      
function countDown(num){
    let i = 10
    while(i>=0){
        console.log(i--)
    }
};

countDown(10)