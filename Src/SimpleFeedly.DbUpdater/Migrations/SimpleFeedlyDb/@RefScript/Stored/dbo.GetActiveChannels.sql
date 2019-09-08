/****** Object:  StoredProcedure [dbo].[GetActiveChannels]    Script Date: 4/27/2019 8:45:39 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetActiveChannels]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetActiveChannels]
GO

/****** Object:  StoredProcedure [dbo].[GetActiveChannels]    Script Date: 4/27/2019 8:45:39 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetActiveChannels]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetActiveChannels] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2019/04/27
-- Description:	GetActiveChannels
-- =============================================
ALTER PROCEDURE [dbo].[GetActiveChannels]
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT 
		Id ,
        Type ,
        Title ,
        Link ,
        Description ,
        Language ,
        Copyright ,
        LastUpdatedDate ,
        ImageUrl ,
        OriginalDocument,
		RssCrawlerEngine,
		RefreshTimeMinutes
	FROM dbo.RssChannels
	WHERE IsActive <> -1
END
GO


