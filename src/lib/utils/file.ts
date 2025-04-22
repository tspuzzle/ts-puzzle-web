import fs from 'fs';
import path from 'path';

export const getFilePath = (relativePath: string): string => {
  return path.resolve(process.cwd(), relativePath);
};

export const getFileContent = (path: string): string => {
  return fs.readFileSync(path, 'utf8');
};

export const getFolders = (relativeDirPath: string): string[] => {
  return fs.readdirSync(getFilePath(relativeDirPath)).filter((file) => {
    return fs.statSync(path.join(relativeDirPath, file)).isDirectory();
  });
};

export const getFiles = (relativeDirPath: string): string[] => {
  return fs.readdirSync(relativeDirPath).filter((file) => {
    return fs.statSync(path.join(relativeDirPath, file)).isFile();
  });
};

export const PATH_SEPARATOR = path.sep;
