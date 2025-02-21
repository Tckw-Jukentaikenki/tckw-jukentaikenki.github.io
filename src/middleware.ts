import { defineMiddleware } from "astro/middleware";
import jwt from "jsonwebtoken";

const allowedPaths = [""];

export const onRequest = defineMiddleware((context, next) => {
    if (allowedPaths.includes(context.url.pathname)) return next();
    context.locals.user = null;
    const token = context.cookies.get("token");
    if (token?.value) {
        jwt.verify(token.value, import.meta.env.SECRET, (err, decoded: any) => {
        if (!err) context.locals.user = decoded;
        });
    }
    return next();
});