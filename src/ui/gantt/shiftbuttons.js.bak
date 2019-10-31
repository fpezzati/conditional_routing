var ShiftButtons = (function() {
  var eventbus = {};
  function addshift() {
    eventbus.publish({
      type: "addshift"
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
