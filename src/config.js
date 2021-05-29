const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: "https://dev-89340794.okta.com/oauth2/default",
  clientId: "0oatlsa2kPOK6zB8Q5d6",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: "https://dev-89340794.okta.com",
  clientId: "0oatlsa2kPOK6zB8Q5d6",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {
    // If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to uncomment the below line
    // pkce: false
    scopes: ["openid", "profile", "email"],
  },
  // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};

export { oktaAuthConfig, oktaSignInConfig };
