import React from "react";
import "./CryptoTable.css";
import { DataGrid } from "@material-ui/data-grid";

const Column = [
	{ field: "id", headerName: "#", width: 70 },
	{ field: "Name", headerName: "Name", width: 130 },
	{ field: "Price", headerName: "Price", width: 130, type: number },
	{ field: "24h", headerName: "24h", width: 130, type: number },
	{ field: "7d", headerName: "7d", width: 130, type: number },
	{ field: "Market Cap", headerName: "Market Cap", width: 130, type: number },
];

const Row = [{}];

function CryptoTable() {
	return (
		<div className="cryptoTable">
			<h1>CryptoTable</h1>
			<DataGrid />
		</div>
	);
}

export default CryptoTable;
