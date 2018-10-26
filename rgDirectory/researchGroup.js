
var listOfData = [];

module.exports = {
  retrieveList: function(){
    listOfData.sort( (a,b) => {
      return a-b;
    })
   console.log("Here is your sorted data: " + listOfData + " ... you're welcome.");
  },
  storeData: function(inputNumber){
    listOfData.push(inputNumber);
  }
};

