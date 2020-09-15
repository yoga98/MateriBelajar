function restoranCepatSaji() {
    var pilih = prompt('Silahkan Pilih : Makanan || Minuman')

    if (pilih == 'makanan') {
        var makanan = prompt('Pilih : Chiken Ayam Rp. 5000 || Baso Urat Rp.15.000 || Sate Hiu Rp. 20.000')
        var bayar = prompt('silahkan masukan nominal')
        var bayarInt = parseInt(bayar)
        if (makanan == 'chiken ayam') {
            var harga = 5000
            var total = bayarInt - harga
            alert('Kembalian Anda Adalah ' + total)
            var konfirmasi = confirm('Mau Pesan Yang lain?')
            if (konfirmasi == true) {
                restoranCepatSaji()
            } else {
                alert('terimakasih')
            }
        } else if (makanan == 'baso urat') {
            // var bayar = prompt('silahkan masukan nominal')
            // var bayarInt = parseInt(bayar)
            var harga = 15000
            var total = bayarInt - harga
            alert('Kembalian Anda Adalah ' + total)
            var konfirmasi = confirm('Mau Pesan Yang lain?')
            if (konfirmasi == true) {
                restoranCepatSaji()
            } else {
                alert('terimakasih')
            }
        } else if (makanan == 'sate hiu') {
            // var bayar = prompt('silahkan masukan nominal')
            // var bayarInt = parseInt(bayar)
            var harga = 15000
            var total = bayarInt - harga
            alert('Kembalian Anda Adalah ' + total)
            var konfirmasi = confirm('Mau Pesan Yang lain?')
            if (konfirmasi == true) {
                restoranCepatSaji()
            } else {
                alert('terimakasih')
            }
        }
    } else if (pilih == 'minuman') {
        var minumam = prompt('Pilih : Susu Dingin Rp. 5.000 || Teh Manis Es Rp. 3.000 || Es Kelapa Rp.6.000')
        if (minumam == 'susu dingin') {
            // var bayar = prompt('silahkan masukan nominal')
            // var bayarInt = parseInt(bayar)
            var harga = 5000
            var total = bayarInt - harga
            alert('Kembalian Anda Adalah ' + total)
            var konfirmasi = confirm('Mau Pesan Yang lain?')
            if (konfirmasi == true) {
                restoranCepatSaji()
            } else {
                alert('terimakasih')
            }
        } else if (minumam == 'teh manis es') {
            // var bayar = prompt('silahkan masukan nominal')
            // var bayarInt = parseInt(bayar)
            var harga = 3000
            var total = bayarInt - harga
            alert('Kembalian Anda Adalah ' + total)
            var konfirmasi = confirm('Mau Pesan Yang lain?')
            if (konfirmasi == true) {
                restoranCepatSaji()
            } else {
                alert('terimakasih')
            }
        } else if (minumam == 'es kelapa') {
            // var bayar = prompt('silahkan masukan nominal')
            // var bayarInt = parseInt(bayar)
            var harga = 6000
            var total = bayarInt - harga
            alert('Kembalian Anda Adalah ' + total)
            var konfirmasi = confirm('Mau Pesan Yang lain?')
            if (konfirmasi == true) {
                restoranCepatSaji()
            } else {
                alert('Terimakasih')
            }
        }
    }
}

restoranCepatSaji()