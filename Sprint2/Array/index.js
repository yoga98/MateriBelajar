//array adalah tipe data yang dapat membuat banyak atau lebih nilai
//struktur syntaz pada array utamanya terdiri dari index/value

// document.write('tes\n ')

// var array = ['string', 1, true]

// console.log(array[0])
// console.log(array[2])

// var namaBinatang = ['kuda', 'kambing', 'ular', 'katak'];
//! array multidimensi yang artinya array dalam array

// var anime = [
//     ['Naruto', 1999],
//     ['OnePiece', 1998]
// ]
// document.write('Anime ini Berjudul ' + anime[0][0] + " Dan Tahun Keluar Adalah " + anime[0][1])
//! menghitung panjang Array
// var divisi = ["Rais", "Yamin", "Yoga", "Fathul"]
//Lengt adalaha menghitung panjang array
//!dibuat perulangan
// for (n = 0; n < divisi.length; n++) {
//     document.write(divisi[n] + "<br>")
// }

//!push menambah element baru pada array
// divisi.push('Sulton');
// divisi.push('Akbar')
//!Pop menghapus element terakhir pada array
// divisi.pop();
// divisi.pop();
//!shif menghapus element pertama pada array
// divisi.shift()
//!unshif menambahkan element pertama pada array
// divisi.unshift('Edo')
// divisi.unshift('abdul')
// document.write(divisi);
//!concat adalah menggabungkan dua array
// var hewanKakiDua = ['Bebek', 'Burung']
// var hewanKakiEmpat = ['Kuda', 'Kelinci']
// var hewanKebunBinatang = [hewanKakiDua.concat(hewanKakiEmpat)]

// document.write(hewanKebunBinatang)

//Tugas
//! output Yamin,Hafif,Wandi,Syofyan,Ayub,Sidik,Roihan,Yoga
var backEnd = ['Syofyan', 'Sidik', 'Roihan']
backEnd.shift();
backEnd.unshift("Ayub")

var mobile = ['Hafif', 'Wandi', 'Ayub']
mobile.pop();
mobile.push("Syofyan")


var pondok = [mobile.concat(backEnd)]

pondok.unshift("Yamin");
pondok.push("Yoga");
document.write(pondok)



// document.write(pondok[0].concat(mobile).concat(backEnd).concat(pondok[1]))
// document.write(pondok[0].concat(mobile).concat(backEnd).concat(pondok[1]))