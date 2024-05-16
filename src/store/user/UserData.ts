import { UserService } from "@/services/api/user.service";
import { UserDTO } from "@/services/dto";
import { AxiosResponse } from "axios";

export default function UserData() {

    const createCalculate = (data: UserDTO): Promise<any> => {
        return new Promise<any>((resolve, reject) => {

            const service = new UserService();

            service
                .createCalculate(data)
                .then((response: AxiosResponse) => {
                    const data = response.data;
                    resolve(data);
                })
                .catch((err) => {
                    console.error("Erro ao buscar perguntas e formulário:", err);
                    reject(err);
                });
        });
    };

    return {
        createCalculate,
    };

}
