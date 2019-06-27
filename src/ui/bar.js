var Bar = (function() {
  return {
    oncreate: function(vnode) {
      Head.eventbus = this.eventbus;
    },
    view: function(vnode) {
      return m("div", [
        m(Head),
        m("div", "Bar!")
      ]);
    }
  }
})();
