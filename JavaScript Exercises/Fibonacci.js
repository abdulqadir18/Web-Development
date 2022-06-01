function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here
    var a=[];
    if(n===1) {a.push(0); return a;}
    a.push(0);
    if(n===2) {a.push(1); return a;}
    a.push(1);

    for(var i=3; i<=n; i++)
    {
        a.push(a[i-2]+a[i-3]);
    }
    return a;







    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}
