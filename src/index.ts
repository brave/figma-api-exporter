import getSvgs from "./getSvgs";
import downloadSvgs from "./downloadSvgs";
import FigmaClient from "./figmaClient";

export const figmaApiExporter = (token: string, requestDelay?: number) => {
  const client = new FigmaClient({
    personalAccessToken: token,
    requestDelay,
  });

  return {
    getSvgs: getSvgs(client),
    downloadSvgs,
  };
};
