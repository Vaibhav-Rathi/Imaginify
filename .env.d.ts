



namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
    NEXT_PUBLIC_AFTER_CLERK_SIGN_IN_URL: string;
    NEXT_PUBLIC_AFTER_CLERK_SIGN_UP_URL: string;
    WEBHOOK_SECRET: string;
    MONGODB_URL: string;
  }
}
