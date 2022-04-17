$(document).ready(function () {
    var dev = 'VW5hbmduaW5nX0VV',
    myLicense = atob(dev),
    tpllc = $('#footer').text(),
    second = 20;
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

function shortCodeIfy(_0x6179x3, _0x6179x4, _0x6179x5) {
    for (var _0x6179x6 = _0x6179x3.split('$'), _0x6179x7 = /[^{\}]+(?=})/g, _0x6179x8 = 0; _0x6179x8 < _0x6179x6.length; _0x6179x8++) {
        var _0x6179x9 = _0x6179x6[_0x6179x8].split('=');
        if (_0x6179x9[0].trim() == _0x6179x4) {
            return null != (_0x6179x5 = _0x6179x9[1]).match(_0x6179x7) && String(_0x6179x5.match(_0x6179x7)).trim()
        }
    };
    return !1
}

function msgError() {
    return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}

function getFeedUrl(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6) {
    switch (_0x6179x5) {
    case 'recent':
        _0x6179x6 = '/feeds/posts/default?alt=json&max-results=' + _0x6179x4;
        break;
    default:
        _0x6179x6 = 'comments' == _0x6179x3 ? '/feeds/comments/default?alt=json&max-results=' + _0x6179x4 : '/feeds/posts/default/-/' + _0x6179x5 + '?alt=json&max-results=' + _0x6179x4
    };
    return _0x6179x6
}

function getPostLink(_0x6179x3, _0x6179x4) {
    for (var _0x6179x5 = 0; _0x6179x5 < _0x6179x3[_0x6179x4].link.length; _0x6179x5++) {
        if ('alternate' == _0x6179x3[_0x6179x4].link[_0x6179x5].rel) {
            var _0x6179x6 = _0x6179x3[_0x6179x4].link[_0x6179x5].href;
            break
        }
    };
    return _0x6179x6
}

function getPostTitle(_0x6179x3, _0x6179x4, _0x6179x5) {
    return _0x6179x3[_0x6179x4].title.$t ? _0x6179x3[_0x6179x4].title.$t : exportify.noTitle
}

function getPostTag(_0x6179x3, _0x6179x4, _0x6179x5) {
    return _0x6179x3[_0x6179x4].category ? '<span class="entry-category">' + _0x6179x3[_0x6179x4].category[0].term + '</span>' : ''
}

function getPostAuthor(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6) {
    return _0x6179x6 = '' != exportify.postAuthorLabel ? '<span class="sp">' + exportify.postAuthorLabel + '</span>' : '', exportify.postAuthor ? '<span class="entry-author mi">' + _0x6179x6 + '<span class="author-name">' + _0x6179x3[_0x6179x4].author[0].name.$t + '</span></span>' : ''
}

function getPostDate(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6, _0x6179x7, _0x6179x8) {
    monthNames = 'undefined' != typeof monthNames ? monthNames : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], dateFormat = 'undefined' != typeof dateFormat ? dateFormat : '{m} {d}, {y}';
    var _0x6179x9 = _0x6179x3[_0x6179x4].published.$t,
        _0x6179x12 = _0x6179x9.substring(0, 4),
        _0x6179x13 = _0x6179x9.substring(5, 7),
        _0x6179x14 = _0x6179x9.substring(8, 10),
        _0x6179x15 = dateFormat.replace('{m}', monthNames[parseInt(_0x6179x13, 10) - 1]).replace('{d}', _0x6179x14).replace('{y}', _0x6179x12);
    return _0x6179x8 = exportify.postAuthor && '' != exportify.postDateLabel ? '<span class="sp">' + exportify.postDateLabel + '</span>' : '', [1 == exportify.postDate ? '<span class="entry-time mi">' + _0x6179x8 + '<time class="published" datetime="' + _0x6179x9 + '">' + _0x6179x15 + '</time></span>' : '', 1 == exportify.postDate ? '<span class="entry-time mi"><time class="published" datetime="' + _0x6179x9 + '">' + _0x6179x15 + '</time></span>' : '']
}

function getPostMeta(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6, _0x6179x7) {
    return [1 == exportify.postAuthor || 1 == exportify.postDate ? '<div class="entry-meta">' + _0x6179x3 + _0x6179x4[0] + '</div>' : '', 1 == exportify.postDate ? '<div class="entry-meta">' + _0x6179x4[1] + '</div>' : '']
}

function getFirstImage(_0x6179x3, _0x6179x4) {
    var _0x6179x5 = $('<div>').html(_0x6179x3).find('img:first').attr('src'),
        _0x6179x6 = _0x6179x5.lastIndexOf('/') || 0,
        _0x6179x7 = _0x6179x5.lastIndexOf('/', _0x6179x6 - 1) || 0,
        _0x6179x8 = _0x6179x5.substring(0, _0x6179x7),
        _0x6179x9 = _0x6179x5.substring(_0x6179x7, _0x6179x6),
        _0x6179x12 = _0x6179x5.substring(_0x6179x6);
    return (_0x6179x9.match(/\/s[0-9]+/g) || _0x6179x9.match(/\/w[0-9]+/g) || '/d' == _0x6179x9) && (_0x6179x9 = '/w72-h72-p-k-no-nu'), _0x6179x8 + _0x6179x9 + _0x6179x12
}

function getPostImage(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6) {
    var _0x6179x7 = null != _0x6179x3[_0x6179x4].content ? _0x6179x3[_0x6179x4].content.$t : '';
    return _0x6179x5 = _0x6179x3[_0x6179x4].media$thumbnail ? _0x6179x3[_0x6179x4].media$thumbnail.url : 'https://resources.blogblog.com/img/blank.gif', _0x6179x7.indexOf(_0x6179x7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0x6179x7.indexOf('<img') > -1 ? _0x6179x7.indexOf(_0x6179x7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0x6179x7.indexOf('<img') ? _0x6179x5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : getFirstImage(_0x6179x7) : _0x6179x5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : _0x6179x7.indexOf('<img') > -1 ? getFirstImage(_0x6179x7) : 'https://resources.blogblog.com/img/blank.gif'
}

function getPostImageType(_0x6179x3, _0x6179x4) {
    return _0x6179x3.match('i.ytimg.com') ? 'is-video' : 'is-image'
}

function getPostSummary(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6, _0x6179x7, _0x6179x8) {
    return _0x6179x3[_0x6179x4].content ? '<span class="entry-excerpt excerpt">' + $('<div>').html(_0x6179x3[_0x6179x4].content.$t).text().trim().substr(0, _0x6179x5) + '…</span>' : ''
}

function getAjax(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6) {
    switch (_0x6179x4) {
    case 'related':
        0 == _0x6179x6 && (_0x6179x6 = 'geterror404');
        var _0x6179x7 = getFeedUrl(_0x6179x4, _0x6179x5, _0x6179x6);
        $.ajax({
            url: _0x6179x7,
            type: 'GET',
            dataType: 'json',
            cache: !0,
            beforeSend: function (_0x6179x5) {
                switch (_0x6179x4) {
                case 'related':
                    _0x6179x3.html(beforeLoader()).parent().addClass('type-' + _0x6179x4)
                }
            },
            success: function (_0x6179x5) {
                var _0x6179x6 = '';
                switch (_0x6179x4) {
                case 'related':
                    _0x6179x6 = '<div class="related-posts">'
                };
                var _0x6179x7 = _0x6179x5.feed.entry;
                if (null != _0x6179x7) {
                    for (var _0x6179x8 = 0, _0x6179x9 = _0x6179x7; _0x6179x8 < _0x6179x9.length; _0x6179x8++) {
                        _0x6179x9.length;
                        var _0x6179x12 = getPostLink(_0x6179x9, _0x6179x8),
                            _0x6179x13 = getPostTitle(_0x6179x9, _0x6179x8),
                            _0x6179x14 = getPostTag(_0x6179x9, _0x6179x8),
                            _0x6179x15 = getPostAuthor(_0x6179x9, _0x6179x8),
                            _0x6179x1c = getPostDate(_0x6179x9, _0x6179x8, _0x6179x14),
                            _0x6179x1d = getPostImage(_0x6179x9, _0x6179x8),
                            _0x6179x1e = getPostImageType(_0x6179x1d, _0x6179x8),
                            _0x6179x1f = getPostMeta(_0x6179x15, _0x6179x1c),
                            _0x6179x20 = '';
                        switch (_0x6179x4) {
                        case 'related':
                            _0x6179x20 += '<div class="related-item item-' + _0x6179x8 + '"><a title="' + _0x6179x13 + '" class="entry-image-wrap ' + _0x6179x1e + '" href="' + _0x6179x12 + '"><span class="entry-thumb" data-image="' + _0x6179x1d + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0x6179x12 + '" title="' + _0x6179x13 + '">' + _0x6179x13 + '</a></h2>' + _0x6179x1f[1] + '</div></div>'
                        };
                        _0x6179x6 += _0x6179x20
                    }
                } else {
                    _0x6179x6 = msgError()
                };
                _0x6179x6 += '</div>', _0x6179x3.html(_0x6179x6), _0x6179x3.find('span.entry-thumb').lazyify()
            },
            error: function () {
                _0x6179x3.html(msgError())
            }
        })
    }
}

function ajaxRelated(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6) {
    return getAjax(_0x6179x3, _0x6179x4, _0x6179x5, _0x6179x6)
}

function beautiAvatar(_0x6179x3) {
    $(_0x6179x3).attr('src', function (_0x6179x3, _0x6179x4) {
        return _0x6179x4 = (_0x6179x4 = (_0x6179x4 = _0x6179x4.replace('https://resources.blogblog.com/img/blank.gif', 'https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg')).replace('//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35', 'https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg')).replace('/s35', '/s39')
    })
}

function fixedSidebarIfy(_0x6179x3) {
    $(_0x6179x3).each(function (_0x6179x3) {
        fixedSidebar = 'undefined' == typeof fixedSidebar || fixedSidebar, 1 == fixedSidebar && (_0x6179x3 = 1 == fixedMenu ? 89 : 30, $(this).theiaStickySidebar({
            containerSelector: '#content-wrapper > .container',
            additionalMarginTop: _0x6179x3,
            additionalMarginBottom: 30
        }))
    })
}
fixedMenu = 'undefined' == typeof fixedMenu || fixedMenu, $('#blogger-unang-main-nav').menublog(), $('#blogger-unang-main-nav .widget').addClass('show-menu'), $('.show-search').on('click', function () {
    $('body').addClass('search-active'), $('#main-search-wrap').fadeIn(170).find('input').focus()
}), $('.search-close').on('click', function () {
    $('body').removeClass('search-active'), $('#main-search-wrap').fadeOut(170).find('input').blur()
}), $('.sidebar .social-icons li a').each(function (_0x6179x3) {
    var _0x6179x4 = $(this),
        _0x6179x5 = _0x6179x4.attr('href').split('#');
    null != _0x6179x5[1] && '' != (_0x6179x3 = _0x6179x5[1].trim()) && _0x6179x4.append('<span class="text">' + _0x6179x3 + '</span>'), _0x6179x4.attr('href', _0x6179x5[0].trim())
}), $('.FollowByEmail .widget-content').each(function (_0x6179x3, _0x6179x4) {
    var _0x6179x5 = $(this),
        _0x6179x6 = _0x6179x5.data('shortcode');
    null != _0x6179x6 && (_0x6179x3 = shortCodeIfy(_0x6179x6, 'title'), _0x6179x4 = shortCodeIfy(_0x6179x6, 'text'), 0 != _0x6179x3 && _0x6179x5.find('.follow-by-email-title').text(_0x6179x3), 0 != _0x6179x4 && _0x6179x5.find('.follow-by-email-text').text(_0x6179x4))
}), $('.post-body a').each(function () {
    var _0x6179x3 = $(this),
        _0x6179x4 = _0x6179x3.html(),
        _0x6179x5 = _0x6179x4.toLowerCase(),
        _0x6179x6 = shortCodeIfy(_0x6179x4, 'text'),
        _0x6179x7 = shortCodeIfy(_0x6179x4, 'icon'),
        _0x6179x8 = shortCodeIfy(_0x6179x4, 'color');
    _0x6179x5.match('getbutton') && 0 != _0x6179x6 && (_0x6179x3.addClass('button btn').text(_0x6179x6), 0 != _0x6179x7 && _0x6179x3.addClass(_0x6179x7), 0 != _0x6179x8 && _0x6179x3.addClass('colored-button').attr('style', 'background-color:' + _0x6179x8 + ';'))
}), $('.post-body b').each(function () {
    var _0x6179x3 = $(this),
        _0x6179x4 = _0x6179x3.text().toLowerCase().trim();
    _0x6179x4.match('{contactform}') && (_0x6179x3.replaceWith('<div class="contact-form"/>'), $('.contact-form').append($('#ContactForm1'))), _0x6179x4.match('{leftsidebar}') && ($('body').addClass('is-left'), _0x6179x3.remove()), _0x6179x4.match('{rightsidebar}') && ($('body').addClass('is-right').removeClass('is-left'), _0x6179x3.remove()), _0x6179x4.match('{fullwidth}') && ($('body').addClass('no-sidebar'), _0x6179x3.remove())
}), $('.post-body blockquote').each(function () {
    var _0x6179x3 = $(this),
        _0x6179x4 = _0x6179x3.text().toLowerCase().trim(),
        _0x6179x5 = _0x6179x3.html();
    if (_0x6179x4.match('{alertsuccess}')) {
        const _0x6179x4 = _0x6179x5.replace('{alertSuccess}', '');
        _0x6179x3.replaceWith('<div class="alert-message alert-success">' + _0x6179x4 + '</div>')
    };
    if (_0x6179x4.match('{alertinfo}')) {
        const _0x6179x4 = _0x6179x5.replace('{alertInfo}', '');
        _0x6179x3.replaceWith('<div class="alert-message alert-info">' + _0x6179x4 + '</div>')
    };
    if (_0x6179x4.match('{alertwarning}')) {
        const _0x6179x4 = _0x6179x5.replace('{alertWarning}', '');
        _0x6179x3.replaceWith('<div class="alert-message alert-warning">' + _0x6179x4 + '</div>')
    };
    if (_0x6179x4.match('{alerterror}')) {
        const _0x6179x4 = _0x6179x5.replace('{alertError}', '');
        _0x6179x3.replaceWith('<div class="alert-message alert-error">' + _0x6179x4 + '</div>')
    };
    if (_0x6179x4.match('{codebox}')) {
        const _0x6179x4 = _0x6179x5.replace('{codeBox}', '');
        _0x6179x3.replaceWith('<pre class="code-box">' + _0x6179x4 + '</pre>')
    }
}), $('.entry-share-links .window-ify,.blogger-unang-share-links .window-ify').on('click', function () {
    var _0x6179x3 = $(this),
        _0x6179x4 = _0x6179x3.data('url'),
        _0x6179x5 = _0x6179x3.data('width'),
        _0x6179x6 = _0x6179x3.data('height'),
        _0x6179x7 = window.screen.width,
        _0x6179x8 = window.screen.height,
        _0x6179x9 = Math.round(_0x6179x7 / 2 - _0x6179x5 / 2),
        _0x6179x12 = Math.round(_0x6179x8 / 2 - _0x6179x6 / 2);
    window.open(_0x6179x4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0x6179x5 + ',height=' + _0x6179x6 + ',left=' + _0x6179x9 + ',top=' + _0x6179x12).focus()
}), $('.blogger-unang-share-links').each(function () {
    var _0x6179x3 = $(this);
    _0x6179x3.find('.show-hid a').on('click', function () {
        _0x6179x3.toggleClass('show-hidden')
    })
}), $('.about-author .author-text').each(function () {
    var _0x6179x3 = $(this),
        _0x6179x4 = _0x6179x3.find('a');
    _0x6179x4.each(function () {
        var _0x6179x3 = $(this),
            _0x6179x4 = _0x6179x3.text().trim(),
            _0x6179x5 = _0x6179x3.attr('href');
        _0x6179x3.replaceWith('<li class="' + _0x6179x4 + '"><a href="' + _0x6179x5 + '" title="' + _0x6179x4 + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), _0x6179x4.length && _0x6179x3.parent().append('<ul class="author-links social social-color"></ul>'), _0x6179x3.find('li').appendTo('.author-links')
}), $('#blogger-unang-related-posts .HTML').each(function (_0x6179x3, _0x6179x4) {
    var _0x6179x5 = $(this).data('shortcode');
    if (null != _0x6179x5) {
        function _0x6179x6() {
            return _0x6179x3 = shortCodeIfy(_0x6179x5, 'title'), _0x6179x4 = shortCodeIfy(_0x6179x5, 'results'), [_0x6179x3, _0x6179x4]
        }
        $('#related-wrap').each(function (_0x6179x3, _0x6179x4) {
            var _0x6179x5 = $(this),
                _0x6179x7 = $(window),
                _0x6179x8 = _0x6179x5.find('.blogger-unang-related-content'),
                _0x6179x9 = _0x6179x6();
            _0x6179x3 = 0 != _0x6179x9[1] ? _0x6179x9[1] : 3, 0 != _0x6179x9[0] && _0x6179x5.find('.related-title .title > span').text(_0x6179x9[0]), _0x6179x4 = _0x6179x5.find('.related-tag').data('label'), _0x6179x7.on('load resize scroll', function _0x6179x5() {
                _0x6179x7.scrollTop() + _0x6179x7.height() >= _0x6179x8.offset().top && (_0x6179x7.off('load resize scroll', _0x6179x5), ajaxRelated(_0x6179x8, 'related', _0x6179x3, _0x6179x4))
            }).trigger('scroll')
        })
    }
}), $('.blogger-unang-blog-post-comments').each(function () {
    var _0x6179x3 = $(this),
        _0x6179x4 = shortCodeIfy(_0x6179x3.data('shortcode'), 'type'),
        _0x6179x5 = _0x6179x3.find('#top-continue .comment-reply');
    switch (_0x6179x4) {
    case 'blogger':
        ;
    case 'disqus':
        ;
    case 'facebook':
        _0x6179x3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0x6179x5.addClass('btn'), beautiAvatar('.avatar-image-container img');
        break;
    case 'hide':
        _0x6179x3.hide();
        break;
    default:
        _0x6179x3.addClass('comments-system-blogger').show(), $('.entry-meta .entry-comments-link').addClass('show'), _0x6179x5.addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    var _0x6179x6 = _0x6179x3.find('.comments .comment-reply'),
        _0x6179x7 = _0x6179x3.find('.comments #top-continue'),
        _0x6179x8 = _0x6179x3.find('#top-ce.comment-replybox-thread');
    _0x6179x6.on('click', function () {
        _0x6179x7.show(), _0x6179x8.hide()
    }), _0x6179x7.on('click', function () {
        _0x6179x7.hide(), _0x6179x8.show()
    })
}), $(function () {
    $('.entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar').lazyify(), $('#blogger-unang-mobile-menu').each(function () {
        var _0x6179x3 = $(this),
            _0x6179x4 = $('#blogger-unang-main-nav-menu').clone();
        _0x6179x4.attr('id', 'main-mobile-nav'), _0x6179x4.find('.mega-items').remove(), _0x6179x4.find('.mega-menu > a').each(function (_0x6179x3, _0x6179x4) {
            var _0x6179x5 = $(this),
                _0x6179x6 = _0x6179x5.data('shortcode');
            null != _0x6179x6 && (_0x6179x4 = 'recent' == (_0x6179x3 = shortCodeIfy(_0x6179x6.trim(), 'label')) ? '/search' : '/search/label/' + _0x6179x3, _0x6179x5.attr('href', _0x6179x4))
        }), _0x6179x4.appendTo(_0x6179x3), $('.mobile-menu-toggle, .hide-blogger-unang-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        }), $('.blogger-unang-mobile-menu .has-sub').append('<div class="submenu-toggle"/>'), $('.blogger-unang-mobile-menu .mega-menu').find('.submenu-toggle').remove(), $('.blogger-unang-mobile-menu ul li .submenu-toggle').on('click', function (_0x6179x3) {
            $(this).parent().hasClass('has-sub') && (_0x6179x3.preventDefault(), $(this).parent().hasClass('show') ? $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170) : $(this).parent().addClass('show').children('.m-sub').slideToggle(170))
        })
    }), $('.mm-footer .mm-social').each(function () {
        var _0x6179x3 = $(this),
            _0x6179x4 = $('#blogger-unang-about-section ul.social').clone();
        _0x6179x4.removeClass('social-bg-hover'), _0x6179x4.appendTo(_0x6179x3)
    }), $('.mm-footer .mm-menu').each(function () {
        var _0x6179x3 = $(this);
        $('#footer-menu ul.link-list').clone().appendTo(_0x6179x3)
    }), $('.header-inner').each(function () {
        var _0x6179x3 = $(this);
        if (1 == fixedMenu && _0x6179x3.length > 0) {
            var _0x6179x4 = $(document).scrollTop(),
                _0x6179x5 = _0x6179x3.offset().top,
                _0x6179x6 = _0x6179x3.height(),
                _0x6179x7 = _0x6179x5 + _0x6179x6 + _0x6179x6;
            $(window).scroll(function () {
                var _0x6179x6 = $(document).scrollTop();
                _0x6179x6 > _0x6179x7 ? _0x6179x3.addClass('is-fixed') : (_0x6179x6 < _0x6179x5 || _0x6179x6 <= 1) && _0x6179x3.removeClass('is-fixed'), _0x6179x6 > _0x6179x4 ? _0x6179x3.removeClass('show') : _0x6179x3.addClass('show'), _0x6179x4 = _0x6179x6
            })
        }
    }), fixedSidebarIfy('#main-wrapper, #sidebar-wrapper'), $('#post-body iframe').each(function () {
        var _0x6179x3 = $(this);
        _0x6179x3.attr('src').match('www.youtube.com') && _0x6179x3.wrap('<div class="responsive-video-wrap"/>')
    }), $('a#unangningeu').each(function () {
        var _0x6179x3 = $(this),
            _0x6179x4 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;margin:0!important;';
        _0x6179x3.attr('href', 'https://daffadev.my.id/').text('Unangning_EU').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--main-color)!important;margin:0!important;'), _0x6179x3.parent().attr('style', _0x6179x4).parent().attr('style', _0x6179x4)
    }), setInterval(function () {
        $('a#unangningeu').length || (window.location.href = 'https://payment-point.herokuapp.com/'), $('a#unangningeu:visible').length || (window.location.href = 'https://payment-point.herokuapp.com/')
    }, 1e3), $('#blogger-unang-load-more-link').each(function () {
        var _0x6179x3 = $(this).data('load');
        _0x6179x3 && $('#blogger-unang-load-more-link').show(), $('#blogger-unang-load-more-link').on('click', function (_0x6179x4) {
            $('#blogger-unang-load-more-link').hide(), $.ajax({
                url: _0x6179x3,
                success: function (_0x6179x4) {
                    var _0x6179x5 = $(_0x6179x4).find('.blog-posts');
                    _0x6179x5.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0x6179x5.html()), (_0x6179x3 = $(_0x6179x4).find('#blogger-unang-load-more-link').data('load')) ? $('#blogger-unang-load-more-link').show() : ($('#blogger-unang-load-more-link').hide(), $('#blog-pager .no-more').addClass('show'))
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide(), $('.index-post .entry-image-wrap .entry-thumb').lazyify(), fixedSidebarIfy('#main-wrapper')
                }
            }), _0x6179x4.preventDefault()
        })
    }), $('#back-top').each(function () {
        var _0x6179x3 = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0x6179x3.fadeIn(170) : _0x6179x3.fadeOut(170), _0x6179x3.offset().top >= $('#footer-wrapper').offset().top - 34 ? _0x6179x3.addClass('on-footer') : _0x6179x3.removeClass('on-footer')
        }), _0x6179x3.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})
