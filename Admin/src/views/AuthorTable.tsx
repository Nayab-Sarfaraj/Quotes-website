import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

const AuthorTable = () => {
    const { authorArr } = useSelector(state => state?.quotes?.data)
    const navigate = useNavigate()
    return (
        <ScrollArea className="h-full w-full ">

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Serail no</TableHead>
                        <TableHead>Author</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        authorArr?.map((author, index) => {
                            return (
                                <TableRow onClick={() => navigate(`/admin/author/${author}`)}>
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell>{author}</TableCell>
                                </TableRow>
                            )
                        })
                    }


                </TableBody>
            </Table>

        </ScrollArea >
    )
}

export default AuthorTable