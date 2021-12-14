import { App, CfnOutput, Stack } from 'aws-cdk-lib';

const app = new App();
const stack = new Stack(app, 'integ-foobar');

// TODO: Write some code

new CfnOutput(stack, 'HttpApiUrl', {
  value: 'placeholder',
});

app.synth();