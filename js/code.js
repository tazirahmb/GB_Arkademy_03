function prime () {
    var baris = document.getElementById("row").value;
    var kolom = document.getElementById("column").value;
    var total = baris * kolom;
    var arrPrime = new Array(total);
    arrPrime[0] = 2;
    var hasil = "";
    var checkValue1, checkValue2;
    var isNotPrime = true;

    for (var i = 0; i < total - 1; i++) {
        isNotPrime = true;
        checkValue1 = arrPrime[i] + 1;
        while(isNotPrime) {
            checkValue2 = checkValue1;
            for(var j = 0; j <= i; j++) {
                if(checkValue1 % arrPrime[j] == 0) {
                    checkValue1 += 1;
                    break;
                }
            }
            if (checkValue1 == checkValue2) {
                isNotPrime = false;
            }
        }
        arrPrime[i + 1] = checkValue1;
    }

    var k = 0;
    hasil += "<table>";
    for(var nbaris = 1; nbaris <= baris; nbaris++) {
        hasil += "<tr>";
        for(nkolom = 1; nkolom <= kolom; nkolom++) {
            hasil += "<td>" + arrPrime[k] + "</td>";
            k += 1;
        }
        hasil += "</tr>";
    }
    hasil += "</table>";
    
    document.getElementById("result").innerHTML = hasil;
}

document.getElementById("check").addEventListener("click", prime);