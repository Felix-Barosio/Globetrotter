function showHiddenDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementsByClassName('hidden');
      if(visibleDivId === hidden) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }}