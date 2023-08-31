import {app} from "./app";
import {errorMiddleware} from "./middlewares/error";


app.use(errorMiddleware)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});