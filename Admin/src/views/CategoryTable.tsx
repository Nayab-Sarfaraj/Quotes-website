import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const CategoryTable = () => {
    const { categoryArr } = useSelector(state => state?.quotes?.data)
    const navigate = useNavigate()
    return (
        <div >

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Serail no</TableHead>
                        <TableHead>Category</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        categoryArr?.map((category, index) => {
                            return (
                                <TableRow onClick={() => navigate(`/admin/category/${category}`)} key={index}>
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell>{category}</TableCell>
                                </TableRow>
                            )
                        })
                    }


                </TableBody>
            </Table>

        </div >
    )
}

export default CategoryTable