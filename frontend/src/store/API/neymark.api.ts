import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserKey, IUserToken } from "./models.api";

export const neymarkAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://", //TODO: make
        prepareHeaders: (headers) => {
            let token = "";
            try {
                document.cookie.split("; ").forEach(elem => elem.slice(0, 6) === "token=" ? token = decodeURIComponent(elem.slice(6)) : null);
            }
            catch {
                return headers;
            }
            headers.set("Authorization", token);
            return headers;
        }
    }),
    tagTypes: ["Ticket"],
    endpoints: build => ({
        authentication: build.mutation<IUserKey, IUserToken>({
            query: (body) => ({
                url: "session/user",
                method: "POST",
                body: body,
            })
        }),
    })
})

export const {

} = neymarkAPI;