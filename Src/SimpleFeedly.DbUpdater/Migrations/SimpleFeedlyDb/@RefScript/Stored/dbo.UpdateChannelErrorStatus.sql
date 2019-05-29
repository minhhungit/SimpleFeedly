/****** Object:  StoredProcedure [dbo].[UpdateChannelErrorStatus]    Script Date: 4/8/2018 9:03:31 PM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateChannelErrorStatus]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[UpdateChannelErrorStatus]
GO

/****** Object:  StoredProcedure [dbo].[UpdateChannelErrorStatus]    Script Date: 4/8/2018 9:03:31 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateChannelErrorStatus]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[UpdateChannelErrorStatus] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2018/04/08
-- Description:	UpdateChannelErrorStatus
-- =============================================
ALTER PROCEDURE [dbo].[UpdateChannelErrorStatus]
	@channelId BIGINT,
	@isError BIT,
	@errorMessage NVARCHAR(MAX)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    UPDATE dbo.RssChannels SET IsError = @isError, ErrorMessage = @errorMessage WHERE Id = @channelId
END
GO


