/****** Object:  StoredProcedure [dbo].[AddBlacklistItems]    Script Date: 4/28/2019 19:40:41 AM ******/
DROP PROCEDURE IF EXISTS [dbo].[AddBlacklistItems]
GO

/****** Object:  StoredProcedure [dbo].[AddBlacklistItems]    Script Date: 4/28/2019 19:40:41 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AddBlacklistItems]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[AddBlacklistItems] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2019-04-28
-- Description:	AddBlacklistItems
-- =============================================
ALTER PROCEDURE [dbo].[AddBlacklistItems]
	@blacklist [dbo].[BlacklistItems] READONLY,
	@isDeleteFeedItem BIT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SET XACT_ABORT ON
	BEGIN TRAN
	BEGIN TRY
		INSERT dbo.Blacklist (Title)
		SELECT DISTINCT Title
		FROM @blacklist bl
		WHERE NOT EXISTS (SELECT TOP (1) 1 FROM dbo.Blacklist c WHERE bl.Title = c.Title)

		IF (@isDeleteFeedItem = 1)
		BEGIN
			DELETE f
			FROM dbo.RssFeedItems AS f
			JOIN @blacklist AS b ON b.FeedItemId = f.Id		
		END
	COMMIT
	END TRY
	BEGIN CATCH
	   ROLLBACK
	   DECLARE @ErrorMessage VARCHAR(2000)
	   SELECT @ErrorMessage = 'Error: ' + ERROR_MESSAGE()
	   RAISERROR(@ErrorMessage, 16, 1)
	END CATCH

END
GO


