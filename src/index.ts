import dotenv from "dotenv";
import fetch from "node-fetch";
import { Dropbox } from "dropbox";

import { readdirSync, statSync } from "fs";

dotenv.config();

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_ACCESS_TOKEN,
  fetch
});

readdirSync(process.env.SOURCE_PATH || "").forEach(file => {
  console.log(file, statSync(file).isDirectory());
});

// dbx
//   .filesListFolder({ path: "" })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
