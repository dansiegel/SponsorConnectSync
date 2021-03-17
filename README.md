# SponsorConnectSync

This GitHub action is for those .NET OSS Maintainers participating in Sponsor Connect

```yml
name: Sponsor Connect Sync
on:
  schedule:
    - cron: 0 0 * * * # Every day at midnight (UTC)
jobs:
  sponsorconnect-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Run Sponsor Sync
        uses: dansiegel/SponsorConnectSync@1.0
        with:
          client_id: ${{ secrets.CLIENT_ID }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
```
