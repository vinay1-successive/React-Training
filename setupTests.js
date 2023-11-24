import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import 'react-testing-library/cleanup-after-each';

// Additional setup for Istanbul
import { createInstrumenter } from 'istanbul-lib-instrument';

const instrumenter = createInstrumenter({ esModules: true });
global.__coverage__ = {};

require.extensions['.js'] = function (module, filename) {
  const content = require('fs').readFileSync(filename, 'utf8');
  const instrumented = instrumenter.instrumentSync(content, filename);
  module._compile(instrumented, filename);
};
