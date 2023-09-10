document.addEventListener('DOMContentLoaded', function () {
    const contentTextarea = document.getElementById('content');
    const addImageBtn = document.getElementById('addImage');
    const addVideoBtn = document.getElementById('addVideo');
    const previewContent = document.getElementById('previewContent');

    addImageBtn.addEventListener('click', function () {
        const imageUrl = prompt('Enter the URL of the image:');
        if (imageUrl) {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            previewContent.appendChild(imageElement);
        }
    });

    addVideoBtn.addEventListener('click', function () {
        const videoUrl = prompt('Enter the URL of the video:');
        if (videoUrl) {
            const videoElement = document.createElement('iframe');
            videoElement.src = videoUrl;
            previewContent.appendChild(videoElement);
        }
    });

    contentTextarea.addEventListener('input', function () {
        const content = contentTextarea.value;
        previewContent.innerHTML = content;
    });
});
