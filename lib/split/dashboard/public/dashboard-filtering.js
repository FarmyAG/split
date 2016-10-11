$(function() {
  function filterExperiments() {
    $searchInput = $('#filter');
    $completeBtn = $('#toggle-completed');

    $('div.experiment').each(function(index, experiment) {
      experiment = $(experiment);

      if ($completeBtn.val() == 'Show completed' && experiment.data('complete') == true) {
        experiment.hide();
        return;
      }

      if ($searchInput.val() != '' && experiment.data('name').indexOf($searchInput.val()) == -1) {
        experiment.hide();
        return;
      }

      experiment.show();
    });
  }

  $('#filter').on('keyup', function() {
    filterExperiments();

    var filterValue = $('#filter').val();

    history.pushState({ q: filterValue }, "Split", "/split?q=" + filterValue);
  });

  $('#toggle-completed').on('click', function() {
    $button = $(this);
    if ($button.val() == 'Hide completed') {
      $button.val('Show completed');
    } else {
      $button.val('Hide completed');
    }

    filterExperiments();
  });

  filterExperiments();
});
