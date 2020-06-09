function themeSwitcher() {
    $('.set-theme-default').click(function() {
        $('body').removeClass();
        $('body').addClass('theme-rich-scarlet');
    })
    $('.set-theme-red').click(function() {
        $('body').removeClass();
        $('body').addClass('theme-red');
    })
}

$(document).ready(function() {
    themeSwitcher();
})