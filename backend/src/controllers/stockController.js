const prisma = require("../config/db");

// Get all stock
exports.getAllStock = async (req, res) => {
	try {
		const stock = await prisma.stock.findMany();
		res.json(stock);
	} catch (err) {
		res.status(500).json({ error: "Server error" });
	}
};

// Create stock
exports.createStock = async (req, res) => {
	try {
		const { name, quantity } = req.body;
		const newStock = await prisma.stock.create({
			data: { name, quantity },
		});
		res.status(201).json(newStock);
	} catch (err) {
		res.status(500).json({ error: "Server error" });
	}
};

// Update stock
exports.updateStock = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, quantity } = req.body;
		const updated = await prisma.stock.update({
			where: { id: Number(id) },
			data: { name, quantity },
		});
		res.json(updated);
	} catch (err) {
		res.status(500).json({ error: "Server error" });
	}
};

// Delete stock
exports.deleteStock = async (req, res) => {
	try {
		const { id } = req.params;
		await prisma.stock.delete({ where: { id: Number(id) } });
		res.json({ message: "Stock deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: "Server error" });
	}
};
