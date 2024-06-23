import { Dispatch, SetStateAction } from "react";

export default function NewGroupPage(
    {
        handleCreateGroup,
        groupName,
        setGroupName
    }:{
        handleCreateGroup:() => void,
        groupName:string,
        setGroupName:Dispatch<SetStateAction<string>>
    }
) {
    return(
        <div>
            <p>new group</p>
            <form onSubmit={handleCreateGroup}>
                <input 
                    type="text"
                    value={groupName}
                    onChange={(e) => {
                        setGroupName(e.target.value);
                    }}
                />
                <button type="submit">送信</button>
            </form>
        </div>
    );
}