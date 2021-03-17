// Only change code below this line 
function myForLoop1()
{
var evenNumber = "";
var i;
for (i = 0; i < 10; i++) {
  if (i%2==0)
  {   
      if(i==0)
      evenNumber = i; 
      else
      evenNumber = evenNumber + "," +i; 
    }

}
return evenNumber;
}
function myForLoop2()
{
 var evenInverseNumber = "";
 var i;
    for (i =9; i >=0; i--) 
  {
        if (i%2==0)
        {   
            if(i==8)
            evenInverseNumber = i; 
            else
            evenInverseNumber = evenInverseNumber + "," +i;          }

  }
     return evenInverseNumber;
}

console.log(myForLoop1());
console.log(myForLoop2());
//Only change code above this line
module.exports=
{
  myForLoop1,
  myForLoop2
};