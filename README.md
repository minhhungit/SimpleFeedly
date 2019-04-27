# SimpleFeedly
Very simple Rss Reader Web Application using <a href="https://github.com/volkanceylan/Serenity" target="_blank">Serenity Framework</a> 

### Deploy
1. Create an empty database, update connectionstring in <a href="https://github.com/minhhungit/SimpleFeedly/blob/master/Src/SimpleFeedly.DbUpdater/App.config">App.config</a> file then run `SimpleFeedly.DbUpdater.exe` to setup your database
2. Update <a href='https://github.com/minhhungit/SimpleFeedly/blob/master/Src/SimpleFeedly.Web/Web.config'>web.config</a> and deploy `SimpleFeedly.Web` as normal MVC web application, it used Serenity framework so you might need to read Serenity document at <a href="https://serenity.is/docs/getting_started/README" target="_blank">here</a>  

### Script 
<a href="https://github.com/minhhungit/SimpleFeedly/blob/master/wiki/Scripts/list-of-channels.sql" target="_blank">list-of-channels</a> (only channels, without feed items)

<a href="https://github.com/minhhungit/SimpleFeedly/releases/download/v1.0/bkSimpleFeedly-20190425-0352am-MSSM-2017.zip" target="_blank">MSSQL database backup file</a> (for demo)

## Demo
### DbUpdater
<img src="https://raw.githubusercontent.com/minhhungit/SimpleFeedly/master/wiki/Images/demo03.png" />

### Rss Reader (Web App)
<img src="https://raw.githubusercontent.com/minhhungit/SimpleFeedly/master/wiki/Images/demo01.png" />

```

MORE DETAILS COMMING SOON...

```