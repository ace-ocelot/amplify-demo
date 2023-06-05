const config = {
  Auth: {
    region: "<AWS_REGION>",
    identityPoolRegion: "<AWS_COGNITO_REGION>", // usually the same value as region
    userPoolId: "<AWS_COGNITO_USER_POOL_ID>",
    userPoolWebClientId: "<AWS_USER_POOL_WEB_CLIENT_ID>",
    mandatorySignIn: true,
    authenticationFlowType: "USER_PASSWORD_AUTH"
  }
};

export default config;
