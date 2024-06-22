export const baseURL = process.env.NEXT_PUBLIC_IS_PRODUCTION
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : 'http://127.0.0.1:4000/'

export const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION
