function modify(){
    for (var i=document.links.length; i-->0;) {
        if (document.links[i].href.indexOf('away.php') > -1) {
            var href = document.links[i].href;

            var new_href = href;
            new_href = new_href.replace(/http:\/\/vk.com\/away.php\?to=/g, '');
            new_href = new_href.replace(/\&post=-.*/g, '');
            new_href = decodeURIComponent(new_href);

            document.links[i].href = new_href;
        }
    }
}

// Launch modify at page load
window.addEventListener('load', modify());

// Lauch after every page change
document.addEventListener("DOMSubtreeModified", function(e) {
    modify();
}, false);
