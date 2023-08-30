
const Product = require("../models/Product");


async function findAllProducts(req, res) {
    try {
        const products = await Product.find({})
        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Products not found" })
    }
}

async function findProductById(req, res) {
    const productId = req.params.id
    // console.log(productId)
    try {
        const product = await Product.findById(productId)
        // console.log(product)
        if (product === null)
            return res.json({ message: `Product with the id:${productId} not found` })

        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Product not found" })
    }

}

async function createProduct(req, res) {

    const newProduct = req.body

    try {
        const savedNewProduct = new Product(newProduct);
        savedNewProduct.save()
        res.json(savedNewProduct);

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Couldn't create an product" })
    }

}

async function editProduct(req, res) {
    const id = req.params.id
    const newProductData = req.body
    console.log(newProductData)

    try {
        const editProduct = await Product.findOne({ id });

        for (let key in newProductData) {
            key = key.toLowerCase()
            editProduct[key] = newProductData[key];
        }
        // console.log(editProduct)
        editProduct.save()
        res.json(editProduct);


    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Couldn't update an product" })
    }

}

async function deleteProduct(req, res) {
    const id = req.params.id

    try {
        const deletedEmployee = await Product.findOneAndDelete({ id });
        res.json(deletedEmployee);

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Couldn't update an product" })
    }


    // res.json({message : "Deleted Product num: " + id });
}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    editProduct,
    deleteProduct
}