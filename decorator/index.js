'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('sg-component:decorator', {arguments: this.arguments}, { local: require.resolve('generator-sg-component/decorator') });
  }
});

module.exports = Generator;