/* eslint-disable max-len */
import { devicesData} from '../../constants/devicesData';
import { promoCampaignData } from '../../constants/promoCampaignIds';

class ShopPresenter {
  /**
   * @param {ShopView} view
   * @param {ShopModel} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.updateView();
  }

  handleWindowPopState() {
    this.updateView();
  }

  stringifyPrice(price) {
    const priceArray = price.toString().split('');
    priceArray.splice(-3, 0, ' ');
    return `${priceArray.join('')}&nbsp;₽`;
  }

  getDiscount(item) {
    const discountValueArr = item.promoCampaigns.reduce((acc, curr) => {
      const el = promoCampaignData.filter((promoCampaignId) => promoCampaignId.id === curr.id);
      if (el.length > 0) {
        acc.push(...el);
      }
      return acc;
    }, []);

    const discountValue = discountValueArr[0]?.discount ?? 0;
    return discountValue;
  }

  getDiscountedPrice(item, discount) {
    const discountedPrice = Math.ceil(item.price.amount - (
      (item.price.amount * discount) / 100
    ));
    return discountedPrice;
  }

  createViewState() {
    const items = this.model.getSubscriptions();
    const filteredItems = [];
    devicesData.forEach((devicesDataObj) => {
      items?.forEach((item) => {
        if (item.article === devicesDataObj.article) {
          const discountValue = this.getDiscount(item);
          const discountedPrice = this.getDiscountedPrice(item, discountValue);
          filteredItems.push({
            article: item.article,
            name: item.frontName,
            categorySlug: item.categorySlug,
            slug: item.slug,
            pickupAvailable: item.pickupAvailable,
            deliveryAvailable: item.deliveryAvailable,
            discountValue,
            price: item.price.amount,
            stringifiedPrice: this.stringifyPrice(item.price.amount),
            stringifiedDiscountedPrice: this.stringifyPrice(discountedPrice),
            img: devicesDataObj.image,
            img2x: devicesDataObj.image2x,
          });
        }
      });
    });

    return filteredItems;
  }

  updateView() {
    this.view.state = this.createViewState();
    this.view.renderShop();
  }
}

export default ShopPresenter;
