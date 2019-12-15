var Http = require('http')
var Url = require('url')
var Path = require('path')
var FileSystem = require('fs')

var repositoryPath = Path.join(process.cwd(), 'repository')

function mapFileExtensionToMIMEType (extension) {
    var MIMEMap = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.vert': 'text/plain',
        '.frag': 'text/plain'
    }

    if (MIMEMap.hasOwnProperty(extension)) return MIMEMap[extension]

    return 'unkown/unkown'
}

var server = Http.createServer(function (request, response) {
    var requestURL = Url.parse(request.url)
    var requestPath = Path.parse(requestURL.pathname)
    var requestFilePath = Path.normalize([repositoryPath, requestURL.pathname].join(''))

    console.log('Requesting file:', requestFilePath)

    FileSystem.stat(requestFilePath, function (error, stats) {
        if (error) {
            response.statusCode = 404
            response.end()

            return
        }

        FileSystem.readFile(requestFilePath, function (error, data) {
            if (error) {
                response.statusCode = 404
                response.end()
    
                return
            }

            response.writeHead(200, {
                'Content-Type': mapFileExtensionToMIMEType(requestPath.ext)
            })
            response.end(data)
        })
    })
})

server.listen(4502, '0.0.0.0')