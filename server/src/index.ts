import server from "./server.js";
import * as colors from 'colors';


const port = process.env.PORT || 4000;

server.listen(port, () => {
    const message = `Rest Api Server listening on port ${port}`;
    console.log(colors.bold(colors.cyan(message)));
})



