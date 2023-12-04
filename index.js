const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "sofia2004",
    host: "localhost",
    port: 5432,
    database: "beer"
})

execute()

async function execute() {
    try{
    
    await client.connect()
    console.log("Connected successfully.")
    //await client.query("insert into employees values (1, 'John')")

    const {rows} = await client.query("select * from beertype")
    console.table(rows)

    const result = rows[0][1]
    const resultParagraph = document.createElement("p");
    // Set the content of the paragraph element
    resultParagraph.innerHTML = result;

    // Append the paragraph element to the body
    document.body.appendChild(resultParagraph);
    console.log(result);
    }
    catch (ex)
    {
        console.log(`Something wrong happend ${ex}`)
    }
    finally 
    {
        await client.end()
        console.log("Client disconnected successfully.")    
    }
    
}