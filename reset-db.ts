import { neon } from "@neondatabase/serverless";

// Load environment variables
const sql = neon(process.env.DATABASE_URL!);

async function resetDatabase() {
  try {
    console.log("Dropping existing tables...");

    // Drop tables in correct order (foreign keys first)
    await sql`DROP TABLE IF EXISTS challenges CASCADE`;
    await sql`DROP TABLE IF EXISTS syntheses CASCADE`;
    await sql`DROP TABLE IF EXISTS users CASCADE`;

    // Drop the enum type as well
    await sql`DROP TYPE IF EXISTS challenge_type CASCADE`;

    console.log("✓ All tables dropped successfully");
    console.log("Now run: pnpm db:push");
  } catch (error) {
    console.error("Error resetting database:", error);
  }
}

resetDatabase();
