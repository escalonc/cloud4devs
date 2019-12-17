export enum EntryType {
  Repository,
  Directory,
  File
}

export interface Entry {
  name: string;
  parent?: Directory;
}

export interface File extends Entry {}
export interface Directory extends Entry {
  children: Entry[];
}

export default interface FileSystemTree {
  root: Directory;
  count: number;
  path: string;
  add(path: string, entryType: EntryType): void;
  // remove(entry: Entry): void;
}
