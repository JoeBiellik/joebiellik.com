window.addEvent('domready', function() {
	var accordion = new Fx.Accordion($$('header h1'), $$('article'), {
		opacity: false,
		show: -1,
		alwaysHide: true
	});

	$$('header h1, header img').setStyle('cursor', 'pointer');

	$$('#about header img, a[href^=#about]').addEvent('click', function(e) {
		e.stop();
		accordion.display(0);
	});

	$$('#tools header img, a[href^=#tools]').addEvent('click', function(e) {
		e.stop();
		accordion.display(1);
	});

	$$('#portfolio header img, a[href^=#portfolio]').addEvent('click', function(e) {
		e.stop();
		accordion.display(2);
	});

	$$('#contact header img, a[href^=#contact]').addEvent('click', function(e) {
		e.stop();
		accordion.display(3);
	});
});
