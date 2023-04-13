export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const swrOptions = {
    fetcher,
};