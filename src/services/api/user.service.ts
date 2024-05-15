
import { UserDTO } from "../dto";
import { HttpService } from "./http.service";

export class UserService extends HttpService {

    createCalculate(data: UserDTO) {
        return this.post("/calculate", data);
    };

}
