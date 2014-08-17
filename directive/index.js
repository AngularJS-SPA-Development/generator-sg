'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('sg-component:directive', {arguments: this.arguments}, { local: require.resolve('generator-sg-component/directive') });
  }
});

module.exports = Generator;