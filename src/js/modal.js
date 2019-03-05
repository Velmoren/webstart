$(document).ready(function() {
  var button = $('#button');
  var buttonTwo = $('#button__2');
  var modal = $('#modal');
  var close = $('#close');
  var autoClose;
  button.on('click', function() {
    modal.addClass('modal_active');
    document.body.style.overflow = 'hidden';
    autoClose = setTimeout(closeModal, 5000);
  });

  buttonTwo.on('click', function() {
    modal.addClass('modal_active');
    document.body.style.overflow = 'hidden';
    autoClose = setTimeout(closeModal, 5000);
  });

  close.on('click', closeModal);
  function closeModal() {
    modal.removeClass('modal_active');
    document.body.style.overflow = '';
    clearTimeout(autoClose);
  }
});

