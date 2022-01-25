const customerService = {
  preload(urlKey) {
    store.dispatch('actionSwitchLoading', true);
    const checkScript = document.getElementById('respondio__widget');
    let s1 = document.createElement("script");
    let s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.setAttribute("id", "respondio__widget");
    s1.type = 'text/javascript';
    s1.src = urlKey;
    if (!checkScript) {
      setTimeout(() => {
        s0.parentNode.insertBefore(s1,s0);
        window.location.hash = '#webchat_widget';
      }, 1000);
    }
  },
  open(urlKey) {
    this.preload(urlKey);
  }
}

export default customerService;