// COPY FUNCTION
function copyFunction() {
  var copyText = document.getElementById("passw");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

// 1 - letters, 2 - numbers, 3 - special characters, 12 - lett + num, 13 - lett + spec, 
// 23 == num + spec, 123 - all
function generatePassword() {
  var l = document.getElementById("length").value;
  let sum = 0;

  // SELECTING FROM CHECKBOX

  const btn = document.querySelector('#genz');
  btn.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="chars"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });

    for (let i = 0; i < values.length; i++) {
      sum += values[i];
    }

    let select = parseInt(sum, 10);

    // GENERATE LETTERS ONLY - 1
    function letOnly(length) {
      var result = '';
      var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var letLength = letters.length;
      for ( var i = 0; i < length; i++ ) {
        result += letters.charAt(Math.floor(Math.random() * letLength));
      }
      return result;
    }

    var ans1 = letOnly(l);

    if(select == 1) {
      document.getElementById("passw").value = ans1;
    }


    // GENERATE NUMBERS ONLY - 2
    function numOnly(length) {
      var result = '';
      var numbers = '0123456789';
      var numLength = numbers.length;
      for ( var i = 0; i < length; i++ ) {
        result += numbers.charAt(Math.floor(Math.random() * numLength));
      }
      return result;
    }

    var ans2 = numOnly(l);

    if (select == 2) {
      document.getElementById("passw").value = ans2;
    }


    // GENERATE SPECIAL CHARACTERS ONLY - 3
    function specOnly(length) {
      var result = '';
      var special = ',<.>/?;:\'\"[{]}\\|=+-_)(*&^%$#@@!~';
      var specLength = special.length;
      for ( var i = 0; i < length; i++ ) {
        result += special.charAt(Math.floor(Math.random() * specLength));
      }
      return result;
    }
    
    var ans3 = specOnly(l);

    if (select == 3) {
      document.getElementById("passw").value = ans3;
    }


    // GENERATE LETTERS + NUMBERS COMBINED - 12
    function letNum(length) {
      var result = '';
      var lnCombined = ans1 + ans2;

      var lnLength = lnCombined.length;
      for ( var i = 0; i < length; i++ ) {
        result += lnCombined.charAt(Math.floor(Math.random() * lnLength));
      }
      return result;
    }

    var ans12 = letNum(l);

    if (select == 12) {
      document.getElementById("passw").value = ans12;
    }

    // GENERATING LETTERS + SPECIAL CHARACTERS COMBINED - 13
    function letspec(length) {
      var result = '';
      var lsCombined = ans1 + ans3;

      var lsLength = lsCombined.length;
      for ( var i = 0; i < length; i++ ) {
        result += lsCombined.charAt(Math.floor(Math.random() * lsLength));
      }
      return result;
    }

    var ans13 = letspec(l);

    if (select == 13) {
      document.getElementById("passw").value = ans13;
    }


    // GENERATE NUMBER + SPECIAL COMBINED - 23
    function numSpec(length) {
      var result = '';
      var nsCombined = ans2 + ans3;

      var nsLength = nsCombined.length;
      for ( var i = 0; i < length; i++ ) {
        result += nsCombined.charAt(Math.floor(Math.random() * nsLength));
      }
      return result;
    }

    var ans23 = numSpec(l);

    if (select == 23) {
      document.getElementById("passw").value = ans23;
    }
    

    // GENERATING LETTERS + NUMBERS + SPECIAL CHARATERS COMBINED -123
    function all(length) {
      var result = '';
      var allCombined = ans12 + ans3;
      var allLength = allCombined.length;
      for ( var i = 0; i < length; i++ ) {
        result += allCombined.charAt(Math.floor(Math.random() * allLength));
      }
      return result;
    }

    var ans123 = all(l);

    if (select == 123) {
      document.getElementById("passw").value = ans123;
    }
  });
}
