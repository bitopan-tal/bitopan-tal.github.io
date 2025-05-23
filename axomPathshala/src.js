document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('video1').addEventListener('click', function () {
        // alert("Hello, world!");
        var videoId = '8qRGg4L3D6toHnTN&amp;list=PLVLoWQFkZbhU9-R4Ln3nJ5WhKIe5tmgye'; // Replace with your actual video ID
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/videoseries?si=' + videoId);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        // iframe.style.aspect-ratio= '16/9';
        iframe.style.height = '100%';

        var container = document.getElementById('player');
        container.innerHTML = '';
        container.appendChild(iframe);
    });
    // el.addEventListener('click', swapper, false);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('video1').addEventListener('click', function () {
        // alert("Hello, world!");
        var videoId = '7AgEjgUtho4'; // Replace with your actual video ID
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&rel=0');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '100%';

        var container = document.getElementById('video-container');
        container.innerHTML = '';
        container.appendChild(iframe);
    });
    // el.addEventListener('click', swapper, false);
});