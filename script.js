function tambahBarang() {
    const nama = document.getElementById('nama').value;
    const stok = document.getElementById('stok').value;
    const harga = document.getElementById('harga').value;

    fetch('api/tambah_barang.php', {
        method: 'POST',
        body: new URLSearchParams({ nama, stok, harga })
    }).then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
            alert("Barang berhasil ditambahkan!");
            muatBarang();
        }
    });
}

function muatBarang() {
    fetch('api/get_barang.php')
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('#tabel-barang tbody');
            tbody.innerHTML = '';
            data.forEach(barang => {
                tbody.innerHTML += `
                    <tr>
                        <td>${barang.nama}</td>
                        <td>${barang.stok}</td>
                        <td>${barang.harga}</td>
                        <td>
                            <button onclick="jual(${barang.id}, '${barang.nama}')">Jual</button>
                        </td>
                    </tr>`;
            });
        });
}

function jual(id, nama) {
    const jumlah = prompt(`Masukkan jumlah penjualan untuk "${nama}":`);
    if (jumlah !== null) {
        fetch('api/tambah_jual.php', {
            method: 'POST',
            body: new URLSearchParams({ id_barang: id, jumlah })
        }).then(res => res.json())
          .then(data => {
            if (data.status === 'success') {
                alert("Penjualan berhasil!");
                muatBarang();
                muatPenjualan();
            } else {
                alert(data.message);
            }
        });
    }
}

function muatPenjualan() {
    fetch('api/get_penjualan.php')
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('#tabel-penjualan tbody');
            tbody.innerHTML = '';
            data.forEach(p => {
                tbody.innerHTML += `
                    <tr>
                        <td>${p.nama_barang}</td>
                        <td>${p.jumlah}</td>
                        <td>${p.total}</td>
                        <td>${p.tanggal}</td>
                    </tr>`;
            });
        });
}

window.onload = () => {
    muatBarang();
    muatPenjualan();
}
