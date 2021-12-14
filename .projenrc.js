const pj = require('projen');
const project = new pj.awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'test-a',
  repositoryUrl: 'https://github.com/joshkellendonk/test-a.git',

  releaseTrigger: pj.release.ReleaseTrigger.manual(),

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();