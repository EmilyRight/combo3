class ShopItemView {
  constructor(itemObject) {
    this.itemObject = itemObject;
    this.htmlComponent = document.createDocumentFragment();
    this.htmlComponent.append(this.createElement());
  }

  createElement() {
    const wrapper = document.createElement('li');
    wrapper.classList.add('shop-list__item');
    wrapper.classList.add('shop-item');
    wrapper.setAttribute('id', `${this.itemObject.article}`);

    wrapper.innerHTML = `
    <div class="shop-item__label">Скидка&nbsp;${this.itemObject.discountValue}%</div>
    <div class="shop-item__image">
      <picture>
        <source
          media="(min-width: 1600px), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
          type="image/webp"
          srcset=${this.itemObject.img2x}
        />
        <img src=${this.itemObject.img} alt="" />
      </picture>
    </div>
    <div class="shop-item__main-content">
      <div class="shop-item__name">${this.itemObject.name}</div>
      <div class="shop-item__price price">
        <div
          class="price__new"
        >${this.itemObject.stringifiedDiscountedPrice}</div>
        <div class="price__old">${this.itemObject.stringifiedPrice}</div>
      </div>
      <div class="shop-item__footer item-footer">
        <div class="item-footer__conditions">
          при покупке комплекта 3&nbsp;в 1
        </div>
        <a
          class="item-footer__button btn-primary js-gtm-event"
          href=https://msk.tele2.ru/shop/product/${this.itemObject.categorySlug}/${this.itemObject.slug}/
          target="_blank"
          title="Подробнее"
          data-event=${this.itemObject.slug}
        >
          <span class="button__text"> Подробнее </span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <use xlink:href="#arrow-link"></use>
          </svg>
        </a>
      </div>
    </div>
    `;
    return wrapper;
  }

  render() {
    return this.htmlComponent;
  }
}

export default ShopItemView;
