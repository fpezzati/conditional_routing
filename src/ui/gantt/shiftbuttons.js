var ShiftButtons = (function() {
  var eventbus = {};
  function addshift() {
    eventbus.publish({
        type: "addshift",
        data: { "x": 200, "y": 200, "lasts": 100 }
    });
  }
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
    },
    view: function(vnode) {
      return m("div", [
        m("button", { onclick: addshift }, "+")
      ]);
    }
  }
})();
