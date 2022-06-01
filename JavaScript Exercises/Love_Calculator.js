prompt("What's your name?");
prompt("What's their name?");

var n=Math.random();
n=n*100;
n=Math.floor(n+1);

if(n>=70)
{
    alert("Your Love Score is " +n + "%. You love each other as Kanye loves Kanye");
}
if(n<70 && n>30)
{
    alert("Your Love Score is " +n + "%.");
}
if(n<=30)
{
    alert("Your Love Score is " +n + "%. You love each other as Kanye loves Taylor");
}
