$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();
    var origText = $("input#input").val();
    var newArray = origText.split(" ");
    var newArray2 = [];
    var newArray3 = [];
    var newText = "";
    var onlyCons = [];
//solve condition 1
    // for (var i =0; i <newArray.length; i++){
    //   if(newArray[i].charAt(0) === "0" || newArray[i].charAt(0) === "1" ||newArray[i].charAt(0) === "2" ||newArray[i].charAt(0) === "3" ||newArray[i].charAt(0) === "4" ||newArray[i].charAt(0) === "5" ||newArray[i].charAt(0) === "6" ||newArray[i].charAt(0) === "7" ||newArray[i].charAt(0) === "8" ||newArray[i].charAt(0) === "9"){
    //     newArray2.push(newArray[i])
    //   }
    // }
//solves condition 2
    // for (var i = 0; i < newArray.length ;i++){
    //   if(newArray[i].charAt(0) === "a" || newArray[i].charAt(0) === "e" || newArray[i].charAt(0) === "i" || newArray[i].charAt(0) === "o" || newArray[i].charAt(0) === "u"){
    //     newArray2.push(newArray[i].concat("way"));
    //   }
    //
    //   console.log(newArray2);
    //
    // }
//solve for condition 3
    // for(var i = 0; i < newArray.length; i++){
    //   if(newArray.length = 1 && newArray[i].charAt(0) === "a" || newArray[i].charAt(0) === "e" || newArray[i].charAt(0) === "i"|| newArray[i].charAt(0) === "o" ||  newArray[i].charAt(0) === "u"){
    //     newArray2.push(newArray[i].concat("ay"));
    //   }
    // }
//solve for condition 4. Add as "else" statement to condtion 2
    // for(var i = 0; i < newArray.length; i++){
    //   if(newArray[i].charAt(0) !== "a" && newArray[i].charAt(0) !== "e" && newArray[i].charAt(0) !== "i" && newArray[i].charAt(0) !== "o" && newArray[i].charAt(0) !== "u"){
    //     newArray3 = newArray[i].split("");
    //
    //   newArray2.push((newArray[i].concat(newArray[i].charAt(0)+"ay")))
    //   }
    // }
//solve for condition 5
    for(var i = 0; i < newArray.length; i++){

        if(newArray[i].charAt(j) !== "a" && newArray[i].charAt(j) !== "e" && newArray[i].charAt(j) !== "i" && newArray[i].charAt(j) !== "o" && newArray[i].charAt(j) !== "u"){

          newArray3 = newArray[i].split("");
          var char = newArray3.shift();
          newArray3.push(char);
          newText = newArray3.join('');
          newArray2.push(newText.concat("ay"));

      //newArray2.push((newArray[i].concat(newArray3)+"ay"));
      }
    }
    // for(var i = 0; i < newArray.length; i++){
    //   if(newArray[i].charAt(0) !== "a" && newArray[i].charAt(0) !== "e" && newArray[i].charAt(0) !== "i" && newArray[i].charAt(0) !== "o" && newArray[i].charAt(0) !== "u"){
    //     onlyCons.push(newArray[i].charAt(0))
    //   }
    // for(var index = 0; index < newArray3.length; index++)
    // {
    //   if(newArray3[index].charAt(0) !== "a" && newArray3[index].charAt(0) !== "e" && newArray3[index].charAt(0) !== "i" && newArray3[index].charAt(0) !== "o" && newArray3[index].charAt(0) !== "u"){
    //     var char = newArray3.shift();
    //     newArray3.push(char);
    //
    // }
    //   else{
    //     break;
    //   }
    // }
    // newText = newArray3.join('');
    // newArray2.push(newText.concat("ay"));
    //
    //   console.log(onlyCons);
    // }
    // var newText = newArray2.join(" ");
    $(".output").text(newArray2);
  });
});
