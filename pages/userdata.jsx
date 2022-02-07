


 const UserData = ({ data })=> {
    return (
        <>
           {data.map((user)=> {
            return (
                <div key={user.id}>
                    <p>{user.id}: {user.name}</p>
                </div>
            )
        })}
        </>
  
    )
  }



  export async function getStaticProps() {
    // const res = await fetch('http://localhost:3000/api/user')
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
      props: {
        data,
      },
    }
  }
  
  export default UserData;