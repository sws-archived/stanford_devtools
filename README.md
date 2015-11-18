#[Stanford Geppetto](https://github.com/SU-SWS/stanford_devtools)
##### Version: 7.0.0-dev

[boznik](https://github.com/boznik)

A grunt task runner for development utilities.

Installation
---

Install Grunt CLI

`npm install -g grunt-cli`

Clone this repository somewhere. You can choose. It really doesn't matter.

`git clone git@github.com:SU-SWS/stanford_devtools.git`

Open up your terminal (shell) and navigate to this directory.

`cd stanford_devtools`

Navigate into each Utility Folder and Download the dependencies with npm.

`npm install`

Copy _example.configure.json_ to configure.json

`cp example.configure.json configure.json`

Open up and edit the file with your configuration otions:

```
Psuedo Code for configure.json

{
  "build": {
    "webserver_root": "/path/to/your/webserver/", // eg: /Applications/MAMP/htdocs/
    "environment": "local", // Can be local, anchorage, sites, or mamp
    "dbtype": "mysql", // Probably always this unless you use pgsql
    "dbwhere": "127.0.0.1", // The location of the database
    "dbuser": "root", // (optional) If omitted scripts will prompt for this.
    "dbpass": "root", // (optional) If omitted scripts will prompt for this
  }
}

```
