

// bai tap 1
const arrangeUp = () => {
  var number1 = document.getElementById("txt-number1").value * 1;
  console.log(number1);
  
  var number2 = document.getElementById("txt-number2").value * 1;
  console.log(number2);

  var number3 = document.getElementById("txt-number3").value * 1;
  console.log(number3);

  if (number1 >= number2 && number1 >= number3) {
    if (number2 >= number3) {
      document.getElementById("result1").innerText = `Dãy số tăng dần: ${number3}  ${number2}  ${number1}`;
    } else {
      document.getElementById("result1").innerText = `Dãy số tăng dần: ${number2}  ${number3}  ${number1}`;
    }
  }
  if (number2 >= number1 && number2 >= number3) {
    if (number1 >= number3) {
      document.getElementById("result1").innerText = `Dãy số tăng dần: ${number3}  ${number1}  ${number2}`;
    } else {
      document.getElementById("result1").innerText = `Dãy số tăng dần: ${number1}  ${number3}  ${number2}`;
    }
  }  
  if (number3 >= number1 && number3 >= number2) {
    if (number1 >= number2) {
      document.getElementById("result1").innerText = `Day so tăng dần: ${number2}  ${number1}  ${number3}`;
    } else {
      document.getElementById("result1").innerText = `Day so tăng dần: ${number1}  ${number2}  ${number3}`
    }
  }    
}


// bai tap 2
const greeting = () => {
  var member = document.getElementById("txt-who").value;
  switch (member) {
    case 'B':
      document.getElementById("result2").innerText = "Chào Bố!";
      break;
    case 'M':
      document.getElementById("result2").innerText = "Chào Mẹ!";
      break;
    case 'A':
      document.getElementById("result2").innerText = "Chào Anh trai!";
      break;
    case 'E':
      document.getElementById("result2").innerText = "Chào Em gái!";
      break;
    default:
      alert("Mời nhập thành viên gia đình(Bố/Mẹ/Anh trai/Em gái)");
      break;
  }
}



// bai tap 3
document.getElementById("btn-submit3").addEventListener("click", function () {
  var num1 = document.getElementById("txt-num1").value * 1;

  var num2 = document.getElementById("txt-num2").value * 1;

  var num3 = document.getElementById("txt-num3").value * 1;

  var myArr = new Array;
  myArr.push(num1);
  myArr.push(num2);
  myArr.push(num3);
  console.log(myArr);

  var dem = 0;
  for (let i = 0; i < myArr.length; ++i) {
    console.log(myArr[i]);
    if (myArr[i] % 2 == 0) {
      dem++;
    }
  }
  document.getElementById("result3").innerText = `Vậy có ${dem} số chẵn và ${3 - dem} số lẻ`;
});


// bai tap 4
document.getElementById("btn-submit4").addEventListener("click", () => {
  var a = document.getElementById("txt-edge1").value * 1;
  var b = document.getElementById("txt-edge2").value * 1;
  var c = document.getElementById("txt-edge3").value * 1;
  
  var a2 = a * a;
  var b2 = b * b;
  var c2 = c * c;

  var d = Math.cbrt(a * b * c);

  if (Number.isInteger(d)) {
    document.getElementById("result4").innerText = "tam giac deu";
  } else if (a2 == b2 + c2) {
    document.getElementById("result4").innerText = "tam giac vuong";
  } else if (b2 == a2 + c2) {
    document.getElementById("result4").innerText = "tam giac vuong";
  } else if (c2 == a2 + b2) {
    document.getElementById("result4").innerText = "tam giac vuong";
  } else if (a == b && a != c) {
    document.getElementById("result4").innerText = "tam giac can";
  } else if (a == c && a != b) {
    document.getElementById("result4").innerText = "tam giac can";
  } else if (b == c && b != a) {
    document.getElementById("result4").innerText = "tam giac can";
  } else {
    document.getElementById("result4").innerText = "tam giác thường";
  }
});




