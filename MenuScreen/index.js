async function menuGetir() {
    let menuListesi;
    let menuCard = "";

    await fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(x => menuListesi = x.recipes);

    menuListesi.forEach(item => {
        menuCard += `
        <div class="card mb-4 shadow-sm">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.image}" class="w-100 h-100 object-cover rounded-start" alt="${item.name}">
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">${item.name}</h3>
                        <p class="text-muted mb-2">${item.cuisine} mutfağı • ${item.mealType?.join(', ')}</p>

                        <div class="mb-2">
                            <span class="badge bg-azure text-white">${item.servings} kişilik</span>
                            <span class="badge bg-indigo text-white">${item.caloriesPerServing} kalori</span>
                            <span class="badge bg-purple text-white">${item.cookTimeMinutes} dk</span>
                            <span class="badge bg-green text-white">${item.difficulty}</span>
                        </div>

                        <div class="mb-2">
                            <span class="text-yellow">${item.rating} / 5</span>
                            <small class="text-muted">(${item.reviewCount} yorum)</small>
                        </div>

                        <p class="text-secondary mt-2">
                            İçindekiler: ${item.ingredients.slice(0, 3).join(", ")}...
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
    });

    const root = document.getElementById("menuRoot");
    root.innerHTML = menuCard;
}
menuGetir();