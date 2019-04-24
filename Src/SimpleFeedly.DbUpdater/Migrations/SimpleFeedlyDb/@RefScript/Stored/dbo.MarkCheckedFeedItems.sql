/****** Object:  StoredProcedure [dbo].[MarkCheckedFeedItems]    Script Date: 4/25/2019 3:20:41 AM ******/
DROP PROCEDURE IF EXISTS [dbo].[MarkCheckedFeedItems]
GO

/****** Object:  StoredProcedure [dbo].[MarkCheckedFeedItems]    Script Date: 4/25/2019 3:20:41 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[MarkCheckedFeedItems]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[MarkCheckedFeedItems] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2019-04-25
-- Description:	MarkCheckedFeedItems
-- =============================================
ALTER PROCEDURE [dbo].[MarkCheckedFeedItems]
	@ids [dbo].[ListBigIntNumbers] READONLY,
	@isChecked BIT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SET XACT_ABORT ON
	BEGIN TRAN
	BEGIN TRY
		UPDATE f
		SET f.IsChecked = @isChecked 
		FROM dbo.RssFeedItems AS f
		JOIN @ids AS i ON i.Id = f.Id
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


