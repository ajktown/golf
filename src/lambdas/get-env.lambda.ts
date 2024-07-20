enum SupportedEnvAttr {
  ApiUrl = `NEXT_PUBLIC_API_URL`,
}

// ! Do not export Strictly imports below. They are only for this file.
const PRIVATE_DEFAULT_API_URL = `https://api.ajktown.com`;
// ! Do not export Strictly imports above. They are only for this file.

export const envLambda = {
  getApiUrl: () => {
    return process.env[SupportedEnvAttr.ApiUrl] ?? PRIVATE_DEFAULT_API_URL;
  },
  mode: {
    // In Consistency GPT, prod/local is set up based on the API URL.
    isProduct: () => envLambda.getApiUrl() === PRIVATE_DEFAULT_API_URL,
    isLocal: () => envLambda.getApiUrl() !== PRIVATE_DEFAULT_API_URL,
  },
};
