export const getConfig = () => {
  const mainUri = '/main';

  return {
    serverUrl: 'https://siamese.entrydsm.hs.kr',
    endpoint: {
      main: {
        post: {
          prefix: `${mainUri}/post`,
          detail(id: number) {
            return `${this.prefix}/${id}`;
          },
          best() {
            return `${this.prefix}/recommend`;
          },
        },
        search: {
          prefix: `${mainUri}/search`,
          withKeyword(keyword: string) {
            return `${this.prefix}?search=${keyword}`;
          },
        },
        banner: {
          prefix: `${mainUri}/banner`,
        },
      },
    },
  };
};
