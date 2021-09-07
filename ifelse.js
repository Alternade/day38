var arr =[];
for(i=0;i<5;i++)
{
    var rand = Math.floor( Math.random() * 100 + 100); 
      arr.push(rand);
}

var arr1 = arr.sort();
console.log(arr1);

console.log("min is " +arr1[0]);
console.log("max is " +arr1[4]); 