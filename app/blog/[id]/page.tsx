
type Props = {
    params:{
        id:string
    }
}

const Post = ({params: {id}}: Props) => {
  return (
    <h1>Post page {id}</h1>
  )
}

export default Post