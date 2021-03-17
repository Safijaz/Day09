//Only change code below this line
function myDoWhile(){
 var i=0;
 var myNumber= "";
 do{
     
    if(i==9)
    myNumber=myNumber + i;
    else
    myNumber=myNumber + i + ",";
     i++;
 } while (i<10);
  return myNumber;
}
 console.log(myDoWhile());
 //Only change code above this line
 module.exports= myDoWhile;