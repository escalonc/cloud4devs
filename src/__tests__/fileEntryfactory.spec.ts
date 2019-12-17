import EntryFactory from '../inMemoryFileSystem/fileEntryFactory';

test('create new file entry with given name', () => {
  const entry = EntryFactory.createFile('myProject');
  expect(entry.name).toBe('myProject');
});
