// eslint-disable-next-line no-unused-vars
function handleKeyDown(event) {
	switch (event.key) {
		case "Enter":
			return true
		case " ":
			event.preventDefault()
			return true
		default:
			return false
	}
}
/**
 *
 * @param {keydownEvent} event
 */
// eslint-disable-next-line no-unused-vars
function openlink(event) {
	if (event.key === " ") {
		event.preventDefault()
		window.open(event.currentTarget.href, "_self")
	}
}
