# cypress-firebase-emulator-setup-test

## Sys requirements
1. Nodejs 12
2. Latest firebase-tools
## Steps for deployment/start
- yarn install in root folder and in function folder
- create a firebase project in firebase console (or use and existing one)
- copy the config object of the project inside the project

### Run:
1. `yarn start`
2. `firebase emulators:start`
3. `yarn test:open` or `yarn test:integration`
## Notes
- for making a test/dev env with this system you would need to use the same credentials for firebase