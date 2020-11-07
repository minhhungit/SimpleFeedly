var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var BlacklistsForm = /** @class */ (function (_super) {
            __extends(BlacklistsForm, _super);
            function BlacklistsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BlacklistsForm.init) {
                    BlacklistsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BlacklistsForm, [
                        'ShrinkedTitle', w0,
                        'ShrinkedTitleHash', w0
                    ]);
                }
                return _this;
            }
            BlacklistsForm.formKey = 'Rss.Blacklists';
            return BlacklistsForm;
        }(Serenity.PrefixedContext));
        Rss.BlacklistsForm = BlacklistsForm;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var BlacklistsRow;
        (function (BlacklistsRow) {
            BlacklistsRow.idProperty = 'Id';
            BlacklistsRow.nameProperty = 'ShrinkedTitle';
            BlacklistsRow.localTextPrefix = 'Rss.Blacklists';
            BlacklistsRow.deletePermission = 'Blacklists:Delete';
            BlacklistsRow.insertPermission = 'Blacklists:Insert';
            BlacklistsRow.readPermission = 'Blacklists:Read';
            BlacklistsRow.updatePermission = 'Blacklists:Update';
        })(BlacklistsRow = Rss.BlacklistsRow || (Rss.BlacklistsRow = {}));
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var BlacklistsService;
        (function (BlacklistsService) {
            BlacklistsService.baseUrl = 'Rss/Blacklists';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BlacklistsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BlacklistsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BlacklistsService = Rss.BlacklistsService || (Rss.BlacklistsService = {}));
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssChannelsForm = /** @class */ (function (_super) {
            __extends(RssChannelsForm, _super);
            function RssChannelsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RssChannelsForm.init) {
                    RssChannelsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(RssChannelsForm, [
                        'Title', w0,
                        'Link', w0,
                        'DomainGroup', w0,
                        'Description', w0,
                        'IsError', w1,
                        'ErrorMessage', w2,
                        'RefreshTimeMinutes', w3
                    ]);
                }
                return _this;
            }
            RssChannelsForm.formKey = 'Rss.RssChannels';
            return RssChannelsForm;
        }(Serenity.PrefixedContext));
        Rss.RssChannelsForm = RssChannelsForm;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssChannelsRow;
        (function (RssChannelsRow) {
            RssChannelsRow.idProperty = 'Id';
            RssChannelsRow.isActiveProperty = 'IsActive';
            RssChannelsRow.nameProperty = 'Title';
            RssChannelsRow.localTextPrefix = 'Rss.RssChannels';
            RssChannelsRow.lookupKey = 'Rss.RssChannels';
            function getLookup() {
                return Q.getLookup('Rss.RssChannels');
            }
            RssChannelsRow.getLookup = getLookup;
            RssChannelsRow.deletePermission = 'Channels:Delete';
            RssChannelsRow.insertPermission = 'Channels:Insert';
            RssChannelsRow.readPermission = 'Channels:Read';
            RssChannelsRow.updatePermission = 'Channels:Update';
        })(RssChannelsRow = Rss.RssChannelsRow || (Rss.RssChannelsRow = {}));
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssChannelsService;
        (function (RssChannelsService) {
            RssChannelsService.baseUrl = 'Rss/RssChannels';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete',
                'TestChannel'
            ].forEach(function (x) {
                RssChannelsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RssChannelsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RssChannelsService = Rss.RssChannelsService || (Rss.RssChannelsService = {}));
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssCrawlerEngine;
        (function (RssCrawlerEngine) {
            RssCrawlerEngine[RssCrawlerEngine["SyndicationFeed"] = 1] = "SyndicationFeed";
            RssCrawlerEngine[RssCrawlerEngine["CodeHollowFeedReader"] = 2] = "CodeHollowFeedReader";
            RssCrawlerEngine[RssCrawlerEngine["ParseRssByXml"] = 3] = "ParseRssByXml";
        })(RssCrawlerEngine = Rss.RssCrawlerEngine || (Rss.RssCrawlerEngine = {}));
        Serenity.Decorators.registerEnumType(RssCrawlerEngine, 'SimpleFeedly.Rss.RssCrawlerEngine');
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedItemsForm = /** @class */ (function (_super) {
            __extends(RssFeedItemsForm, _super);
            function RssFeedItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RssFeedItemsForm.init) {
                    RssFeedItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.HtmlContentEditor;
                    Q.initFormType(RssFeedItemsForm, [
                        'ChannelId', w0,
                        'IsChecked', w1,
                        'FeedItemKey', w2,
                        'Title', w2,
                        'Link', w2,
                        'Description', w3,
                        'PublishingDate', w4,
                        'Author', w2,
                        'Content', w5,
                        'CoverImageUrl', w2
                    ]);
                }
                return _this;
            }
            RssFeedItemsForm.formKey = 'Rss.RssFeedItems';
            return RssFeedItemsForm;
        }(Serenity.PrefixedContext));
        Rss.RssFeedItemsForm = RssFeedItemsForm;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedItemsRow;
        (function (RssFeedItemsRow) {
            RssFeedItemsRow.idProperty = 'Id';
            RssFeedItemsRow.nameProperty = 'FeedItemKey';
            RssFeedItemsRow.localTextPrefix = 'Rss.RssFeedItems';
            RssFeedItemsRow.deletePermission = 'FeedItems:Delete';
            RssFeedItemsRow.insertPermission = 'FeedItems:Insert';
            RssFeedItemsRow.readPermission = 'FeedItems:Read';
            RssFeedItemsRow.updatePermission = 'FeedItems:Update';
        })(RssFeedItemsRow = Rss.RssFeedItemsRow || (Rss.RssFeedItemsRow = {}));
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedItemsService;
        (function (RssFeedItemsService) {
            RssFeedItemsService.baseUrl = 'Rss/RssFeedItems';
            [
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'MarkCheckedFeedItem',
                'MarkCheckedBatchFeedItems',
                'GetFeedItemCheckedState',
                'AddBlacklistItem',
                'AddBlacklistItems'
            ].forEach(function (x) {
                RssFeedItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RssFeedItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RssFeedItemsService = Rss.RssFeedItemsService || (Rss.RssFeedItemsService = {}));
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Texts;
    (function (Texts) {
        SimpleFeedly['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Rss: { Blacklists: { Id: 1, ShrinkedTitle: 1, ShrinkedTitleHash: 1 }, RssChannels: { Copyright: 1, Description: 1, DomainGroup: 1, ErrorMessage: 1, Id: 1, ImageUrl: 1, IsActive: 1, IsError: 1, Language: 1, LastUpdatedDate: 1, Link: 1, OriginalDocument: 1, RefreshTimeMinutes: 1, RssCrawlerEngine: 1, Title: 1, Type: 1 }, RssFeedItems: { Author: 1, ChannelId: 1, Content: 1, CoverImageUrl: 1, Description: 1, FeedItemKey: 1, Id: 1, IsChecked: 1, Link: 1, PublishingDate: 1, RssChannelDomainGroup: 1, RssChannelTitle: 1, Title: 1, XmlData: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SimpleFeedly.Texts || (SimpleFeedly.Texts = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SimpleFeedly.Authorization || (SimpleFeedly.Authorization = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SimpleFeedly.Administration || (SimpleFeedly.Administration = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SimpleFeedly.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SimpleFeedly.LanguageList || (SimpleFeedly.LanguageList = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var J;
(function (J) {
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
        }
        else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    J.createCookie = createCookie;
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    J.readCookie = readCookie;
    function eraseCookie(name) {
        createCookie(name, "", -1);
    }
    J.eraseCookie = eraseCookie;
    function initSkins() {
        var curSkinClass = readCookie("ThemePreference") || "blue";
        //console.log(curSkinClass);
        switch (curSkinClass.toLowerCase().trim()) {
            case "dark-001":
                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;
                break;
            default:
        }
    }
    J.initSkins = initSkins;
})(J || (J = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="Helpers/J.initSkins.ts" />
var SimpleFeedly;
(function (SimpleFeedly) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SimpleFeedly');
        Serenity.EntityDialog.defaultLanguageList = SimpleFeedly.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        J.initSkins();
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SimpleFeedly.ScriptInitialization || (SimpleFeedly.ScriptInitialization = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var CustomLookupFormatter = /** @class */ (function () {
            function CustomLookupFormatter() {
            }
            CustomLookupFormatter.prototype.format = function (ctx) {
                var result = ctx.value;
                var lookup = Q.getLookup(this.lookupKey);
                lookup.items.some(function (item, idx) {
                    var textValue = item[lookup.textField];
                    var text = (ss.isNullOrUndefined(textValue) ? '' : textValue.toString());
                    var idValue = item[lookup.idField];
                    var id = (ss.isNullOrUndefined(idValue) ? '' : idValue.toString());
                    if (id == ctx.value) {
                        result = text;
                        return true;
                    }
                    return false;
                });
                return result;
            };
            __decorate([
                Serenity.Decorators.option()
            ], CustomLookupFormatter.prototype, "lookupKey", void 0);
            CustomLookupFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], CustomLookupFormatter);
            return CustomLookupFormatter;
        }());
        Common.CustomLookupFormatter = CustomLookupFormatter;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SimpleFeedly.BasicProgressDialog = BasicProgressDialog;
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SimpleFeedly.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SimpleFeedly.DialogUtils || (SimpleFeedly.DialogUtils = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var J;
(function (J) {
    // https://stackoverflow.com/a/3540295
    function isMobile() {
        var isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        return isMobile;
    }
    J.isMobile = isMobile;
    function escapeHtml(value) {
        return $("<div />").text(value).html();
    }
    J.escapeHtml = escapeHtml;
    function goToByScroll(element) {
        $('html,body').animate({
            scrollTop: element.offset().top
        }, 'slow');
    }
    J.goToByScroll = goToByScroll;
})(J || (J = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    SimpleFeedly.StaticTextBlock = StaticTextBlock;
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var CustomPagerWithOnlyNextPreviousMixin = /** @class */ (function () {
            function CustomPagerWithOnlyNextPreviousMixin(options) {
                var _this = this;
                this._customPagerCurrentPage = 1;
                this._customPager = null;
                this._originalPager = null;
                this._btnSwitch = null;
                var self = this;
                this.options = options;
                var dg = this.dataGrid = options.grid;
                this._pagingMode = options.pagingMode = options.pagingMode || 'next-previous-only';
                if (this._originalPager == null) {
                    this._originalPager = this.options.grid.element.find(".s-SlickPager");
                }
                this.options.grid.element.find(".slick-pg-in").hide();
                if (this._customPager == null) {
                    this._customPager = $("<span class='next-previous-pager'><button class='custompager-pre'><strong>«</strong> Previous</button><span style='padding: 0 2px;'></span><button class='custompager-next'>Next <strong>»</strong></button><span style='padding: 0 2px;'></span><b>Page</b> <span class='custompager-curpage'>1</span></span>");
                    this._originalPager.find(".slick-pg-in").append(this._customPager);
                }
                if (this._btnSwitch == null) {
                    this._btnSwitch = $("<input type=\"checkbox\" title=\"Full Pager\" class=\"paging-mode-switch pull-right\" style=\"margin-right: 5px; cursor: pointer\" " + (options.pagingMode == "full" ? ' checked' : '') + ">");
                    this._btnSwitch.appendTo(dg.element.find(".slick-pg-in"));
                    this._btnSwitch.change(function (evt) {
                        var isFullMode = $(evt.target).is(":checked");
                        // update current page number
                        if (!isFullMode) {
                            _this._customPagerCurrentPage = parseInt(_this.options.grid.element.find(".slick-pg-current").val());
                            _this._originalPager.find(".custompager-curpage").text(_this.options.grid.element.find(".slick-pg-current").val());
                        }
                        _this.switchView(isFullMode ? 'full' : 'next-previous-only');
                    });
                }
                this._originalPager.find(".custompager-pre").click(function (e) {
                    if (_this._customPagerCurrentPage > 1) {
                        _this._customPagerCurrentPage--;
                        _this.dataGrid.view.seekToPage = _this._customPagerCurrentPage;
                        _this.dataGrid.refresh();
                        _this._originalPager.find(".custompager-curpage").text(_this._customPagerCurrentPage);
                    }
                    return;
                });
                this._originalPager.find(".custompager-next").click(function (e) {
                    _this._customPagerCurrentPage++;
                    _this.dataGrid.view.seekToPage = _this._customPagerCurrentPage;
                    _this.dataGrid.refresh();
                    _this._originalPager.find(".custompager-curpage").text(_this._customPagerCurrentPage);
                    return;
                });
                dg.view.onDataChanged.subscribe(function () {
                    _this.updatePageControls(!$(_this._btnSwitch).is(":checked"));
                });
                // save setting
                var oldCurrentSettings = dg.getCurrentSettings;
                dg.getCurrentSettings = function (flag) {
                    var settings = oldCurrentSettings.apply(dg, [flag]);
                    settings['customPagerMode'] = $(self._btnSwitch).is(":checked") ? 'full' : 'next-previous-only';
                    return settings;
                };
                var oldRestoreSettings = dg.restoreSettings;
                dg.restoreSettings = function (settings, flags) {
                    oldRestoreSettings.apply(dg, [settings, flags]);
                    if (settings == null) {
                        var storage = this.getPersistanceStorage();
                        if (storage == null) {
                            self.switchView(self._pagingMode);
                            return;
                        }
                        var json = Q.trimToNull(storage.getItem(this.getPersistanceKey()));
                        if (!json) {
                            self.switchView(self._pagingMode);
                            return;
                        }
                        settings = JSON.parse(json);
                    }
                    var viewPagerMode = settings.customPagerMode || self._pagingMode;
                    var currentViewPagerMode = $(self._btnSwitch).is(":checked") ? 'full' : 'next-previous-only';
                    if (viewPagerMode != currentViewPagerMode) {
                        $(self._btnSwitch).click();
                    }
                };
            }
            CustomPagerWithOnlyNextPreviousMixin.prototype.updateNextButton = function (nbrOfRecords, nbrOfRowsPerPage) {
                if (this.options.pagingMode === 'full') {
                    return;
                }
                if (nbrOfRecords == 0 || nbrOfRecords < nbrOfRowsPerPage) {
                    this._originalPager.find(".custompager-next").prop("disabled", true);
                    this._originalPager.find(".custompager-next").css("opacity", 0.5);
                }
                else {
                    this._originalPager.find(".custompager-next").prop("disabled", false);
                    this._originalPager.find(".custompager-next").css("opacity", 1);
                }
            };
            CustomPagerWithOnlyNextPreviousMixin.prototype.switchView = function (pMode) {
                this.updatePageControls(pMode == "next-previous-only");
                this.dataGrid.refresh();
                this.dataGrid.persistSettings();
            };
            CustomPagerWithOnlyNextPreviousMixin.prototype.updatePageControls = function (isNextPreviousOnlyMode) {
                if (isNextPreviousOnlyMode) {
                    this._originalPager.find(".next-previous-pager").show();
                    this._originalPager.find(".slick-pg-grp").hide();
                    this._originalPager.find(".slick-pg-sep").hide();
                    this._originalPager.find(".slick-pg-grp:first").show();
                }
                else {
                    this._originalPager.find(".next-previous-pager").hide();
                    this._originalPager.find(".slick-pg-grp").show();
                    this._originalPager.find(".slick-pg-sep").show();
                }
                this.options.grid.element.find(".slick-pg-in").show();
            };
            CustomPagerWithOnlyNextPreviousMixin.prototype.getCurrentPagerMode = function () {
                return $(this._btnSwitch).is(":checked") ? 'full' : 'next-previous-only';
            };
            return CustomPagerWithOnlyNextPreviousMixin;
        }());
        Common.CustomPagerWithOnlyNextPreviousMixin = CustomPagerWithOnlyNextPreviousMixin;
        var CustomPagerWithOnlyNextPreviousMixinOptions = /** @class */ (function () {
            function CustomPagerWithOnlyNextPreviousMixinOptions() {
            }
            return CustomPagerWithOnlyNextPreviousMixinOptions;
        }());
        Common.CustomPagerWithOnlyNextPreviousMixinOptions = CustomPagerWithOnlyNextPreviousMixinOptions;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                    window.location.reload();
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                Q.addOption(select, 'dark-001', Q.text('Site.Layout.Dark001'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var MyReactImage = /** @class */ (function (_super) {
            __extends(MyReactImage, _super);
            function MyReactImage(props) {
                var _this = _super.call(this, props) || this;
                _this.onError = function () {
                    if (!_this.state.errored) {
                        _this.setState({
                            src: _this.props.fallbackSrc,
                            errored: true,
                        });
                    }
                };
                _this.state = {
                    src: props.src,
                    errored: false,
                };
                return _this;
            }
            MyReactImage.prototype.render = function () {
                var src = this.state.src;
                var _a = this.props, _1 = _a.src, _2 = _a.fallbackSrc, props = __rest(_a, ["src", "fallbackSrc"]);
                return (React.createElement("img", __assign({ src: src, onError: this.onError }, props)));
            };
            return MyReactImage;
        }(React.Component));
        Common.MyReactImage = MyReactImage;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SimpleFeedly.Common || (SimpleFeedly.Common = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SimpleFeedly.Membership || (SimpleFeedly.Membership = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var BlacklistsDialog = /** @class */ (function (_super) {
            __extends(BlacklistsDialog, _super);
            function BlacklistsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rss.BlacklistsForm(_this.idPrefix);
                return _this;
            }
            BlacklistsDialog.prototype.getFormKey = function () { return Rss.BlacklistsForm.formKey; };
            BlacklistsDialog.prototype.getIdProperty = function () { return Rss.BlacklistsRow.idProperty; };
            BlacklistsDialog.prototype.getLocalTextPrefix = function () { return Rss.BlacklistsRow.localTextPrefix; };
            BlacklistsDialog.prototype.getNameProperty = function () { return Rss.BlacklistsRow.nameProperty; };
            BlacklistsDialog.prototype.getService = function () { return Rss.BlacklistsService.baseUrl; };
            BlacklistsDialog.prototype.getDeletePermission = function () { return Rss.BlacklistsRow.deletePermission; };
            BlacklistsDialog.prototype.getUpdatePermission = function () { return Rss.BlacklistsRow.updatePermission; };
            BlacklistsDialog.prototype.getInsertPermission = function () { return Rss.BlacklistsRow.insertPermission; };
            BlacklistsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BlacklistsDialog);
            return BlacklistsDialog;
        }(Serenity.EntityDialog));
        Rss.BlacklistsDialog = BlacklistsDialog;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var BlacklistsGrid = /** @class */ (function (_super) {
            __extends(BlacklistsGrid, _super);
            function BlacklistsGrid(container) {
                return _super.call(this, container) || this;
            }
            BlacklistsGrid.prototype.getColumnsKey = function () { return 'Rss.Blacklists'; };
            BlacklistsGrid.prototype.getDialogType = function () { return Rss.BlacklistsDialog; };
            BlacklistsGrid.prototype.getIdProperty = function () { return Rss.BlacklistsRow.idProperty; };
            BlacklistsGrid.prototype.getLocalTextPrefix = function () { return Rss.BlacklistsRow.localTextPrefix; };
            BlacklistsGrid.prototype.getService = function () { return Rss.BlacklistsService.baseUrl; };
            BlacklistsGrid.prototype.getInsertPermission = function () { return Rss.BlacklistsRow.insertPermission; };
            BlacklistsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BlacklistsGrid);
            return BlacklistsGrid;
        }(Serenity.EntityGrid));
        Rss.BlacklistsGrid = BlacklistsGrid;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Web;
    (function (Web) {
        var Rss;
        (function (Rss) {
            var HelloReact = /** @class */ (function (_super) {
                __extends(HelloReact, _super);
                function HelloReact() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.handleClick = function (e) {
                        Q.warning("My name is " + _this.props.something);
                    };
                    return _this;
                }
                HelloReact.prototype.render = function () {
                    var something = this.props.something;
                    return (React.createElement(React.Fragment, null,
                        React.createElement("div", { onClick: this.handleClick, style: { padding: "40px", textAlign: "center", verticalAlign: "middle" } },
                            "Hello ",
                            something)));
                };
                return HelloReact;
            }(React.Component));
            Rss.HelloReact = HelloReact;
        })(Rss = Web.Rss || (Web.Rss = {}));
    })(Web = SimpleFeedly.Web || (SimpleFeedly.Web = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssChannelsDialog = /** @class */ (function (_super) {
            __extends(RssChannelsDialog, _super);
            function RssChannelsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rss.RssChannelsForm(_this.idPrefix);
                return _this;
            }
            RssChannelsDialog.prototype.getFormKey = function () { return Rss.RssChannelsForm.formKey; };
            RssChannelsDialog.prototype.getIdProperty = function () { return Rss.RssChannelsRow.idProperty; };
            RssChannelsDialog.prototype.getLocalTextPrefix = function () { return Rss.RssChannelsRow.localTextPrefix; };
            RssChannelsDialog.prototype.getNameProperty = function () { return Rss.RssChannelsRow.nameProperty; };
            RssChannelsDialog.prototype.getService = function () { return Rss.RssChannelsService.baseUrl; };
            RssChannelsDialog.prototype.getDeletePermission = function () { return Rss.RssChannelsRow.deletePermission; };
            RssChannelsDialog.prototype.getUpdatePermission = function () { return Rss.RssChannelsRow.updatePermission; };
            RssChannelsDialog.prototype.getInsertPermission = function () { return Rss.RssChannelsRow.insertPermission; };
            RssChannelsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    this.form.IsError.getGridField().toggle(false);
                    this.form.ErrorMessage.getGridField().toggle(false);
                }
            };
            RssChannelsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RssChannelsDialog);
            return RssChannelsDialog;
        }(Serenity.EntityDialog));
        Rss.RssChannelsDialog = RssChannelsDialog;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssChannelsGrid = /** @class */ (function (_super) {
            __extends(RssChannelsGrid, _super);
            function RssChannelsGrid(container) {
                return _super.call(this, container) || this;
            }
            RssChannelsGrid.prototype.getColumnsKey = function () { return 'Rss.RssChannels'; };
            RssChannelsGrid.prototype.getIsActiveProperty = function () { return Rss.RssChannelsRow.isActiveProperty; };
            RssChannelsGrid.prototype.getDialogType = function () { return Rss.RssChannelsDialog; };
            RssChannelsGrid.prototype.getIdProperty = function () { return Rss.RssChannelsRow.idProperty; };
            RssChannelsGrid.prototype.getLocalTextPrefix = function () { return Rss.RssChannelsRow.localTextPrefix; };
            RssChannelsGrid.prototype.getService = function () { return Rss.RssChannelsService.baseUrl; };
            RssChannelsGrid.prototype.getInsertPermission = function () { return Rss.RssChannelsRow.insertPermission; };
            RssChannelsGrid.prototype.getAddButtonCaption = function () {
                return "New Channel";
            };
            RssChannelsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RssChannelsGrid);
            return RssChannelsGrid;
        }(Serenity.EntityGrid));
        Rss.RssChannelsGrid = RssChannelsGrid;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssChannelsVerifierForm = /** @class */ (function (_super) {
            __extends(RssChannelsVerifierForm, _super);
            function RssChannelsVerifierForm(container) {
                var _this = _super.call(this, container) || this;
                // set focus on url textbox
                _this.byId("txtFeedUrl").focus();
                _this.templateHtml = _this.byId("templateItems")[0].innerHTML;
                // enter event on url textbox
                _this.byId("txtFeedUrl").keyup(function (event) {
                    if (event.keyCode === 13) {
                        _this.byId("btnCheck").click();
                    }
                });
                // verify button
                _this.byId("btnCheck").click(function () { return _this.CheckChannel(_this.byId("txtFeedUrl").val()); });
                return _this;
                //ReactDOM.render(React.createElement(SimpleFeedly.Web.Rss.HelloReact, { something: 'Jin' }), this.byId("demoReactContainer")[0]);
            }
            RssChannelsVerifierForm.prototype.CheckChannel = function (feedUrl) {
                var _this = this;
                if (Q.trimToNull(feedUrl) == null) {
                    Q.warning("Please enter channel url");
                    return;
                }
                Rss.RssChannelsService.TestChannel({ FeedUrl: feedUrl }, function (response) {
                    console.log(response);
                    if (response.Error != null) {
                        Q.alert(response.Error.Message);
                    }
                    else {
                        _this.byId("usedEngine").html("Engine: " + response.Engine);
                        var result = "";
                        response.Entities.forEach(function (item, idx) {
                            result += _this.templateHtml
                                .replace(/{{Link}}/g, item.Link)
                                .replace(/{{Title}}/g, item.Title);
                        });
                        console.log(result);
                        _this.byId("postContainer").html(result);
                    }
                });
            };
            RssChannelsVerifierForm = __decorate([
                Serenity.Decorators.registerClass()
            ], RssChannelsVerifierForm);
            return RssChannelsVerifierForm;
        }(Serenity.TemplatedWidget));
        Rss.RssChannelsVerifierForm = RssChannelsVerifierForm;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedCard = /** @class */ (function (_super) {
            __extends(RssFeedCard, _super);
            function RssFeedCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RssFeedCard.prototype.getRandomColor = function () {
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                return "#" + randomColor;
            };
            RssFeedCard.prototype.render = function () {
                var _this = this;
                var bkImage = "/Content/site/images/tech-ph.png";
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "custom-card-items", style: { marginLeft: "-10px" } }, this.props.items.map(function (item, index) {
                        return (React.createElement("div", { className: "custom-card-item col-md-12 col-md-6 col-md-3", key: item.Id, style: { marginTop: "5px", marginBottom: "5px", height: "138px", position: "relative" } },
                            React.createElement("div", { style: { border: "dashed 1px #ccc", borderTop: "none", borderRight: "none", position: "absolute", top: "11px", right: "26px", padding: "0 0 2px 3px", borderBottomLeftRadius: "3px", backgroundColor: "#fff" } },
                                React.createElement("span", { className: "fa fa-pencil-square fa-lg text-purple", onClick: function () { _this.props.editItemClickEvt(item); return true; }, style: { cursor: "pointer", opacity: "0.9" } })),
                            React.createElement("div", { style: { border: "solid 1px #ddd", padding: "10px", borderRadius: "5px", boxShadow: "5px 7px 15px #e2dfdf" } },
                                React.createElement("a", { href: item.Link, target: "_blank" },
                                    React.createElement(SimpleFeedly.Common.MyReactImage, { src: item.CoverImageUrl == null ? bkImage : item.CoverImageUrl, 
                                        //fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                                        fallbackSrc: bkImage, style: { width: "100%", minHeight: "90px", maxHeight: "92px", objectFit: "cover", backgroundColor: _this.getRandomColor(), border: "solid 1px #ececec" } })),
                                React.createElement("a", { href: item.Link, target: "_blank" },
                                    React.createElement("div", { style: { textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingTop: "6px", fontWeight: 600 } }, item.Title)))));
                    }))));
            };
            return RssFeedCard;
        }(React.Component));
        Rss.RssFeedCard = RssFeedCard;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedItemsDialog = /** @class */ (function (_super) {
            __extends(RssFeedItemsDialog, _super);
            function RssFeedItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Rss.RssFeedItemsForm(_this.idPrefix);
                return _this;
            }
            RssFeedItemsDialog.prototype.getFormKey = function () { return Rss.RssFeedItemsForm.formKey; };
            RssFeedItemsDialog.prototype.getIdProperty = function () { return Rss.RssFeedItemsRow.idProperty; };
            RssFeedItemsDialog.prototype.getLocalTextPrefix = function () { return Rss.RssFeedItemsRow.localTextPrefix; };
            RssFeedItemsDialog.prototype.getNameProperty = function () { return Rss.RssFeedItemsRow.nameProperty; };
            RssFeedItemsDialog.prototype.getService = function () { return Rss.RssFeedItemsService.baseUrl; };
            RssFeedItemsDialog.prototype.getDeletePermission = function () { return Rss.RssFeedItemsRow.deletePermission; };
            RssFeedItemsDialog.prototype.getUpdatePermission = function () { return Rss.RssFeedItemsRow.updatePermission; };
            RssFeedItemsDialog.prototype.getInsertPermission = function () { return Rss.RssFeedItemsRow.insertPermission; };
            RssFeedItemsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.ChannelId, true);
                }
                else {
                    this.toolbar.findButton('block-feed-item').remove();
                }
            };
            RssFeedItemsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (!this.isEditMode()) {
                    this.element.remove();
                    Q.notifyError("Add new is not allowed");
                }
            };
            RssFeedItemsDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                if (SimpleFeedly.Authorization.hasPermission("Blacklists:Insert")) {
                    buttons.push({
                        title: 'Block',
                        cssClass: "block-feed-item text-red",
                        icon: "fa fa-ban",
                        onClick: function () {
                            if (!_this.isEditMode()) {
                                return;
                            }
                            if (!SimpleFeedly.Authorization.hasPermission("Blacklists:Insert")) {
                                Q.alert("You have no permission for this action");
                                return;
                            }
                            Q.confirm('You want to block:\n   - Title: ' + J.escapeHtml(_this.entity.Title) + '\n   - Channel: ' + J.escapeHtml(_this.entity.RssChannelTitle) + ' ?', function () {
                                Rss.RssFeedItemsService.AddBlacklistItem({ ChannelId: _this.entity.ChannelId, FeedItemId: _this.entity.Id, Title: _this.entity.Title, IsDeleteFeedItem: true }, function (response) {
                                    Q.notifySuccess("ok");
                                    Serenity.SubDialogHelper.triggerDataChange(_this);
                                    _this.dialogClose();
                                });
                            }, {
                                title: 'Confirm',
                            });
                        }
                    });
                }
                return buttons;
            };
            RssFeedItemsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], RssFeedItemsDialog);
            return RssFeedItemsDialog;
        }(Serenity.EntityDialog));
        Rss.RssFeedItemsDialog = RssFeedItemsDialog;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
/// <reference path="../../common/mixins/gridpaging/custompagerwithonlynextpreviousmixin.ts" />
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedItemsGrid = /** @class */ (function (_super) {
            __extends(RssFeedItemsGrid, _super);
            function RssFeedItemsGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nbrNotCheckedItems = $("<span style=\"margin-left: 10px; font-size: 20px; color: #4eaee6; display: none; line-height: 50px; border: dashed 1px #DDD; padding: 2px\" />");
                _this.nbrNotCheckedItems.insertAfter($(".sidebar-toggle"));
                $('body').addClass('sidebar-collapse');
                $(".grid-title").hide();
                if (_this.quickFiltersDiv) {
                    _this.quickFiltersDiv.hide();
                }
                if (J.isMobile()) {
                    $(".s-QuickSearchInput").css("width", "110px");
                    $(".refresh-button").hide();
                    $(".tool-buttons").css("position", "fixed").css("z-index", "9998").css("right", "10px").css("bottom", "100px").css("background", "gray");
                }
                else {
                    $(".s-QuickSearchInput").css("width", "170px");
                }
                (function adjustContainerWidth() {
                    setTimeout(function () {
                        if (!$(".card-container").hasClass("card-container-full-width")) {
                            $(".card-container").addClass("card-container-full-width");
                        }
                        else {
                            adjustContainerWidth();
                        }
                    }, 100);
                })();
                if (J.isMobile()) {
                    (function adjustContainerHeight() {
                        setTimeout(function () {
                            if (!$(".card-container").hasClass("card-container-height-auto")) {
                                $(".card-container").addClass("card-container-height-auto");
                            }
                            else {
                                adjustContainerHeight();
                            }
                        }, 100);
                    })();
                }
                return _this;
            }
            RssFeedItemsGrid.prototype.getColumnsKey = function () { return 'Rss.RssFeedItems'; };
            RssFeedItemsGrid.prototype.getDialogType = function () { return Rss.RssFeedItemsDialog; };
            RssFeedItemsGrid.prototype.getIdProperty = function () { return Rss.RssFeedItemsRow.idProperty; };
            RssFeedItemsGrid.prototype.getLocalTextPrefix = function () { return Rss.RssFeedItemsRow.localTextPrefix; };
            RssFeedItemsGrid.prototype.getService = function () { return Rss.RssFeedItemsService.baseUrl; };
            RssFeedItemsGrid.prototype.getInsertPermission = function () { return Rss.RssFeedItemsRow.insertPermission; };
            RssFeedItemsGrid.prototype.getAddButtonCaption = function () {
                return "New Feed";
            };
            RssFeedItemsGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                //// in the first times it will load data for grid view, we just need to call endpoint to load data for card view
                //if (typeof this.isCalled == 'undefined') {
                //    this.isCalled = true;
                //    return false;
                //}
                var request = this.view.params;
                request.EnableOnlyNextPreviousMode = this._pagerMixin.getCurrentPagerMode() == 'next-previous-only';
                return true;
            };
            RssFeedItemsGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
                this._pagerMixin = new SimpleFeedly.Common.CustomPagerWithOnlyNextPreviousMixin({
                    grid: this,
                    rowPerPage: this.getPagerOptions().rowsPerPage
                });
                var editItemEvt = this.editItem.bind(this);
                this.element.children('.grid-container').empty().hide();
                this.cardContainer = $('<div class="card-container"></div>')
                    .insertAfter(this.element.children('.grid-container'));
                this.view.onDataChanged.subscribe(function () {
                    _this.updateItems(editItemEvt);
                });
                this.updateItems(editItemEvt);
            };
            RssFeedItemsGrid.prototype.updateItems = function (editItemClickEvt) {
                ReactDOM.render(React.createElement(Rss.RssFeedCard, { items: this.getItems(), editItemClickEvt: editItemClickEvt }), this.cardContainer[0]);
            };
            RssFeedItemsGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                Q.first(filters, function (x) { return x.field == "IsChecked" /* IsChecked */; }).init = function (w) {
                    w.value = "0"; // false
                };
                return filters;
            };
            RssFeedItemsGrid.prototype.getSelectedItems = function () {
                var ids = this.rowSelection.getSelectedKeys();
                var result = [];
                var _loop_1 = function (item) {
                    if (Q.any(ids, function (x) { return item.Id.toString() === x; })) {
                        result.push(item);
                    }
                };
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_1(item);
                }
                return result;
            };
            RssFeedItemsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.unshift({
                    title: J.isMobile() ? '' : 'Mark as unread',
                    cssClass: 'text-orange',
                    icon: "fa fa-undo",
                    separator: 'right',
                    hint: 'Mark as unread',
                    onClick: function () {
                        if (!SimpleFeedly.Authorization.hasPermission("FeedItems:MarkAsReadAndUnread")) {
                            Q.alert("This action is not allowed");
                            return;
                        }
                        var selectedItems = _this.getSelectedItems();
                        if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                            return Q.warning("Please select at least one item");
                        }
                        return Q.confirm('Are you sure, mark them as un-checked?', function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            $.each(selectedItems, function (idx, item) {
                                Rss.RssFeedItemsService.MarkCheckedFeedItem({ Id: item.Id, IsChecked: false }, function (response) {
                                    _this.rowSelection.resetCheckedAndRefresh();
                                });
                            });
                        }, {
                            title: 'Confirm',
                        });
                    }
                });
                buttons.unshift({
                    title: J.isMobile() ? '' : 'Mark as read',
                    cssClass: 'text-green',
                    icon: 'fa fa-check',
                    hint: 'Mark as read',
                    onClick: function () {
                        if (!SimpleFeedly.Authorization.hasPermission("FeedItems:MarkAsReadAndUnread")) {
                            Q.alert("This action is not allowed");
                            return;
                        }
                        var selectedItems = _this.getSelectedItems();
                        if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                            return Q.warning("Please select at least one item");
                        }
                        return Q.confirm('Are you sure, mark them as checked?', function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            $.each(selectedItems, function (idx, item) {
                                Rss.RssFeedItemsService.MarkCheckedFeedItem({ Id: item.Id, IsChecked: true }, function (response) {
                                    _this.rowSelection.resetCheckedAndRefresh();
                                });
                            });
                        }, {
                            title: 'Confirm',
                        });
                    }
                });
                buttons.splice(0, 0, {
                    title: J.isMobile() ? '' : 'Page as read',
                    cssClass: 'text-green',
                    icon: 'fa fa-check-square-o',
                    separator: 'right',
                    hint: 'Mark this page as read',
                    onClick: function () {
                        if (!SimpleFeedly.Authorization.hasPermission("FeedItems:MarkAsReadAndUnread")) {
                            Q.alert("This action is not allowed");
                            return;
                        }
                        var selectedItems = _this.view.getItems();
                        if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                            return Q.warning("Please select at least one item");
                        }
                        return Q.confirm('Mark checked for all items of this page?', function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            Rss.RssFeedItemsService.MarkCheckedBatchFeedItems({ Ids: selectedItems.map(function (x) { return x.Id; }), IsChecked: true }, function (response) {
                                _this.rowSelection.resetCheckedAndRefresh();
                                if (J.isMobile()) {
                                    J.goToByScroll(_this.element);
                                }
                            });
                        }, {
                            title: 'Confirm',
                        });
                    }
                });
                if (!J.isMobile()) {
                    buttons.splice(1, 0, {
                        title: J.isMobile() ? '' : 'Block',
                        cssClass: 'text-red',
                        icon: 'fa fa-ban',
                        separator: 'right',
                        hint: 'Block feed items',
                        onClick: function () {
                            if (!SimpleFeedly.Authorization.hasPermission("FeedItems:BlockFeedItem")) {
                                Q.alert("This action is not allowed");
                                return;
                            }
                            var selectedItems = _this.getSelectedItems();
                            if (selectedItems === null || selectedItems === undefined || selectedItems.length === 0) {
                                return Q.warning("Please select at least one item");
                            }
                            return Q.confirm('Are you sure you want to block these items?', function () {
                                if (!_this.onViewSubmit()) {
                                    return;
                                }
                                var data = [];
                                selectedItems.forEach(function (item, idx) {
                                    data.push({ FeedItemId: item.Id, Title: item.Title });
                                });
                                Rss.RssFeedItemsService.AddBlacklistItems({ FeedItems: data, IsDeleteFeedItem: true }, function (response) {
                                    Q.notifySuccess("ok");
                                    _this.rowSelection.resetCheckedAndRefresh();
                                });
                            }, {
                                title: 'Confirm',
                            });
                        }
                    });
                }
                buttons.push({
                    title: '',
                    icon: 'fa fa-filter text-blue',
                    hint: 'Filters',
                    onClick: function () {
                        _this.quickFiltersDiv.slideToggle();
                    }
                });
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            RssFeedItemsGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var selectionCol = Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; });
                selectionCol.width = 27; // fix IE: dot issue
                columns.splice(0, 0, selectionCol);
                columns.splice(1, 0, {
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    sortable: false,
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (SimpleFeedly.Authorization.hasPermission("FeedItems:BlockFeedItem")) {
                    columns.splice(2, 0, {
                        field: 'Block Feed Item',
                        name: '',
                        sortable: false,
                        format: function (ctx) { return '<a class="inline-action block-feed-item" title="block feed item"><i class="fa fa-ban link-muted"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                Q.first(columns, function (x) { return x.field == "Title" /* Title */; }).format = function (ctx) {
                    var currentItem = ctx.item;
                    return "<a href=\"" + currentItem.Link + ("\" class=\"open-feed-item\" target=\"_blank\">" + Q.htmlEncode(ctx.value) + "</a>");
                };
                return columns;
            };
            RssFeedItemsGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('view-details')) {
                        this.editItem(item.Id);
                    }
                    else if (target.hasClass('block-feed-item')) {
                        if (!SimpleFeedly.Authorization.hasPermission("Blacklists:Insert")) {
                            Q.alert("You have no permission for this action");
                            return;
                        }
                        Q.confirm('You want to block:\n   - Title: ' + J.escapeHtml(item.Title) + '\n   - Channel: ' + J.escapeHtml(item.RssChannelTitle) + ' ?', function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            Rss.RssFeedItemsService.AddBlacklistItem({ ChannelId: item.ChannelId, FeedItemId: item.Id, Title: item.Title, IsDeleteFeedItem: true }, function (response) {
                                Q.notifySuccess("ok");
                                _this.refresh();
                            });
                        }, {
                            title: 'Confirm',
                        });
                    }
                }
                else {
                    if (target.hasClass("open-feed-item")) {
                        //e.preventDefault();
                        Rss.RssFeedItemsService.MarkCheckedFeedItem({ Id: item.Id, IsChecked: true }, function (response) {
                            // console.log("marked");
                            _this.refresh();
                        });
                    }
                }
            };
            RssFeedItemsGrid.prototype.onViewProcessData = function (response) {
                var _this = this;
                var result = _super.prototype.onViewProcessData.call(this, response);
                Rss.RssFeedItemsService.GetFeedItemCheckedState({}, function (res) {
                    //this.titleDiv.find(".title-text").text("Feed Items (" + res.UnCheckedItems + " unchecked)");
                    _this.nbrNotCheckedItems.text("" + res.UnCheckedItems).fadeIn('slow');
                });
                this._pagerMixin.updateNextButton(result.Entities.length, response.Take);
                return result;
            };
            //protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            //    return [
            //        { name: fld.Title, title: "Title" },
            //        { name: fld.Description, title: "Description" },
            //        { name: "", title: "All" }
            //    ];
            //}
            RssFeedItemsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 29;
                return opt;
            };
            RssFeedItemsGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 20;
                return opt;
            };
            RssFeedItemsGrid.prototype.getPersistanceStorage = function () {
                return new SimpleFeedly.Common.UserPreferenceStorage();
            };
            RssFeedItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RssFeedItemsGrid);
            return RssFeedItemsGrid;
        }(Serenity.EntityGrid));
        Rss.RssFeedItemsGrid = RssFeedItemsGrid;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
var SimpleFeedly;
(function (SimpleFeedly) {
    var Rss;
    (function (Rss) {
        var RssFeedImageFormatter = /** @class */ (function () {
            function RssFeedImageFormatter() {
            }
            RssFeedImageFormatter.prototype.format = function (ctx) {
                var url = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                return "<a class=\"inline-image\" target='_blank' >" +
                    ("<img src=\"" + url + "\" style='max-height: 100%; max-width: 100%;' /></a>");
            };
            RssFeedImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], RssFeedImageFormatter.prototype, "fileProperty", void 0);
            RssFeedImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], RssFeedImageFormatter);
            return RssFeedImageFormatter;
        }());
        Rss.RssFeedImageFormatter = RssFeedImageFormatter;
    })(Rss = SimpleFeedly.Rss || (SimpleFeedly.Rss = {}));
})(SimpleFeedly || (SimpleFeedly = {}));
//# sourceMappingURL=SimpleFeedly.Web.js.map