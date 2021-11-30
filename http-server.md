# 2021-11-27

http-server: a simple static HTTP server

https://www.npmjs.com/package/http-server

# 安装

```
npm install --global http-server
npm install http-server -g
```

# 启动

在当前目录下启动服务

```
http-server -c-1 -p 999
```

# Usage:

Note: Caching is on by default. Add -c-1 as an option to disable caching.

```
http-server [path] [options]
```

Command|Description|Defaults
---|---|---
-p or --port|Port to use. Use -p 0 to look for an open port, starting at 8080. It will also read from process.env.PORT.|8080
-a|Address to use|0.0.0.0
-d|Show directory listings|true
-i|Display autoIndex|true
-g or --gzip|When enabled it will serve ./public/some-file.js.gz in place of ./public/some-file.js when a gzipped version of the file exists and the request accepts gzip encoding. If brotli is also enabled, it will try to serve brotli first.|false
-b or --brotli|When enabled it will serve ./public/some-file.js.br in place of ./public/some-file.js when a brotli compressed version of the file exists and the request accepts br encoding. If gzip is also enabled, it will try to serve brotli first.|false
-e or --ext|Default file extension if none supplied|html
-s or --silent|Suppress log messages from output
--cors|Enable CORS via the Access-Control-Allow-Origin header
-o [path]|Open browser window after starting the server. Optionally provide a URL path to open. e.g.: -o /other/dir/
-c|Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds. To disable caching, use -c-1.|3600
-U or --utc|Use UTC time format in log messages.
--log-ip|Enable logging of the client's IP address|false
-P or --proxy|Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com
--proxy-options|Pass proxy options using nested dotted objects. e.g.: --proxy-options.secure false
--username|Username for basic authentication
--password|Password for basic authentication
-S, --tls or --ssl|Enable secure request serving with TLS/SSL (HTTPS)|false
-C or --cert|Path to ssl cert file|cert.pem
-K or --key|Path to ssl key file|key.pem
-r or --robots|Automatically provide a /robots.txt (The content of which defaults to User-agent: *\nDisallow: /)|false
--no-dotfiles|Do not show dotfiles
--mimetypes|Path to a .types file for custom mimetype definition
-h or --help|Print this list and exit.
-v or --version|Print the version and exit.|

# 使用

```
http-server -c-1 -p 999
```
