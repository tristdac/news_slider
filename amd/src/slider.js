/* jshint ignore:start */
define(['jquery', 'block_news_slider_plus/slick', 'theme_bootstrapbase/bootstrap', 'core/log'], function($, slick, bootstrap, log) {

    "use strict"; // ... jshint ;_;.

    log.debug('news_slider_plus slider.js function called');

    return {
        init: function(showdots) {
            $(document).ready(function($) {
                // Style 2
                $('.style2 .multiple-items').slick({
                    dots: showdots,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    swipe: 1,
                    responsive: [
                      {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 550,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                mobileFirst: true
                            }
                    }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object.
                    ]
                  });

                // Style 3
                $('.style3 .multiple-items').slick({
                    dots: showdots,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    swipe: 1,
                    responsive: [
                    {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                    }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object.
                    ]
                  });

                // Style 4
                $('.style4 .multiple-items').slick({
                    dots: showdots,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    swipe: 1,
                    responsive: [
                      {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 550,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                mobileFirst: true
                            }
                    }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object.
                    ]
                  });

                // Style 5
                $('.style5 .multiple-items').slick({
                    dots: showdots,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    swipe: 1,
                    responsive: [
                    {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                    }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object.
                    ]
                  });

                $('.responsive').slick({
                    dots: showdots,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    responsive: [
                      {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                    },
                      {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                    }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object.
                    ]
                  });
                
            });
        }
    };
});

/* jshint ignore:end */
