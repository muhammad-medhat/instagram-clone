import sanityClient from "./client.js";
import { createReadStream } from "fs";
import { basename } from "path";
import { nanoid } from "nanoid";
dotenv.config();

export default sanityClient({
  projectId: "up5lj8qu",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
});
