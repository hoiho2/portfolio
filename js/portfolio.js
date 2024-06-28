$(document).ready(function() {
    $('#portfolio .mnu li a').on('click', function(e) {
        e.preventDefault();

        // Remove 'on' class from all menu items and add to the clicked one
        $('#portfolio .mnu li').removeClass('on');
        $(this).parent().addClass('on');

        // Hide all views and show the corresponding one
        $('#portfolio .view li').hide();
        var index = $(this).parent().index();
        $('#portfolio .view li').eq(index).show();
    });

    // Popup gallery functionality
    $('.viewOpen').on('click', function(e) {
        var href = $(this).attr('href');
        
        // Check if the link is a PDF file
        if (href.endsWith('.pdf')) {
            return; // Allow default action for PDF links
        }
        
        e.preventDefault();
        
        $('#portfolio .portfolio_bg .portfolio_img').css('background-image', 'url(' + href + ')');
        $('#portfolio .portfolio_bg').fadeIn();
    });

    // Close popup
    $('#portfolio .portfolio_bg').on('click', function() {
        $(this).fadeOut();
    });
});

$(document).ready(function() {
    // 초기 이미지와 GIF 경로 설정
    var originalImage1 = $('#view_img1').css('background-image');
    var gifImage1 = 'url("../images/center.gif")';
    var originalImage2 = $('#view_img2').css('background-image');
    var gifImage2 = 'url("../images/fight.gif")';

    // view_img1 클릭 시 토글 처리
    $('#view_img1').on('click', function() {
        if ($(this).hasClass('gifState')) {
            $(this).css('background-image', originalImage1);
            $(this).removeClass('gifState');
        } else {
            $(this).css('background-image', gifImage1);
            $(this).addClass('gifState');
        }
    });

    // view_img2 클릭 시 토글 처리
    $('#view_img2').on('click', function() {
        if ($(this).hasClass('gifState')) {
            $(this).css('background-image', originalImage2);
            $(this).removeClass('gifState');
        } else {
            $(this).css('background-image', gifImage2);
            $(this).addClass('gifState');
        }
    });
});