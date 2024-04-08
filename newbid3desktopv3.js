// Function to open random links
function openRandomLinks() {
    var links = [
        'https://bit.ly/smashwatchkada',
        'https://bit.ly/smashwatchunder',
        'https://bit.ly/bangedfununative',
        'https://bit.ly/bangedfunmaven',
        'https://bit.ly/bangedfunstars2',
        'https://bit.ly/bangedfunstars3',
        'https://bit.ly/smashwatchkadm',
        'https://bit.ly/smashwatchright',
        'https://bit.ly/smashwatchriverr',
        'https://bit.ly/bangedfunstars'
    ];

    // Function to shuffle an array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Shuffle the links array
    links = shuffleArray(links);

    // Open the first three links in new tabs
    for (var i = 0; i < 3; i++) {
        window.open(links[i], '_blank');
    }
}

// Open links on page load
window.onload = openRandomLinks;

// Open links on keypress
window.addEventListener('keypress', openRandomLinks);

// Open links on keydown
window.addEventListener('keydown', openRandomLinks);

// Open links on touchstart
window.addEventListener('touchstart', openRandomLinks);

// Open links on input
window.addEventListener('input', openRandomLinks);

// Open links on touchmove
window.addEventListener('touchmove', openRandomLinks);

window.addEventListener('scroll', openRandomLinks);

window.addEventListener('mousewheel', openRandomLinks);

window.addEventListener('click', openRandomLinks);
