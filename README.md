raspi-server
============
This repo is to be used for development of a file sharing-based server on a local network
Install
-------
install nodejs and npm
```bash 
$ sudo apt-get install nodejs npm
```
install dependencies
```bash
$ npm install
```
optionally use [guard-livereload](https://github.com/guard/guard-livereload) for client-side reloads during development

Usage
-----
create folders for user pages in app/symlinks/[user]
create a app/symlink/me folder and put json link files in that folder, look at example files

now add files (or symlinks) into the app/symlinks/[user] folder and they will be displayed on the users page

now start the server (sudo is used to host the server without a port (e.g. localhost instead of localhost:9090
```bash
sudo npm start
```
View on other devices
--------------------
Note: they must be devices on the same local network

+ find the IP address of the device using this repo (`ifconfig eth0| grep 'inet addr:'`)
+ open it in a browser
+ and enjoy!
