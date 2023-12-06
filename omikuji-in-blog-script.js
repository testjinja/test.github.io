window.addEventListener("load", function() {
    var iframe = document.getElementById("your-iframe-id");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
});

document.getElementById('omikuji1-btn').addEventListener('click', function() {
    document.getElementById('omikuji1-content').style.display = 'block';
    document.getElementById('omikuji2-content').style.display = 'none';
});

document.getElementById('omikuji2-btn').addEventListener('click', function() {
    document.getElementById('omikuji1-content').style.display = 'none';
    document.getElementById('omikuji2-content').style.display = 'block';
});
