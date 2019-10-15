var TimeShift = (function(){
  var timeshift;
  function handleDrop(item) {
    console.log(JSON.stringify(item));
    item.preventDefault();
  }
  function handleDragOver(item) {
    item.preventDefault();
  }
  function handleDragStart(item) {
    item.dataTransfer.setData("shift", JSON.stringify(timeshift));
  }
  return {
    view: function(vnode) {
      return m("div", {
        class: "timeshift",
        style: {
          top: timeshift.y+"px" ,
          left: (timeshift.x + timeshift.lasts)+"px"
        },
        ondrop: handleDrop,
        ondragover: handleDragOver,
        ondragstart: handleDragStart,
        draggable: "true"
      }, "shift");
    },
    setTimeShift: function(val) {
      timeshift = val;
    }
  }
})();
