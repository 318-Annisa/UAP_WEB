DaftarBarang = [
  { Kode: "001", Barang: "Barang A", Harga: 10000 },
  { Kode: "002", Barang: "Barang B", Harga: 20000 },
  { Kode: "003", Barang: "Barang C", Harga: 30000 },
];

function DaftarBarang() {
  const tabel = document.querySelector("table tbody");
  baranglist.forEach((barang) => {
    const row = `<tr>
          <td>${barang.Kode}</td>
          <td>${barang.Barang}</td>
          <td>${barang.Harga}</td>
      </tr>`;
    tabel.innerHTML += row;
  });
}

function transaksi() {
  const Kode = document.getElementById("Kode").value;
  const Jumlah = parseInt(document.getElementById("Jumlah").value);

  let Harga = 0;
  const HargaTerpilih = baranglist.find((barang) => barang.Kode === Kode);
  if (HargaTerpilih) {
    Harga = HargaTerpilih.Harga * Jumlah;
  }
  alert(`Total Pembayaran Adalah: ${Harga}`);

  const TotalPembayaran = parseFloat(prompt("Masukkan Uang Pelanggan!"));

  if (TotalPembayaran >= Harga) {
    const Kembalian = TotalPembayaran - Harga;
    alert(`Total Kembalian Anda Adalah: ${Kembalian}`);
  }
}

DaftarBarang();
