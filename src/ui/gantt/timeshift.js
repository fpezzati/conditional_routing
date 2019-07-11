var TimeShift = (function(){
  var starts, ends = 0;
  return {
    view: function(vnode) {
      return m("div", { class: "timeshift" }, "shift");
    }
  }
})();
