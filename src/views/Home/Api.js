import { cwbServerApiUrl } from "../../configuration/configuration";

const urlApi = cwbServerApiUrl;

export default class Api {
    static getAllPosts() {
        
        return fetch(`${urlApi}/v1/posts`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
}