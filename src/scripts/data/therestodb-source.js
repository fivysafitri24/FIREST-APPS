import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async homeListResto() {
    const response = await fetch(API_ENDPOINT.HOME_LIST);
    return response.json();
  }

  static async reviewResto(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
