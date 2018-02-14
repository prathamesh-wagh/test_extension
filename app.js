var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltc4f7ed1f03053fe8')
// .setHost('localhost')
// .setPort(8000)
.setHost("test-stag-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt1247e1bd3347ffd1')

var extensionSDK = app.Extension({
	secret_key     : 'app_test_123',
	extension_key	 : 'blt_ext_default_test_app',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60
