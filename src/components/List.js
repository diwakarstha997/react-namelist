export const List = ({list}) => {
    console.log(list);
    return (
        <div className="list">
            <ul>
                {
                    list.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
};