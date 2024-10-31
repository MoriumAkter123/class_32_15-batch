 var marks = [

    [34,65,89,90,32],

    [56,78,88,67,99],

    [43, 67, 89, 78,9]

];

// console.log(marks[0][0]) ;
// console.log(marks[0][1]); 
// console.log(marks[0][2] );
// console.log(marks[0][3]);
// console.log(marks[0][4] );


// console.log(marks[1][0] );
// console.log(marks[1][1] );
// console.log(marks[1][2] );
// console.log(marks[1][3]);
// console.log(marks[1][4] );

// console.log(marks[2][0] );
// console.log(marks[2][1] );
// console.log(marks[2][2] );
// console.log(marks[2][3]) ; 
// console.log(marks[2][4] );





for(i=0; i<=2;i++){
    if(i==0)

    console.log("sectionA");
    else if(i==1)
    {
        console.log("sectionB");
    }

    else if("i==2"){
        console.log("sectionC");
    }
      
    for(j=0; j<=4; j++){
        console.log(marks[i][j]);
        if(marks[i][j]>=33){
            console.log("Pass", "=", marks[i][j]);
        }
        else{

            console.log("fail");
        }


    }
     
}
