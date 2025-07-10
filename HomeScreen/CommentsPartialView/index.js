const yorumlariGetir = async () => {
    let yorumListesi;
    let yorumlar = "";
    await fetch('https://dummyjson.com/comments')
    .then(res => res.json())
    .then(x => yorumListesi = x.comments );
    
    yorumListesi.map(x=> {
        yorumlar +=
        `
            <div class="row">            
                <div class="col">
                    <div class="text-truncate"><strong>${x.user.fullName}</strong> ${x.body}</div>
                    <div class="text-secondary">${x.likes} Like</div>
                </div>
                ${
                    x.id < 4 ? `<div class="col-auto align-self-center">
                                    <div class="badge bg-primary"></div>
                                </div>` : ""

                }

            </div>
        `
    })
    
    const yorumRoot = document.getElementById("indexYorumlar");
    yorumRoot.innerHTML = yorumlar;
}

setTimeout(() => {
    yorumlariGetir();
}, 3000);