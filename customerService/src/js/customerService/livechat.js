const customerService = {
  open(uniqueKey) {
    if (window.LiveChatWidget) {
      const { visibility } = window.LiveChatWidget.get("state"); // 'maximized' | 'minimized' | 'hidden'
      if (visibility !== 'maximized') {
        window.LiveChatWidget.call("maximize");
      } else {
        window.LiveChatWidget.call("hide");
      }
    } else {
      // 引入Live Chat
      this.preload(uniqueKey, true);
    }
  },
  preload(uniqueKey, show = false) {
    window.__lc = window.__lc || {};
    window.__lc.license = uniqueKey;
    const loaded = () => {
      if (window.LiveChatWidget) {
        setTimeout(() => {
          if (show) this.forceOpen();
        }, 1000);
        return;
      }
      setTimeout(loaded, 500);
    }
    // ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
    (function livechatfn(n, t, c) {
      let e;
      function iLivechatfn(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) }
      e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function iLivechatfnOn() {
          iLivechatfn(["on", c.call(arguments)])
        },
        once: function iLivechatfnOnce() {
          iLivechatfn(["once", c.call(arguments)])
        },
        off: function iLivechatfnOff() {
          iLivechatfn(["off", c.call(arguments)])
        },
        get: function iLivechatfnGet() {
          if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return iLivechatfn(["get", c.call(arguments)])
        },
        call: function iLivechatfnCall() {
          iLivechatfn(["call", c.call(arguments)])
        },
        init: function iLivechatfnInit() {
          let n = t.createElement("script");
          n.async = !0;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          n.onload = loaded;
          t.head.appendChild(n)
        }
      };
      !n.__lc.asyncInit && e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    }(window, document, [].slice))
  },
  forceOpen() {
    let op = () => {
      let { visibility } = window.LiveChatWidget.get("state"); // 'maximized' | 'minimized' | 'hidden'
      if (!window.LiveChatWidget) return;
      if (visibility === 'maximized') return;
      window.LiveChatWidget.call("maximize");
      setTimeout(op, 1000);
    }
    op();
  },
}

export default customerService;