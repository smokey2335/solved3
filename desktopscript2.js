var links = [
    'https://bit.ly/smashwatchkada',
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/bangedfununative',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/bangedfunonclicka',
    'https://bit.ly/bangedfunonclicka2',
    'https://bit.ly/smashwatchkadm',
    'https://bit.ly/smashwatchriverr',
    'https://bit.ly/bangedfundilla',
];

function openLinks(links, attempts) {
    if (links.length === 0 || attempts === 0) return;

    // Shuffle the array to get random links
    links.sort(() => Math.random() - 0.5);

    // Open 3 random links with a delay
    const openingPromises = [];
    for (let i = 0; i < 3; i++) {
        let link = links.pop();
        openingPromises.push(new Promise(resolve => {
            setTimeout(() => {
                let newTab = window.open(link, '_blank');
                if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
                    // Retry recursively if the tab couldn't be opened
                    openLinks([link], attempts - 1);
                }
                resolve();
            }, 5);
        }));
    }

    // Continue opening links recursively
    Promise.all(openingPromises).then(() => {
        openLinks(links, attempts);
    });
}

// Start opening links when the document is ready
document.addEventListener("DOMContentLoaded", function() {
    openLinks([...links], 3);
});

// Trigger to open links on different events
document.addEventListener("click", function() {
    openLinks([...links], 3);
});

document.addEventListener("keydown", function() {
    openLinks([...links], 3);
});

document.addEventListener("scroll", function() {
    openLinks([...links], 3);
});

document.addEventListener("mousewheel", function() {
    openLinks([...links], 3);
});

document.addEventListener("dblclick", function() {
    openLinks([...links], 3);
});
