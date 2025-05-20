export default function UserSearch({value,onchange}){
    return(
        <input className="mx-4 outline-none" type='text' value={value} placeholder="search by username" onChange={e => onchange(e.target.value)}></input>
    )
}