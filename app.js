var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blta3145e1287bd1c7b')
// .setHost('localhost')
// .setPort(8000)
.setHost("test-stag-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('bltb14b939d2d820353')

var extensionSDK = app.Extension({
	secret_key     : 'app_test_123',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60
