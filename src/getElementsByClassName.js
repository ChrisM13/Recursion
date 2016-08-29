// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){



//return a list of class names.
//create a test that will check class name
  //check if class exists

 // if it doesn't exist run recursion until we find it.

  var nodeList = [];
  function test(node) {
    if (node.className === className){
      nodeList.push(node);
    }

    node.childNodes.forEach(function(child){
     test(child);

    });

  };

  test(document);
  console.log('nodelist1',nodeList);
  return nodeList;
};

//console.log("[body.targetClassName, p.targetClassName], our expected node list")