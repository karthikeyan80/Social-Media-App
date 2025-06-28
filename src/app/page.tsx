import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
      <div className="lg:col-span-7 lg:col-start-1">
        {user ? <CreatePost /> : null}
      </div>

      <div className="hidden lg:block lg:col-span-5 sticky top-20 gap-1">
        <WhoToFollow />
      </div>
    </div>
  );
}
