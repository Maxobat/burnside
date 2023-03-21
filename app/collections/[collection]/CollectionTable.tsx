"use client";

import {
  createColumnHelper,
  useReactTable,
  flexRender,
  getCoreRowModel,
  Row,
} from "@tanstack/react-table";
import { OwnDocumentNode } from "./CollectionList";

const columnHelper = createColumnHelper<OwnDocumentNode>();
const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span className="text-xs">ID</span>,
  }),
  columnHelper.accessor("_sys.title", {
    cell: (info) => info.getValue(),
    header: () => <span className="text-xs">TITLE</span>,
  }),
];

export const CollectionTable = ({ data }: { data: OwnDocumentNode[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    enableMultiRowSelection: true,
  });

  const handleRowClick = (row: Row<OwnDocumentNode>) => {
    table.setRowSelection(() => {
      return {
        [row.id]: true,
      };
    });
  };

  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="text-left">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className={`border hover:bg-white hover:text-black ${
              row.getIsSelected() ? "bg-teal-900" : ""
            }`}
            onClick={() => handleRowClick(row)}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border cursor-default">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
