const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/status', (req, res) => {
    res.json({ status: "Running" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
