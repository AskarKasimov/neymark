import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReg2User, IUser, IUser2step } from "./models.api";



export const neymarkAuth = createApi({
    reducerPath: "Auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://auth-server-7chs.onrender.com",
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
        authUser: build.mutation<IUser2step, IReg2User>({
            query: (body) => ({
                url: "auth/local",
                method: "POST",
                body: body,
            })
        }),
        user: build.query<IUser, null>({
            query: () => ({
                url: "auth",
                method: "GET"
            })
        })
    })
})

export const {
    useAuthUserMutation,
    useUserQuery,
} = neymarkAuth;