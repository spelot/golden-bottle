import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import inputmask from 'inputmask/dist/inputmask/inputmask.numeric.extensions';

$(() => {
	svg4everybody();
});

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function validatePhone(phone) {
	phone = phone.replace(/[^0-9]+/g, '');
	return phone.length === 11;
}

$(window).load(() => {
	$('.preloader').fadeOut('slow', () => {
		$('.content').fadeIn('slow');
	});

	inputmask({mask: '+9 (999) 999-99-99'}).mask($('.input-box__input[name="tel"]'));

	$('.input-box__input').focus(function () {
		const currentLabel = $(this).prev();

		if ( !currentLabel.hasClass('input-box__label_active') ) {
			currentLabel.addClass('input-box__label_active');
			currentLabel.fadeIn(200);
		}
	});

	$('.input-box__input').focusout(function () {
		switch ( $(this).attr('name') ) {
			case 'name':
				if ( $.trim( $(this).val() ) ) {
					// console.log('validation NAME RIGHT');
					$(this).removeClass('input-box__input_error');
					$(this).addClass('input-box__input_done');
					$('.form__submit').removeClass('form__submit_disabled');
					if ( $(this).next().hasClass('input-box__tooltip-error') ) {
						$(this).next().remove();
					}
				}
				else {
					// console.log('validation NAME WRONG');
					$(this).removeClass('input-box__input_done');
					$(this).addClass('input-box__input_error');
					$('.form__submit').addClass('form__submit_disabled');
					if ( !$(this).next().hasClass('input-box__tooltip-error') ) {
						$(this).after('<p class="input-box__tooltip-error">Введите имя и фамилию</p>');
					}
				}
				break;
			case 'tel':
				if ( validatePhone( $(this).val() ) ) {
					// console.log('validation TEL RIGHT');
					$(this).removeClass('input-box__input_error');
					$(this).addClass('input-box__input_done');
					$('.form__submit').removeClass('form__submit_disabled');
					if ( $(this).next().hasClass('input-box__tooltip-error') ) {
						$(this).next().remove();
					}
				}
				else {
					// console.log('validation TEL WRONG');
					$(this).removeClass('input-box__input_done');
					$(this).addClass('input-box__input_error');
					$('.form__submit').addClass('form__submit_disabled');
					if ( !$(this).next().hasClass('input-box__tooltip-error') ) {
						$(this).after('<p class="input-box__tooltip-error">Введите корректный номер</p>');
					}
				}
				break;
			case 'email':
				if ( validateEmail( $(this).val() ) ) {
					// console.log('validation EMAIL RIGHT');
					$(this).removeClass('input-box__input_error');
					$(this).addClass('input-box__input_done');
					$('.form__submit').removeClass('form__submit_disabled');
					if ( $(this).next().hasClass('input-box__tooltip-error') ) {
						$(this).next().remove();
					}
				}
				else {
					// console.log('validation EMAIL WRONG');
					$(this).removeClass('input-box__input_done');
					$(this).addClass('input-box__input_error');
					$('.form__submit').addClass('form__submit_disabled');
					if ( !$(this).next().hasClass('input-box__tooltip-error') ) {
						$(this).after('<p class="input-box__tooltip-error">Введите корректный email</p>');
					}
				}
				break;
		}
	});

	$('.radio-buttons__input').change(function () {
		const animationSpeed = 'fast';

		switch ( $(this).val() ) {
			case 'strength':
				$('.question__description').fadeOut(animationSpeed, function () {
					$('.question__description').text('Lorem ipsum dolor sit amet.');
				});
				$('.question__description').fadeIn(animationSpeed);
				break;
			case 'taste':
				$('.question__description').fadeOut(animationSpeed, function () {
					$('.question__description').text('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.');
				});
				$('.question__description').fadeIn(animationSpeed);
				break;
			case 'color':
				$('.question__description').fadeOut(animationSpeed, function () {
					$('.question__description').text('Настоящий солод для шотландского стаута проходит три стадии обработки, после которых вкусовые качества напитка получаются совершенно бесподобными!');
				});
				$('.question__description').fadeIn(animationSpeed);
				break;
			case 'ingredients':
				$('.question__description').fadeOut(animationSpeed, function () {
					$('.question__description').text('Lorem ipsum dolor sit amet consectetur adipisicing.');
				});
				$('.question__description').fadeIn(animationSpeed);
				break;
			case 'age':
				$('.question__description').fadeOut(animationSpeed, function () {
					$('.question__description').text('Lorem, ipsum dolor.');
				});
				$('.question__description').fadeIn(animationSpeed);
				break;
		}
	});

	$('.form__submit').click(function (e) {
		e.preventDefault();

		let stagesValidationRight = 0;

		if ( !$('.form_submit').hasClass('form__submit_disabled') ) {
			$('.input-box__input').each(function (index) {
				if ( !$(this).prev().hasClass('input-box__label_active') ) {
					$(this).prev().addClass('input-box__label_active');
					$(this).prev().fadeIn(200);
				}

				switch (index) {
					case 0:
						if ( $.trim( $(this).val() ) ) {
							// console.log('validation NAME RIGHT');
							stagesValidationRight++;
							$(this).removeClass('input-box__input_error');
							$(this).addClass('input-box__input_done');
							$('.form__submit').removeClass('form__submit_disabled');
							if ( $(this).next().hasClass('input-box__tooltip-error') ) {
								$(this).next().remove();
							}
						}
						else {
							// console.log('validation NAME WRONG');
							$(this).removeClass('input-box__input_done');
							$(this).addClass('input-box__input_error');
							$('.form__submit').addClass('form__submit_disabled');
							if ( !$(this).next().hasClass('input-box__tooltip-error') ) {
								$(this).after('<p class="input-box__tooltip-error">Введите имя и фамилию</p>');
							}
						}
						break;
					case 1:
						if ( validatePhone( $(this).val() ) ) {
							// console.log('validation TEL RIGHT');
							stagesValidationRight++;
							$(this).removeClass('input-box__input_error');
							$(this).addClass('input-box__input_done');
							$('.form__submit').removeClass('form__submit_disabled');
							if ( $(this).next().hasClass('input-box__tooltip-error') ) {
								$(this).next().remove();
							}
						}
						else {
							// console.log('validation TEL WRONG');
							$(this).removeClass('input-box__input_done');
							$(this).addClass('input-box__input_error');
							$('.form__submit').addClass('form__submit_disabled');
							if ( !$(this).next().hasClass('input-box__tooltip-error') ) {
								$(this).after('<p class="input-box__tooltip-error">Введите корректный номер</p>');
							}
						}
						break;
					case 2:
						if ( validateEmail( $(this).val() ) ) {
							// console.log('validation EMAIL RIGHT');
							stagesValidationRight++;
							$(this).removeClass('input-box__input_error');
							$(this).addClass('input-box__input_done');
							$('.form__submit').removeClass('form__submit_disabled');
							if ( $(this).next().hasClass('input-box__tooltip-error') ) {
								$(this).next().remove();
							}
						}
						else {
							// console.log('validation EMAIL WRONG');
							$(this).removeClass('input-box__input_done');
							$(this).addClass('input-box__input_error');
							$('.form__submit').addClass('form__submit_disabled');
							if ( !$(this).next().hasClass('input-box__tooltip-error') ) {
								$(this).after('<p class="input-box__tooltip-error">Введите корректный email</p>');
							}
						}
						break;
				}
			});
		}

		if (stagesValidationRight === 3) {
			// $('.form').submit();
			console.log( $('.form').serializeArray() );
		}
	});
});
