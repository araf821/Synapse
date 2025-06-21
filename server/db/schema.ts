import {
  pgTable,
  text,
  timestamp,
  varchar,
  integer,
  boolean,
  pgEnum,
  primaryKey,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";

// Auth.js required tables
export const usersTable = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accountsTable = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  account => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessionsTable = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokensTable = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  vt => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;

// Syntheses table - Main project table for the "Gauntlet" workflow
export const synthesesTable = pgTable("syntheses", {
  id: text("id").primaryKey(), // Using text for IDs to match Auth.js pattern
  title: varchar("title", { length: 255 })
    .default("Untitled Synthesis")
    .notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),

  // --- Stage 1: Brain Dump ---
  rawText: text("raw_text"), // The user's initial, unfiltered thoughts

  // --- Stage 3: Synthesis ---
  finalText: text("final_text"), // The final, user-crafted argument after the gauntlet

  // --- Metadata ---
  stage: integer("stage").default(1).notNull(), // 1: BrainDump, 2: Gauntlet, 3: Synthesis
  isCompleted: boolean("is_completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Synthesis = typeof synthesesTable.$inferSelect;
export type NewSynthesis = typeof synthesesTable.$inferInsert;

// Challenge type enum for clarity
export const challengeTypeEnum = pgEnum("challenge_type", [
  "counter-argument",
  "hidden-assumption",
  "devils-advocate",
]);

// Challenges table - Relational table for Stage 2 (exactly 3 challenges per synthesis)
export const challengesTable = pgTable("challenges", {
  id: text("id").primaryKey(),
  synthesisId: text("synthesis_id")
    .notNull()
    .references(() => synthesesTable.id, { onDelete: "cascade" }),

  // --- The AI's Contribution ---
  type: challengeTypeEnum("type").notNull(), // e.g., 'counter-argument'
  aiGeneratedQuestion: text("ai_generated_question").notNull(), // The provocative question from the AI
  aiGeneratedContext: text("ai_generated_context"), // e.g., The summary of the Stanford study for the 'counter-argument'

  // --- The User's Response ---
  userResponse: text("user_response"), // The user's written defense to this specific challenge

  // --- Metadata ---
  order: integer("order").notNull(), // To maintain the order 1, 2, 3 on the UI
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Challenge = typeof challengesTable.$inferSelect;
export type NewChallenge = typeof challengesTable.$inferInsert;

// Export all tables for Drizzle queries
export const schema = {
  usersTable,
  synthesesTable,
  challengesTable,
};
