import React from 'react';
import DataTable from 'react-data-table-component';
import  {columns}  from './my';
import { data } from './ram';

function Tables() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );

};
export default Tables;