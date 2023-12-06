window.addEventListener("load", function() {
    var iframe = document.getElementById("your-iframe-id");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
});
