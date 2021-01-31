import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`running server in port ${port}`);
});
