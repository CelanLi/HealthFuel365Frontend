import { IProfile } from '../models/types';
import { backendUrl, profileRoute } from "../util/constants";

export const updateProfile = async (profile: IProfile, token: string) => {
    try {
        const header = new Headers();
        if (token) {
            header.append('Authorization', `JWT ${token}`);
        }
        header.append('Content-Type', 'application/json');
        let resp: Response = await fetch(backendUrl + profileRoute + '/update', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                profile: profile,
            })
        })
        let responseJson = await resp.json();
        if (responseJson.error) {
            throw new Error(responseJson.error)
        }
        return responseJson.profile
    } catch (error) {
        //@ts-ignore
        throw new Error(error)
    }
}

export const getProfile = async (token: string) => {
    try {
        const header = new Headers();
        if (token) {
            header.append('Authorization', `JWT ${token}`);
        }
        header.append('Content-Type', 'application/json');
        let resp: Response = await fetch(backendUrl + profileRoute, {
            method: 'GET',
            headers: header,
        })
        let responseJson = await resp.json();

        if (responseJson.error) {
            throw new Error(responseJson.message);
        }
        return responseJson
    } catch (error) {
        //@ts-ignore
        throw new Error(error)
    }
}