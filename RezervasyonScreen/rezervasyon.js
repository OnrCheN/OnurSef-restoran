function rezervasyonListele() {
    const tbody = document.getElementById("rezervasyonTabloBody");
    
    tbody.innerHTML = "";
    
    rezervasyonListesi.forEach((r, i) => {
      tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${r.ad}</td>
          <td>${r.soyad}</td>
          <td>${r.email}</td>
          <td>${r.restoran}</td>
          <td>${r.not || ""}</td>
          <td>
            <button class="btn btn btn-warning me-2" onclick="rezervasyonDuzenle(${r.id})">Düzenle</button>
            <button class="btn btn btn-danger" onclick="rezervasyonIptal(${r.id})">İptal Et</button>
          </td>
        </tr>
      `;
    });
}

function rezervasyonDuzenle(id) {
    const rezervasyon = rezervasyonListesi.find(r => r.id === id);
    
    sayfaYukle('../RezervasyonScreen/index.html', 'root', '../RezervasyonScreen/index.js',rezervasyon )
}

function rezervasyonIptal(id) {
    const rezervasyon = rezervasyonListesi.find(r => r.id === id);

    if (rezervasyon) {
        const index = rezervasyonListesi.indexOf(rezervasyon);
        rezervasyonListesi.splice(index, 1);
        toastGoster(false, "Rezervasyon silindi");
        rezervasyonListele();
    }
}

rezervasyonListele()