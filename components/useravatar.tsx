import { auth } from "../auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="text-center flex gap-4">
      <section>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
      </section>
      <Image
        src={session.user.image || "/youtube.svg"}
        alt="User Avatar"
        width={50}
        height={50}
        className="rounded-full px-1 bg-green-400"
      />
    </div>
  );
}
