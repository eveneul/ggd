$(function () {
	$('a').focus(function (e) {
		$('a').removeAttr('aria-selected');
		$(this).attr('aria-selected', true);
	});
});
