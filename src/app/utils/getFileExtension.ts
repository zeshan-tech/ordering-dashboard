export function getFileExtension(fileName: string) {
  const extensionIndex = fileName.lastIndexOf('.');

  if (extensionIndex === -1 || extensionIndex === 0) {
    return '';
  }

  return fileName.substring(extensionIndex + 1);
}
