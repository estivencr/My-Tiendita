import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return (
    <Layout>
      <div className="flex text-blue-950 justify-between">
        <h2>
          hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-400 gap-1 text-black rounded-lg overflow-hidden items-center">
          <img src={session?.user?.image} alt="" className="w-7 h-7 "/>
          <span className="px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>

    </Layout>
  )

}
