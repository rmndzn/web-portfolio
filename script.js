const typingText = document.querySelector('.typing-text');

// Words to display in the typing effect
const words = ["Web Developer", "Web Designer", "Pokemon Trainer", "Gamer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

// Typing effect function
function type() {
    const currentWord = words[wordIndex];
    let displayedText = currentWord.slice(0, letterIndex);

    // Update the text content
    typingText.textContent = displayedText;

    if (!isDeleting) {
        // Typing letters
        letterIndex++;
    } else {
        // Deleting letters
        letterIndex--;
    }

    // Adjust speed and switch to deleting or next word
    if (!isDeleting && letterIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000); // Wait before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }

    // Adjust typing speed
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}

// Start the typing effect
type();
