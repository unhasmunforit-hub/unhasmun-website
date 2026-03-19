import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { sanityClient } from "../../lib/sanity";

export const { GET } = defineEnableDraftMode({
  client: sanityClient,
});
