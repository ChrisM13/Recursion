// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //create an empty JSON string
  var myJSON = "";
  // check first for null / undefined / etc and return
  if (obj === null || obj === undefined){
    //returns null string for null or undefined arguments
    myJSON += 'null';

  //tests value types of obj arguments: string, number, boolean, array, object
    //if the test passes, add the obj to the myJSON string

  }else if (typeof obj === "string") {
    myJSON += ('"' + obj + '"')
  }else if (typeof obj === "number") {
    myJSON += (obj)
  }else if (typeof obj === "boolean") {
    myJSON += obj.toString();
  }

  // if obj is an array we have to apply stringify on each element

  else if(Array.isArray(obj)){
    // if the array is empty add the empty array to myJASON
    var stringArr = [];
    if (obj.length === 0){
      myJSON += stringArr;

    // if the array isn't empty apply stringify to each element and push into stringArr array
    }else obj.forEach(function(index){
      stringArr.push(stringifyJSON(index));
    });
    //join the array using a comma - turns the array into a string
    stringArr.join(",");
    // add string brackets around the string and add to myJSON
    myJSON += "[" + stringArr + "]";
  }

  else if(typeof obj === "object"){

    //this block of code is executed for nested objects
    //objKeys creates new object and places source parameter as nested object key
    var objKeys = Object.keys(obj);
    //new array created to store key-value pairs, later to be added to stringified JSON object
    var keyValueArray = new Array();

    for (var i = 0; i < objKeys.length; i++) {
        //these conditions are unstringifiable and will return an empty string object
        if (typeof objKeys[i] === "function" || typeof obj[objKeys[i]] === "function" ||
          typeof objKeys[i] === undefined || typeof obj[objKeys[i]] === undefined){
          return "{}";
        }else{
        //this code will stringify the object keys and add in their values
        var keyValueString = '"' + objKeys[i] + '":';
        var objValue = obj[objKeys[i]];
        //if the key-value pair is a string, cocat strings and push to key-value array
        keyValueString = (typeof objValue == "string") ?
            keyValueString = keyValueString + '"' + objValue + '"' :
            keyValueString = keyValueString + stringifyJSON(objValue);
        keyValueArray.push(keyValueString);
        }
    }
    //join the key-value array with the stringified json object
      myJSON += "{" + keyValueArray.join(",") + "}";
  }

  return myJSON;
};

