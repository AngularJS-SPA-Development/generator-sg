'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('sg-component:route', {arguments: this.arguments}, { local: require.resolve('generator-sg-component/route') });
  }
});

module.exports = Generator;