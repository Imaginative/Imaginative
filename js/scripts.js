
(function($) {
    "use strict";
    /*==============================
        Main
    ==============================*/
    function Roadmain() {
        mobilecheck();
        Preloader();
        GoogleMap();
        BannerandNav();
        HeadJs();
        selectStyle();
        Skillbar();
        ScrollTo();
        Pageslider();
        hoverAnimate();
        FilterWork();
        mdBtn();
        Plugandslider();
        ajaxContactForm();
    }

    /*==============================
        Mobile check
    ==============================*/
    function mobilecheck() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return false;
        }
        return true;
    }

    /*==============================
        Preloader
    ==============================*/
    function Preloader() {
        $("body").queryLoader2({
            barColor: "#ff2b7f",
            backgroundColor: "#fff",
            percentage: true,
            barHeight: 3,
            completeAnimation: "grow",
            minimumTime: 1000,
            fadeOutTime: 1000
        });
        var logoSrc = $('header#header .logo').find('img').attr('src'),
            $preloader = $('#qLoverlay');
        $preloader.prepend('<img src="' + logoSrc + '" class="logo-loader" alt="loader">');
    }

    /*==============================
        Google map
    ==============================*/
    function GoogleMap() {
        if ($('#map').length) {
            // Option map
            var $map = $('#map'),
                mapZoom = $map.data('map-zoom'),
                lat = $map.data('map-latlng').split(',')[0],
                lng = $map.data('map-latlng').split(',')[1],
                marker = $map.data('map-marker'),
                width = parseInt($map.data('map-marker-size').split('*')[0]),
                height = parseInt($map.data('map-marker-size').split('*')[1]),
                grayscale = [
                    {featureType: 'all',  stylers: [{saturation: -100},{gamma: 0.50}]}
                ],
                blue = [
                    {featureType: 'all',  stylers: [{hue: '#0000b0'},{invert_lightness: 'true'},{saturation: -30}]}
                ],
                dark = [
                    {featureType: 'all',  stylers: [{ hue: '#ff1a00' },{ invert_lightness: true },{ saturation: -100  },{ lightness: 33 },{ gamma: 0.5 }]}
                ],
                pink = [
                    {"stylers": [{ "hue": "#ff61a6" },{ "visibility": "on" },{ "invert_lightness": true },{ "saturation": 40 },{ "lightness": 10 }]}
                ],
                light = [
                    {"featureType": "water","elementType": "all","stylers": [{"hue": "#e9ebed"},{"saturation": -78},{"lightness": 67},{"visibility": "simplified"}]
                    },{"featureType": "landscape","elementType": "all","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "simplified"}]
                    },{"featureType": "road","elementType": "geometry","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": 31},{"visibility": "simplified"}]
                    },{"featureType": "poi","elementType": "all","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "off"}]
                    },{"featureType": "road.local","elementType": "geometry","stylers": [{"hue": "#e9ebed"},{"saturation": -90},{"lightness": -8},{"visibility": "simplified"}]
                    },{"featureType": "transit","elementType": "all","stylers": [{"hue": "#e9ebed"},{"saturation": 10},{"lightness": 69},{"visibility": "on"}]
                    },{"featureType": "administrative.locality","elementType": "all","stylers": [ {"hue": "#2c2e33"},{"saturation": 7},{"lightness": 19},{"visibility": "on"}]
                    },{"featureType": "road","elementType": "labels","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": 31},{"visibility": "on"}]
                    },{"featureType": "road.arterial","elementType": "labels","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": -2},{"visibility": "simplified"}]}
                ],
                blueessence = [
                    {featureType: "landscape.natural",elementType: "geometry.fill",stylers: [{ "visibility": "on" },{ "color": "#e0efef" }]
                    },{featureType: "poi",elementType: "geometry.fill",stylers: [{ "visibility": "on" },{ "hue": "#1900ff" },{ "color": "#c0e8e8" }]
                    },{featureType: "landscape.man_made",elementType: "geometry.fill"
                    },{featureType: "road",elementType: "geometry",stylers: [{ lightness: 100 },{ visibility: "simplified" }]
                    },{featureType: "road",elementType: "labels",stylers: [{ visibility: "off" }]
                    },{featureType: 'water',stylers: [{ color: '#7dcdcd' }]
                    },{featureType: 'transit.line',elementType: 'geometry',stylers: [{ visibility: 'on' },{ lightness: 700 }]}
                ],
                bentley = [
                    {featureType: "landscape",stylers: [{hue: "#F1FF00"},{saturation: -27.4},{lightness: 9.4},{gamma: 1}]
                    },{featureType: "road.highway",stylers: [{hue: "#0099FF"},{saturation: -20},{lightness: 36.4},{gamma: 1}]
                    },{featureType: "road.arterial",stylers: [{hue: "#00FF4F"},{saturation: 0},{lightness: 0},{gamma: 1}]
                    },{featureType: "road.local",stylers: [{hue: "#FFB300"},{saturation: -38},{lightness: 11.2},{gamma: 1}]
                    },{featureType: "water",stylers: [{hue: "#00B6FF"},{saturation: 4.2},{lightness: -63.4},{gamma: 1}]
                    },{featureType: "poi",stylers: [{hue: "#9FFF00"},{saturation: 0},{lightness: 0},{gamma: 1}]}
                ],
                retro = [
                    {featureType:"administrative",stylers:[{visibility:"off"}]
                    },{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]
                    },{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]
                    },{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]
                    },{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]
                    },{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]}
                ],
                cobalt = [
                    {featureType: "all",elementType: "all",stylers: [{invert_lightness: true},{saturation: 10},{lightness: 30},{gamma: 0.5},{hue: "#435158"}]}
                ],
                brownie = [
                    {"stylers": [{ "hue": "#ff8800" },{ "gamma": 0.4 }]}
                ];
            var mapTheme;
            switch($map.data('snazzy-map-theme')){
                case 'grayscale' : {
                    mapTheme = grayscale;
                } break;
                case 'blue' : {
                    mapTheme = blue;
                } break;
                case 'dark' : {
                    mapTheme = dark;
                } break;
                case 'pink' : {
                    mapTheme = pink;
                } break;
                case 'light' : {
                    mapTheme = light;
                } break;
                case 'blue-essence' : {
                    mapTheme = blueessence;
                } break;
                case 'bentley' : {
                    mapTheme = bentley;
                } break;
                case 'retro' : {
                    mapTheme = retro;
                } break;
                case 'cobalt' : {
                    mapTheme = cobalt;
                } break;
                case 'brownie' : {
                    mapTheme = brownie;
                } break;
                default : {
                    mapTheme = grayscale;
                }
            }

            // Map
            var MY_MAPTYPE_ID = 'custom_style';
            var featureOpts = mapTheme;
            var latlng = new google.maps.LatLng(lat, lng);
            var settings = {
                zoom: mapZoom,
                center: latlng,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeControl: false,
                mapTypeId: MY_MAPTYPE_ID,
                scrollwheel: false,
                draggable: false,
            };

            var map = new google.maps.Map(document.getElementById("map"), settings);
            var styledMapOptions = {
                name: 'Custom Style'
            };
            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

            map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
            var companyImage = new google.maps.MarkerImage(marker,
                new google.maps.Size(width, height),
                new google.maps.Point(0, 0)
            );
            var companyPos = new google.maps.LatLng(lat, lng);
            var companyMarker = new google.maps.Marker({
                position: companyPos,
                map: map,
                icon: companyImage,
                title: "Road",
                zIndex: 3
            });
        }
    }
    /*==============================
        Banner
    ==============================*/ 
    function BannerandNav() {
        var $navigation = $('.navigation'),
            $navInner = $navigation.find('.navigation-inner'),
            $nav = $navigation.find('.nav'),
            $mg = $('#page-wrap').css('marginTop').split('px')[0] * 2,
            heightBox = $(window).height() - $mg,
            widthBox = $(window).width() - $mg;
        $('.banner, .not-found').height(heightBox);
        $('.pageslider')
            .find('.full-height')
                .innerHeight(heightBox);
        $navigation.css({
            'width': widthBox,
            'height': heightBox
        });
        if ($('.page-boxed').length) {
            var offsetRight = $('.page-boxed').offset().left;
            $('.navigation.nav-right').css('right', offsetRight);
        }
        if (mobilecheck()) {
            $('.team-item').removeClass('team-item-mobile');
        } else {
            $('.team-item').addClass('team-item-mobile');
        }
    }
    /*==============================
        HeadJs
    ==============================*/ 
    function HeadJs() {
        var $navigation = $('.navigation'),
            $navInner = $navigation.find('.navigation-inner'),
            $nav = $navigation.find('.nav'),
            $navfull = $('.navigation.nav-fullscreen'),
            $navright = $('.navigation.nav-right'),
            $navleft = $('.navigation.nav-left'),
            $navtop = $('.navigation.nav-top'),
            $navrightleft = $('.navigation.nav-right, .navigation.nav-left'),
            $navall = $('.navigation.nav-right, .navigation.nav-left, .navigation.nav-top'),
            $navrightleftInner = $('.navigation.nav-right .navigation-inner, .navigation.nav-left .navigation-inner');
        $navrightleft.prependTo('#page-wrap');
        $navtop.prependTo('#page-wrap');
        $('.navigation.nav-right .navigation-inner').prepend('<div class="bg-nav"></div>');
        $('.open-nav').on('click', function() {
            $navigation.toggleClass('nav-anim');
            $navall.css('zIndex', '99999');
            return false;
        });
        $('.close-nav').on('click', function() {
            $navigation.removeClass('nav-anim');
            $navall.css('zIndex', '999');
            $navigation.find('.sub-menu').slideUp(300);
            return false;
        });
        $navigation.on('click', function(event) {
            event.stopPropagation();
        });
        $('html').on('click', function() {
            $navigation.removeClass('nav-anim');
            $navall.css('zIndex', '999');
            $navigation.find('.sub-menu').slideUp(300);
        });
        $('.navigation.nav-left')
            .closest('#page-wrap')
                .find('.open-nav')
                    .css({
                        'right': 'auto',
                        'left': '20px'
                    });
        $navleft.closest('#page-wrap').find('.shop-cart').css('right', '36px');

        // Submenu
        var $submenu = $navigation.find('.sub-menu');
            $submenu.hide();
        $submenu.parent('li').on('click', '> a', function() {
            if($(this).parent().hasClass('f') == false)
                $nav.find('.sub-menu')
                    .stop()
                    .removeClass('f')
                    .slideUp(300);
            $(this).siblings('.sub-menu')
                .stop()
                .addClass('f')
                .slideToggle(300);
            return false;
        });
        $('.road-title').css({
            'padding-left': '15px',
            'padding-right': '15px'
        });
        $('[class^="container"]').find('.road-title').css({
            'padding-left': '0',
            'padding-right': '0'
        });
        // Effect header
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop(),
                scrollTop2 = $(window).scrollTop()/4,
                windowHeight = $(window).height();
            $('.banner-content h1').css({
                '-webkit-transform': 'translateY(-' + scrollTop + 'px)',
                '-moz-transform': 'translateY(-' + scrollTop + 'px)',
                '-ms-transform': 'translateY(-' + scrollTop + 'px)',
                '-o-transform': 'translateY(-' + scrollTop + 'px)',
                'transform': 'translateY(-' + scrollTop + 'px)'
            });
            $('.r-scroll-down').css({
                '-webkit-transform': 'translate( -50%, -' + scrollTop2 + 'px)',
                '-moz-transform': 'translate( -50%, -' + scrollTop2 + 'px)',
                '-ms-transform': 'translate( -50%, -' + scrollTop2 + 'px)',
                '-o-transform': 'translate( -50%, -' + scrollTop2 + 'px)',
                'transform': 'translate( -50%, -' + scrollTop2 + 'px)'
            });
            if (scrollTop > windowHeight) {
                 $('.banner-content h1, .r-scroll-down').css({
                    '-webkit-transform': 'translateY(0)',
                    '-moz-transform': 'translateY(0)',
                    '-ms-transform': 'translateY(0)',
                    '-o-transform': 'translateY(0)',
                    'transform': 'translateY(0)'
                });
            }
        });

        $('.page-share').on('click', '.toggle-share', function(){
                    $(this).toggleClass('toggle-share-anim');
                    $('.page-share')
                        .find('.shares')
                            .toggleClass('shares-anim');
                });
                $('.nav-left')
                    .closest('#page-wrap')
                    .find('.page-share').css('left', '62px');

    }
    /*==============================
        SELECT STYLE
    ==============================*/
    function selectStyle() {
        if ($('select').length) {
            $.each($('select'), function() {
                var selected = $(this).find('option:selected').text();
                $(this)
                    .wrap('<div class="select-custom"></div>')
                    .css({
                        'z-index':10,
                        'opacity':0,
                        '-khtml-appearance':'none'
                    })
                    .after('<span class="select">' + selected + '</span>' + '<i class="fa fa-angle-down"></i>')
                    .change(function(){
                        val = $('option:selected',this).text();
                        $(this).next().text(val);
                    });
            });
        }
    }

        
    /*==============================
        SKILL PROGRESS
    ==============================*/
    function Skillbar() {
        $(window).scroll(function() {
            if ($('.skill-progress').length) {
                var windowHeight = $(window).height(),
                    windowScroll = $(window).scrollTop(),
                    offset = $('.skillbar').offset().top,
                    heightSkill = $('.skill-progress').height();
                if ((windowHeight + windowScroll) > offset && windowScroll < (offset + heightSkill)) {
                    $('.skillbar').find('.skillbar-inner')
                        .addClass('skillbar-run');

                    $.each($('.skillbar'), function () {
                        var $percent = $(this).find('.percent'),
                            percent = $percent.text(),
                            duration = $(this).data('duration'),
                            easing = $(this).data('easing');
                        if (mobilecheck()) {
                            $percent
                                .parent('.skillbar-run')
                                .css({
                                    'width': percent,
                                    '-webkit-transition': 'all ' + duration + ' ' + easing,
                                    '-moz-transition': 'all ' + duration + ' ' + easing,
                                    '-ms-transition': 'all ' + duration + ' ' + easing,
                                    '-o-transition': 'all ' + duration + ' ' + easing,
                                    'transition': 'all ' + duration + ' ' + easing
                                });
                        } else {
                            $percent
                                .parent('.skillbar-run')
                                .css({
                                    'width': percent,
                                    '-webkit-transition': 'none',
                                    '-moz-transition': 'none',
                                    '-ms-transition': 'none',
                                    '-o-transition': 'none',
                                    'transition': 'none'
                                });
                        }
                    });
                }
            }
        });
    }
    /*==============================
        Scroll down and scroll top
    ==============================*/
    function ScrollTo() {
        $(".r-scroll-down").click(function(){
            var SectionNext = $(this).closest('.section').next();
            $("html,body").animate({
                scrollTop: SectionNext.offset().top
            }, 800, 'easeInOutExpo');
            return false;
        });
        $('.scroll-top').on('click', function() {
            $("html, body").stop().animate({
                scrollTop: 0 
            }, 800, 'easeInOutExpo');
        });
        $(".scroll-work").on('click', function(){
            $("html,body").animate({
                scrollTop:$("#ourwork").offset().top
            }, 800, 'easeInOutExpo');
            return false;
        });
    }
    /*==============================
        Page Slider
    ==============================*/
    function Pageslider() {
        if (mobilecheck()) {
            if ($('.pageslider').length) {
                var delay = 0,
                    scrollTripped = 0,
                    speedSlider = 500,
                    $pageslider = $('.pageslider .bxslider'),
                    mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
                $('.section.full-height').wrapInner('<div class="section-inner"></div>');
                $pageslider.bxSlider({
                    mode: 'vertical',
                    speed: speedSlider,
                    slideMargin: 0,
                    pager: false,
                    controls: false,
                    touchEnabled: false,
                    oneToOneTouch: false,
                    swipeThreshold: 100,
                    onSliderLoad: function(currentIndex) {
                        $('.pageslider').find('.bx-viewport').find('ul').children().eq(currentIndex + 1).addClass('active-slide');
                        if ($(".feature-work-slider").length) {
                            $(".feature-work-slider").owlCarousel({
                                autoPlay: 10000,
                                items: 4,
                                itemsDesktop : [1199,3],
                                itemsDesktopSmall : [992,2],
                                itemsTablet: [767,2],
                                itemsTabletSmall: [600,1],
                                slideSpeed: 600,
                                navigation: true,
                                pagination: false,
                                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
                            });
                        }
                        if ($(".feature-post-slider").length) {
                            $(".feature-post-slider").owlCarousel({
                                autoPlay: 10000,
                                items: 6,
                                itemsDesktop : [1366,4],
                                itemsDesktopSmall : [992,3],
                                itemsTablet: [767,2],
                                itemsTabletSmall: [600,1],
                                slideSpeed: 400,
                                navigation: true,
                                pagination: false,
                                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
                            });
                        }
                    },
                    onSlideBefore: function($slideElement, newIndex){
                        $('.pageslider').find('.bx-viewport').find('ul').children().removeClass('active-slide');
                        $slideElement.addClass('active-slide');
                        var windowHeight = $(window).height();
                        var heightSection = $('.active-slide').find('.section').height()
                        if (heightSection > windowHeight) {
                            setTimeout(function() {
                                $('.pageslider')
                                    .closest('body')
                                    .css('overflow', 'auto');
                                $('html').getNiceScroll().show();
                            }, speedSlider + 100);
                        } else {
                            $('.pageslider')
                                .closest('body')
                                .css('overflow', 'hidden');
                            $('html').getNiceScroll().hide();
                        }
                        $('.scroll-top').on('click', function() {
                            $("html, body").stop().animate({
                                scrollTop: 0 
                            }, 200);
                            $pageslider.goToSlide(0);
                        });
                        if(scrollTripped) delay = 1;
                    },
                    onSlideAfter: function($slideElement, oldIndex, newIndex) {
                        setTimeout(function() {
                            delay = 0;
                        },500);
                    }
                });

                //MOUSEWHEEL
                $('body').bind(mousewheelevt, function(e){
                    scrollTripped = 1;
                    var current = $pageslider.getCurrentSlide(),
                        totalSlides = $pageslider.getSlideCount();
                    var evt = window.event || e;
                    evt = evt.originalEvent ? evt.originalEvent : evt;
                    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;
                    if(delta > 0) {
                        if((totalSlides > current) && (current > 0) && ($(window).scrollTop() == 0) && !delay) {
                            $pageslider.goToPrevSlide();
                            $('.pageslider')
                                .find('.bxslider li')
                                .removeClass('flag');
                            $('.active-slide').addClass('flag');
                        }
                    } else {
                        if(current < (totalSlides - 1) && !delay)
                            $pageslider.goToNextSlide();
                        if(!$('.active-slide').hasClass('flag')) {
                            $('.pageslider')
                                .find('.bxslider li')
                                .removeClass('flag');
                            $('.active-slide').addClass('flag');
                        }
                    }
                });

                //KEYCODE
                $('body').keyup(function(e) {
                    var current = $pageslider.getCurrentSlide(),
                        totalSlides = $pageslider.getSlideCount();
                    if (e.keyCode == 38 || e.keyCode == 37) {
                        if((totalSlides > current) && (current > 0) && ($(window).scrollTop() == 0) && !delay) {
                            $pageslider.goToPrevSlide();
                            $('.pageslider')
                                .find('.bxslider li')
                                .removeClass('flag');
                            $('.active-slide').addClass('flag');
                        }
                    }
                    if (e.keyCode == 40 || e.keyCode == 39) {
                        if(current < (totalSlides - 1) && !delay)
                            $pageslider.goToNextSlide();
                        if(!$('.active-slide').hasClass('flag')) {
                            $('.pageslider')
                                .find('.bxslider li')
                                .removeClass('flag');
                            $('.active-slide').addClass('flag');
                        }
                    }
                });

                //TOUCH
                var lastY;
                $('body').bind('touchmove', function (e) {
                    var currentY = e.originalEvent.touches ? 
                        e.originalEvent.touches[0].pageY : e.pageY,
                        current = $pageslider.getCurrentSlide(),
                        totalSlides = $pageslider.getSlideCount();
                    if ((lastY - currentY) > 110 ) {
                        console.log(lastY -currentY);
                        // //Down
                        if((totalSlides > current) && (current > 0) && ($(window).scrollTop() == 0)) {
                            $pageslider.goToPrevSlide();
                            $('.pageslider')
                                .find('.bxslider li')
                                .removeClass('flag');
                            $('.active-slide').addClass('flag');
                        }
                        
                    } else if ((currentY - lastY) > 40) {
                        //Up
                        if(current < (totalSlides - 1)) {
                            $pageslider.goToNextSlide();
                        }
                        if(!$('.active-slide').hasClass('flag')) {
                            $('.pageslider')
                                .find('.bxslider li')
                                .removeClass('flag');
                            $('.active-slide').addClass('flag');
                        }
                    }
                    lastY = currentY;
                });

                $('.scroll-down').on('click', function() {
                    $pageslider.goToNextSlide();
                });
            }
        } else {
            if ($(".feature-work-slider").length) {
                $(".feature-work-slider").owlCarousel({
                    autoPlay: 10000,
                    items: 4,
                    itemsDesktop : [1199,3],
                    itemsDesktopSmall : [992,2],
                    itemsTablet: [767,2],
                    itemsTabletSmall: [600,1],
                    slideSpeed: 600,
                    navigation: true,
                    pagination: false,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
                });
            }
            if ($(".feature-post-slider").length) {
                $(".feature-post-slider").owlCarousel({
                    autoPlay: 10000,
                    items: 6,
                    itemsDesktop : [1366,4],
                    itemsDesktopSmall : [992,3],
                    itemsTablet: [767,2],
                    itemsTabletSmall: [600,1],
                    slideSpeed: 400,
                    navigation: true,
                    pagination: false,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
                });
            }
        }
    }
    /*==============================
        BUTTON STYLE
    ==============================*/
    function mdBtn() {
        $.each($('.md-btn'), function() {
            var classtype = $(this).attr("class");
            $(this)
                .wrap('<div class="' + classtype +'"></div>')
                .removeClass();
        });
    }

    function Plugandslider() {
        //Fittext
        if ($('.fittext').length) {
            $('.fittext').fitText(1.5, {
                minFontSize: '20px',
                maxFontSize: '60px'
            });
        }

        /*==============================
            TYPER HEADER
        ==============================*/
        if ($('.typer').length) {
            $('[data-typer-targets]').typer({
                highlightSpeed    : 20,
                typeSpeed         : 100,
                clearDelay        : 500,
                typeDelay         : 200,
                clearOnHighlight  : true,
                typerDataAttr     : 'data-typer-targets',
                typerInterval     : 2000
            });
        }

        /*==============================
            Nice scroll
        ==============================*/
        if (mobilecheck()) {
            $('html').niceScroll({
                scrollspeed: 15,
                mousescrollstep: 25,
                cursorborder: 0,
                cursorcolor: "#ff2b7f",
                cursoropacitymin: "visible",
                cursorwidth: 20,
                cursorfixedheight: 20,
                cursorborderradius: 20
            });
        }
        /*==============================
            Feature blog slider
        ==============================*/
        if ($(".blog-feature-slider").length) {
            $(".blog-feature-slider").owlCarousel({
                autoPlay: 20000,
                slideSpeed: 1000,
                navigation: false,
                pagination: true,
                singleItem: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
            });
        }
        /*==============================
            Feature blog slider
        ==============================*/
        if ($(".team-slider").length) {
            $(".team-slider").owlCarousel({
                items: 4,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [992,2],
                itemsTablet: [767,2],
                itemsTabletSmall: [600,1],
                slideSpeed: 200,
                navigation: true,
                pagination: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
            });
        }
        /*==============================
            What we do slider
        ==============================*/
        if ($(".what-we-do-slider").length) {
            $(".what-we-do-slider").owlCarousel({
                items: 2,
                itemsDesktop : [1199,1],
                itemsDesktopSmall : [992,2],
                itemsTablet: [767,1],
                itemsTabletSmall: [600,1],
                slideSpeed: 300,
                navigation: false,
                pagination: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
            });
        }
        /*==============================
            Feature blog slider
        ==============================*/
        if ($(".client-slider").length) {
            $(".client-slider").owlCarousel({
                autoPlay: 10000,
                items: 5,
                itemsDesktop : [1199,4],
                itemsDesktopSmall : [992,4],
                itemsTablet: [767,3],
                itemsTabletSmall: [600,2],
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
            });
        }
        if ($(".client-slider-2").length) {
            $(".client-slider-2").owlCarousel({
                autoPlay: 10000,
                items: 4,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [992,3],
                itemsTablet: [767,3],
                itemsTabletSmall: [600,2],
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
            });
        }
        /*==============================
            Feature blog slider
        ==============================*/
        if ($(".test-slider").length) {
            $(".test-slider").owlCarousel({
                autoPlay: 20000,
                slideSpeed: 1000,
                navigation: false,
                pagination: true,
                singleItem: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
            });
        }
        $('.cart-toggle').on('click', function() {
            $(this).siblings('.view-shop-cart-block').slideToggle(150);
        });
        $('.shop-cart').on('click', function(event) {
            event.stopPropagation();
        });
        $('html').on('click', function() {
            $('.view-shop-cart-block').slideUp(150);
        });
    }


    /*==============================
        Ajax contact form
    ==============================*/
    function ajaxContactForm() {
        if($("#send-message-form").length > 0) {
          // Validate the contact form
          $('#send-message-form').validate({
            // Add requirements to each of the fields
            rules: {
              name: {
                required: true,
                minlength: 2
              },
              email: {
                required: true,
                email: true
              },
              message: {
                required: true,
                minlength: 10
              }
            },

            // Specify what error messages to display
            // when the user does something horrid
            messages: {
              name: {
                required: "Please enter your first name.",
                minlength: $.format("At least {0} characters required.")
              },
              email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
              },
              message: {
                required: "Please enter a message.",
                minlength: $.format("At least {0} characters required.")
              }
            },

            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
              $("#submit-contact").html("Sending...");
              $(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                  $("#contact-content").slideUp(600, function() {
                    $("#contact-content").html(responseText).slideDown(600);
                  });
                }
              });
              return false;
            }
          });
        }
    }
    /*==============================
        Work filter
    ==============================*/
    function FilterWork() {
        if ($('.ourwork').length) 
        {
            var $container = $('.ourwork #work-wrap');
            $container.isotope({
                transitionDuration: '1s',
                hiddenStyle: {
                    opacity: 0,
                    transform: 'translateY(50%)'
                },
                visibleStyle: {
                    opacity: 1,
                    transform: 'translateY(0)'
                }
            });
            $('.ourwork #filters a').click(function(){
                $('.select-filter').removeClass('select-filter');
                $(this).parent('li').addClass('select-filter');
                var selector = $(this).attr('data-filter');
                $('#work-wrap').isotope({ filter: selector });
                return false;
            });
        } 
    }



    /*==============================
        MIDDLE TITLE
    ==============================*/
    function middleTitle() {
        if ($('.parent-content').length)  {
            $('.parent-content').each(function() {
                if ($(window).width() > 992) {
                    var heightParent = $(this).height();
                    $(this)
                        .find('.middle-title')
                        .css({
                            'height': heightParent
                        });

                } else {
                    $('.middle-title').css({
                        'height': 'auto'
                    });
                }
            });
        }
    }
    /*==============================
        Parallax background
    ==============================*/
    function parallaxInit() {
        if (mobilecheck()) {
            $('.banner .awe-parallax').parallax("50%", 0.2);
            $('.our-team .awe-parallax').parallax("50%", 0.2);
            $('.bg-work-1.awe-parallax').parallax("50%", 0.2);
            $('.bg-work-2.awe-parallax').parallax("50%", 0.2);
            $('.bg-about.awe-parallax').parallax("50%", 0.2);
            $('.testimonials .awe-parallax').parallax("50%", 0.2);
        }
    }
    function hoverAnimate() {
        $.each($('[data-hover]'), function() {
            var animate = $(this).data('hover');
            $(this)
                .children()
                .addClass('animated');
            $(this).hover(function() {
                $(this).children().addClass(animate);
            }, function() {
                $(this).children().removeClass(animate);
            });
        });
    }

    // LOAD JS
    $(document).ready(function() {
        Roadmain();

        $(window).on('load', function() {
            $('#page-wrap').removeClass('opacity');
            $('.pageslider').closest('html').getNiceScroll().hide();
            $('.feature-work-slider, .feature-post-slider-wrap').innerWidth($('.pageslider').width());
            FilterWork();
            parallaxInit();
            middleTitle();
        });

        $(window).on('resize', function() {
            if ($(window).width() <= 1100) {
                $('.navigation.nav-top')
                    .addClass('nav-fullscreen nf')
                    .removeClass('nav-top');
            } else {
                if ($('.navigation.nav-fullscreen').hasClass('nf'))
                    $('.navigation.nav-fullscreen')
                        .addClass('nav-top')
                        .removeClass('nav-fullscreen nf');
            }
            BannerandNav();
            middleTitle();
        });

        $(window).on('resize', function() {
            $('.feature-work-slider, .feature-post-slider-wrap').innerWidth($('.pageslider').width());
        }).trigger('resize');
        
    });
})(jQuery);