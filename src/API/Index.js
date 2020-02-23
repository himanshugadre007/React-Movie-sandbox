import Network from "./Network";

export default class ApiServices {
  static getAvengerList = () => {
    const params = { t: "avengers" };
    return Network().get("", { params });
  };
}
