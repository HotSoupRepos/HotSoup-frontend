interface IApi {
  get(url: string, params: string): Promise<any>;
}

export class Api implements IApi {
  constructor() {}

  get = async (url: string, params: string): Promise<any> => {
    try {
      const response = await fetch(`${url}/${params}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return await response.json();
    } catch (error) {
      throw Error(`${error}`);
    }
  };
}
