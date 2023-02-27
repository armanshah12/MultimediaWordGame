const content = document.querySelector("#content");
const music = document.querySelector("#background-music");

// Update the content of the page based on the URL
function navigateTo(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      content.innerHTML = html;
      // Play the music if it's not already playing
      if (music.paused) {
        music.play();
      }
    });
}

// Navigate to the initial URL
navigateTo(window.location.href);

// Update the content of the page when the user clicks on a link
document.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (link && link.href.startsWith(window.location.origin)) {
    event.preventDefault();
    navigateTo(link.href);
    window.history.pushState({}, "", link.href);
  }
});

// Stop the music when the user navigates away from the page
window.addEventListener("beforeunload", () => {
  music.pause();
});
