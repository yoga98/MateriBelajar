function kalkulator() {
    var nilai1 = prompt('Masukan Nilai Pertama')
    var nilai2 = prompt('Masukan Nilai Kedua')
    var nilai1int1 = parseInt(nilai1)
    var nilai1int2 = parseInt(nilai2)
    var operator = prompt('*,/,+,-')
    if (operator == '+') {
        hasil1 = nilai1int1 + nilai1int2
        alert(hasil1)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert('terimakasih')
        }
    } else if (operator == '-') {
        hasil2 = nilai1int1 - nilai1int2
        alert(hasil2)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert('terimakasih')
        }
    } else if (operator == '*') {
        hasil3 = nilai1int1 * nilai1int2
        alert(hasil3)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert('terimakasih')
        }
    } else if (operator == '/') {
        hasil4 = nilai1int1 / nilai1int2
        alert(hasil4)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert('terimakasih')
        }
    }
}
kalkulator()