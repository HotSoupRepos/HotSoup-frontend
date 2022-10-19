import { Api } from "@apis";
import { SoupKitchenModel } from "@store";

// This address is unique to your computer, please modify ipAddress accordingly. Instructions are in README.
const url = "http://192.168.1.5:8000";

interface ISoupKitchenService {
  getLocations(): Promise<SoupKitchenModel[]>;
}

interface SoupKitchenServiceResponse {
  [index: string]: any;
  soupKitchens: {
    locations: SoupKitchenModel[];
  };
}

export default class SoupKitchenService implements ISoupKitchenService {
  constructor(private api: Api) {}

  getLocations = async (): Promise<SoupKitchenModel[]> => {
    try {
      const responseJson: SoupKitchenServiceResponse = await this.api.get(
        `${url}`,
        "locations"
      );

      return await responseJson["connecticut"];
    } catch (error) {
      throw error;
    }
  };
}
