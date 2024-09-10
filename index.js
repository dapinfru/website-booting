async function start() {
    const data = await fetch('./data.json').then(ress => ress.json())
    let text = "";
data.forEach(j => {
    text += `
<table>
        <!-- membuat tabel -->
        <caption>BIODATA ANGKATAN 2024</caption>
        <!-- Alasan saya menempatkan caption di dalam tabel agar teks "BIODATA DIRI" otomatis pindah ke tengah / sesuai dengan tabel -->
        <tr>
            <td colspan="2" style="text-align: center;">
                <!-- Untuk menengahkan Foto -->
                <img src="${j.fotoselfie}" alt="Foto Profil"> <!-- Gambar di baris pertama -->
            </td>
        </tr>
        <tr>
            <!-- Fungsi tag tr adalah mendefinisikan baris dalam tabel 
             Penggunaan nya setiap baris dalam tabel diwakili oleh tag <tr>-->
            
            <th>Nama</th>
            <!-- Fungsi tag <th> adalah mendefinisikan sel header.
                Penggunaan tag ini digunakan pada tag <tr> sebagai penanda sel header tabel -->
            <td>${j.nama}</td>
            <!-- Fungsi tag <td> adalah  Mendifinisikan sel data yang berisi informasi
                Penggunaan nya digunakan di dalam tag <tr> untuk menampilkan data di dalam tabel -->
        </tr>
        <tr>
            <th>Kelompok</th>
            <td>${j.kelompok}</td>
        </tr>
        <tr>
            <th>Tanggal Lahir</th>
            <td>${j.ttl}</td>
        </tr>
        <tr>
            <th>Alamat</th>
            <td>${j.alamat}</td>
        </tr>
        <tr>
            <th>No Telpon</th>
            <td>${j.no}</td>
        </tr>
        <tr>
            <th>Nim</th>
            <td>${j.nim}</td>
        </tr>
    </table>
    `
});

return document.getElementById("card").innerHTML = text;
}

start()