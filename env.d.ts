declare module "node" {
  interface Env {
    POSTGRES_URL: string;
    AUTH_SECRET: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DATABASE: string;
    POSTGRES_HOST: string;
    POSTGRES_PORT: number;
    CLERK_WEBHOOK_SECRET: string;
  }
}
export {};
