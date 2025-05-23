var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=0.1,maximum-scale=1.0,user-scalable=no');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('video1').addEventListener('click', function () {
        // alert("Hello, world!");
        var videoId = 'ZblKz8uC7vQ9eMIM&amp;list=PLVLoWQFkZbhVWaTIGB27JMv0btP9bbJb2'; // Replace with your actual video ID
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
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('video2').addEventListener('click', function () {
        var videoId = 'ctLFp67mXuhZeox2&amp;list=PLVLoWQFkZbhXpGbcZ83T48qGywkCGyZFu';
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/videoseries?si=' + videoId);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        var container = document.getElementById('player');
        container.innerHTML = '';
        container.appendChild(iframe);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('video3').addEventListener('click', function () {
        var videoId = 'JD1IzoImFDBg0YeA&amp;list=PLVLoWQFkZbhVDVGcU04L9WHo1mv32kmjf';
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/videoseries?si=' + videoId);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        var container = document.getElementById('player');
        container.innerHTML = '';
        container.appendChild(iframe);
    });
});
