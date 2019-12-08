import dotenv from "dotenv";
import fetch from "node-fetch";
import { Dropbox } from "dropbox";

dotenv.config();

console.log(process.env.DROPBOX_ACCESS_TOKEN);

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_ACCESS_TOKEN,
  fetch
});

const fileNames = dbx
  .filesListFolder({ path: "" })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
