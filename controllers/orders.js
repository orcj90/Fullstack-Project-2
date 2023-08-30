
const e = require("express");
const Order = require("../models/Order");


async function findAllOrders(req, res) {
    try {
        const orders = await Order.find({})
        res.json(orders);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Orders not found" })
    }
}

async function findOrderById(req, res) {
    const id = req.params.id

    try {
        const order = await Order.findOne({ id })

        if (order === null)
            return res.json({ message: `Order with the id:${id} not found` })

        res.json(order);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Order not found" })
    }

}

async function createOrder(req, res) {

    const newOrder = req.body
    if (req.body.orderItems.length === 0) {
        res.status(400).json({ message: "Cart is empty" });
    } else {
        try {
            const savedNewOrder = new Order(newOrder);
            savedNewOrder.save()
            res.json(savedNewOrder);
        } catch (error) {
            console.log(error)
            res.status(404).json({ message: "Couldn't create an order" })
        }
    }
}

async function editOrder(req, res) {
    const id = req.params.id
    const newOrderData = req.body

    try {
        const editOrder = await Order.findOne({ id });

        for (let key in newOrderData) {
            key = key.toLowerCase()
            editOrder[key] = newOrderData[key];
        }
        console.log(editOrder)
        editOrder.save()
        res.json(editOrder);


    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Couldn't update an order" })
    }

}

async function deleteOrder(req, res) {
    const id = req.params.id

    try {
        const deletedOrder = await Order.findOneAndDelete({ id });
        res.json(deletedOrder);

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Couldn't update an order" })
    }


    // res.json({message : "Deleted Order num: " + id });
}

module.exports = {
    findAllOrders,
    findOrderById,
    createOrder,
    editOrder,
    deleteOrder
}