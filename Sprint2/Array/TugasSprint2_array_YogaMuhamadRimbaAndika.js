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