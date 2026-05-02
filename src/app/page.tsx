import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/DashboardShell";

export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <DashboardShell
      userName={session.user?.name ?? "Procurador"}
      userImage={session.user?.image ?? undefined}
      signOutAction={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    />
  );
}
