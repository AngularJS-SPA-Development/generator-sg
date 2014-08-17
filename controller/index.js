'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('sg-component:controller', {arguments: this.arguments}, { local: require.resolve('generator-sg-component/controller') });
  }
});

module.exports = Generator;