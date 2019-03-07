var turn = 0;
var board = [];
var person;
var gagne=0;

function login(){
    var txt;
    person = prompt("Player name :", "Enter your name here");
    if (person == null || person == "") {
        txt = console.log("Try again");
        person;
      } else {
        txt = console.log("Mine is Rocket. Let's fight " + person + "!");
      }
}

login();

for (i=0; i<10; i++){
    board[i]=[];

    for(j=0; j<=9; j++){
        board[i][j]=0;
    }
}

console.table(board);

function play(x){
    for (i=board.length-1; i>=0; i--){

        if(turn === 0){

            if(board[i][x] === 0){
                board[i][x] = 1;
                turn=1;
                machine();
                console.table(board);
                if(board[i][x] === 1){gagne+=1; console.log('BOOM '+gagne)};
                break;
            };
        };

        if(turn === 1){
            
            if(board[i][x] === 0){
                board[i][x] = 2;
                turn=0;
                break;
            };
        };    
        
    };
};


function machine(){
    var random = Math.floor(Math.random() * 10);

        play(random);
        console.log("C'est ton tour "+person+" !");
}
