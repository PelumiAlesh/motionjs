!function(l){l.fn.visible=function(s){var o=l(this),i=l(window),n=i.scrollTop(),a=n+i.height(),t=o.offset().top,c=t+o.height();return(!0===s?t:c)<=a&&(!0===s?c:t)>=n}}(jQuery);var win=$(window),allMods=$("[class*=m-]");allMods.each(function(l,s){(s=$(s)).visible(!0)&&s.addClass("start")}),win.scroll(function(l){allMods.each(function(l,s){(s=$(s)).visible(!0)&&s.addClass("start")})});