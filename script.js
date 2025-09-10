function hitungHarga() {
  let hargaBeli = parseFloat(document.getElementById("hargaBeli").value);
  let jumlahItem = parseInt(document.getElementById("jumlahItem").value);
  let jenisObat = document.getElementById("jenisObat").value;
  let pajak = document.getElementById("pajak").value;

  if (isNaN(hargaBeli) || isNaN(jumlahItem) || jumlahItem <= 0) {
    document.getElementById("output").innerText = "⚠️ Masukkan data yang valid";
    return;
  }

  let faktor = 1;
  if (jenisObat === "keras" && pajak === "belum") faktor = 1.24;
  else if (jenisObat === "keras" && pajak === "sudah") faktor = 1.13;
  else if (jenisObat === "bebas" && pajak === "belum") faktor = 1.22;
  else if (jenisObat === "bebas" && pajak === "sudah") faktor = 1.11;

  let totalHarga = hargaBeli * faktor;
  let hargaPerItem = totalHarga / jumlahItem;
  let hargaFinal = bulatkan500(hargaPerItem);

  document.getElementById("output").innerText = "💰 Harga Jual per Item: Rp " + hargaFinal.toLocaleString("id-ID");
}
