import SearchItemTable from "@/components/SearchItemTable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

const AuthorTable = () => {
    const { authorArr } = useSelector(state => state?.quotes?.data)
    const navigate = useNavigate()
    const AuthorTabelHead = ["Serial no", "Author"]
    return (
        <ScrollArea className="h-full w-full ">

       
            <SearchItemTable tableBodyData={authorArr} tableHeaderArr={AuthorTabelHead} />

        </ScrollArea >
    )
}

export default AuthorTable