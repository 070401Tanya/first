import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "react-bootstrap";
import Props from "react";
import { Fullscreen } from "@mui/icons-material";


function ProductItem(tanya) {

    const [count, setCount] = useState(0);

       function countincrease() {
        setCount(count + 1)
        return;
    }
    function countdecrease() {
        if (count == 0) {
            alert("Empty cart");
        } else if (count < 0) {
            alert("add more items");
        }
        else {
            setCount(count - 1);
        }

        return;
    }

    return (
        <div>
            <Card style={{ border: '2px solid grey', margin: "Fullwidth" }}>
                <CardHeader style={{ textAlign: "center" }}>Please add items to the Cart</CardHeader>
                <CardBody>
                    <p>Product Name : {tanya.name}</p>
                    <p>Price: {tanya.price}</p>
                    <p>Description: {tanya.description} </p>
                    <p>Quantity: {count} </p>

                    <Button style={{ backgroundColor: "grey", border: "2px solid darkgrey" }}
                        type="button" onClick={countincrease}>Add to Cart</Button>
                    <Button type="button" onClick={countdecrease}>Delete items</Button>
                </CardBody>
            </Card>
        </div>
    );
}
export default ProductItem;