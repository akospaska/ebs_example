let knex

const mysqlClient = process.env.SQL_CLIENT
const mysqlHost = process.env.SQL_HOST
const mysqlUser= process.env.SQL_USERNAME
const mysqlPassword=process.env.SQL_PASSWORD
const mysqlDatabase=process.env.SQL_DATABASE

 const sqlInit = async () => {

    knex = await require('knex')({
        client: mysqlClient,
        connection: {
            host: mysqlHost,
            user: mysqlUser,
            password: mysqlPassword,
            database: mysqlDatabase
        }
    })

    try{
    await  knex.schema.createTableIfNotExists("Persons", function (table) {
        table.increments("Personid"); // integer id
        table.decimal('Age');
    })


    await knex.raw("SELECT VERSION()")
    console.log("Mysql connected!")
    }
    catch(error){
console.log(error)
        const errorMessage = 'Mysql Connection Error!!!!!'
        console.log(errorMessage)
        throw new Error(errorMessage)
    }
  }

  const triggerAndGet = async ()=>{
    await knex.raw("insert into Persons(Age) values(1)")

  const y = await  knex('Persons')
  .select(['Personid'])
  .count('Personid AS count')

    return y
    
  }

  module.exports = {sqlInit,triggerAndGet};