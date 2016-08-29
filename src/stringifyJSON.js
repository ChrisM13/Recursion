// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//how do you

 // var jsonString = "";
//
 // // build recursive function
 // // takes obj properties, converts to strings
 // // takes property values, converts to strings
//
//
 // function toString(val){//

var stringifyJSON = function(obj) {
  var myJSON = "";

  // check first for null / undefined / etc and return
  if (obj === null || obj === undefined){
    myJSON += 'null'
  }else if (typeof obj === "string") {
    myJSON += ('"' + obj + '"')
  }else if (typeof obj === "number") {
    myJSON += (obj)
  }else if (typeof obj === "boolean") {
    myJSON += obj.toString();
  }else if(Array.isArray(obj)){
    var stringArr = [];
    if (obj.length === 0){
      myJSON += stringArr;
    }else obj.forEach(function(index){
      stringArr.push(stringifyJSON(index));
    })
    stringArr.join(",");
    myJSON += "[" + stringArr + "]";
  }
  else if(typeof obj === "object"){
    var stringObj;
    console.log("THIS IS HAS OWN PROP", obj.hasOwnProperty())
    if (!obj.hasOwnProperty()){
      myJSON += "{}";
      console.log("This is the string OBJ", stringObj);
    }

    else{
      for (var p in obj){
        console.log("THIS IS P DUDE", p);
        stringObj[p] = stringifyJSON(p);
      }
    }



  }
    // iterate through all the properties of the object
        // check to see if this property is a string, number, etc
        // if (typeof p === "string") {
        //   myJSON += (p + ": " + obj[p] + ",")
        // }else if (typeof p === "number") {
        //   myJSON += (p + ": " + obj[p] + ",")
        // }else if (typeof p === "object" && obj.length === undefined){
        //   myJSON += stringifyJSON(obj[p]); // this is recursion!
        // } else if (typeof p === "object" && obj.length > 0){
        //   p.forEach(function(index){
        //     stringifyJSON(index);
        //   });

  return myJSON;
  console.log("myJSON", myJSON, typeof myJSON);
};
