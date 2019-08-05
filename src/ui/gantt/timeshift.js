var TimeShift = (function(){
  var starts, ends = 0;
  var displaybuttons = false;
  function showShiftButtonBar() {
    displaybuttons = true;
    window.setTimeout(function() {
      displaybuttons = false;
    }, 2000);
  }
  function addshift() {
    console.log("addshift");
  }
  function removeshift() {
    console.log("removeshift");
  }
  return {
    view: function(vnode) {
      return m("div", [
        m("div", { class: "timeshift", onmouseover: showShiftButtonBar }, "shift"),
        displaybuttons ?
        m("div", [
          m("button", { onclick: addshift }, "+"),
          m("button", { onclick: removeshift }, "-")
        ]) : null
      ]);
    }
  }
})();
