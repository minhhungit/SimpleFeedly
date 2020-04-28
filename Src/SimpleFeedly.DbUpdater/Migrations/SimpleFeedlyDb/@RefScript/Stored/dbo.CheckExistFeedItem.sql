/****** Object:  StoredProcedure [dbo].[CheckExistFeedItem]    Script Date: 3/26/2018 7:15:27 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CheckExistFeedItem]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[CheckExistFeedItem]
GO

/****** Object:  StoredProcedure [dbo].[CheckExistFeedItem]    Script Date: 3/26/2018 7:15:27 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CheckExistFeedItem]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[CheckExistFeedItem] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2018/03/24
-- Description:	CheckExistFeedItem
-- =============================================
ALTER PROCEDURE [dbo].[CheckExistFeedItem]
	@channelDomainGroup NVARCHAR(100),
	@feedItemKey NVARCHAR(500)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
    SELECT 1 FROM dbo.RssFeedItems AS i 
	JOIN dbo.RssChannels as c on i.ChannelId = c.Id
	WHERE ISNULL(c.DomainGroup, c.Link) = @channelDomainGroup AND i.FeedItemKey = @feedItemKey
END

GO


