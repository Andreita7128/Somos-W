function increaseProgress(increaseAmount) {
    let progressBar = document.getElementById("progress-bar");
    let currentWidth = parseFloat(progressBar.style.width);
    let newWidth = currentWidth + increaseAmount;
    let coinImage = document.getElementById("coin-image");

    if (newWidth > 100) {
        newWidth = 100;
    }

    if (newWidth >= 75) {
        coinImage.src = "img/plata.png";
    } else if (newWidth >= 50) {
        coinImage.src = "img/bronce.png";
    }

    progressBar.style.width = newWidth + "%";
}
