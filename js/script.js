function onClickEvent() {
    document.getElementById("blue").style.color = "blue";
    document.getElementById("result").innerHTML =
      "Registration title has been changed to color Blue.";
  }
  
  function onChangeEvent() {
    var x = document.getElementById("gender").value;
    document.getElementById("result").innerHTML = "Your gender is " + x + ".";
  }
  
  function onLoadEvent() {
    document.getElementById("result").innerHTML =
      "The page has successfully loaded or refreshed.";
  }
  
  function onMouseoverEvent(x) {
    x.style.height = "64px";
    x.style.width = "64px";
    document.getElementById("result").innerHTML =
      "The profile image has increased its size.";
  }
  
  function onMouseoutEvent(x) {
    x.style.height = "32px";
    x.style.width = "32px";
    document.getElementById("result").innerHTML =
      "The profile image has decreased its size.";
  }
  
  function onKeypressEvent() {
    document.getElementById("result").innerHTML =
      "You are using your keys on the Full Name text box.";
  }
  