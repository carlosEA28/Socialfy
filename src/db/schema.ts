import {
  boolean,
  integer,
  json,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

//draft = rascunho
export const postStatusEnum = pgEnum("postStatus", ["draft", "ready"]);
export const postMediaTypeEnum = pgEnum("postMediaTypes", ["image", "video"]);
export const postPublicationEnum = pgEnum("postPublicationEnum", [
  "draft",
  "scheduled",
  "published",
  "failed",
]);

export const userTable = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const sessionTable = pgTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
});

export const accountTable = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date())
    .notNull(),
});

export const verificationTable = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const PostTable = pgTable("posts", {
  id: uuid().primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  title: text().notNull(),
  description: text(),
  status: postStatusEnum(),
  createdAt: timestamp().defaultNow(),
});

export const PostTextTable = pgTable("postTexts", {
  id: uuid().primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => PostTable.id, { onDelete: "cascade" }),
  content: text().notNull(),
});

export const PostMediaTable = pgTable("postMedias", {
  id: uuid().primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => PostTable.id, { onDelete: "cascade" }),
  url: text().notNull(),
  type: postMediaTypeEnum().notNull(),
  durationInSeconds: integer(),
  size: integer(),
});

export const SocialNetworkTable = pgTable("socialNetworks", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull(),
  configSchema: json("config_schema").notNull(),
});

export const ConnectedAccountTable = pgTable("connectedAccounts", {
  id: uuid().primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "set null" }),
  socialNetworkId: uuid("social_network_id")
    .notNull()
    .references(() => SocialNetworkTable.id, { onDelete: "cascade" }),
  username: text().notNull(),
  accessToken: text().notNull(),
  refreshToken: text().notNull(),
  expiresIn: timestamp(),
});

export const PostPublicationTable = pgTable("postPublications", {
  id: uuid().primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => PostTable.id, { onDelete: "cascade" }),
  socialNetworkId: uuid("social_network_id")
    .notNull()
    .references(() => SocialNetworkTable.id, { onDelete: "cascade" }),
  connectedAccountId: uuid("connected_account_id")
    .notNull()
    .references(() => ConnectedAccountTable.id, { onDelete: "cascade" }),
  status: postPublicationEnum(),
  scheduledAt: timestamp().defaultNow(),
  publishedAt: timestamp().defaultNow(),
  networkOptions: json(),
});

export const TagTable = pgTable("tags", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull(),
});

export const PostTagsTable = pgTable("postTags", {
  id: uuid().primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => PostTable.id, { onDelete: "cascade" }),
  tagId: uuid("tag_id")
    .notNull()
    .references(() => TagTable.id, { onDelete: "cascade" }),
});
