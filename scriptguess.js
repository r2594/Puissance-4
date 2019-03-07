var arr = [];
var number = [];

for (let i = 0; i <= 20; i++){

    arr.push(i);
}

function shuffle(a) {
    for (let i = a.length-1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i-1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

function selection(){
    number.push(arr[0]);
}

function choose(num){

    if(num < number[0]){
        console.log("Trop petit");
    }

    if(num > number[0]){
        console.log("Trop grand");
    }

    if(num == number[0]-1){
        console.log("Trop petit mais presque !")
    }

    if(num == number[0]+1){
        console.log("Trop grand mais presque !")
    }

    if(num == number[0]){
        console.log("GG");
        number.pop();
        shuffle(arr);
        selection();
    }


}



console.log("Trouvez le nombre compris entre 0 et 20. Pour cela tapez choose(votre choix);")
shuffle(arr);
selection();
//console.log(arr);
//console.log(number);