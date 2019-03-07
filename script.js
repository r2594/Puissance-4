var arr = [];
var tab1 = [];
var max = 0;
var min = 0;
var i = 0;
var sommes = 0;
var tab2 = [];

for (i; i<114; i++){
    let random = Math.random(i)*i;

    arr.push(random);

    if (max < random){
        max = random;
    };

    if (min > random){
        min = random;
    };

    
    if (arr[i] <= 10){
        tab1.push(arr[i]);
        arr.pop(arr[i]);
    };

}

arr.forEach(function(add){
    sommes += add;

    return sommes;
});

console.log(max + ' MAX');
console.log(min + ' MIN');
console.log(sommes);
console.log(sommes/arr.length);

for (let j = arr.length-1; j >= 0; j--){

    if (arr[j] <= 10){
        tab1.push(arr[j]);
        arr.pop(arr[j]);
    };

    if (arr[j] > 10){
        tab2.push(arr[j]);
        arr.pop(arr[j]);
    };
}

for (l = 0; l <= 0; l++){
    arr.pop(arr[l]);
}

while (tab1.length != 0){
    tab1.pop(tab1[0]);
}

do {tab2.pop(tab2[0]);} while (tab2.length != 0);


tab1.sort();
tab2.sort();
tab3 = tab1.concat(tab2);
console.table(arr);
console.table(tab1);
console.table(tab2);
console.table(tab3);