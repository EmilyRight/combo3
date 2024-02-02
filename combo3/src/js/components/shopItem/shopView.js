// import devices from '../../constants/devices';
import ShopItemView from './shopItemView';

class ShopView {
  constructor() {
    this.state = null;
  }

  renderShop() {
    const devices = this.state;
    const shopList = document.querySelector('.shop-list');
    if (devices.length > 0) {
      shopList.innerHTML = '';
      devices?.forEach((item) => {
        if (item.price) {
          const shopItem = new ShopItemView(item).createElement();
          shopList.appendChild(shopItem);
        }
      });
    }
  }
}

export default ShopView;
