var TimeShift = (function(){
  function handleDrop(item) {
    console.log(JSON.stringify(item));
    item.preventDefault();
  }
  function handleDragOver(item) {
    item.preventDefault();
  }
  function handleDragStart(item) {
    item.dataTransfer.setData("shift", this);
  }
  return {
    view: function(vnode) {
      return m("div", {
        class: "timeshift",
        style: {
          top: vnode.attrs.y+"px" ,
          left: (vnode.attrs.x + vnode.attrs.lasts)+"px"
        },
        ondrop: handleDrop,
        ondragover: handleDragOver,
        ondragstart: handleDragStart,
        draggable: "true"
      }, "shift");
    }
  }
})();
