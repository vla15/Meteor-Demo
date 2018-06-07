import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom
import HelloMeteor from '../imports/ui/HelloMeteor';
//import the React component that we haven’t created yet!
Meteor.startup(() => {
  render(<HelloMeteor />, document.getElementById('app'));
});