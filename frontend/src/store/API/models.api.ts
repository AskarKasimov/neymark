export type IRegUser = {
    name: string;
    surname: string;
}

export type IReg2User = {
    username: string;
    password: string;
}

export type IUser1step = {
    id: string;
    name: string;
    surname: string;
    level: number;
}

export type IUser2step = {
    access_token: string;
    refresh_token: string;
}

export type IUser = {
    sub: string;
    iat: string;
    exp: string;
}