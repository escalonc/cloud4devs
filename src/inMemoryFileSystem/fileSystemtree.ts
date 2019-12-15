export enum EntryType {
  Repository,
  Directory,
  File
}

export interface FileEntryNode {
  name: string;
  entryType: EntryType;
  parent: FileEntryNode;
  children: FileEntryNode[];
}

export default interface FileSystemTree {
  root: FileEntryNode;
  count: number;
  add(path: string, entryType: EntryType): void;
  remove(entry: FileEntryNode): void;
}
