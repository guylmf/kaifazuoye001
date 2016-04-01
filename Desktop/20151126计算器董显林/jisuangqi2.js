function checkNumber(that)
{
if(isNaN(parseFloat(that.value)))
{
alert("Please enter a number");
}
}

function calculate()
{
var a = parseFloat(document.form1.firstNumber.value);
var b = parseFloat(document.form1.secondNumber.value);
var x = document.form1.operator.selectedIndex;
switch(x)
{
case 0:
document.form1.result.value = a + b;
break;
case 1:
document.form1.result.value = a - b;
break;
case 2:
document.form1.result.value = a * b;
break;
case 3:
document.form1.result.value = a / b;
break;
}
}