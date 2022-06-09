const customerService = {
  preload(uniqueKey) {
    store.commit('setRootState', { customerServiceLoaded: true });
    store.dispatch('actionSwitchLoading', true);

    let root = document.createElement("div");
    root.setAttribute("id", "fb-root");
    let chatbox = document.createElement("div");
    chatbox.setAttribute("id", "fb-customer-chat");
    chatbox.className = "fb-customerchat";
    let s1 = document.createElement("script");
    let s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(root,s0);
    s0.parentNode.insertBefore(chat,s0);
    s0.parentNode.insertBefore(s1,s0);

    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v13.0'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  open(uniqueKey) {
    this.preload(uniqueKey);
  }
}

export default customerService;