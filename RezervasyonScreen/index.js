

function sonIdGetir() {
    if (rezervasyonListesi.length === 0) return 1;

    const sonRezervasyon = rezervasyonListesi[rezervasyonListesi.length - 1];
    return sonRezervasyon.id + 1;
};

function rezervasyonKaydet(e) {
    e.preventDefault();
    const form = e.target;

    
    const id = data ? data.id : sonIdGetir();

    const ad = form.ad.value;
    const soyad = form.soyad.value;
    const email = form.email.value;
    const restoran = form.sube.value;
    const tarihSaat = form.tarihSaat.value;
    const not = form.not.value;
    
    const yeniRezervasyon = new Rezervasyon(id, ad, soyad, email, restoran, tarihSaat, not);

    const index = rezervasyonListesi.findIndex(r => r.id === id);
    if (index !== -1) {
        rezervasyonListesi[index] = yeniRezervasyon;
        toastGoster(false, "Rezervasyonunuz güncellendi, ana sayfaya yönlendiriliyorsunuz.");
    } else {
        rezervasyonListesi.push(yeniRezervasyon);
        toastGoster(false, "Rezervasyonunuz eklendi, ana sayfaya yönlendiriliyorsunuz.");
    }

    setTimeout(() => {
        anaSayfaYukle()
    }, 2500);
};

    console.log(data);


if (data != null) {
    document.querySelector('input[name="ad"]').value = data.ad;
    document.querySelector('input[name="soyad"]').value = data.soyad;
    document.querySelector('input[name="email"]').value = data.email;
    document.querySelector('select[name="sube"]').value = data.restoran.toLocaleLowerCase('tr-TR');
    document.querySelector('input[name="tarihSaat"]').value = data.tarihSaat;
    document.querySelector('textarea[name="not"]').value = data.not;
}

