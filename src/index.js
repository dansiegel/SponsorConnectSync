const core = require("@actions/core");
const github = require("@actions/github");
const https = require('https');

async function run() {
  try {
    const token = core.getInput("github_token");
    const clientId = core.getInput("client_id");

    console.log("Beginning sponsor sync with Sponsor Connect.");
    const options = {
      host: 'https://sponsorconnect.dev',
      path: '/api/sponsors/sync' + github.context.repo.owner,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'x-ClientId': clientId,
        'x-Token': token
      }
    };
    await https.request(options, (res) => {
      if(res.statusCode !== 200) {
        console.log(res);
        throw new Error("Something went wrong while syncing the sponsors.");
      }
      else {
        console.log("Finished syncing sponsors");
      }
    });
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

run();