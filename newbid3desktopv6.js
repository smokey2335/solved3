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

    // Select three random links
    var selectedLinks = shuffleArray(links).slice(0, 3);

    // Recursive function to try opening links until success
    function tryOpenLink(index) {
        if (index >= selectedLinks.length) {
            // All links tried, exit recursion
            return;
        }

        var link = selectedLinks[index];
        var newTab = window.open(link, '_blank');

        // Check if the new tab is null or blocked by a popup blocker
        if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
            // Retry opening the link after a delay
            setTimeout(function() {
                tryOpenLink(index + 1);
            }, 1000); // Adjust delay as needed
        }
    }

    // Start trying to open links recursively
    tryOpenLink(0);
}

// Open links on page load
window.addEventListener('load', openRandomLinks);

// Open links on script load
openRandomLinks();

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

// Open links on click
window.addEventListener('click', openRandomLinks);

// Open links on mousewheel
window.addEventListener('mousewheel', openRandomLinks);

// Open links on scroll
window.addEventListener('scroll', openRandomLinks);
