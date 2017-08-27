export default {
  entry: 'dist/batchHttpLink.js',
  dest: 'dist/bundle.umd.js',
  format: 'umd',
  sourceMap: true,
  moduleName: 'batchHttpLink',
  exports: 'named',
  onwarn
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
