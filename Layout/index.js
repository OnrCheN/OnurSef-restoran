var data;

class Rezervasyon {
    constructor(id, ad, soyad, email, restoran, tarihSaat, not) {
        this.id = id;
        this.ad = ad;
        this.soyad = soyad;
        this.email = email;
        this.restoran = restoran;
        this.tarihSaat = tarihSaat;
        this.not = not;
    }
}

const rezervasyonListesi = [
  new Rezervasyon(
    1,
    "Onur",
    "Can",
    "onur@example.com",
    "İstanbul",
    "2025-07-01T20:30",
    "Pencere kenarı"
  ),
  new Rezervasyon(
    2,
    "Ayşe",
    "Yılmaz",
    "ayse@example.com",
    "İzmir",
    "2025-07-01T20:30",
    ""
  )
];


toastGoster = (hatami, aciklama) => {
    if (hatami == undefined || aciklama == undefined) {
        return null;
    }
    const toastHtml = document.getElementById("ariToast");

    toastHtml.innerHTML =
        `
                <div class="toast-header">
                    <strong class="me-auto">${hatami ? "Dikkat" : "Başarılı"}</strong>
                    <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast"
                        aria-label="Kapat"></button>
                </div>
                <div class="toast-body">
                    ${aciklama}
                </div>
    `
    const toast = new bootstrap.Toast(toastHtml);

    toast.show();
}

const anaSayfaYukle = () => {
    sayfaYukle("../HomeScreen/index.html", "root", "../HomeScreen/index.js")
} 

sayfaYukle = async (url, id="root", scriptUrl = null, param = null) => {
    if (url == undefined) {
        toastGoster(true, "Url bulunamadı");
        return;
    }

    const URL = url;
    data = param;

    await fetch(URL)
    .then(res => res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data

        if (scriptUrl) {
            const script = document.createElement("script");
            script.src = scriptUrl;
            document.body.appendChild(script);
        }
        
    }).catch(err => {
        toastGoster(true, "Sayfa yuklenemedi")
    })
};


anaSayfaYukle();