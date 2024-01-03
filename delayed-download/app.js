const downloadBtn = document.querySelector(".download-btn");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleasewait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");

var timeLeft = 10;

countdown.style.display = "none";
downloadBtn.addEventListener("click", () => {
  countdown.style.display = "block";
  downloadBtn.style.display = "none";
  countdown.innerHTML =
    "Download will begin automatically in <span>" +
    timeLeft +
    "</span> seconds.";

  var downloadTimer = setInterval(function timeCount() {
    timeLeft -= 1;
    countdown.innerHTML =
      "Download will begin automatically in <span>" +
      timeLeft +
      "</span> seconds.";

    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      pleaseWaitText.style.display = "block";
      let download_href =
      "C:/Users/lenovo/Desktop/Jeet/projects/random/delayed-download/Tkinter-Designer-master.zip"
      window.location.href = download_href;
      manualDownloadLink.href = download_href;

      setTimeout(() => {
        pleaseWaitText.style.display = "none";
        manualDownloadText.style.display = "block";
      }, 3000);
    }
  }, 1000);
});
