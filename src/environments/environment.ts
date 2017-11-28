// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr:true,
  
  
  // ## REST Urls
  RestAPI_Endpoint:                   "https://confdjango-backend-aschroth.c9users.io/",
    
    RestAPI_login:                    "api/token-auth/",
    
    RestAPI_account_permissions:      "api/account/permissions",
  
};
