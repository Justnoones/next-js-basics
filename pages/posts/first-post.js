import Link from "next/link";
import Layout from "@/components/Layout";

const firstpost = () => {
  return (
    <Layout>
      <div>first-post</div>
      <Link href='/'>Home</Link>
    </Layout>
  )
}

export default firstpost