import sanityClient, { createClient } from "@sanity/client";
import dotenv from "dotenv";
dotenv.config();

export default createClient({
  projectId: "up5lj8qu",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
});
