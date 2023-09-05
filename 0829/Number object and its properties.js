// memo


// MAX_VALUE : 1.7976931348623157e+308
// MIN_VALUE : 5e-324



// mine



function whatNumberIsIt(n){
  const arr = [
    "Input number is Number.MAX_VALUE",
    "Input number is Number.MIN_VALUE",
    "Input number is Number.NaN",
    "Input number is Number.NEGATIVE_INFINITY",
    "Input number is Number.POSITIVE_INFINITY"
  ];
  
  let result = "";
  
  isNaN(n) ? result = arr[2] :
  n > 1.7976931348623157e+308 ? result = arr[4] :
  n === 0 ? result = "Input number is " + n :
  n < 5e-324 ? result = arr[3] : 
  n === 5e-324 ? result = arr[1] : 
  n === 1.7976931348623157e+308 ? result = arr[0] :
  result = "Input number is " + n;
  return result;
}


// mine2

// NaNはfalseなのでdefalutに設定

function whatNumberIsIt(n){
  switch(n) {
      case Number.MAX_VALUE: return "Input number is Number.MAX_VALUE";
      case Number.MIN_VALUE: return "Input number is Number.MIN_VALUE";
      case Number.NEGATIVE_INFINITY: return "Input number is Number.NEGATIVE_INFINITY";
      case Number.POSITIVE_INFINITY: return "Input number is Number.POSITIVE_INFINITY";
      case Number(n): return "Input number is " + n;
      default: return "Input number is Number.NaN";
  }
}



// best


function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}



// other

function whatNumberIsIt(n){
  switch(n){
  	case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
  	case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
  	case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
  	case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
  	case Number(n) : return "Input number is " + n;
	default: return "Input number is Number.NaN";
  }
}










