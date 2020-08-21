# Design System Demo — Bit

A test app that started with the code of https://github.com/christopheraue/designsystemdemo-base and then had its components being exported to to https://bit.dev/designsystemdemo.


## The General Idea Behind Bit

Bit has as git-like CLI and workflow that produces npm packages for each component. These npm packages can then be imported into project like regular js dependencies (see package.json).


## Exporting components

The following steps roughly outline how I got from the base app to the state in this repo:

1. Clone the base app into a local repo
2. Create an account and a component repo on bit.dev
3. Install the Bit CLI and initialize a Bit workspace in the local repo
4. Add the react components as they are to the local Bit workspace. It's like staging in git.
5. Build the component into npm packages. It's like tagging commits with a version in git.
6. Export the build components, i.e. npm packages, to the component repo on bit.dev. It's like `git push`.
7. Include the exported components as dependencies to the local repo.

At this point the components' source code that is in `src/components` can be removed from the repo.


## Updating components

Components can be updated from any local repo that is currently using them:

1. Initialize a Bit workspace in the local repo
2. Import the component from the bit.dev repo. This downloads the npm package source into a local folder.
3. Update the files in the package source.
4. Rebuild the component and tag it with a new version.
5. Export the component again to the bit.dev repo.
6. Update the dependency in the local repo to the updated version of the component.


## Web UI of Components on bit.dev

It's like a mix of a github repo view and a fiddle/codePen. To explore a component you have to play around with the code. You can see all the code that is included in a component and have a look at its dependencies.

Example for the `button` component: https://bit.dev/designsystemdemo/demo/button


## Testing Components

Components can include test files that have to be marked as such. Supported test runners are Jest and Mocha. This repo uses Jest. The tests can be run for locally checked out components. They are also recognized when components are exported to the bit.dev repo as a "Test Summary" section appears for on the components page, e.g. https://bit.dev/designsystemdemo/demo/button. In the `button`'s case the test is reported as "Skipped" so I'm not sure if they are run automatically when component updates are exported or if you have to configure it more. Maybe the test runner is not supported for free accounts. I did not investigate that further. But running tests on the server, potentially attached to CI, seems to be supported.


## Documenting Components

Components can be documented as comments in the code like I did for the button component. The documentation appears on the component's web page at the bottom. See: https://bit.dev/designsystemdemo/demo/button. Documentation is also possible with a separate Markdown file for each component.


## Collaboration & Conflict Resolution

This basically works like you know it from git and general dependency management of npm: You checkout the component's code, modify it locally and push the changes as a new version. Other components including a changed component will use the old version until they update their dependencies.

I have not tested what happens, if e.g. two developer modify the same version of a component and try to push a new version to the bit.dev repo. But I assume it will fail for the slower dev as the versions will collide.

Bit can attached to GitHub on the $200/mo tier to allow pull request on component changes.


## Price of bit.dev Cloud

- $0/mo: 1 user, 1 private repo
- $35/mo: 1 user, unlimited private repos, $15/mo for each additional user
- $200/mo: 5 users, unlimited private repos, $15/mo for each additional user, Integration in external services (github, slack, webhooks)

https://bit.dev/pricing


## Local Server

A local server can be set up.

https://docs.bit.dev/docs/bit-server


## Random Thoughts

- Dependencies between components are handled well.
- I had some problems with each component carrying it's own configuration as well as inheriting some from the the host project. E.g. I couldn't get the test runner working without manually modifying the components package.json although the docs say the required config is inherited from the host project. All in all, you probably have to get used to some gotchas in the beginning until you have fully figured out how things are connected...
- I find the CLI feels quite slow. Every action takes a few seconds...
- If you projects consists of components only, it will become pretty empty since everything will be managed by Bit. It kind of replaces git and github in a sense.
- Aimed solely at developers. Don't place this in the hands of people not comfortable with git and the shell.