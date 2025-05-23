import server from './server.js';


const port = process.env.PORT || 4000;

async function main(){
    try{
        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }catch (error) {
        console.error('Error initializing the server:', error);
        process.exit(1);
    }

}

main();
