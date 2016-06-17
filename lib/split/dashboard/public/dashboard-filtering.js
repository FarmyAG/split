$(function() {
  $('#filter').on('keyup', function() {
    $input = $(this);

    if ($input.val() == '') {
      $('div.experiment').show();
      return false;
    }

    $('div.experiment').hide();
    selector = 'div.experiment[data-name*="' + $input.val() + '"]';
    $(selector).show();
  });

  $('#toggle-completed').on('click', function() {
    $button = $(this);
    if ($button.val() == 'Hide completed') {
      $button.val('Show completed');
    } else {
      $button.val('Hide completed');
    }

    $('div.experiment[data-complete="true"]').toggle();
  });
});
