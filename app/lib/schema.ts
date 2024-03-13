import * as z from "zod";

/**
 * This is a schema for Basic register settings
 *
 * @type {string{}}
 */
export const UserRegisterSchema = z.object({
  email: z.string().email(),
  username: z.string().max(12, { message: "please dont just write random letters...." }),
  password: z.string().min(1, {message: "dont leave it blank"}),
  experties: z.string().min(1, {message: "dont leave it blank"}),
});

/**
 * This is a schema for Basic user settings
 *
 * @type {string{}}
 */
export const UserSignSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {message: "dont leave it blank"}),
});

/**
 *
 *
 * THis is goig to be a schema for the user update
 *
 *
 */

export const UserUpdateSchema = z.object({
  email: z.optional(z.string().email()), //TODO make sure you fix this
  password: z.optional(z.string().min(1, {message: "dont leave it blank"})),
  username: z.optional(z.string().max(12, { message: "please dont just write random letters...." })),
  image: z.optional(z.any()),
});

/**
 *
 *
 * THis is goig to be a schema for createing a blog
 *
 *
 */

export const CreateBlogSchema = z.object({
  title: z.optional(z.string()), //TODO make sure you fix this
  content: z.optional(z.string().min(1, {message: "dont leave it blank"})),
  description: z.optional(z.string().max(79, { message: "please dont just write random letters.... you wrote too much" })),
  image: z.optional(z.any()),
  category: z.optional(z.string())
});

/**
 * This is a schema for sending an email to contact
 *
 * @type {string{}}
 */
export const SendContactEmail = z.object({
  to: z.optional(z.string()),
  name: z.string(),
  subject: z.string(),
  content: z.string()
})