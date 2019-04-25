namespace SimpleFeedly
{
    using Administration;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Configuration;
    using System.Net;

    public static partial class SiteInitialization
    {
        public static void ApplicationStart()
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            try
            {
                SqlSettings.AutoQuotedIdentifiers = true;
                Serenity.Web.CommonInitialization.Run();

                var registrar = Dependency.Resolve<IDependencyRegistrar>();
                registrar.RegisterInstance<IAuthorizationService>(new Administration.AuthorizationService());
                registrar.RegisterInstance<IAuthenticationService>(new Administration.AuthenticationService());
                registrar.RegisterInstance<IPermissionService>(new LogicOperatorPermissionService(new Administration.PermissionService()));
                registrar.RegisterInstance<IUserRetrieveService>(new Administration.UserRetrieveService());

                if (!ConfigurationManager.AppSettings["LDAP"].IsTrimmedEmpty())
                    registrar.RegisterInstance<IDirectoryService>(new LdapDirectoryService());

                if (!ConfigurationManager.AppSettings["ActiveDirectory"].IsTrimmedEmpty())
                    registrar.RegisterInstance<IDirectoryService>(new ActiveDirectoryService());

                InitializeExceptionLog();
                InitializeAppCfg();
                InitializeDataAccessHelpers();
                InitializeRssCrawler();
            }
            catch (Exception ex)
            {
                ex.Log();
                throw;
            }            
        }

        public static void ApplicationEnd()
        {
        }
    }
}