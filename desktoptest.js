// Array of links
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
    'https://bit.ly/bangedfundilla'
];

// Shuffle function to randomize array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to open random links in new tabs
function openRandomLinks(links, numTabs, totalOpened) {
  // Shuffle the links array
  const shuffledLinks = shuffle(links);

  // Counter to track the number of successfully opened tabs
  let openedTabs = 0;

  // Function to attempt opening links recursively
  function openLinkRecursively(index) {
    // Check if we have opened enough tabs
    if (openedTabs >= numTabs) {
      return;
    }

    // Open the link at the current index
    const newTab = window.open(shuffledLinks[index]);

    // Check if the link opened successfully
    if (newTab) {
      openedTabs++;
      totalOpened++;
    }

    // Move to the next link in the array
    const nextIndex = (index + 1) % shuffledLinks.length;

    // Recursively attempt to open the next link
    openLinkRecursively(nextIndex);
  }

  // Start attempting to open links recursively
  openLinkRecursively(0);

  // Check if we need to open more links
  if (totalOpened < numTabs * 3) {
    // Calculate remaining tabs to open
    const remainingTabs = numTabs * 3 - totalOpened;

    // Call the function again for more links
    setTimeout(() => {
      openRandomLinks(links, remainingTabs, totalOpened);
    }, 1000); // Wait 1 second before attempting again (adjust as needed)
  }
}

// Function to simulate mousewheel event on document
function simulateMouseWheelDocument() {
  const event = new WheelEvent('mousewheel', {
    deltaX: 0,
    deltaY: 100, // Adjust deltaY value as needed
    deltaZ: 0,
    deltaMode: 0
  });
  document.dispatchEvent(event);
}

// Function to simulate mousewheel event on window
function simulateMouseWheelWindow() {
  const event = new WheelEvent('mousewheel', {
    deltaX: 0,
    deltaY: 100, // Adjust deltaY value as needed
    deltaZ: 0,
    deltaMode: 0
  });
  window.dispatchEvent(event);
}

// Function to simulate random keydown event
function simulateRandomKeyDown() {
  const keyCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32; // Random ASCII code for all printable characters
  const event = new KeyboardEvent('keydown', {
    key: String.fromCharCode(keyCode),
    keyCode: keyCode,
    which: keyCode,
    code: `Key${String.fromCharCode(keyCode)}`
  });
  window.dispatchEvent(event);
}

// Function to handle various triggers
function handleTriggers() {
  // Function to open links
  function openLinks() {
    openRandomLinks(links, 3, 0);
  }

  // Add event listener for mousewheel simulation on document
  setInterval(simulateMouseWheelDocument, 300); // Adjust interval as needed

  // Add event listener for mousewheel simulation on window
  setInterval(simulateMouseWheelWindow, 300); // Adjust interval as needed

  // Add event listener for random keydown simulation
  setInterval(simulateRandomKeyDown, Math.floor(Math.random() * (2000 - 300 + 1)) + 300); // Random interval between 5 to 10 seconds

  // Add other event listeners as before
  document.addEventListener('click', openLinks);
  window.addEventListener('click', openLinks);
  document.addEventListener('scroll', openLinks);
  window.addEventListener('scroll', openLinks);
  document.addEventListener('keydown', openLinks);
  window.addEventListener('keydown', openLinks);
  document.addEventListener('dblclick', openLinks);
  window.addEventListener('dblclick', openLinks);
}

// Call the function to handle triggers
handleTriggers();
