function Rumus() {
    // var ulang = confirm('mau di ulang')
    var pilihan = prompt('Segitiga || Persegi Panjang || Lingkaran');
    if (pilihan == 'segitiga') {
        var alas = prompt('Masukan nilai alas');
        var tinggi = prompt('Masukan Nilai Tinggi');
        var alasInt = parseInt(alas);
        var tinggiInt = parseInt(tinggi);
        var hasil1 = (alasInt * tinggiInt) / 2;
        alert(hasil1)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            Rumus()
        } else {
            alert('terimakasih')
        }
    } else if (pilihan == 'persegi') {
        var A = prompt('Masukan Angka Pertama?')
        var B = prompt('Masukan Angka Kedua?')
        var AInt = parseInt(A)
        var BInt = parseInt(B)
        hasil2 = AInt * BInt;

        alert(hasil2)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            Rumus()
        } else {
            alert('terimakasih')
        }
    } else if (pilihan == 'lingkaran') {
        var r = prompt('Masukan Nilai jari-jari')
        var pi = 3.14
        var rInt = parseInt(r)
        hasil3 = pi * rInt * rInt

        alert(hasil3)
        var konfirmasi = confirm('Apakah Mau diulang')
        if (konfirmasi == true) {
            Rumus()
        } else {
            alert('terimakasih')
        }
    } else {
        alert('Terimalasih')
    }
}

Rumus()