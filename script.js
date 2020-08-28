// object kalkulator
const kalkulator = {
    nilai1: null,
    nilai2: null,
    opTambah: function () {
        return this.nilai1 + this.nilai2;
    },
    opKurang: function () {
        return this.nilai1 - this.nilai2;
    },
    opKali: function () {
        return this.nilai1 * this.nilai2;
    },
    opBagi: function () {
        return this.nilai1 / this.nilai2;
    },
    opModulus: function () {
        return this.nilai1 % this.nilai2;
    }
}

//event saat mengisi nilai pada form
document.body.addEventListener('input', function (e) {
    if (e.target.id == 'nilai1') {
        kalkulator.nilai1 = e.target.valueAsNumber;
    } else if (e.target.id == 'nilai2') {
        kalkulator.nilai2 = e.target.valueAsNumber;
    }
});

//event ketika tombol sama dengan di klik
const tSD = document.querySelector('button#tSD');
tSD.onclick = function () {

    //merangkai element yang berisi hasil perhitungan
    const kolomHasil = document.createElement('div');
    kolomHasil.setAttribute('class', 'result');
    const op = document.querySelector('select#op').value;

    //menentukan operasi yang akan dilakukan
    let hasil;
    if (op == '+') {
        hasil = document.createTextNode(kalkulator.opTambah());
    } else if (op == '-') {
        hasil = document.createTextNode(kalkulator.opKurang());
    } else if (op == '*') {
        hasil = document.createTextNode(kalkulator.opKali());
    } else if (op == '/') {
        hasil = document.createTextNode(kalkulator.opBagi());
    } else if (op == '%') {
        hasil = document.createTextNode(kalkulator.opModulus());
    }
    kolomHasil.appendChild(hasil);

    //menghapus hasil perhitungan sebelumnya jika ada
    if (tSD.nextElementSibling.localName == 'div') {
        tSD.nextElementSibling.remove();
    }

    //menampilkan hasil
    tSD.after(kolomHasil);


}