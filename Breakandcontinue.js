for (i=0;  i<=15; i++){
    if(i == 9){
        break;
    }
    console.log(i)
}

var i = "A"
if (i == A) {
    console.log("peringkat anda satu")
} else if (i == B) {
    console.log("anda peringkat dua")
} else {
    console.log("anda peringkat " + i)
}

switch (i) {
    case "A":
        console.log("anda peringkat 1")
    break;
    default :
        console.log("anda peringkat 2")
}