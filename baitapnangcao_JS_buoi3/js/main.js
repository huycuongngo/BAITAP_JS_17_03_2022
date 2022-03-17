


function isLeapYear(a) {
  if (a % 400 == 0)
    return true;
  if (a % 4 == 0 && a % 100 != 0)
    return true;
  return false;
}

// bai tap 1
document.getElementById("btn-ngay-truoc").addEventListener("click", () => {
  var day = document.getElementById("txt-ngay").value * 1;
  var month = document.getElementById("txt-thang").value * 1;
  var year = document.getElementById("txt-nam").value * 1;

  console.log(day, month, year);

});




// bai tap 2
document.getElementById("btn-submit2").addEventListener("click", () => {
  var year2 = document.getElementById("txt-nam-bai2").value * 1;
  var month2 = document.getElementById("txt-thang-bai2").value * 1;

  var checkYear = isLeapYear(year2);

  switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("result2").innerText = `Thang ${month2}/${year2} co 31 ngay`;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("result2").innerText = `Thang ${month2}/${year2} co 30 ngay`;
      break;
    case 2:
      if (checkYear) {
        document.getElementById("result2").innerText = `Thang 2/${year2} co 29 ngay`;
      } else {
        document.getElementById("result2").innerText = `Thang 2/${year2} co 28 ngay`;
      }
      break;
    default:
      alert("Nhap tu thang 1 den thang 12 !!!");
  }
});


// bai tap 3
document.getElementById("btn-submit3").addEventListener("click", () => {
  var num = document.getElementById("txt-num3").value * 1;
  console.log(num);

  var hundred = Math.floor(num / 100);
  var tens = Math.floor(num / 10) % 10;
  var units = num % 10;

  console.log(hundred, tens, units);
  var text;
  switch (hundred) {
    case 1:
      text = "Một trăm";
      break;
    case 2:
      text = "Hai trăm";
      break;
    case 3:
      text = "Ba trăm";
      break;
    case 4:
      text = "Bốn trăm";
      break;
    case 5:
      text = "Năm trăm";
      break;
    case 6:
      text = "Sáu trăm";
      break;
    case 7:
      text = "Bảy trăm";
      break;
    case 8:
      text = "Tám trăm";
      break;
    case 9:
      text = "Chín trăm";
      break;
    default:
      break;
  }
  if (tens % 10 == 0 && units != 0) {
    text += " lẻ";
  }
  switch (tens) {
    case 1:
      text += " mười";
      break;
    case 2:
      text += " hai mươi";
      break;
    case 3:
      text += " ba mươi"
      break;
    case 4:
      text += " bốn mươi";
      break;
    case 5:
      text += " năm mươi";
      break;
    case 6:
      text += " sáu mươi";
      break;
    case 7:
      text += " bảy mươi";
      break;
    case 8:
      text += " tám mươi";
      break;
    case 9:
      text += " chín mươi";
      break;
    default:
      break;
  }
  switch (units) {
    case 1:
      text += " một";
      break;
    case 2:
      text += " hai";
      break;
    case 3:
      text += " ba";
      break;
    case 4:
      text += " bốn";
      break;
    case 5:
      text += " năm";
      break;
    case 6:
      text += " sáu";
      break;
    case 7:
      text += " bảy";
      break;
    case 8:
      text += " tám";
      break;
    case 9:
      text += " chín";
      break;
    default:
      break;
  }
  document.getElementById("result3").innerText = text;
});

// bai tap 4

const maxVal = (a, b, c) => {
  var max = a;
  if (b > max)
    max = b;
  if (c > max)
    max = c;
  return max;
}

document.getElementById("btn-submit4").addEventListener("click", () => {
  var x_A = document.getElementById("txt-x-a").value * 1;
  var y_A = document.getElementById("txt-y-a").value * 1;

  var x_B = document.getElementById("txt-x-b").value * 1;
  var y_B = document.getElementById("txt-y-b").value * 1;

  var x_C = document.getElementById("txt-x-c").value * 1;
  var y_C = document.getElementById("txt-y-c").value * 1;

  var x_D = document.getElementById("txt-x-d").value * 1;
  var y_D = document.getElementById("txt-y-d").value * 1;


  var d1 = Math.sqrt(Math.pow((x_D - x_A), 2) + Math.pow((y_D - y_A), 2));
  var d2 = Math.sqrt(Math.pow((x_D - x_B), 2) + Math.pow((y_D - y_B), 2));
  var d3 = Math.sqrt(Math.pow((x_D - x_C), 2) + Math.pow((y_D - y_C), 2));

  var max = maxVal(d1, d2, d3)
  switch (max) {
    case d1:
      document.getElementById("result4").innerText = "nha sinh vien A xa truong nhat";
      break;
    case d2:
      document.getElementById("result4").innerText = "nha sinh vien B xa truong nhat";
      break;
    case d3:
      document.getElementById("result4").innerText = "nha sinh vien C xa truong nhat";
      break;
  }
});


