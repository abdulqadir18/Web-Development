function isLeap(year) {

/**************Don't change the code above****************/

    //Write your code here.
    var leap=false;
    if((year%4)===0) leap=true;
    if((year&100)===0) leap=false;
    if((year%400)===0) leap=true;

    if(leap) return "Leap year.";
    else return "Not leap year."



/**************Don't change the code below****************/

}
