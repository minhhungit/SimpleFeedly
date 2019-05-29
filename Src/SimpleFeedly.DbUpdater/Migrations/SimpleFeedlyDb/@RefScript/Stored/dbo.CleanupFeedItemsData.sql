/****** Object:  StoredProcedure [dbo].[CleanupFeedItemsData]    Script Date: 4/29/2019 3:39:54 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CleanupFeedItemsData]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[CleanupFeedItemsData]
GO

/****** Object:  StoredProcedure [dbo].[CleanupFeedItemsData]    Script Date: 4/29/2019 3:39:54 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CleanupFeedItemsData]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[CleanupFeedItemsData] AS' 
END
GO


-- =============================================
-- Author:		Hung Vo
-- Create date: 2019/04/29
-- Description:	CleanupFeedItemsData
-- =============================================
ALTER PROCEDURE [dbo].[CleanupFeedItemsData]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    ;WITH cte AS (
	  SELECT ROW_NUMBER() OVER(PARTITION BY ChannelId, Title ORDER BY Id DESC) AS [rn],
		 Id, ChannelId, Title
	  FROM [dbo].[RssFeedItems]
	)
	DELETE FROM CTE WHERE RN > 1

END