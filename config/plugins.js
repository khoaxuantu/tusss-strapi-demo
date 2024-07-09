module.exports = () => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'tusss-test-strapi',
            uniform: true,
            basePath: '',
        },
    },
  },
});
