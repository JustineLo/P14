
interface TableHeaderProps {
    table: any;
}

function TableHeader({table}: TableHeaderProps) {
    return(
        <div className="table-header">
            <div className="show-page">
                <span>Show</span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                    table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                    ))}
                </select>
                <span>entries</span>
            </div>
        </div>
    )
}

export default TableHeader;