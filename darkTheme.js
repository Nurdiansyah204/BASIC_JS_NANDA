var pilihan = 4;
    /*
    1 - Light
    2 - Dark
    3 - Nocturne
    4 - Terminal
    5 - Indigo
    */
//cara 1
 if (pilihan == 1){
 console.log("light")
 }else if (pilihan ==2){
 console.log("dark")
 }else if (pilihan ==3){
 console.log("nocture")
 }else if (pilihan ==4){
 console.log("terminal")
 }else{
 console.log("indigo")
 }

 //cara 2 memkai switch statement
 switch(pilihan){
    case 1:
        console.log("light");
        break;
    case 2:
        console.log("dark");
        break;
    case 3:
        console.log("nocture");
        break;
    case 4:
        console.log("terminal");
        break;
    default:
        console.log("indigo");                
 }

 //cara 3 memakai ternary operator
 console.log(pilihan ==1 ?"ligt" : (pilihan ==2 ?"dark" : (pilihan ==3 ?"nocture": (pilihan ==4 ?"terminal":"indigo"))));