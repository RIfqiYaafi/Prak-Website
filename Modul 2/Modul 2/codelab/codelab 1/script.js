function hitung() {
    const bil1 = parseFloat(document.getElementById("bil1").value);
    const bil2 = parseFloat(document.getElementById("bil2").value);
    const hasil = bil1 + bil2;

    document.getElementById("hasil").innerText = hasil;
}

function resetForm() {
    document.getElementById("bil1").value = '';
    document.getElementById("bil2").value = '';
    document.getElementById("hasil").innerText = 0;
}
