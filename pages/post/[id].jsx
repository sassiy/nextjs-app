

const Post = ( { data } )=> {

    return(
      <div>
        <h1>{data.id}: {data.title}</h1>
      </div>
    )
}

  export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    const paths = posts.map(post => ({
      params: { 
        id: post.id.toString()
      }
    }));
    
    // const paths = posts.map(post => `/posts/${post.id}`)
  
    return { 
      paths, 
      fallback: false 
    };
  }

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Post;