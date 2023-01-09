function handleKeyDown(event) {
    switch (event.key) {
        case "Enter":
            return true;

        case " ":
            event.preventDefault();
            return true;

        default:
            return false;

    }
}

function openlink(event) {
    if (event.key === " ") {
        event.preventDefault();
        window.open(event.currentTarget.href, '_self');
    }
}