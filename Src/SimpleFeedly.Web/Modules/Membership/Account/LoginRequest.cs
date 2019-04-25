
namespace SimpleFeedly.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("default username is 'demo'")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("default password for 'demo' is '1234567'"), Required(true)]
        public string Password { get; set; }
    }
}