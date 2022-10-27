import { Api } from "@apis";
import { SoupKitchenModel } from "@store";

// This address is unique to your computer, please modify ipAddress accordingly. Instructions are in README.
const ipAddress = "192.168.1.5";
const URL = `http://${ipAddress}:8000`;

interface ISoupKitchenService {
  getLocations(): Promise<SoupKitchenModel[]>;
}

interface SoupKitchenServiceResponse {
  [index: string]: any;
  soupKitchens: {
    locations: SoupKitchenModel[];
  };
}

export class SoupKitchenService implements ISoupKitchenService {
  constructor(private api: Api) {}

  getLocations = async (): Promise<SoupKitchenModel[]> => {
    try {
      const responseJson: SoupKitchenServiceResponse = await this.api.get(
        `${URL}`,
        "locations"
      );

      const locationKey = "connecticut";
      return await responseJson[locationKey];
    } catch (error) {
      throw error;
    }
  };
}
