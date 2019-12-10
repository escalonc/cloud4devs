import dotenv from "dotenv";
import fetch from "node-fetch";
import { Dropbox } from "dropbox";
import { readdirSync } from "fs";
import { resolve } from "path";
import { lstatSync } from "fs";

dotenv.config();

// const dbx = new Dropbox({
//   accessToken: process.env.DROPBOX_ACCESS_TOKEN,
//   fetch
// });

// const fileNames = dbx
//   .filesListFolder({ path: "" })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const blackList = [".git", "node_modules", ".DS_Store"];

const basePath = process.env.SOURCE_PATH || "";

for (const file of readdirSync(basePath)) {
  const absolutePath = resolve(basePath, file);
  const isDir = lstatSync(absolutePath).isDirectory();

  // add node entry to the tree

  if (blackList.includes(file) || !isDir) {
    continue;
  }

  for (const innerFile of readdirSync(absolutePath)) {
    console.log(resolve(file, innerFile));
  }
}
