import BaseRequest from "@/api/BaseRequest";

export default class AuthRequest extends BaseRequest {
  me() {
    return this.get("auth/v4/me");
  }
  login(params) {
    return this.post("go/historical_conference/login", params);
  }
}
