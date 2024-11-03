fetch("https://api.escuelajs.co/api/v1/categories")
.then(response => response.json())
.then(data => {
    let card = '<div class="row row-cols-4 row-cols-md3 g-4">'

    for(let user of data){
        card += `<div class="col">
        <div class="card">
            <img src="${user.name}" class="card-img" alt="image">
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Nombre de usuario:</strong> ${user.name}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    card+= '</div>'
    document.getElementById("cardList").innerHTML = card
})