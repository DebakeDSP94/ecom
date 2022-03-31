const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const productsRouter = require("./routes/admin/products");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ["asljkdfowiejjsdiuigfs932jla"],
	})
);

app.use(authRouter);
app.use(productsRouter);

app.use(express.static("public"));

app.listen(3000, () => {
	console.log("listening");
});
