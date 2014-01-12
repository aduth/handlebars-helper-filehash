var Handlebars = require('handlebars'),
  fileHash = require('../fileHash.js');

module.exports = {
  setUp: function(cb) {
    fileHash.register(Handlebars);
    cb();
  },

  testNoParams: function(test) {
    var source = '{{ fileHash }}',
      template = Handlebars.compile(source),
      result = template();

    test.equal('', result, 'Expected empty string when no parameters provided');
    test.done();
  },

  testPathParam: function(test) {
    var source = "{{ fileHash './test/fixtures/styles.css' }}",
      template = Handlebars.compile(source),
      result = template();

    test.equal('c7893ed104531bb1a97943a7205fec6c', result, 'Failed to generate correct hash with path specified');
    test.done();
  },

  testPrecisionParam: function(test) {
    var source = "{{ fileHash './test/fixtures/styles.css' 8 }}",
      template = Handlebars.compile(source),
      result = template();

    test.equal('c7893ed1', result, 'Failed to generate correct hash with path and precision specified');
    test.done();
  }
};