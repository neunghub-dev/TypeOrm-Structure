declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            PORT: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_NAME: string;
            DB_HOST: string;
            // add more environment variables and their types here
        }
    }
}
