<?php
include "koneksi.php";
$data = $koneksi->query("
    SELECT p.id, b.nama AS nama_barang, p.jumlah, p.total, p.tanggal
    FROM penjualan p
    JOIN barang b ON p.id_barang = b.id
    ORDER BY p.tanggal DESC
");
$result = [];
while ($row = $data->fetch_assoc()) {
    $result[] = $row;
}
echo json_encode($result);
?>
