import jwt_decode , { JwtPayload }from "jwt-decode";

const token:any = localStorage.getItem("@App:token");

export const isAuthenticated = () => localStorage.getItem("@App:token") !== null;

export const getToken = () => localStorage.getItem("@App:token");

export const decodeToken = ():any => {
  if (getToken()) return jwt_decode<JwtPayload>(token);
  return null;
};
