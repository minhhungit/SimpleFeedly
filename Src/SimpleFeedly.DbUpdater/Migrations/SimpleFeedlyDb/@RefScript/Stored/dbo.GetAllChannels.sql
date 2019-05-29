/****** Object:  StoredProcedure [dbo].[GetAllChannels]    Script Date: 3/24/2018 2:45:39 AM ******/
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAllChannels]') AND type IN (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetAllChannels]
GO

/****** Object:  StoredProcedure [dbo].[GetAllChannels]    Script Date: 3/24/2018 2:45:39 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAllChannels]') AND type IN (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetAllChannels] AS' 
END
GO

-- =============================================
-- Author:		Hung Vo
-- Create date: 2018/03/24
-- Description:	GetAllChannels
-- =============================================
ALTER PROCEDURE [dbo].[GetAllChannels]
	
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
		RssCrawlerEngine
	FROM dbo.RssChannels
END
GO


