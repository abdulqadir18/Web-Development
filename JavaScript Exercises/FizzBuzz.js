var num=[];
var cnt=1;

function fizzBuzz()
{
  while(cnt<=100)
  {
    if(cnt%3==0 && cnt%5==0) num.push("FizzBuzz");
    else if(cnt%3==0) num.push("Fizz");
    else if(cnt%5==0) num.push("Buzz");
    else num.push(cnt);
    cnt++;
  }
  console.log(num);
}

//call fizzBUzz
//print num
