
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
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default TableFooter;