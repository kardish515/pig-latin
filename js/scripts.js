$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();
    var origText = $("input#input").val();
    var newArray = origText.split(" ");
    var newArray2 = [];
    var newArray3 = [];
    var newText = "";

//solve condition 1 - 4.
    for (var i =0; i <newArray.length; i++){
      var str1 = newArray[i].slice(0,3);
      var str2 = newArray[i].slice(0,2);

      if(newArray[i].charAt(0) === "0" || newArray[i].charAt(0) === "1" ||newArray[i].charAt(0) === "2" ||newArray[i].charAt(0) === "3" ||newArray[i].charAt(0) === "4" ||newArray[i].charAt(0) === "5" ||newArray[i].charAt(0) === "6" ||newArray[i].charAt(0) === "7" ||newArray[i].charAt(0) === "8" ||newArray[i].charAt(0) === "9"){
        newArray2.push(newArray[i])
      } else if(newArray[i].length === 1 && (newArray[i].charAt(0) === "a" || newArray[i].charAt(0) === "e" || newArray[i].charAt(0) === "i"|| newArray[i].charAt(0) === "o" ||  newArray[i].charAt(0) === "u")){
        newArray2.push(newArray[i].concat("ay"));
      }else if(str2.includes("qu") || str2.includes("Qu")){
        newArray2.push(newArray[i].split("u").pop() +str2 + "ay")
      }else if(str1.includes("qu")){
        newArray2.push(newArray[i].split("u").pop() + str1 + "ay");
      }else if(newArray[i].charAt(0) !== "a" && newArray[i].charAt(0) !== "e" && newArray[i].charAt(0) !== "i" && newArray[i].charAt(0) !== "o" && newArray[i].charAt(0) !== "u"){
        newArray3 = newArray[i].split("");
        for(var j = 0; j < newArray3.length; j++){
          if(newArray3[0] !== "a" && newArray3[0] !== "e" && newArray3[0] !== "i" && newArray3[0] !== "o" && newArray3[0] !== "u"){
            var char = newArray3.shift();
            newArray3.push(char);
          }
                else{
                  break;
                }
              }

              newText = newArray3.join('');
              newArray2.push(newText.concat("ay"));

          }else if (newArray[i].charAt(0) === "a" || newArray[i].charAt(0) === "e" || newArray[i].charAt(0) === "i" || newArray[i].charAt(0) === "o" || newArray[i].charAt(0) === "u"){
          newArray2.push(newArray[i].concat("way"));
        }
    }
    $(".output").text(newArray2.join(" "));
  });
});
