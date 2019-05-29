/****** Object:  StoredProcedure [dbo].[UpdateChannelDefaultEngine]    Script Date: 4/27/2019 17:42:09 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateChannelDefaultEngine]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[UpdateChannelDefaultEngine]
GO

/****** Object:  StoredProcedure [dbo].[UpdateChannelDefaultEngine]    Script Date: 4/27/2019 17:42:09 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateChannelDefaultEngine]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[UpdateChannelDefaultEngine] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2019/04/27
-- Description:	UpdateChannelDefaultEngine
-- =============================================
ALTER PROCEDURE [dbo].[UpdateChannelDefaultEngine]
	@channelId BIGINT,
	@engine INT	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    UPDATE dbo.RssChannels SET RssCrawlerEngine = @engine WHERE Id = @channelId
END
GO


