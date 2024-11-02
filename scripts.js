// Parkour dictionary
const parkourDictionary = {
    ' ': "[]____[]__[]___",
    'a': "L____M___[]",
    'b': "[M]__[]__L",
    'c': "__[]____[]",
    'd': "[]___[]___",
    'e': "[[]]__L___",
    'f': "L___[]__M",
    'g': "[M]___M",
    'h': "[]____L",
    'i': "___[]___",
    'j': "__L___[]",
    'k': "[[]]__[]",
    'l': "L____L",
    'm': "___M___L",
    'n': "__[]__M",
    'o': "[M]___[]",
    'p': "[]__L___M",
    'q': "L___[[]]",
    'r': "__M____[]",
    's': "[]___[]",
    't': "[L]___L",
    'u': "__[]___[]",
    'v': "[M]__[]",
    'w': "L__M__[]",
    'x': "[]___L",
    'y': "[[]]___",
    'z': "___L__[]"
};

// Reverse dictionary for decoding
const reverseParkourDictionary = Object.fromEntries(Object.entries(parkourDictionary).map(([k, v]) => [v, k]));

// Translation functions
function toParkourLanguage(text) {
    return text.split("").map(char => parkourDictionary[char.toLowerCase()] || char).join(" ");
}

function fromParkourLanguage(parkourText) {
    return parkourText.split(" ").map(symbol => reverseParkourDictionary[symbol] || symbol).join("");
}

// Tab display
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Translator functions
function translateToParkour() {
    const englishInput = document.getElementById("englishInput").value.toLowerCase();
    document.getElementById("parkourInput").value = toParkourLanguage(englishInput);
}

function translateToEnglish() {
    const parkourInput = document.getElementById("parkourInput").value;
    document.getElementById("englishInput").value = fromParkourLanguage(parkourInput);
}

function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// Display the Parkour alphabet
function displayParkourAlphabet() {
    const alphabetContainer = document.getElementById("parkourAlphabet");
    alphabetContainer.innerHTML = Object.entries(parkourDictionary)
        .map(([char, symbol]) => `<div class="alphabet-item"><strong>${char}</strong>: ${symbol}</div>`)
        .join("");
}

// Initialize the alphabet display on page load
window.onload = displayParkourAlphabet;
