import server from "./server.js";
import * as colors from 'colors';


const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(colors.cyan(`Rest Api Server listening on port ${port}`));
})



