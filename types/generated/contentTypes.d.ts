import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBasicBasic extends Schema.CollectionType {
  collectionName: 'basics';
  info: {
    singularName: 'basic';
    pluralName: 'basics';
    displayName: 'Basic';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    studentnum: Attribute.Integer & Attribute.Unique;
    name: Attribute.String;
    scholarship: Attribute.String;
    phone: Attribute.String;
    careertype: Attribute.String;
    grade: Attribute.String;
    reservation_case: Attribute.String;
    reservation_date: Attribute.String;
    study_type: Attribute.String;
    called_by: Attribute.String;
    recp: Attribute.String;
    reserver: Attribute.String;
    birth_date: Attribute.String;
    schadule: Attribute.String;
    payments: Attribute.String;
    papers: Attribute.String;
    requests: Attribute.String;
    complaints: Attribute.String;
    image: Attribute.String;
    national_id: Attribute.String;
    email: Attribute.String;
    cancel_Date: Attribute.String;
    cancel_Reason: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::basic.basic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::basic.basic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBasicTestBasicTest extends Schema.CollectionType {
  collectionName: 'basic_tests';
  info: {
    singularName: 'basic-test';
    pluralName: 'basic-tests';
    displayName: 'BasicTest';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    studentnum: Attribute.Integer;
    name: Attribute.String;
    scholarship: Attribute.String;
    phone: Attribute.String;
    careertype: Attribute.String;
    grade: Attribute.String;
    reservation_case: Attribute.String;
    reservation_date: Attribute.String;
    study_type: Attribute.String;
    called_by: Attribute.String;
    recp: Attribute.String;
    reserver: Attribute.String;
    birth_date: Attribute.String;
    schadule: Attribute.String;
    payments: Attribute.String;
    papers: Attribute.String;
    requests: Attribute.String;
    complaints: Attribute.String;
    image: Attribute.String;
    national_id: Attribute.String;
    email: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::basic-test.basic-test',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::basic-test.basic-test',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCallDetailCallDetail extends Schema.CollectionType {
  collectionName: 'call_details';
  info: {
    singularName: 'call-detail';
    pluralName: 'call-details';
    displayName: 'callDetail';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    serial: Attribute.String;
    date: Attribute.String;
    empolyeeName: Attribute.String;
    empCode: Attribute.String;
    scholarshipCode: Attribute.String;
    callsCount: Attribute.String;
    call_api: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::call-detail.call-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::call-detail.call-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCertificationCertification extends Schema.CollectionType {
  collectionName: 'certifications';
  info: {
    singularName: 'certification';
    pluralName: 'certifications';
    displayName: 'certification';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    graduateID: Attribute.Integer;
    name: Attribute.String;
    certificate: Attribute.String;
    graduationDate: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::certification.certification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::certification.certification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommentComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'comment';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    taskID: Attribute.Integer;
    comment: Attribute.Text;
    user: Attribute.String;
    attachment: Attribute.Media;
    isOpen: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmpEmp extends Schema.CollectionType {
  collectionName: 'emps';
  info: {
    singularName: 'emp';
    pluralName: 'emps';
    displayName: 'emp';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    userName: Attribute.String & Attribute.Required;
    password: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    code: Attribute.String & Attribute.Required;
    department: Attribute.String;
    renderName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::emp.emp', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::emp.emp', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiInvestMailInvestMail extends Schema.CollectionType {
  collectionName: 'invest_mails';
  info: {
    singularName: 'invest-mail';
    pluralName: 'invest-mails';
    displayName: 'investMail';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    email: Attribute.Email;
    projectName: Attribute.String;
    score: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invest-mail.invest-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invest-mail.invest-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvoiceInvoice extends Schema.CollectionType {
  collectionName: 'invoices';
  info: {
    singularName: 'invoice';
    pluralName: 'invoices';
    displayName: 'Invoice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    student_num: Attribute.Integer;
    time_stamp: Attribute.String;
    note: Attribute.String;
    serial: Attribute.String;
    amount: Attribute.Integer;
    invoice_type: Attribute.String;
    receptionist_reserver: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMAppUserMAppUser extends Schema.CollectionType {
  collectionName: 'm_app_users';
  info: {
    singularName: 'm-app-user';
    pluralName: 'm-app-users';
    displayName: 'm_app_user';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    stID: Attribute.BigInteger;
    email: Attribute.Email;
    phone: Attribute.Text;
    password: Attribute.Password;
    ppURL: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::m-app-user.m-app-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::m-app-user.m-app-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOnetaskOnetask extends Schema.CollectionType {
  collectionName: 'onetasks';
  info: {
    singularName: 'onetask';
    pluralName: 'onetasks';
    displayName: 'onetask';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    project: Attribute.String;
    label: Attribute.String;
    assign_to: Attribute.String;
    start: Attribute.String;
    deadline: Attribute.String;
    supervisor: Attribute.String;
    is_archive: Attribute.Boolean & Attribute.DefaultTo<false>;
    taskOwner: Attribute.String;
    is_star: Attribute.Boolean;
    is_assign_archive: Attribute.Boolean;
    is_owner_archive: Attribute.Boolean;
    is_super_archive: Attribute.Boolean;
    is_assign_star: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_owner_star: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_super_star: Attribute.Boolean & Attribute.DefaultTo<false>;
    isDone: Attribute.Boolean & Attribute.DefaultTo<false>;
    isOpen: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_urgent: Attribute.Boolean & Attribute.DefaultTo<false>;
    priority: Attribute.String;
    completedAt: Attribute.DateTime;
    evaluationRate: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::onetask.onetask',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::onetask.onetask',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentMobileAppPaymentMobileApp
  extends Schema.CollectionType {
  collectionName: 'm-app-payments';
  info: {
    singularName: 'payment-mobile-app';
    pluralName: 'payment-mobile-apps';
    displayName: 'PaymentMobileApp';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    stID: Attribute.BigInteger;
    Status: Attribute.Text;
    TotalPayment: Attribute.String;
    due_date: Attribute.String;
    paid_date: Attribute.String;
    amount: Attribute.String;
    PaidAmount: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-mobile-app.payment-mobile-app',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-mobile-app.payment-mobile-app',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'project';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    emp: Attribute.String;
    editby: Attribute.String;
    status: Attribute.String;
    projectType: Attribute.String;
    from: Attribute.String;
    to: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjecthistoryProjecthistory extends Schema.CollectionType {
  collectionName: 'projecthistories';
  info: {
    singularName: 'projecthistory';
    pluralName: 'projecthistories';
    displayName: 'projecthistory';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    createby: Attribute.String;
    editby: Attribute.String;
    deleteby: Attribute.String;
    status: Attribute.String;
    projectType: Attribute.String;
    from: Attribute.String;
    to: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::projecthistory.projecthistory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::projecthistory.projecthistory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReservationReservation extends Schema.CollectionType {
  collectionName: 'reservations';
  info: {
    singularName: 'reservation';
    pluralName: 'reservations';
    displayName: 'reservation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    auto_serial: Attribute.String;
    timestamp: Attribute.String;
    name: Attribute.String;
    amount: Attribute.Integer;
    amount_with_letters: Attribute.String;
    scholarship: Attribute.String;
    code_group1: Attribute.String;
    code_group2: Attribute.String;
    code_group3: Attribute.String;
    code_group4: Attribute.String;
    signature_employee_student: Attribute.String;
    deadline1: Attribute.String;
    deadline2: Attribute.String;
    deadline3: Attribute.String;
    deadline4: Attribute.String;
    graduation_grade: Attribute.String;
    phone: Attribute.String;
    notes: Attribute.String;
    receptionist: Attribute.String;
    comment: Attribute.String;
    study_type: Attribute.String;
    Re_agent_code: Attribute.String;
    idnational: Attribute.String;
    invoice: Attribute.String;
    student_num: Attribute.String;
    deadline_1_amount: Attribute.String;
    deadline_2_amount: Attribute.String;
    deadline_3_amount: Attribute.String;
    deadline_4_amount: Attribute.String;
    int: Attribute.String;
    religion: Attribute.String;
    date_of_birth: Attribute.String;
    email: Attribute.Email;
    cash_type: Attribute.String;
    code_group5: Attribute.String;
    code_group6: Attribute.String;
    code_group7: Attribute.String;
    code_group8: Attribute.String;
    code_group9: Attribute.String;
    code_group10: Attribute.String;
    code_group11: Attribute.String;
    code_group12: Attribute.String;
    deadline5: Attribute.String;
    deadline6: Attribute.String;
    deadline7: Attribute.String;
    deadline8: Attribute.String;
    deadline_5_amount: Attribute.String;
    deadline_6_amount: Attribute.String;
    deadline_7_amount: Attribute.String;
    deadline_8_amount: Attribute.String;
    student_category: Attribute.String;
    month: Attribute.String;
    year: Attribute.String;
    scholarship_code: Attribute.String;
    papers: Attribute.String;
    cc_agent_code: Attribute.String;
    group1_startingdate: Attribute.String;
    group2_startingdate: Attribute.String;
    group3_startingdate: Attribute.String;
    group4_startingdate: Attribute.String;
    group5_startingdate: Attribute.String;
    group6_startingdate: Attribute.String;
    group7_startingdate: Attribute.String;
    group8_startingdate: Attribute.String;
    group9_startingdate: Attribute.String;
    group10_startingdate: Attribute.String;
    group11_startingdate: Attribute.String;
    group12_startingdate: Attribute.String;
    code_group13: Attribute.String;
    code_group14: Attribute.String;
    code_group15: Attribute.String;
    call_agent: Attribute.String;
    reserve_agent: Attribute.String;
    final_st_code: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reservation.reservation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reservation.reservation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScheduleMAppScheduleMApp extends Schema.CollectionType {
  collectionName: 'schedule_m_apps';
  info: {
    singularName: 'schedule-m-app';
    pluralName: 'schedule-m-apps';
    displayName: 'scheduleMApp';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::schedule-m-app.schedule-m-app',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::schedule-m-app.schedule-m-app',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTaskTask extends Schema.CollectionType {
  collectionName: 'tasks';
  info: {
    singularName: 'task';
    pluralName: 'tasks';
    displayName: 'task';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    task_Name: Attribute.String;
    department: Attribute.String;
    responsible: Attribute.String;
    task_des_link: Attribute.String;
    type: Attribute.String;
    days: Attribute.String;
    fromm: Attribute.String;
    too: Attribute.String;
    task_No: Attribute.Integer & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::task.task', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::task.task', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTaskReportTaskReport extends Schema.CollectionType {
  collectionName: 'task_reports';
  info: {
    singularName: 'task-report';
    pluralName: 'task-reports';
    displayName: 'task_report';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    task_No: Attribute.Integer;
    task_completion: Attribute.Integer;
    emp: Attribute.String;
    note: Attribute.String;
    report: Attribute.String;
    task_found: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::task-report.task-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::task-report.task-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTodayTaskTodayTask extends Schema.CollectionType {
  collectionName: 'today_tasks';
  info: {
    singularName: 'today-task';
    pluralName: 'today-tasks';
    displayName: 'today_task';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    task_no: Attribute.Integer;
    task_name: Attribute.String;
    department: Attribute.String;
    responsible: Attribute.String;
    task_des_link: Attribute.String;
    type: Attribute.String;
    days: Attribute.String;
    fromm: Attribute.String;
    too: Attribute.String;
    task_completion: Attribute.Integer;
    emp: Attribute.String;
    note: Attribute.String;
    report: Attribute.String;
    task_found: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::today-task.today-task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::today-task.today-task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiToolLinkToolLink extends Schema.CollectionType {
  collectionName: 'tool_links';
  info: {
    singularName: 'tool-link';
    pluralName: 'tool-links';
    displayName: 'tool_link';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    emp_name: Attribute.String;
    fb: Attribute.Integer;
    v4_link: Attribute.String;
    code: Attribute.String;
    res_link: Attribute.String;
    resEditScreen: Attribute.String;
    DeleteReceipt: Attribute.String;
    auto_reservation: Attribute.String;
    PayDeleteReceipts: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tool-link.tool-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tool-link.tool-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTravelDetailsTravelDetails extends Schema.CollectionType {
  collectionName: 'traveldetails';
  info: {
    singularName: 'travel-details';
    pluralName: 'traveldetails';
    displayName: 'travelDetails';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    TravelName: Attribute.String;
    TravelDate: Attribute.Date;
    BackDate: Attribute.Date;
    MoveFrom: Attribute.String;
    BackFrom: Attribute.String;
    TravelDetails: Attribute.Text;
    Individual: Attribute.String;
    Double: Attribute.String;
    Triple: Attribute.String;
    QuadrupleQuintuple: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::travel-details.travel-details',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::travel-details.travel-details',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::basic.basic': ApiBasicBasic;
      'api::basic-test.basic-test': ApiBasicTestBasicTest;
      'api::call-detail.call-detail': ApiCallDetailCallDetail;
      'api::certification.certification': ApiCertificationCertification;
      'api::comment.comment': ApiCommentComment;
      'api::emp.emp': ApiEmpEmp;
      'api::invest-mail.invest-mail': ApiInvestMailInvestMail;
      'api::invoice.invoice': ApiInvoiceInvoice;
      'api::m-app-user.m-app-user': ApiMAppUserMAppUser;
      'api::onetask.onetask': ApiOnetaskOnetask;
      'api::payment-mobile-app.payment-mobile-app': ApiPaymentMobileAppPaymentMobileApp;
      'api::project.project': ApiProjectProject;
      'api::projecthistory.projecthistory': ApiProjecthistoryProjecthistory;
      'api::reservation.reservation': ApiReservationReservation;
      'api::schedule-m-app.schedule-m-app': ApiScheduleMAppScheduleMApp;
      'api::task.task': ApiTaskTask;
      'api::task-report.task-report': ApiTaskReportTaskReport;
      'api::today-task.today-task': ApiTodayTaskTodayTask;
      'api::tool-link.tool-link': ApiToolLinkToolLink;
      'api::travel-details.travel-details': ApiTravelDetailsTravelDetails;
    }
  }
}
