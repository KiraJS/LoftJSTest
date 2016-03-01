function showContent(_eventCurrentTarget) {
  var curentSubmenu = _eventCurrentTarget.childNodes[5];
  var triangle = _eventCurrentTarget.childNodes[1];
  console.log("_eventCurrentTarget", _eventCurrentTarget.childNodes);
  if(curentSubmenu.style.display == "block"){
    curentSubmenu.style.display = "none"
    triangle.style.transform = "rotate(0deg)"

  } else {
    curentSubmenu.style.display = "block"
    triangle.style.transform = "rotate(60deg)"
  }
}

