/**
 * Extension for jQuery for show menu 
 * Created by Artem Votincev (apmem.org)
 * Copyiright (c) 2010 Artem Votincev (apmem.org)
 * Download from http://git.apmem.org/jq-menu/
 *
 * @requires jQuery.js
 * @version 1.0 
 * @author artem
 */

(function($) {
    $.fn.menu = function(settings) {
        $(this).each(function() {
            var config = {
                speed: 300,
                delaytime: 200,
                zIndex: 1000
            }
            if (settings) $.extend(config, settings);
            $(this).children().each(function(){
            // first element - header text
                var header = $(this).children().first();
                var body = $(header).next();
                var frame = $('<iframe src="javascript:\'&lt;html&gt;&lt;/html&gt;\';" frameborder="0" scrolling="no" style="display:none;position:absolute;border:none;z-index:0"/>');
                frame.appendTo($(this));
                var headLeft = header.position().left;
                var realLeft = (headLeft + body.outerWidth() < $(document).width()) ? headLeft : (headLeft + header.outerWidth() - body.outerWidth() < 0) ? 0: headLeft + header.outerWidth() - body.outerWidth();
                body.css({ position: 'absolute', left: realLeft, top: header.position().top + header.innerHeight(), display: 'none'});
                frame.css({ width: body.outerWidth(), height: body.outerHeight() + 6, left: realLeft, top: header.position().top + header.innerHeight()});
                var hidetimer = 0;
                header.hover(function(){
                    if(hidetimer != 0)
                    {
                        clearTimeout(hidetimer);
                        hidetimer = 0;
                    }else {
                        frame.show(config.speed);
                        body.show(config.speed);
                    }
                    }, function(){
                        hidetimer = setTimeout(function(){
                            frame.hide(config.speed);
                            body.hide(config.speed);
                            hidetimer = 0;
                        }, config.delaytime);
                    });
                    body.hover(function(){
                    if(hidetimer != 0)
                    {
                        clearTimeout(hidetimer);
                        hidetimer = 0;
                    }
                }, function(){
                    hidetimer = setTimeout(function(){
                        frame.hide(config.speed);
                        body.hide(config.speed);
                        hidetimer = 0;
                    }, config.delaytime);
                });
            })
        });
    }
})(jQuery);
