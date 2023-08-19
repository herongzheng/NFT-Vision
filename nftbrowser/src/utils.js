const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjhiMzU0OGFkLTU4ZGMtNGZkNy1hM2Y4LTFjOTgwN2JjMzFmYSIsIm9yZ0lkIjoiMzUzODI1IiwidXNlcklkIjoiMzYzNjU1IiwidHlwZUlkIjoiYjc4NDVmZWItMTk2ZS00NWJhLTgxMjEtYWMwZDdhNjliYTNhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI0NjQxMDIsImV4cCI6NDg0ODIyNDEwMn0.jLfrCZT1XtIIQ0xUX64QqdPl6uFnX866TdEwmP9M0Ss";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
