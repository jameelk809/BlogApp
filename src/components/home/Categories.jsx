
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { categories } from "../../constants/data";

const Categories = () => {
    return(
        <>
            <Button>Create Blog</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>{category.type}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;