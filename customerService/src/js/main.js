const _switchCustomerService = (newCustomerService, oldCustomerService, customerServiceList, isPreload) => {
    let property;
    let isFound = false;
    switch (newCustomerService[0]) {
      case 'livechat':
        property = 'uniqueKey';
        break;
      // jivo, tawk, zendesk
      default:
        property = 'url';
    }
  
    const customerServiceMapping = (targetCustomerService, displayValue) => {
      let allIframe = Array.apply(null, document.querySelectorAll('iframe'));
      let targetIframe;
      switch(targetCustomerService) {
        case 'tawk':
          targetIframe = allIframe.filter(node => node.title == 'chat widget');
          if (targetIframe.length > 0) {
            isFound = true;
            targetIframe[0].parentNode.style = `display: ${displayValue} !important`
          } else {
            isFound = false;
          }
          break;
        case 'jivo':
          targetIframe = allIframe.filter(node => node.title == 'Jivochat');
          let targetTag = document.querySelector('jdiv');
          if (targetIframe.length > 0 && targetTag) {
            isFound = true;
            targetIframe[0].parentNode.style = `display: ${displayValue} !important`;
            targetTag.style = `display: ${displayValue} !important`;
          } else {
            isFound = false;
          }
          break;
        case 'respondio':
          targetIframe = allIframe.filter(node => node.title == 'Webchat Widget');
          if (targetIframe.length > 0) {
            isFound = true;
            targetIframe[0].parentNode.style = `display: ${displayValue} !important`;
          } else {
            isFound = false;
          }
          break;
        case 'livechat':
          targetIframe = allIframe.filter(node => node.title == 'LiveChat chat widget');
          if (targetIframe.length > 0) {
            isFound = true;
            targetIframe[0].parentNode.style = `display: ${displayValue} !important`;
          } else {
            isFound = false;
          }
          break;
        default:
          break;
      }
    }
  
    if (newCustomerService[0] !== oldCustomerService) {
      // 隱藏舊的開新的
      customerServiceMapping(oldCustomerService, 'none');
      customerServiceMapping(newCustomerService[0], 'unset');
      if (isPreload) {
        if (!isFound) {
          customerServiceList[newCustomerService[0]].preload('12991488');
        }
      }
    } else {
      // 檢查新的有沒有存在 有就顯示 沒有就重載入
      customerServiceMapping(newCustomerService[0], 'unset');
      customerServiceList[newCustomerService[0]].open(newCustomerService[1][property]);
    }
}

