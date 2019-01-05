# Cloud 4 devs

## A multi cloud client for backup your source code

### The problem

For some developers it's not enough backup their appreciated source in sites like Github, Gitlab or Bitbucket or maybe you want an easy way to sync your work between your computers, and I'm not an organize person 😅, sometimes I forgot to commit my changes, so I tought I'm going to work directly in my personal cloud folder, _in my case Dropbox_.

![Giant Library](https://i.pinimg.com/originals/39/87/2d/39872d5ebb92f7c6973c22c10751d62c.jpg)

Image source: pinterest, Alex Krasny

But surprise, there's not a buit in feature that support something similar like a .gitignore file, I work with node.js it's an amazing project, but I don't want to sync a hundred of megabytes in files from my **node_modules** folder.

#### For three reasons

- Save space
- Save bandwidth
- Avoid conflicts for the binaries

### My porpuse

After a research I found a few scripts and some workarounds. But I said common man I'm a developer I'm going to make it more intuitive and developer friendly. So I decied to do it in my favorite plaform **Node.js**

#### Features

- Cross platform
- Multi cloud support
- Background service
- Looks into your .gitignore files
- Parse your .gitignore files
- Sync your files to your prefered cloud

### Current support

- Dropbox

### Future roadmap support

- Google drive
- FTP server
- One drive
- S3 Bucket
