
import { FolderView } from "./FolderView"
import { Folder } from "../../types/types"

import Nav from '../Nav/Nav';
const onFolder = (socialite: Folder) => {
        console.log(socialite)
}


function FolderPage() {
        return (
                <>
                        <Nav />
                        <FolderView OnFolder={onFolder}></FolderView>
                </>
        )
}
export default FolderPage;
