/****** Object:  StoredProcedure [dbo].[AddBlacklistItem]    Script Date: 4/28/2019 6:49:02 AM ******/
DROP PROCEDURE IF EXISTS [dbo].[AddBlacklistItem]
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
	@channelId BIGINT,
	@title NVARCHAR(300)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    IF NOT EXISTS (SELECT TOP (1) 1 FROM dbo.Blacklist AS b WHERE b.ChannelId = @channelId AND b.Title = @title)
	BEGIN
		INSERT INTO dbo.Blacklist ( ChannelId , Title )
		VALUES ( @channelId, @title )
	END
END
GO