var n = 5;
var temp = 0;
for (var i = 1; i <= n; i++){
    if (n%i==0) {
        temp++;
    }    
}

if (temp==2){
    console.log("Prime Number")
}

else {
    console.log("Compound")
}

