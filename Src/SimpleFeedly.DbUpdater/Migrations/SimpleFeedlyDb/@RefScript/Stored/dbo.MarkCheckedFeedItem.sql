/****** Object:  StoredProcedure [dbo].[MarkCheckedFeedItem]    Script Date: 3/24/2018 10:43:17 PM ******/
DROP PROCEDURE IF EXISTS [dbo].[MarkCheckedFeedItem]
GO

/****** Object:  StoredProcedure [dbo].[MarkCheckedFeedItem]    Script Date: 3/24/2018 10:43:17 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[MarkCheckedFeedItem]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[MarkCheckedFeedItem] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2018/03/24
-- Description:	MarkCheckedFeedItem
-- =============================================
ALTER PROCEDURE [dbo].[MarkCheckedFeedItem]
	@feedItemId BIGINT,
	@isChecked BIT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    UPDATE dbo.RssFeedItems SET IsChecked = @isChecked WHERE Id = @feedItemId
END
GO


