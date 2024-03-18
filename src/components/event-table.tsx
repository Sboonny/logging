import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "./ui/table";

export function EventTable() {
  return (
    <Table>
      <TableCaption>A list of the event details.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ACTOR</TableHead>
          <TableHead>Action</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
