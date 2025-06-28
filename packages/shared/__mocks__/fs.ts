export const promises = {
  writeFile: jest.fn((path, data) => {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }),
};
