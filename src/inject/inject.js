chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // Find target element 
      var zoomHeader = document.getElementById('zoomHeader');

      // Inject button
      addButtonToPage(zoomHeader, toggleSidenavVisibility);

      function addButtonToPage(targetElement, eventHandler) {
        var button = document.createElement('input');
        button.id = 'toggle-sidenav';
        button.type = 'button';
        button.value = 'Toggle Sidenav'
        // attach a click and keyup event handlers to the button
        button.onclick = eventHandler;
        button.onkeyup = eventHandler;
        // Attch button to page
        var parentElement = targetElement.parentElement;
        parentElement.insertBefore(button, zoomHeader);
      }

      function toggleSidenavVisibility(e) {
        // toggle visibility on click
        if ( e.type === 'click' || e.keyCode ==='13' ) {
          var sidenav = document.querySelectorAll("[data-auto='mySidenav']")[0];
          sidenav.classList.toggle('hidden');
        }
      }

    }
	}, 10);
});