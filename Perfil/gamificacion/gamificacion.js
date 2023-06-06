function increaseProgress(increaseAmount) {
    let progressBar = document.getElementById("progress-bar");
    let currentWidth = parseFloat(progressBar.style.width);
    let newWidth = currentWidth + increaseAmount;
    let coinImage = document.getElementById("coin-image");

    if (newWidth > 100) {
        newWidth = 100;
    }

    if (newWidth >= 90) {
        coinImage.src = "img/platino.png";
    } else if (newWidth >= 70) {
        coinImage.src = "img/oro.png";
    }  else if (newWidth >= 50) {
        coinImage.src = "img/plata.png";
    }  else if (newWidth >= 30) {
        coinImage.src = "img/bronce.png";
    } 

    progressBar.style.width = newWidth + "%";
}
