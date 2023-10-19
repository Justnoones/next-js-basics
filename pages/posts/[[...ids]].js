import { useRouter } from "next/router"

const Posts = () => {
  const router = useRouter();
  return (
    // url http://localhost:3000/posts/1 = { ids : [1]}
    // url http://localhost:3000/posts/1/2 = { ids : [1, 2]}
    // url http://localhost:3000/posts/1/2/3 = { ids : [1, 2, 3]}
    <div>{router.query.ids}</div>
  )
}

export default Posts