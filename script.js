
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.openpop');
  var currentButton = null; // Track the most recent button clicked
  var currentRedirectUrl = null; // Track the redirect URL associated with the most recent button
  var userSubmitted = false; // Track the user's submission status

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var popupId = this.getAttribute('data-popup-id');
      var redirectUrl = this.getAttribute('data-redirect-url');
      if (popupId) {
        currentButton = button; // Update the current button clicked
        currentRedirectUrl = redirectUrl; // Update the current redirect URL

        // Check if the user has already submitted the form
        if (userSubmitted) {
          // Redirect the user to the specified URL
          if (currentRedirectUrl) {
            window.open(currentRedirectUrl, '_blank');
            currentButton = null; // Reset the current button and redirect URL to prevent further openings
            currentRedirectUrl = null;
          }
        } else {
          elementorProFrontend.modules.popup.showPopup({ id: popupId });
          observePopupContainer(popupId);
        }
      }
    });
  });

  function observePopupContainer(popupId) {
    var popupContainer = document.querySelector('#elementor-popup-modal-' + popupId + ' > div');

    if (!popupContainer) {
      console.log('Popup container not found for popup ID: ' + popupId);
      return;
    }

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var formSubmitted = popupContainer.querySelector('.formrsubmited');
        if (formSubmitted && formSubmitted.style.display !== 'none') {
          // CSS class .formrsubmited is visible within the popup container
          console.log('CSS class .formrsubmited is now visible within the popup ID: ' + popupId);

          // Set the userSubmitted flag to true to indicate form submission
          userSubmitted = true;

          // Redirect the user to the specified URL
          if (currentRedirectUrl) {
            window.open(currentRedirectUrl, '_blank');
            currentButton = null; // Reset the current button and redirect URL to prevent further openings
            currentRedirectUrl = null;
          }
        } else {
          // CSS class .formrsubmited is not visible within the popup container
          console.log('CSS class .formrsubmited is now hidden within the popup ID: ' + popupId);
          // Perform additional actions here
        }
      });
    });

    var observerConfig = { 
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['style']
    };

    observer.observe(popupContainer, observerConfig);
  }
});

