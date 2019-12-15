import InMemoryFileSystemTree from '../inMemoryFileSystem/inMemoryFileSystemTree';
import FileSystemTree, {
  EntryType
} from '../inMemoryFileSystem/fileSystemtree';

const basePath = '/mnt/sda1/Source';

test('add new entry increments quantity in two', () => {
  const inMemoryFileSystem: FileSystemTree = new InMemoryFileSystemTree(
    basePath
  );
  inMemoryFileSystem.add(`${basePath}/sample1`, EntryType.Directory);
  expect(inMemoryFileSystem.count).toBe(2);
});

test('add three new entries increments quantity in four', () => {
  const inMemoryFileSystem: FileSystemTree = new InMemoryFileSystemTree(
    basePath
  );
  inMemoryFileSystem.add(`${basePath}/sample1`, EntryType.Directory);
  inMemoryFileSystem.add(`${basePath}/sample2`, EntryType.Directory);
  inMemoryFileSystem.add(`${basePath}/sample3`, EntryType.Directory);
  expect(inMemoryFileSystem.count).toBe(4);
});

test('first new entry is child of root', () => {
  const inMemoryFileSystem: FileSystemTree = new InMemoryFileSystemTree(
    basePath
  );

  inMemoryFileSystem.add(`${basePath}/sample1`, EntryType.Directory);
  const sample1EntryExists = inMemoryFileSystem.root.children.some(
    entry => entry.name === 'sample1'
  );

  expect(sample1EntryExists).toBe(true);
});
