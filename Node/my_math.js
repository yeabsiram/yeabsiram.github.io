let myObj = {
 add: function add(x,y)
{
    return x + y;
},

subtract: function subtract(x,y)
{
    return x-y;
},
multiply: function multiply(x,y)
{
    return x * y;
},
divide: function divide(x,y)
{
    if(y == 0)
    {
        return null;
    }
    return x/y;
},

 pi: 3.14
}

module.exports = myObj;
