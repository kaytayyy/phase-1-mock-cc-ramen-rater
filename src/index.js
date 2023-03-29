const baseUrl = 'http://localhost:3000/'
const ramenUrl = baseUrl + 'ramens/'

function fetchRamen() {
    fetch(ramenUrl)
    .then(response => response.json())
    .then(ramenData => renderAllRamen(ramenData))
}

fetchRamen()

function renderAllRamen(ramenData) {
    ramenData.forEach(ramen => renderRamenImage(ramen))
}


function renderRamenImage(ramen) {
    const ramenMenuDiv = document.getElementById('ramen-menu')
    const ramenImage = document.createElement('img')

    ramenImage.src = ramen.image
    ramenMenuDiv.appendChild(ramenImage)

    ramenImage.addEventListener('click', () => showRamenInfo(ramen))

}

function showRamenInfo(ramen) {
    const ramenDetailDiv = document.getElementById('ramen-detail')

    const ramenDetailImage = document.getElementById('ramen-detail-image')
    ramenDetailImage.src = ramen.image

    const ramenDetailName = document.getElementById('ramen-detail-name')
    ramenDetailName.textContent = ramen.name

    const ramenDetailRestaurant = document.getElementById('ramen-detail-restaurant')
    ramenDetailRestaurant.textContent = ramen.restaurant

    const ramenDetailRating = document.getElementById('rating-display')
    ramenDetailRating.textContent = ramen.rating

    const ramenDetailComment = document.getElementById('comment-display')
    ramenDetailComment.textContent = ramen.comment
}

const newRamenForm = document.getElementById('new-ramen')
newRamenForm.onsubmit = (event) => {
event.preventDefault()
const newRamen = {
    name: newRamenForm['name'].value,
    restaurant: newRamenForm.restaurant.value,
    image: newRamenForm.image.value,
    rating: newRamenForm.rating.value,
    comment: newRamenForm['comment'].value 
}
renderRamenImage(newRamen)
}