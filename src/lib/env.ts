import 'dotenv/config';

const env = {
    prod: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
        MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD as string, 
        MONGO_DB_USERNAME: process.env.MONGO_DB_USERNAME as string,
        MONGO_DB_URL: process.env.DATABASE_URL as string,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL as string,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string, 

    },
    dev: {
        PUBLIC_DEV_URL: process.env.NEXT_PUBLIC_DEV_URL as string,
        GOOGLE_CLIENT_ID: process.env.DEV_GOOGLE_CLIENT_ID as string,
        GOOGLE_CLIENT_SECRET: process.env.DEV_GOOGLE_CLIENT_SECRET as string,
    },
    shared: {
        GENERATE_SOURCEMAP:   process.env.GENERATE_SOURCEMAP as string,
    }, 
    public: {
        NODE_ENV:  process.env.NEXT_PUBLIC_NODE_ENV as string,
        NEXT_PUBLIC_URL: "https://aipicgen.vercel.app",
        ClientTestTokens: {
            FREE: 'f8ae9e72a17052cee5bffb816fc724e3b9273c02e3f3483a95df4e98a9cce2b2',
          },
        URLs: {
            MCS: 'https://jolly-still-lark.ngrok-free.app',
            SITE: 'https://aipicgen.vercel.app',
            LOGO:"https://github-production-user-asset-6210df.s3.amazonaws.com/126174609/275323996-cf3911ab-d85a-43b1-95cd-4dd96e247db1.png",         
        },
    }
}

export default env ; 
