window.onorientationchange = function()
{
   window.location.reload();
}

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
