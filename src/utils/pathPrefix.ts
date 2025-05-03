// utils/pathPrefix.ts
export const pathPrefix = (path: string) =>
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
