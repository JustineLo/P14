import { TextField } from "@mui/material";
import { useState } from "react";

interface TableHeaderProps {
    table: any;
}

function TableHeader({table}: TableHeaderProps) {

    const [searchedInput, setSearchedInput] = useState<string>('');

    function handleChange(value: string) {
        setSearchedInput(value);
        table.setGlobalFilter(String(value));
    }

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
            <TextField label="Search" id="search-input" value={searchedInput} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default TableHeader;