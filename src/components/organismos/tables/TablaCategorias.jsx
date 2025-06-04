/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { ContentAccionesTabla, Paginacion, ImageContent, Icono, useCategoriesStore } from "../../../index";
import Swal from "sweetalert2";
import { v } from "../../../styles/variables";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { FaArrowsAltV, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { useState } from "react"

export function TablaCategorias({
  data,
  setOpenRegistration,
  setDataSelect,
  setAction,
}) {
  if (data == null) return;

  const [pagina, setPagina] = useState(1);
  const [datas, setData] = useState(data);
  const [columnFilters, setColumnFilters] = useState([]);

  const { deleteCategorie } = useCategoriesStore();

  function eliminar(p) {
    if (p.name === "General") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este registro no se permite modificar ya que es valor por defecto.",
      });
      return;
    }
    Swal.fire({
      title: "¿Estás seguro(a)(e)?",
      text: "Una vez eliminado, ¡no podrá recuperar este registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCategorie({ id: p.id });
      }
    });
  }

  function editar(data) {
    console.log("🚀 ~ editar ~ data:", data)
    if (data.name === "General") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este registro no se permite modificar ya que es valor por defecto.",
      });
      return;
    }

    setOpenRegistration(true);
    setDataSelect(data);
    setAction("Edit");
  }

  const columns = [
    {
      accessorKey: "icon",
      header: "Icono",
      enableSorting: false,
      cell: (info) => (
        <td data-title="Color" className="ContentCell">
          {
            info.getValue() != "-" ? (<ImageContent img={info.getValue()} />) : (<Icono>
              {<v.iconoimagenvacia />}
            </Icono>)
          }

        </td>
      ),

      enableColumnFilter: true,
      filterFn: (row, columnId, filterStatuses) => {
        if (filterStatuses.length === 0) return true;
        const status = row.getValue(columnId);
        return filterStatuses.includes(status?.id);
      },
    },
    {
      accessorKey: "name",
      header: "Descripcion",
      cell: (info) => <span>{info.getValue()}</span>,
      enableColumnFilter: true,
      filterFn: (row, columnId, filterStatuses) => {
        if (filterStatuses.length === 0) return true;
        const status = row.getValue(columnId);
        return filterStatuses.includes(status?.id);
      },
    },

    {
      accessorKey: "color",
      header: "Color",
      enableSorting: false,
      cell: (info) => (
        <td data-title="Color" className="ContentCell">
          <Colorcontent color={info.getValue()} $alto="25px" $ancho="25px" />
        </td>
      ),

      enableColumnFilter: true,
      filterFn: (row, columnId, filterStatuses) => {
        if (filterStatuses.length === 0) return true;
        const status = row.getValue(columnId);
        return filterStatuses.includes(status?.id);
      },
    },
    {
      accessorKey: "acciones",
      header: "",
      enableSorting: false,
      cell: (info) => (
        <td data-title="Acciones" className="ContentCell">
          <ContentAccionesTabla
            funcionEditar={() => editar(info.row.original)}
            funcionEliminar={() => eliminar(info.row.original)}
          />
        </td>
      ),
      enableColumnFilter: true,
      filterFn: (row, columnId, filterStatuses) => {
        if (filterStatuses.length === 0) return true;
        const status = row.getValue(columnId);
        return filterStatuses.includes(status?.id);
      },
    },
  ];
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                ...prev[rowIndex],
                [columnId]: value,
              }
              : row
          )
        ),
    },
  });
  return (
    <>
      <Container>
        <TableContainer>
          <StyledTable>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} $canSort={header.column.getCanSort()}>
                      <HeaderContent>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <SortIcon onClick={header.column.getToggleSortingHandler()}>
                            {{
                              asc: <FaSortUp />,
                              desc: <FaSortDown />,
                            }[header.column.getIsSorted()] || <FaSort />}
                          </SortIcon>
                        )}
                      </HeaderContent>
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <Paginacion
          table={table}
          irinicio={() => table.setPageIndex(0)}
          pagina={table.getState().pagination.pageIndex + 1}
          setPagina={setPagina}
          maximo={table.getPageCount()}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  margin: 2em auto;
  max-width: 1200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  background: ${({ theme }) => theme.bg};
`;

const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 12px 12px 0 0;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.95rem;
`;

const TableHeader = styled.thead`
  background: ${({ theme }) => theme.primary};
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TableHead = styled.th`
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  cursor: ${({ $canSort }) => ($canSort ? 'pointer' : 'default')};
  
  &:first-child {
    border-radius: 12px 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 12px 0 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SortIcon = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const TableBody = styled.tbody`
  background: ${({ theme }) => theme.bg};
`;

const TableRow = styled.tr`
  transition: all 0.2s;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  
  &:hover {
    background: ${({ theme }) => theme.hover};
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 1.2rem 1.5rem;
  color: ${({ theme }) => theme.text};
  
  .ContentCell {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    
    @media (min-width: ${v.bpbart}) {
      justify-content: center;
    }
  }
`;

const Colorcontent = styled.div`
  min-height: ${(props) => props.$alto || '25px'};
  width: ${(props) => props.$ancho || '25px'};
  display: flex;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid white;
`;