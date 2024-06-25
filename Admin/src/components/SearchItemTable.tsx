import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useNavigate, useParams } from 'react-router-dom'


const SearchItemTable = ({ tableHeaderArr, tableBodyData }) => {
    const params = useParams()
    const author = params?.author
    const category = params?.category
   


    const navigate = useNavigate()
    const navigateCategory = (category) => navigate(`/admin/category/${category}`)
    const navigateAuthor = (author) => navigate(`/admin/author/${author}`)
    return (
        <Table>
            <TableHeader>

                <TableRow>
                    {
                        tableHeaderArr.map((head, index) => {
                            return (

                                <TableHead className="" key={index}>{head}</TableHead>

                            )
                        })
                    }

                </TableRow>
            </TableHeader>
            <TableBody>

                {
                    tableBodyData?.map((item, index) => {
                        return (
                            <TableRow key={index} onClick={() => author ? navigateCategory(item) : navigateAuthor(item)}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{item}</TableCell>
                            </TableRow>
                        )
                    })
                }


            </TableBody>
        </Table>
    )
}

export default SearchItemTable