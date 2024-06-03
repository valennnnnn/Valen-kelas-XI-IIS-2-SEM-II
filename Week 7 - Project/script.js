function hitungHasil(){
    let beratbadan = document.getElementById("beratbadan").value;
    let tinggibadan = document.getElementById("tinggibadan").value;

    let meter = tinggibadan/100;
    let hasil = beratbadan/(meter*meter);
    document.getElementById("hasil").innerHTML=hasil;

    if (hasil<=18.5) {
        document.getElementById("keterangan").innerHTML = "Kurus";
} else if (hasil <= 25) {
        document.getElementById("keterangan").innerHTML = "Normal";
} else if (hasil <= 27) {
        document.getElementById("keterangan").innerHTML = "Gemuk";
} else{
        document.getElementById("keterangan").innerHTML = "Obesitas";
}

}