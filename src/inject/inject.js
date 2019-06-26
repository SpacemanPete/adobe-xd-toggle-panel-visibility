chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // Inject button
      addButtonToPage(document.body, toggleSidenavVisibility);
      
      function addButtonToPage(context, func) {
        var button = document.createElement('input');
        button.type = 'button';
        button.value = 'Hide Sidenav'
        // attach a click and keyup event handlers to the button
        button.onclick = func;
        button.onkeyup = func;
        // Attch button to page
        context.appendChild(button);
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