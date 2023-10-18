// aws-exports.js
const awsAmplifyConfig = {
  Auth: {
    identityPoolId: 'YOUR_IDENTITY_POOL_ID',
    region: 'YOUR_REGION',
    userPoolId: 'YOUR_USER_POOL_ID',
    userPoolWebClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID',
  },
  // Altre configurazioni per altri servizi AWS, se necessario
};

export default awsAmplifyConfig;
