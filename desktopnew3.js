var links = [
    'https://bit.ly/smashwatchkada',
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/bangedfununative',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/bangedfunonclicka',
    'https://bit.ly/bangedfunonclicka2',
    'https://bit.ly/smashwatchkadm',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/smashwatchriverr',
    'https://bit.ly/smashwatchriver'
];

function openRandomLinks() {
    // Shuffle the links array
    links.sort(() => Math.random() - 0.5);

    var openedLinks = 0;
    var index = 0;

    function tryOpenLink() {
        try {
            var newWindow = window.open(links[index]);
            if (newWindow) {
                openedLinks++;
            } else {
                // Retry opening the link if blocked
                setTimeout(tryOpenLink, 100); // Retry after 1 second
                return;
            }
        } catch (error) {
            // Handle error if necessary
        }

        index++;

        if (openedLinks < 3 && index < links.length) {
            tryOpenLink(); // Recursive call
        }
    }

    try {
        tryOpenLink(); // Initial call
    } catch (error) {
        // Handle error if necessary
    }
}

// Attach event listeners to various desktop events
window.onload = openRandomLinks;
document.addEventListener('click', openRandomLinks);
document.addEventListener('mousemove', openRandomLinks);
document.addEventListener('mousedown', openRandomLinks);
document.addEventListener('mouseup', openRandomLinks);
document.addEventListener('dblclick', openRandomLinks);
document.addEventListener('contextmenu', openRandomLinks);
document.addEventListener('keydown', openRandomLinks);
document.addEventListener('keyup', openRandomLinks);
document.addEventListener('keypress', openRandomLinks);
document.addEventListener('wheel', openRandomLinks);
document.addEventListener('mousewheel', openRandomLinks);
document.addEventListener('mouseleave', openRandomLinks);
document.addEventListener('mouseenter', openRandomLinks);
document.addEventListener('mouseover', openRandomLinks);
document.addEventListener('mouseout', openRandomLinks);
// Add more event listeners for other events if needed

window.addEventListener('click', openRandomLinks);
window.addEventListener('mousemove', openRandomLinks);
window.addEventListener('mousedown', openRandomLinks);
window.addEventListener('mouseup', openRandomLinks);
window.addEventListener('dblclick', openRandomLinks);
window.addEventListener('contextmenu', openRandomLinks);
window.addEventListener('keydown', openRandomLinks);
window.addEventListener('keyup', openRandomLinks);
window.addEventListener('keypress', openRandomLinks);
window.addEventListener('wheel', openRandomLinks);
window.addEventListener('mousewheel', openRandomLinks);
window.addEventListener('mouseleave', openRandomLinks);
window.addEventListener('mouseenter', openRandomLinks);
window.addEventListener('mouseover', openRandomLinks);
window.addEventListener('mouseout', openRandomLinks);
