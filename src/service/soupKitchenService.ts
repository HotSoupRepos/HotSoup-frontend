import { Api } from "@apis";
import { SoupKitchenModel } from "@store";

// This address is unique to your computer, please modify ipAddress accordingly. Instructions are in README.
const url = "https://2205-108-50-197-203.ngrok.io";

interface ISoupKitchenService {
  getLocations(): Promise<SoupKitchenModel[]>;
}

interface SoupKitchenServiceResponse {
  [index: string]: any;
  localsoupkitchens: {
    connecticut: SoupKitchenModel;
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
