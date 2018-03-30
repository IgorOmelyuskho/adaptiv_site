window.onload = function(e) {
    document.getElementById('tab-control-wrapper').onclick = function(e) {
        if (e.target.tagName !== 'A') {
            return;
        }
        var allA = document.querySelectorAll('#tab-control-wrapper li a');
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.borderBottom = '';
            allA[i].style.color = '';
        }
        e.target.style.borderBottom = '3px solid black';
        e.target.style.color = 'black';
    }

        document.getElementById('main-menu-reveal').onclick = function(e) {
            var menu = document.querySelector('header .main-menu');
            var style = window.getComputedStyle(menu);
            if (style.display == 'none'){
                menu.style.display = 'flex';
            } else{
                menu.style.display = 'none';
            }
            
    }
}