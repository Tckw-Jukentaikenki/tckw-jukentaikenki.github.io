/// <reference types="astro/client" />
interface ImportMetaEnv {
        readonly SECRET: string;
    }
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
declare namespace App {
    interface Locals {
    user: null | {
        id: number;
        name?: string;
        email: string;
    };
    }
}