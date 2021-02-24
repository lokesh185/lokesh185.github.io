// hi

//var d = "18/05/2004" ;

function DateToDigits() {
    console.log("hi");
    var date = document.getElementById("dateofbirth").value;
    console.log(date);

     // var parseString = require('parseString');
    var PersonalityNo = parseInt(date[0]) +parseInt(date[1]) ;
    while (PersonalityNo.toString().length > 1){
        PersonalityNo = parseInt(parseString(PersonalityNo)[0]) +parseInt(parseString(PersonalityNo)[1]);
    } 
    var arr = date.replace("/","").replace("/","").split("") ;

    function SumArray(array) {
        var s = 0;
        for (x in array){
            s += parseInt(array[x]);
        }
        return s ;
    }
    function removeItemAll(arr, value) {
        var i = 0;
        while (i < arr.length) {
          if (arr[i] === value) {
            arr.splice(i, 1);
          } else {
            ++i;
          }
        }
        return arr;
      }

    var sum = SumArray(arr);

    while (sum.toString().length > 1 ){
        sum = parseInt(sum.toString()[0]) +parseInt(sum.toString()[1]);
    }
    arr.push(PersonalityNo.toString())
    arr.push(sum.toString());
    console.log(arr);

    arr = removeItemAll(arr,"0");
    console.log(arr);
    

    var places_dict = {
       4 : "r1c1" , 9 : "r1c2" , 2 :"r1c3",
       3 : "r2c1" , 5 : "r2c2" , 7 :"r2c3",
       8 : "r3c1" , 1 : "r3c2" , 6 :"r3c3"
    };
    for (digit_no in arr){
        console.log(arr[digit_no])
        document.getElementById(places_dict[arr[digit_no]]).innerHTML += arr[digit_no].toString()+ " ";
    }

    //    document.getElementById("r1c1").innerHTML = "hi";

    // document.getElementById("array_display").innerHTML = arr;

    
}


