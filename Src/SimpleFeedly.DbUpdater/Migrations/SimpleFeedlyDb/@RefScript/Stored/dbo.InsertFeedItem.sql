/****** Object:  StoredProcedure [dbo].[InsertFeedItem]    Script Date: 3/24/2018 2:45:48 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[InsertFeedItem]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[InsertFeedItem]
GO

/****** Object:  StoredProcedure [dbo].[InsertFeedItem]    Script Date: 3/24/2018 2:45:48 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[InsertFeedItem]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[InsertFeedItem] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2018/03/24
-- Description:	InsertFeedItem
-- =============================================
ALTER PROCEDURE [dbo].[InsertFeedItem]
	@channelId BIGINT,
	@feedItemKey NVARCHAR(500),
	@title NVARCHAR(300),
	@link  NVARCHAR(500),
	@description NVARCHAR(MAX),
	@publishingDate DATETIME,
	@author NVARCHAR(200),
	@content  NVARCHAR(MAX)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	IF NOT EXISTS (SELECT TOP (1) 1 FROM dbo.Blacklist AS b WHERE b.Title = @title)
	BEGIN
		IF NOT EXISTS (SELECT 1 FROM dbo.RssChannels AS c JOIN dbo.RssFeedItems i ON i.ChannelId = c.Id WHERE c.Id = @channelId AND i.FeedItemKey = @feedItemKey)
		BEGIN
			INSERT INTO dbo.RssFeedItems ( ChannelId ,
										   FeedItemKey ,
										   Title ,
										   Link ,
										   Description ,
										   PublishingDate ,
										   Author ,
										   [Content ] ,
										   IsChecked )
			VALUES ( @channelId ,
					 @feedItemKey ,
					 @title ,     
					 @link ,      
					 @description ,
					 @publishingDate ,
					 @author,
					 @content,
					 0
				)
		END
	END
    
END
GO


