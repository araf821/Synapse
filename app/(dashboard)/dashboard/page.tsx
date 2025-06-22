import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/server/db";
import { synthesesTable } from "@/server/db/schema";
import { eq, desc } from "drizzle-orm";
import { SynthesisGrid } from "@/components/dashboard/synthesis-grid";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { WelcomeSection } from "@/components/dashboard/welcome-section";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  // Fetch user's syntheses
  const userSyntheses = await db
    .select()
    .from(synthesesTable)
    .where(eq(synthesesTable.userId, user.id!))
    .orderBy(desc(synthesesTable.updatedAt));

  // Calculate stats
  const totalSyntheses = userSyntheses.length;
  const completedSyntheses = userSyntheses.filter(
    s => s.stage === "synthesis"
  ).length;
  const inProgressSyntheses = userSyntheses.filter(
    s => s.stage !== "synthesis"
  ).length;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:pb-12">
      {/* Welcome Section */}
      <WelcomeSection user={user} />

      {/* Dashboard Stats */}
      <DashboardStats
        totalSyntheses={totalSyntheses}
        completedSyntheses={completedSyntheses}
        inProgressSyntheses={inProgressSyntheses}
      />

      {/* Syntheses Section */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Your Syntheses
          </h2>
          {userSyntheses.length > 0 && (
            <p className="text-sm text-muted-foreground">
              {userSyntheses.length} total synthesis
              {userSyntheses.length !== 1 ? "es" : ""}
            </p>
          )}
        </div>

        <SynthesisGrid syntheses={userSyntheses} />
      </div>
    </div>
  );
};

export default DashboardPage;
