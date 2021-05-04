/*

888b     d888                                     888                               d8b          
8888b   d8888                                     888                               Y8P          
88888b.d88888                                     888                                            
888Y88888P888  8888b.   .d88b.  88888b.   .d88b.  888888  .d88b.   .d8888b  .d88b.  888 88888b.  
888 Y888P 888     "88b d88P"88b 888 "88b d8P  Y8b 888    d88""88b d88P"    d88""88b 888 888 "88b 
888  Y8P  888 .d888888 888  888 888  888 88888888 888    888  888 888      888  888 888 888  888 
888   "   888 888  888 Y88b 888 888  888 Y8b.     Y88b.  Y88..88P Y88b.    Y88..88P 888 888  888 
888       888 "Y888888  "Y88888 888  888  "Y8888   "Y888  "Y88P"   "Y8888P  "Y88P"  888 888  888 
                            888                                                                  
                       Y8b d88P                                                                  
                        "Y88P"                                                                   

Project powered, maintained and developed by Coinbaazar.com 
Website Author: Cheezcharmer 2021. 
Logo by Vladimir Mekhovich .

*/

const initBg = (autoplay = true) => {
    const bgImgsNames = ['diagoona-bg-1.jpg', ];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, { duration: 4000, fade: 500 });

    if (!autoplay) {
        $.backstretch('pause');
    }
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if (windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
            .css('border-top', `${bgHeight}px solid transparent`);
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
            .css('border-top', `0`);
    }
}

$(document).ready(function() {
    const autoplayBg = false; // set Auto Play for Background Images
    initBg(autoplayBg);
    setBgOverlay();

    const bgControl = $('.tm-bg-control');
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');
        setBg(id);
    });

    $(window).on("backstretch.after", function(e, instance, index) {
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});