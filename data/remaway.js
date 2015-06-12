function remaway() {
    var a = document.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].href.match(/away.php/)) {
            var offset = a[i].href.search("http%3A%2F%2F");
            if (offset == -1) {
                offset = a[i].href.search("https%3A%2F%2F");
            }
            if (a[i].href.search(/&post=/g) == -1) {
                a[i].href = decodeURIComponent(a[i].href.substring(offset));
            } else {
                a[i].href = decodeURIComponent(a[i].href.substring(offset, a[i].href.search(/&post=/g)));
            }
        }
    }
}
window.setInterval(function(){remaway()},500);