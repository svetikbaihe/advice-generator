import endpoint from "@utils/endpoint";
import { API_METHOD_GET, API_HOST } from "@constants/api";
import { type AdviceAPIInterface, SlipType } from "./types";

class AdviceAPI implements AdviceAPIInterface {
  static getAdvice = () => endpoint(API_METHOD_GET, API_HOST);

  public getAdvice =  async(): Promise<SlipType | undefined> => {
    const { method, currentUrl } = AdviceAPI.getAdvice();
    try {
      const response = await fetch(`${API_HOST}${currentUrl}`, { method });

      const results: SlipType = await response.json();

      return results;
    } catch (error) {
      console.log('getAdvice => error', error);
    }
  };

}

export default AdviceAPI;