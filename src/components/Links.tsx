import * as React from "react";
import MLink from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useSelector } from "react-redux";
import Link from "../constants/link";
import moment from "moment";
import Linksection from "../constants/linksection";
function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Links({activeSection}:{activeSection:Linksection|null}) {
  
  const links = useSelector((state: any) => state.links);
  return (
    <React.Fragment>
      <Title>{activeSection?.label} Links</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Active</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links?.map((link: Link) => (
            <TableRow key={link._id}>
              <TableCell>{moment(link.createdAt).utc().format("MMM DD, h:m A")}</TableCell>
              <TableCell>{link.label}</TableCell>
              <TableCell>{link.url}</TableCell>
              <TableCell>{link.active ? "active" : "disabled"}</TableCell>
              <TableCell align="right">
                {link.image && <img width={50} height={50} src={link.image} alt="link" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </React.Fragment>
  );
}
