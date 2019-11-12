var Gantt = (function () {
  var shifts = [];
  var eventbus = {};
  function handleDrop(item) {
    var incomingShift = JSON.parse(item.dataTransfer.getData("shift"));
    shifts.filter(shift => shift.id === incomingShift.id).forEach(shift => {
      console.log("Shift found");
      shift.x = item.pageX - item.target.offsetLeft;
      shift.y = item.pageY - item.target.offsetTop;
    });
  }
  function handleDragOver(item) {
    item.preventDefault();
  }
  function getTimeShifts() {
    return shifts;
  }
  function setTimeShifts(item) {
    shifts = item;
  }
  return {
    oncreate: function(vnode) {
      eventbus = this.eventbus;
      ShiftButtons.eventbus = this.eventbus;
      eventbus.subscribe({
        type: "addshift",
        handle: function(action) {
          var s = {
            id: uuidv5(Math.random().toString(36), uuidv5.URL),
            x: action.data.x,
            y: action.data.y,
            lasts: action.data.lasts
          };
          shifts.push(s);
        }
      });
    },
    view: function(vnode) {
      return m("div", [
        m(Head),
        m("div", {
          class: "gantt-board",
          ondrop: handleDrop,
          ondragover: handleDragOver
          }, shifts.map(function(shift) {
            return m(TimeShift, shift)
          }),
        /* this is about debug purpose only.
        m("div", shifts.map(function(shift) {
            return m("div", JSON.stringify(shift));
          }))
        ),
        */
        m(ShiftButtons)
      ]);
    }
  }
})();
