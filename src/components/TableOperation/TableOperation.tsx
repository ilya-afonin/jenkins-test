import React, { useState, forwardRef } from "react";
import MaterialTable, { Column } from "material-table";
import { useStyles } from "./styles";
import {
  Remove,
  FilterList,
  Check,
  AddBox,
  LastPage,
  FirstPage,
  ChevronRight,
  ChevronLeft,
  SaveAlt,
  ViewColumn,
  Search,
  Clear,
  DeleteOutline,
  ArrowUpward,
  Edit
} from "@material-ui/icons";

interface IRow {
  name: string;
  surname: string;
}

interface ITableState {
  columns: Array<Column<IRow>>;
  data: IRow[];
}

/**
 * Компонент TableMain, основная навигация сайта.
 * @returns {JSX} TableMain и элементы навигации.
 * @prop {string} match Параметры роутинга.
 * @prop {object} value User info.
 */
export const TableOperation = () => {
  const classes = useStyles();
  const [state, setState] = useState<ITableState>({
    columns: [
      { title: "Name", field: "surname" },
      { title: "Name1", field: "name" },
      { title: "Name2", field: "name" },
      { title: "Name3", field: "surname" }
    ],
    data: [
      { name: "qwe1", surname: "qwe" },
      { name: "qwe2", surname: "qwe" },
      { name: "qwe3", surname: "qwe" },
      { name: "qwe4", surname: "qwe" }
    ]
  });
  return (
    <MaterialTable
      // onColumnDragged={(e, i) => console.log(e, i)}
      icons={{
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => (
          <DeleteOutline {...props} ref={ref} />
        )),
        DetailPanel: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => (
          <FirstPage {...props} ref={ref} />
        )),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        PreviousPage: forwardRef((props, ref) => (
          <ChevronLeft {...props} ref={ref} />
        )),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => (
          <ArrowUpward {...props} ref={ref} />
        )),
        ThirdStateCheck: forwardRef((props, ref) => (
          <Remove {...props} ref={ref} />
        )),
        ViewColumn: forwardRef((props, ref) => (
          <ViewColumn {...props} ref={ref} />
        ))
      }}
      columns={state.columns}
      data={state.data}
    />
  );
};
