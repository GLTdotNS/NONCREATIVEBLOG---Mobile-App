import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6kqgsbl2",
  dataset: "production",
  apiVersion: "2022-04-25",
  useCdn: true,
  token: "Awesome Token",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
