// document.write('hello world ')
// document.write('<br>')

//struktur Object 
// var namaObject = {
//     properti1: "string",
//     properti2: 123,
//     properti3: ['nama', 'saya', 1233],
//     methoad1: function() {
//         return 'hello word'
//     },
// }
// document.write(namaObject.properti1);
// document.write('<br>');
// document.write(namaObject.properti3[2]);
// document.write('<br>');



// var dokumen = {
//     tulis: function(parameter = "") {
//         document.write(parameter);
//     },
// }
// document.tulis()

// Int, string, function, Array
// var cuciPiring = {
//     dapur: 'Semua Peralatan Alat Dapur',
//     jmlhPiring: [1, 2, 3, 4, 5, 'semua piring'],
//     pekerjaan: function() {
//         var ibu = prompt('mencuci')
//         if (ibu == 'mencuci') {
//             document.write('ibu mencuci Piring dengan jumlah ' + this.jmlhPiring[5])
//         } else if (ibu == '1') {
//             document.write('ibu mencuci piring ' + this.jmlhPiring[0] + "buah")
//         } else {
//             document.write('')
//         }
//     }
// }
// cuciPiring.pekerjaan()

//! Contoh objeck dinamis
var santri = [{
        nama: 'yoga',
        jurusan: 'mobile'
    },
    {
        nama: 'yamin',
        jurusan: 'mobile'
    },
    {
        nama: 'iqkbal',
        jurusan: 'backend'
    },
    {
        nama: 'sulton',
        jurusan: 'frontend'
    },
]
var filter = prompt('Masukan Jurusan')
for (var n = 0; n < santri.length; n++) {
    if (santri[n].jurusan == filter) {
        document.write('Nama =' + santri[n].nama + '<br>');
        document.write('Jurusan =' + santri[n].jurusan + '<br>');
        document.write('<br>')
    } else {
        alert('tidak ada jurusan tersebut')
    }
}