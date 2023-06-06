document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('card_icon');
    const countLikes = document.getElementById('count-likes');
    let iconChange = false;

    if (localStorage.getItem('count-likes')) {
        countLikes.textContent = localStorage.getItem('count-likes');
    }

    icon.addEventListener('click', function () {

        if (iconChange) {
            icon.className = 'bi bi-heart red';
            let number = parseInt(countLikes.textContent);
            number -= 1;
            countLikes.textContent = number;
            localStorage.setItem('count-likes', number);
            iconChange = false;
        } else {
            icon.className = 'bi bi-heart-fill red';
            let number = parseInt(countLikes.textContent);
            number += 1;
            countLikes.textContent = number;
            localStorage.setItem('count-likes', number);
            iconChange = true;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const iconMb = document.getElementById('card_icon_mb');
    const countLikesMb = document.getElementById('count-likes_mb');
    let iconMbChange = false;

    if (localStorage.getItem('count-likes_mb')) {
        countLikesMb.textContent = localStorage.getItem('count-likes_mb');
    }

    iconMb.addEventListener('click', function () {

        if (iconMbChange) {
            iconMb.className = 'bi bi-heart red';
            let number = parseInt(countLikesMb.textContent);
            number -= 1;
            countLikesMb.textContent = number;
            localStorage.setItem('count-likes_mb', number);
            iconMbChange = false;
        } else {
            iconMb.className = 'bi bi-heart-fill red';
            let number = parseInt(countLikesMb.textContent);
            number += 1;
            countLikesMb.textContent = number;
            localStorage.setItem('count-likes_mb', number);
            iconMbChange = true;
        }
    });
});