export const useSearchParams = jest.fn(() => ({
  get: jest.fn((_name: string) => {
    return "TEST";
  }),
}));
