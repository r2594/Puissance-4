function TTC(par1){
    document.getElementById('myp1').innerHTML = (par1*1.2);

}

//var prixTTC = console.log(TTC(455));

function puissance(par2, par3){
    return (Math.pow(par2, par3));
}

var resultatPuissance = console.log(puissance(2, 8));

var annees = [];
var anneesBI = [];

function bissextile (){
    for(i=1; i<=2020; i++){
        annees[i]=i;
        if(annees[i]%100 !== 0){
            if(annees[i]%4 === 0 || annees[i]%400 === 0){
            anneesBI.push(annees[i]);
        }
    };
    }
}    


bissextile();

console.table(anneesBI);

function facto(par4){
    var factorial = 1;
    for(i = par4 ; i >= 1 ; i--) {
        factorial *= i;
     };
     return factorial;
}

var resultatFacto = console.log(facto(4));

function taxes (par5){
    
    var first = 0;
    if (parseInt(par5) <= 38000){
        par5 = par5-((par5*15)/100);
    };
    if (par5 > 38000){
        first = par5-38000; 
        par5 = par5-first;
        first = first-(first*0.38);
        par5 = par5-(par5*0.15);
    }
    return first, par5;
}

//var resultatTaxes = console.log(taxes(20000));;
console.log(taxes(20000));