import AuthRequest from "@/api/request/AuthRequest.js";
import GuestRequest from "@/api/request/GuestRequest.js";
import appUtils from "@/utils/appUtils.js";

const requestMap = {
  AuthRequest,
  GuestRequest,
};
const instances = {};

export default class RequestFactory {
  getRequest(classname) {
    if (appUtils.getLocalToken()) {
      window.axios.defaults.headers.common.Authorization =
        "Bearer " + appUtils.getLocalToken();
    }

    window.axios.defaults.headers.common["Content-Type"] = "application/json";
    const RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error("Invalid request class name: " + classname);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
      requestInstance = new RequestClass();
      instances[classname] = requestInstance;
    }
    return requestInstance;
  }
}
