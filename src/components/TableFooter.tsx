
interface TableFooterProps {
    table: any;
}

function TableFooter({table}: TableFooterProps) {
    return(
        <div className="table-footer">
            <span>
                Showing {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
            </span>
            <div className="pagination-buttons">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </button>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default TableFooter;