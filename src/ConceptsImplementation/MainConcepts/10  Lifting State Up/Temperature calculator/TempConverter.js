export function tryConvert(temp, convert)
{
    const input = parseFloat(temp);
    if(Number.isNaN(input))
    {
        return "";
    }

    var output="";
    if(convert==="toCelsius")
    {
        output=toCelsius(input)
    }
    else if(convert==="toFahrenheit")
    {
        output=toFahrenheit(input) 
    }
 
    return output;

}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }