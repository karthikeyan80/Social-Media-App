import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
      <div className="lg:col-span-7 lg:col-start-1">
        {user ? <CreatePost /> : null}
      </div>

      <div className="hidden lg:block lg:col-span-2 sticky top-20">
        WhoToFollow
      </div>
    </div>
  );
}
