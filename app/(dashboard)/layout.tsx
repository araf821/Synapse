import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { DashboardNavbar } from "@/components/layout/dashboard-navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar user={user} />
      <main className="pt-20">{props.children}</main>
    </div>
  );
};

export default DashboardLayout;
