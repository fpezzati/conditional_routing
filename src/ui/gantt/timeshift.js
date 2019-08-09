var TimeShift = (function(){
  return {
    view: function(vnode) {
      return m("div", { class: "timeshift", style: {top: vnode.attrs.y+"px" , left: (vnode.attrs.x + vnode.attrs.lasts)+"px" } }, "shift");
    }
  }
})();
