/*
Gameplan:

HTML:
(*) Calculator window for operations to be shown along with result
() Number buttons for the calculator
() Operator buttons (+, -, *, etc)
() '=' button

JavaScript:
() Function that captures what was typed in calculatorWinder
() Function that will add numbers, subtract, etc
 */
function calculate(expression)
{
    //'expression' is a string of everything in your calculatorWindow
    //we need to extract the first number from the 'expression'
    //expression = 1+2
    var firstNum = Number(expression.substr(0, 1));
    var operator = expression.substr(1, 1); //capture the '+' //output: +2
    var secondNum = Number(expression.substr(2, 1));

    if (operator === '+') //that means I add firstNum and secondNum
    {
        return addNums(firstNum, secondNum); //returns the result of calling 'addNums'
        //after sending it firstNum and secondNum
    }
    else if (operator === '-')
    {
        //call subtract nums, etc
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum)
    }
}

function addNums (p1, p2)
{
    //p1 and p2 are sent to addNums... to do this:
    return p1+p2
}

function subtractNums(p1, p2)
{
    return p1-p2
}

function multiplyNums(p1, p2)
{
    return p1*p2
}

function divideNums(p1, p2)
{
    return p1/p2
}