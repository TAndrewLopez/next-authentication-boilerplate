declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            NEXTAUTH_URL: string;
            NEXTAUTH_SECRET: string;
            AUTH_GITHUB_ID: string;
            AUTH_GITHUB_SECRET: string;
        }
    }
}

export { }