# SimpleFeedly
Very simple Rss Crawler & Rss Reader

## Deploy
> Note: SimpleFeedly.Web is using <a href='https://github.com/volkanceylan/Serenity'>Serenity framework</a> so you may need to read <a href="https://serenity.is/docs/getting_started/README" target="_blank">its document</a> first

- Create an **empty database**, update connectionstring for 
  - `SimpleFeedly.Crawler` project
  - `SimpleFeedly.Web` project
  - `SimpleFeedly.DbUpdater` project
- Build solution, you maybe need to install NodeJS first (for web application)
- Run `SimpleFeedly.DbUpdater.exe` to setup your database, it will create tables & stored...
- Deploy `SimpleFeedly.Web` as normal MVC web application
- Install `SimpleFeedly.Crawler` - a <a href='https://github.com/Topshelf/Topshelf'>Topshelf</a> application as windows service (**run CMD as Administrator**)

  - **Install**
   ```
   SimpleFeedly.Crawler INSTALL --autostart
   SimpleFeedly.Crawler START
   ```
   
  - **Uninstall**
   ```cmd
   SimpleFeedly.Crawler STOP
   SimpleFeedly.Crawler UNINSTALL
   ```
   
   - **Port**
   When crawler runs, it will notify status to sfeedly web app in right bottom corner using signalr (self-host), so we need to enable port 8888 and setup cors options in App.config
   
   ```
   <add key="CrawlerSignalrSelfhostUrl" value="http://*:8888"/>
   <add key="SimpleFeedlyWebAppUrls" value="http://localhost:62318,http://abc.com:1234" />
   ```
   

   
- Please feel free to ask me any questions!

## Script (Only for demo)
- <a href="https://github.com/minhhungit/SimpleFeedly/blob/master/wiki/Scripts/list-of-channels.sql" target="_blank">list-of-channels</a> (only channels, without feed items)

- <a href="https://github.com/minhhungit/SimpleFeedly/releases/download/v1.0/bkSimpleFeedly-20190425-0352am-MSSM-2017.zip" target="_blank">MSSQL database backup file</a> ( **SQL SERVER 2017** ) - restore and run `SimpleFeedly.DbUpdater.exe` to update database

## Demo
### DbUpdater
<img src="https://raw.githubusercontent.com/minhhungit/SimpleFeedly/master/wiki/Images/demo03.png" />

### Crawler
<img src="https://raw.githubusercontent.com/minhhungit/SimpleFeedly/master/wiki/Images/demo02.png" />

### Rss Reader (Web App)
<img src="https://raw.githubusercontent.com/minhhungit/SimpleFeedly/master/wiki/Images/demo01.png" />

### Rss Reader (Web App) - Mobile version
<img src="https://raw.githubusercontent.com/minhhungit/SimpleFeedly/master/wiki/Images/demo04.png" />

```

MORE DETAILS COMMING SOON...

```
