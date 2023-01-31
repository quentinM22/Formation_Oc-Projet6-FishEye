// Gestion Like
// eslint-disable-next-line no-unused-vars
function like(event) {
	const target = event.currentTarget
	const targetHeart = target.querySelector("#targetHeart")
	let newLike = parseInt(target.textContent)
	if (!target.checked) {
		//Incrementation
		target.checked = true
		targetHeart.className = " fa-solid fa-heart fs3 primary anim_heart"
		newLike++
		target.querySelector("#btn_like").textContent = newLike
	} else {
		//Décrementation
		target.checked = false
		targetHeart.className = " fa-regular fa-heart fs3 primary anim_heart"
		newLike--
		target.querySelector("#btn_like").textContent = newLike
	}
	updateTotalLikes()
}
async function updateTotalLikes() {
	const likes = document.querySelectorAll("#btn_like")
	const totalLikesNumber = document.querySelector(".allLikes")

	let totalLikes = 0
	likes.forEach((like) => (totalLikes += parseInt(like.textContent)))

	totalLikesNumber.textContent = totalLikes + " "
}
