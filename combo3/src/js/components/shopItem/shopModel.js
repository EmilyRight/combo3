import { devicesData, devicesArray } from '../../constants/devicesData';

class ShopModel {
  #apiService;

  #devicesList;

  /**
   * @param {ApiService} apiService
   */
  constructor(apiService) {
    this.#apiService = apiService;
    this.#devicesList = devicesArray;
  }

  /**
   * @return {Promise<void>}
   */
  async loadData() {
    try {
      const devices = await this.#apiService.getSubscriptionList();
      if (devices.data && devices.data.length > 0) {
        this.#devicesList = devices.data;
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  getSubscriptions() {
    return this.#devicesList;
  }
}

export default ShopModel;
