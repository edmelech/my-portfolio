import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '',
  useCdn: true,
  token: '',
})