import npm from 'npm'

export const NpmLoader = {}

NpmLoader.npm = npm

NpmLoader.load = function load (packageNames, callback) {
  npm.load(function(err) {
    if (err) {
      return callback(err)
    }
    const packages = Array.isArray(packageNames) ? packageNames : [packageNames]
    npm.commands.install(packages, function(err, data) {
      if (err) {
        return callback(err)
      } else {
        return callback(null, data)
      }
    });

    npm.on('log', function(message) {
      // log installation progress
      console.log(message);
    })
  })
}
