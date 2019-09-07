/****** Object:  StoredProcedure [dbo].[AddBlacklistItem]    Script Date: 4/28/2019 6:49:02 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AddBlacklistItem]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[AddBlacklistItem]
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AddBlacklistItem]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[AddBlacklistItem] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2019/04/28
-- Description:	AddBlacklistItem
-- =============================================
ALTER PROCEDURE [dbo].[AddBlacklistItem]
	@feedItemId BIGINT,
	@title NVARCHAR(300),
	@isDeleteFeedItem BIT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SET XACT_ABORT ON
	BEGIN TRAN
	BEGIN TRY

		DECLARE @shrinkedTitle NVARCHAR(300) = LOWER(dbo.fnGetUnsignString(dbo.fnRemoveNonAlphaCharactersAndDigit(@title)))
		DECLARE @shrinkedTitleHash BINARY(16) = HashBytes('MD5', @shrinkedTitle)
		
		IF NOT EXISTS (SELECT TOP (1) 1 FROM dbo.Blacklist AS b WHERE b.ShrinkedTitleHash = @shrinkedTitleHash)
		BEGIN
			INSERT INTO dbo.Blacklist ( ShrinkedTitle, ShrinkedTitleHash )
			VALUES ( @shrinkedTitle, @shrinkedTitleHash )
		END

		IF (@isDeleteFeedItem = 1)
		BEGIN
			DELETE dbo.RssFeedItems WHERE Id = @feedItemId
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