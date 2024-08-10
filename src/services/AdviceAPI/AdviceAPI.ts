import endpoint from "@utils/endpoint";
import { API_METHOD_GET, API_HOST } from "@constants/api";
import type { AdviceAPIInterface, SlipType } from "./types";

class AdviceAPI implements AdviceAPIInterface {
  static getAdviceEndpoint = () => endpoint(API_METHOD_GET, API_HOST);

  public getAdvice =  async (): Promise<SlipType | undefined> => {
    const { method, currentUrl } = AdviceAPI.getAdviceEndpoint();
    
    try {
      const response = await fetch(`${currentUrl}`, { method });

      const data = await response.json();
      
      return { slip: {id: data.slip.id, advice: data.slip.advice} }
    } catch (error) {
      console.log('getAdvice => error', error);
    }
  };

}

export default AdviceAPI;