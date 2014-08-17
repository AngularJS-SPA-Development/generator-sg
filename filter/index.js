'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('sg-component:filter', {arguments: this.arguments}, { local: require.resolve('generator-sg-component/filter') });
  }
});

module.exports = Generator;