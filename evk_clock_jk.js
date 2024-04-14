/*!
 * evk_clock_jk.js 1.0.0
 * https://github.com/JohnKu2020/evk_clock
 *
 * Released under the MIT
 * https://github.com/JohnKu2020/evk_clock_jk/blob/main/LICENSE
 */
(function($) {
	$.fn.evkJKclock = function (options) {
		'use strict';
		return $(this).each(function () {
			var defaults = { lang: 'ru', width: '100%', backgroundcolor: 'transparent', color: '#000000'},
			activeOptions = $.extend(defaults, options),
			self = this,
			element = $(this),
			element_id = element.attr("id"),
			element_class = 'evk_clock',
			lang = '',
			day,
			dayofweek,
			hh,
			mm,
			dd,
			nday=[],
			evk_clock = {'ctrl_main':null, 'ctrl_h':null, 'ctrl_m':null, 'ctrl_d':null, 'ctrl_col':null, 'cur_h':'', 'cur_m':'', 'cur_d':'', 'clock_opq': 1, 
			'str_clock': '<span id="evk_hour">00</span><span id="evk_colomn">:</span><span id="evk_min">00</span><span id="evk_day"></span>'},
			initElement = function () {
				if (activeOptions['lang'] === undefined || activeOptions['lang'] === null) {
						if(navigator.browserLanguage){ lang = navigator.browserLanguage; } else { lang = navigator.language; };
						lang = lang.substr(0,2).toLowerCase();
						if (lang === undefined || lang === null) lang = 'ru'; 
					} else { 
						lang = activeOptions['lang']; 
				}
				if(lang=='en'){ nday=['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat']; } else if(lang=='ua') { nday=['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ]; } else { nday=['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ]; }
				//element.html(str_clock).css('cursor', 'pointer');
			},
			TimeFunc = function () {
				if(evk_clock['ctrl_main']) {
					var d = new Date(), h = d.getHours(), m = d.getMinutes(); day = d.getDate(), dayofweek = d.getDay();
					hh = h % 100 < 10 ? '0' + h : h;
					mm = m % 100 < 10 ? '0' + m : m;
					dd = day % 100 < 10 ? '0' + day : day;
					if (evk_clock['cur_m']!= m) {
						evk_clock['ctrl_m'].textContent = mm; evk_clock['cur_m'] = m;
						if (evk_clock['cur_h']!= h) { evk_clock['ctrl_h'].textContent = hh; evk_clock['cur_h'] = h; }
						if (evk_clock['cur_d']!= day) { evk_clock['ctrl_d'].textContent = nday[dayofweek] + '. ' + dd; evk_clock['cur_d'] = day; }
					}
					evk_clock['clock_opq'] = evk_clock['clock_opq'] == 1 ?  evk_clock['clock_opq'] = 0.2 : 1;
					evk_clock['ctrl_col'].style.opacity = evk_clock['clock_opq'];
				}
			}
			
			window.addEventListener('DOMContentLoaded', (event) => {
				initElement();
				evk_clock['ctrl_main'] = document.getElementById('evk_clock_ctrl');
				evk_clock['ctrl_main'].innerHTML = evk_clock['str_clock'];
				evk_clock['ctrl_h'] = document.getElementById('evk_hour');
				evk_clock['ctrl_col'] = document.getElementById('evk_colomn');
				evk_clock['ctrl_m'] = document.getElementById('evk_min');
				evk_clock['ctrl_d'] = document.getElementById('evk_day');
				evk_clock['cur_m'] = 99;
				evk_clock['cur_h'] = 99;
				evk_clock['cur_d'] = 99;
				TimeFunc();
				setInterval(TimeFunc, 1000);
			});			

		});
	}
})(jQuery);