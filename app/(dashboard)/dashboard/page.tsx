import { SignOut } from "@/components/auth/sign-out";
import { getCurrentUser } from "@/server/lib/auth";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <div>You are not signed in</div>;
  }

  return (
    <div>
      {JSON.stringify(user, null, 2)}
      <SignOut />
    </div>
  );
};
export default DashboardPage;
