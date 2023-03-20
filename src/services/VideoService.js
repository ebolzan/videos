import { ApiService } from "./ApiService";

const endPoint = 'videos';

export const VideoService = {

    list(){
       return ApiService.get(endPoint);
    }
}