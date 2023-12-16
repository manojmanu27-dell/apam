import { environment } from "src/environments/environment"

export class BackendService {

    static serviceUrl = environment.apiUrl;
    
    constructor() {
    }
    public static login = BackendService.serviceUrl + "login";

}