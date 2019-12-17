import { Entry, Directory, File } from './fileSystemTree';

export default class EntryFactory {
  static createFile(name: string, parent?: Directory) {
    return {
      name,
      parent
    } as File;
  }

  static createDirectory(name: string, parent?: Directory, children?: Entry[]) {
    return {
      name,
      parent,
      children: children ?? []
    } as Directory;
  }
}
