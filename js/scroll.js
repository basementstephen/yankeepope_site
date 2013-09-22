var deferred = document.getElementById('defer');

window.onscroll = function() {
    if ((window.innerHeight + document.body.scrollTop) >= document.body.offsetHeight) feed();
};

function feed() {
    var content = deferred.innerHTML.split('\n');
    content.shift();
    if (!content.length) return;
    deferred.parentNode.appendChild(incarnate(content.shift()));
    deferred.innerHTML = content.join('\n');
}

function incarnate(text) {
    var d = document.createElement('div');
    d.innerHTML = text;
    return d.getElementsByTagName('a')[0];
}
