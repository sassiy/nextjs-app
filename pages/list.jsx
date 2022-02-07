
const List = ()=> {
    const userInfo = [
        {id: 1, name: "tanaka"},
        {id: 2, name: "satou"},
        {id: 3, name: "suzuki"},
        {id: 4, name: "yamamoto"},
        {id: 5, name: "nakamura"},
        {id: 6, name: "hinata"},
        {id: 7, name: "takamatsu"},
        {id: 8, name: "matsushita"},
        {id: 9, name: "noda"},
        {id: 10, name: "irie"},
    ]

    return (
        <>
          {userInfo.map((item)=> {
            return (
                <div key={item.id}>
                    <p>{item.id}: {item.name}</p>
                </div>
            )
        })}
        </>
    )
}

export default List;
//動的インポートで使用した