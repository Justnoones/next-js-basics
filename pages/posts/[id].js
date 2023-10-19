import { useRouter } from "next/router"

const Posts = () => {
  const router = useRouter();
  return (
    // url http://localhost:3000/posts/1 = { id : [1]}
    // url http://localhost:3000/posts/1/2 = { id : [1, 2]}
    // url http://localhost:3000/posts/1/2/3 = { id : [1, 2, 3]}
    <div>{router.query.id}</div>
  )
}

export default Posts