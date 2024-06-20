import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Paginations = ({ page, setPage }) => {
    return (
        <Pagination className="text-white ">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className="hover:text-black" onClick={(e) => setPage(prev => prev - 1)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => {
                        setPage(page)
                    }} isActive>{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => setPage(page + 1)}>
                        {page + 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={(e) => setPage(page + 2)}>{page + 2}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={(e) => setPage(prev => (prev + 3))} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default Paginations