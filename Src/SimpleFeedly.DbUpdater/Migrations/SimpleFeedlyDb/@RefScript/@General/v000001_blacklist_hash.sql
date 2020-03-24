IF  EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Blacklist]') AND name = N'idx_Blacklist_unique')
DROP INDEX [idx_Blacklist_unique] ON [dbo].[Blacklist]
GO

IF NOT EXISTS (
  SELECT * 
  FROM   sys.columns 
  WHERE  object_id = OBJECT_ID(N'[dbo].[Blacklist]') 
         AND name = 'ShrinkedTitle'
)
BEGIN
	ALTER TABLE dbo.Blacklist
	ADD ShrinkedTitle NVARCHAR(300)
END

GO

IF EXISTS (
	SELECT * 
	FROM   sys.columns 
	WHERE  object_id = OBJECT_ID(N'[dbo].[Blacklist]') 
			AND name = 'Title'
)
BEGIN
	DECLARE @sql NVARCHAR(max) = 'UPDATE dbo.Blacklist SET ShrinkedTitle = LOWER(dbo.fnGetUnsignString(dbo.fnRemoveNonAlphaCharactersAndDigit(Title)))'
	EXECUTE sp_executesql @sql
END

GO

IF NOT EXISTS (
  SELECT * 
  FROM   sys.columns 
  WHERE  object_id = OBJECT_ID(N'[dbo].[Blacklist]') 
         AND name = 'ShrinkedTitleHash'
)
BEGIN
	ALTER TABLE dbo.Blacklist
	ADD ShrinkedTitleHash BINARY(16)
END

GO
IF EXISTS (
    SELECT * 
    FROM   sys.columns 
    WHERE  object_id = OBJECT_ID(N'[dbo].[Blacklist]') 
            AND name = 'ShrinkedTitleHash'
)
BEGIN
	DECLARE @sql NVARCHAR(max) = 'UPDATE dbo.Blacklist SET ShrinkedTitleHash = HashBytes(''MD5'', ShrinkedTitle)'
    EXECUTE sp_executesql @sql
END
GO

;WITH cte AS (
  SELECT 
     row_number() OVER(PARTITION BY ShrinkedTitleHash ORDER BY Id) AS [rn],
	 *
  FROM [dbo].[Blacklist]
)

--SELECT * FROM cte ORDER By ShrinkedTitle, rn
DELETE FROM CTE  WHERE RN > 1

GO

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Blacklist]') AND name = N'idx_Blacklist_ShrinkedTitleHash')
CREATE UNIQUE NONCLUSTERED INDEX [idx_Blacklist_ShrinkedTitleHash] ON [dbo].[Blacklist]
(
	[ShrinkedTitleHash] ASC
)
INCLUDE([ShrinkedTitle]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

IF EXISTS (
  SELECT * 
  FROM   sys.columns 
  WHERE  object_id = OBJECT_ID(N'[dbo].[Blacklist]') 
         AND name = 'Title'
)
BEGIN
	ALTER TABLE dbo.Blacklist
	DROP COLUMN Title
END