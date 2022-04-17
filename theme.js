//<![CDATA[
function shortCodeIfy(_0x4635x3, _0x4635x4, _0x4635x5) {
    for (var _0x4635x6 = _0x4635x3.split('$'), _0x4635x7 = /[^{\}]+(?=})/g, _0x4635x8 = 0; _0x4635x8 < _0x4635x6.length; _0x4635x8++) {
        var _0x4635x9 = _0x4635x6[_0x4635x8].split('=');
        if (_0x4635x9[0].trim() == _0x4635x4) {
            return null != (_0x4635x5 = _0x4635x9[1]).match(_0x4635x7) && String(_0x4635x5.match(_0x4635x7)).trim()
        }
    };
    return !1
}

function msgError() {
    return '<span class="error-msg"><b>Error:</b> No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"/>'
}

function getFeedUrl(_0x4635x3, _0x4635x4, _0x4635x5) {
    var _0x4635x6 = '';
    switch (_0x4635x5) {
    case 'recent':
        _0x4635x6 = '/feeds/posts/default?alt=json&max-results=' + _0x4635x4;
        break;
    case 'comments':
        _0x4635x6 = 'list1' == _0x4635x3 ? '/feeds/comments/default?alt=json&max-results=' + _0x4635x4 : '/feeds/posts/default/-/' + _0x4635x5 + '?alt=json&max-results=' + _0x4635x4;
        break;
    default:
        _0x4635x6 = '/feeds/posts/default/-/' + _0x4635x5 + '?alt=json&max-results=' + _0x4635x4
    };
    return _0x4635x6
}

function getPostLink(_0x4635x3, _0x4635x4) {
    for (var _0x4635x5 = 0; _0x4635x5 < _0x4635x3[_0x4635x4].link.length; _0x4635x5++) {
        if ('alternate' == _0x4635x3[_0x4635x4].link[_0x4635x5].rel) {
            var _0x4635x6 = _0x4635x3[_0x4635x4].link[_0x4635x5].href;
            break
        }
    };
    return _0x4635x6
}

function getPostTitle(_0x4635x3, _0x4635x4) {
    if (_0x4635x3[_0x4635x4].title.$t) {
        var _0x4635x5 = _0x4635x3[_0x4635x4].title.$t
    } else {
        _0x4635x5 = messages.noTitle
    };
    return _0x4635x5
}

function getFirstImage(_0x4635x3, _0x4635x4) {
    var _0x4635x5 = $('<div>').html(_0x4635x3).find('img:first').attr('src'),
        _0x4635x6 = _0x4635x5.lastIndexOf('index.html') || 0,
        _0x4635x7 = _0x4635x5.lastIndexOf('index.html', _0x4635x6 - 1) || 0,
        _0x4635x8 = _0x4635x5.substring(0, _0x4635x7),
        _0x4635x9 = _0x4635x5.substring(_0x4635x7, _0x4635x6),
        _0x4635x10 = _0x4635x5.substring(_0x4635x6);
    return (_0x4635x9.match(/\/s[0-9]+/g) || _0x4635x9.match(/\/w[0-9]+/g) || '/d' == _0x4635x9) && (_0x4635x9 = '/w72-h72-p-k-no-nu'), _0x4635x8 + _0x4635x9 + _0x4635x10
}

function getPostImage(_0x4635x3, _0x4635x4, _0x4635x5) {
    var _0x4635x6 = _0x4635x3[_0x4635x4].content.$t;
    if (_0x4635x3[_0x4635x4].media$thumbnail) {
        var _0x4635x7 = _0x4635x3[_0x4635x4].media$thumbnail.url
    } else {
        _0x4635x7 = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    };
    return _0x4635x6.indexOf(_0x4635x6.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0x4635x6.indexOf('<img') > -1 ? _0x4635x6.indexOf(_0x4635x6.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0x4635x6.indexOf('<img') ? _0x4635x7.replace('/default.', '/maxresdefault.') : getFirstImage(_0x4635x6) : _0x4635x7.replace('/default.', '/maxresdefault.') : _0x4635x6.indexOf('<img') > -1 ? getFirstImage(_0x4635x6) : 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
}

function getPostLabel(_0x4635x3, _0x4635x4) {
    if (_0x4635x3[_0x4635x4].category) {
        var _0x4635x5 = '<span class="entry-category">' + _0x4635x3[_0x4635x4].category[0].term + '</span>'
    } else {
        _0x4635x5 = ''
    };
    return _0x4635x5
}

function getVideoClass(_0x4635x3, _0x4635x4) {
    return _0x4635x3.match('img.youtube.com') ? 'is-video' : 'is-image'
}

function getAjax(_0x4635x3, _0x4635x4, _0x4635x5, _0x4635x6) {
    switch (_0x4635x4) {
    case 'related':
        0 == _0x4635x6 && (_0x4635x6 = 'geterror404');
        var _0x4635x7 = getFeedUrl(_0x4635x4, _0x4635x5, _0x4635x6);
        $.ajax({
            url: _0x4635x7,
            type: 'GET',
            dataType: 'json',
            cache: !0,
            beforeSend: function (_0x4635x5) {
                switch (_0x4635x4) {
                case 'related':
                    _0x4635x3.html(beforeLoader()).parent().addClass('show-ify')
                }
            },
            success: function (_0x4635x5) {
                var _0x4635x6 = '';
                switch (_0x4635x4) {
                case 'related':
                    _0x4635x6 = '<div class="related-posts">'
                };
                var _0x4635x7 = _0x4635x5.feed.entry;
                if (null != _0x4635x7) {
                    for (var _0x4635x8 = 0, _0x4635x9 = _0x4635x7; _0x4635x8 < _0x4635x9.length; _0x4635x8++) {
                        var _0x4635x10 = getPostLink(_0x4635x9, _0x4635x8),
                            _0x4635x15 = getPostTitle(_0x4635x9, _0x4635x8, _0x4635x10),
                            _0x4635x16 = getPostImage(_0x4635x9, _0x4635x8, _0x4635x10),
                            _0x4635x17 = (getPostLabel(_0x4635x9, _0x4635x8), getVideoClass(_0x4635x16)),
                            _0x4635x18 = '';
                        switch (_0x4635x4) {
                        case 'related':
                            _0x4635x18 += '<article class="related-item post item-' + _0x4635x8 + '"><a class="entry-image-wrap ' + _0x4635x17 + '" href="' + _0x4635x10 + '"><span class="entry-thumb" data-image="' + _0x4635x16 + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0x4635x10 + '">' + _0x4635x15 + '</a></h2></div></article>'
                        };
                        _0x4635x6 += _0x4635x18
                    }
                } else {
                    _0x4635x6 = msgError()
                };
                _0x4635x6 += '</div>', _0x4635x3.html(_0x4635x6), _0x4635x3.find('span.entry-thumb').lazyku()
            },
            error: function () {
                _0x4635x3.html(msgError())
            }
        })
    }
}

function ajaxRelated(_0x4635x3, _0x4635x4, _0x4635x5, _0x4635x6, _0x4635x7) {
    if (_0x4635x7.match('getrelated')) {
        return getAjax(_0x4635x3, _0x4635x4, _0x4635x5, _0x4635x6)
    }
}

function beautiAvatar(_0x4635x3) {
    $(_0x4635x3).attr('src', function (_0x4635x3, _0x4635x4) {
        return _0x4635x4 = (_0x4635x4 = _0x4635x4.replace('https://resources.blogblog.com/img/blank.gif', 'https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg')).replace('https://img1.blogblog.com/img/blank.gif', 'https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg')
    })
}
$('#unang_blogger-main-menu').menuku(), $('#unang_blogger-main-menu .widget').addClass('show-menu'), $('.search-toggle.show').on('click', function () {
    $('body').addClass('search-active'), $('#nav-search-wrap').fadeIn(170).find('input').focus()
}), $('.search-toggle.hide').on('click', function () {
    $('body').removeClass('search-active'), $('#nav-search-wrap').fadeOut(170).find('input').blur()
}), $('.sidebar .social-icons li a').each(function (_0x4635x3) {
    var _0x4635x4 = $(this),
        _0x4635x5 = _0x4635x4.attr('href').split('$');
    _0x4635x3 = _0x4635x5[0].trim(), null != _0x4635x5[1] && _0x4635x4.find('span.text').text(_0x4635x5[1].trim()), _0x4635x4.attr('href', _0x4635x3)
}), $('.follow-by-email-text').each(function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = followByEmailText;
    '' != _0x4635x4 && _0x4635x3.text(_0x4635x4)
}), $('.post-body a').each(function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = _0x4635x3.text().trim(),
        _0x4635x5 = _0x4635x4.toLowerCase(),
        _0x4635x6 = shortCodeIfy(_0x4635x4, 'text'),
        _0x4635x7 = shortCodeIfy(_0x4635x4, 'size');
    _0x4635x5.match('getdownload') && 0 != _0x4635x6 && (_0x4635x3.wrap('<div class="file-btn"/>'), _0x4635x3.addClass('button download').text(_0x4635x6), 0 != _0x4635x7 && _0x4635x3.parent('.file-btn').append('<span class="file-size">' + _0x4635x7 + '</span>'))
}), $('.post-body a').each(function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = _0x4635x3.text().trim(),
        _0x4635x5 = _0x4635x4.split('index.html'),
        _0x4635x6 = _0x4635x5[0],
        _0x4635x7 = _0x4635x5[1],
        _0x4635x8 = _0x4635x5.pop();
    _0x4635x4.match('button') && (_0x4635x3.addClass('button').text(_0x4635x6), 'button' != _0x4635x7 && _0x4635x3.addClass(_0x4635x7), 'button' != _0x4635x8 && _0x4635x3.addClass('colored-button').css({
        "background-color": _0x4635x8
    }))
}), $('.post-body strike').each(function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = _0x4635x3.text().trim(),
        _0x4635x5 = _0x4635x3.html();
    _0x4635x4.match('contact-form') && (_0x4635x3.replaceWith('<div class="contact-form"/>'), $('.contact-form').append($('#ContactForm1'))), _0x4635x4.match('alert-success') && _0x4635x3.replaceWith('<div class="alert-message alert-success short-b">' + _0x4635x5 + '</div>'), _0x4635x4.match('alert-info') && _0x4635x3.replaceWith('<div class="alert-message alert-info short-b">' + _0x4635x5 + '</div>'), _0x4635x4.match('alert-warning') && _0x4635x3.replaceWith('<div class="alert-message alert-warning short-b">' + _0x4635x5 + '</div>'), _0x4635x4.match('alert-error') && _0x4635x3.replaceWith('<div class="alert-message alert-error short-b">' + _0x4635x5 + '</div>'), _0x4635x4.match('left-sidebar') && _0x4635x3.replaceWith('<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>'), _0x4635x4.match('right-sidebar') && _0x4635x3.replaceWith('<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>'), _0x4635x4.match('full-width') && _0x4635x3.replaceWith('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>'), _0x4635x4.match('code-box') && _0x4635x3.replaceWith('<pre class="code-box short-b">' + _0x4635x5 + '</pre>'), $('.post-body .short-b').find('b').each(function () {
        var _0x4635x3 = $(this),
            _0x4635x4 = _0x4635x3.text().trim();
        (_0x4635x4.match('alert-success') || _0x4635x4.match('alert-info') || _0x4635x4.match('alert-warning') || _0x4635x4.match('alert-error') || _0x4635x4.match('code-box')) && _0x4635x3.replaceWith('')
    })
}), $('.unang_blogger-share-links .window-ify').on('click', function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = _0x4635x3.data('url'),
        _0x4635x5 = _0x4635x3.data('width'),
        _0x4635x6 = _0x4635x3.data('height'),
        _0x4635x7 = window.screen.width,
        _0x4635x8 = window.screen.height,
        _0x4635x9 = Math.round(_0x4635x7 / 2 - _0x4635x5 / 2),
        _0x4635x10 = Math.round(_0x4635x8 / 2 - _0x4635x6 / 2);
    window.open(_0x4635x4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0x4635x5 + ',height=' + _0x4635x6 + ',left=' + _0x4635x9 + ',top=' + _0x4635x10).focus()
}), $('.unang_blogger-share-links').each(function () {
    var _0x4635x3 = $(this);
    _0x4635x3.find('.show-hid a').on('click', function () {
        _0x4635x3.toggleClass('show-hidden')
    })
}), $('.about-author .author-description span a').each(function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = _0x4635x3.text().trim(),
        _0x4635x5 = _0x4635x3.attr('href');
    _0x4635x3.replaceWith('<li class="' + _0x4635x4 + '"><a href="' + _0x4635x5 + '" title="' + _0x4635x4 + '" target="_blank"/></li>'), $('.description-links').append($('.author-description span li')), $('.description-links').addClass('show')
}), $('.unang_blogger-related-content').each(function () {
    var _0x4635x3 = $(this),
        _0x4635x4 = _0x4635x3.find('.related-tag').attr('data-label');
    ajaxRelated(_0x4635x3, 'related', relatedPostsNum, _0x4635x4, 'getrelated')
}), $('.unang_blogger-blog-post-comments').each(function () {
    var _0x4635x3 = $(this);
    switch (commentsSystem) {
    case 'blogger':
        ;
    case 'disqus':
        ;
    case 'facebook':
        _0x4635x3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), beautiAvatar('.avatar-image-container img');
        break;
    case 'hide':
        _0x4635x3.hide();
        break;
    default:
        _0x4635x3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), beautiAvatar('.avatar-image-container img')
    };
    var _0x4635x4 = _0x4635x3.find('.comments .comment-reply'),
        _0x4635x5 = _0x4635x3.find('.comments #top-continue'),
        _0x4635x6 = _0x4635x3.find('#show-comment-form');
    _0x4635x4.on('click', function () {
        _0x4635x5.show(), _0x4635x3.addClass('comment-form-visible'), _0x4635x6.remove()
    }), _0x4635x5.on('click', function () {
        _0x4635x5.hide()
    }), _0x4635x6.on('click', function () {
        _0x4635x3.addClass('comment-form-visible'), _0x4635x6.remove()
    })
}), $(function () {
    $('.index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.about-author .author-avatar').lazyku(), $('#unang_blogger-mobile-menu').each(function () {
        var _0x4635x3 = $(this),
            _0x4635x4 = $('#unang_blogger-main-menu-nav').clone();
        _0x4635x4.attr('id', 'main-mobile-nav'), _0x4635x4.appendTo(_0x4635x3), $('.mobile-menu-toggle, .hide-unang_blogger-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        }), $('.unang_blogger-mobile-menu .has-sub').append('<div class="submenu-toggle"/>'), $('.unang_blogger-mobile-menu ul li .submenu-toggle').on('click', function (_0x4635x3) {
            $(this).parent().hasClass('has-sub') && (_0x4635x3.preventDefault(), $(this).parent().hasClass('show') ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170) : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
        })
    }), $('.mobile-navbar-menu').each(function () {
        var _0x4635x3 = $(this);
        $('#footer-menu ul.link-list').clone().appendTo(_0x4635x3)
    }), $('.mobile-navbar-social').each(function () {
        var _0x4635x3 = $(this),
            _0x4635x4 = $('#footer-wrapper ul.social').first().clone();
        _0x4635x4.removeClass('social-bg-hover'), _0x4635x4.appendTo(_0x4635x3)
    }), $('.headerify-wrap .headerify').each(function () {
        var _0x4635x3 = $(this);
        if (1 == fixedMenu && _0x4635x3.length > 0) {
            var _0x4635x4 = $(document).scrollTop(),
                _0x4635x5 = _0x4635x3.offset().top,
                _0x4635x6 = _0x4635x3.height(),
                _0x4635x7 = _0x4635x5 + _0x4635x6;
            $(window).scroll(function () {
                var _0x4635x5 = $(document).scrollTop();
                _0x4635x5 < $('#footer-wrapper').offset().top - _0x4635x6 && (_0x4635x5 > _0x4635x7 ? _0x4635x3.addClass('is-fixed') : _0x4635x5 <= 0 && _0x4635x3.removeClass('is-fixed'), _0x4635x5 > _0x4635x4 ? _0x4635x3.removeClass('show') : _0x4635x3.addClass('show'), _0x4635x4 = $(document).scrollTop())
            })
        }
    }), $('.is-single #main-wrapper, .is-single #sidebar-wrapper').each(function () {
        1 == fixedSidebar && $(this).theiaStickySidebarIfy({
            containerSelector: '#content-wrapper > .container',
            additionalMarginTop: 35,
            additionalMarginBottom: 35
        })
    }), $('a#unangning_eu').each(function () {
        var _0x4635x3 = $(this),
            _0x4635x4 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:#ffffff!important;margin:0!important;';
        _0x4635x3.attr('href', 'https://daffadev.my.id/').text('Unangning_EU').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--main-color)!important;margin:0!important;'), _0x4635x3.parent().attr('style', _0x4635x4), _0x4635x3.parent().parent().attr('style', _0x4635x4)
    }), setInterval(function () {
        $('a#unangning_eu').length || (window.location.href = 'https://daffadev.my.id/'), $('a#unangning_eu:visible').length || (window.location.href = 'https://daffadev.my.id/')
    }, 1e3), $('#post-body iframe').each(function () {
        var _0x4635x3 = $(this);
        _0x4635x3.attr('src').match('www.youtube.com') && _0x4635x3.wrap('<div class="responsive-video-wrap"/>')
    }), $('p.comment-content').each(function () {
        var _0x4635x3 = $(this);
        _0x4635x3.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0x4635x3.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('#unang_blogger-load-more-link').each(function () {
        var _0x4635x3 = $(this).data('load');
        _0x4635x3 && $('#unang_blogger-load-more-link').show(), $('#unang_blogger-load-more-link').on('click', function (_0x4635x4) {
            $('#unang_blogger-load-more-link').hide(), $.ajax({
                url: _0x4635x3,
                success: function (_0x4635x4) {
                    var _0x4635x5 = $(_0x4635x4).find('.blog-posts');
                    _0x4635x5.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0x4635x5.html()), (_0x4635x3 = $(_0x4635x4).find('#unang_blogger-load-more-link').data('load')) ? $('#unang_blogger-load-more-link').show() : ($('#unang_blogger-load-more-link').hide(), $('#blog-pager .no-more').addClass('show')), $('.index-post .entry-image-wrap .entry-thumb').lazyku()
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide()
                }
            }), _0x4635x4.preventDefault()
        })
    }), $('#back-top').each(function () {
        var _0x4635x3 = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0x4635x3.fadeIn(250) : _0x4635x3.fadeOut(250), _0x4635x3.offset().top >= $('#footer-wrapper').offset().top - 36 ? _0x4635x3.addClass('on-footer') : _0x4635x3.removeClass('on-footer')
        }), _0x4635x3.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})

$(document).ready(function () {
var license = 'VW5hbmduaW5nX0VV',
myLicense = atob(license),
tpllc = $('#unangning_eu').text(),
second = 100;
console.log(myLicense);
if (myLicense == tpllc) {
return false
} else {
$('body').append('<style>body{background:#000000b3!important;overflow:hidden}#peringatan span{font-size:50px}#peringatan{z-index:999999;position:fixed;top:0;right:0;left:0;padding:16% 0;height:100%;text-align:center;background:#000000b3;color:#fff}@media only screen and (max-width: 680px){#peringatan{padding:60% 0;}h4{font-size:x-large!important;}}</style><div id="peringatan"><h4 style="margin-bottom: 35px;font-size:-webkit-xxx-large;">🔒️ Template is Locked Up</h4><span id="aktivasi">'+second+'</span><p style="margin-top: 20px;font-size: 18px;letter-spacing: 2px;line-height: 30px;">Mohon untuk tidak menghapus/mengganti link footer</p></div>');
setInterval(function () {
second <= 1 ? window.location.href = "https://daffadev.my.id/" : $('#aktivasi').text(--second);
}, 1e3)
}
});

//]]>
