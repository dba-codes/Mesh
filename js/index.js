$(document).ready(function() {
    const $theme = localStorage.theme;
    $('body').addClass($theme);
    console.log($theme);
    $('.theme-switcher').find(`li[data-theme='${$theme}']`).addClass('active');

    $('.toggle--theme').click(function() {
        const $theme = $(this).attr('data-theme');
        $('.theme-switcher').find('li').not($(this)).removeClass('active');
        $(this).addClass('active');
        $('body').attr('class', '');
        $('body').addClass($theme);
        localStorage.theme=$theme;
    })
})