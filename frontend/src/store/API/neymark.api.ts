import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRegUser, IUser1step } from "./models.api";



export const neymarkAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://neimark-backend.onrender.com",
        prepareHeaders: (headers) => {
            let token = "";
            try {
                document.cookie.split("; ").forEach(elem => elem.includes("access_token=") ? token = decodeURIComponent(elem.slice(13)) : null);
            }
            catch {
                return headers;
            }
            headers.set("Authorization", "Bearer " + token);
            return headers;
        }
    }),
    endpoints: build => ({
        authentication: build.mutation<IUser1step, IRegUser>({
            query: (body) => ({
                url: "user/create",
                method: "POST",
                body: body,
            })
        })
    })
})

export const {
    useAuthenticationMutation,
} = neymarkAPI;