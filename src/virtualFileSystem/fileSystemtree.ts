export enum EntryType {
  Repository,
  Directory,
  File
}

export interface FileEntryNode {
  id: string;
  name: string;
  entryType: EntryType;
  children: FileEntryNode[];
}

export default interface FileSystemTree {
  Add(path: string, entryType: EntryType): void;
  Remove(entry: FileEntryNode): void;
}
