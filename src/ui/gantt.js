var Gantt = (function () {
  var shifts = [];
  var eventbus = {};
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
      ShiftButtons.eventbus = this.eventbus;
      TimeShift.eventbus = this.eventbus;
      eventbus.subscribe({
        type: "addshift",
        handle: function(action) {
          shifts.push({});
        }
      });
    },
    view: function(vnode) {
      return m("div", [
        m(Head),
        m("div", shifts.map(function(shift) {
//            return m(TimeShift, shift);
            return m("div", JSON.stringify(shift));
          })
        ),
        m(ShiftButtons)
      ]);
    }
  }
})();
