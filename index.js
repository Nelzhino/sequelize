const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;

if (params.length <= 2) {
  process.exit(0);
}

const args = params.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch (command) {
  case CRUD.CREATE:
    const data = {};
    args.slice(1).map(arg => {
      const tmp = arg.split("=");
      data[tmp[0].substring(2)] = tmp[1];
    });

    db[entity]
      .create(data)
      .then(() => console.log("Contact created!"))
      .catch(console.log);

    break;

  case CRUD.READ:
    db[entity]
      .findAll()
      .then(console.log)
      .catch(console.log);
    break;

  case CRUD.UPDATE:
    const columnId = args[1].split("=");
    const columns = args.slice(2);

    db[entity]
      .findByPk(columnId[1])
      .then((contact) =>{
        if(contact){
          const data = {};
          columns.map(column => {
            const tmp = column.split("=");
            data[tmp[0].substring(2)] = tmp[1];
          });
          db[entity]
          .update(data, {
            where: {id: columnId[1]}
          })
          .then((result) => console.log('Contact updated!') )
          .catch(console.log);
        }
        else{
          console.log('Contact not found!');
          process.exit(0);
        }
      })
      .catch(console.log);

    break;


    case CRUD.DELETE:
      const columnIdDelete = args[1].split("=");
      db[entity]
      .findByPk(columnIdDelete[1])
      .then((contact) => {
          if(contact){
            contact.destroy();
            console.log('Contact destroy!')
          }
          else{
            console.log('Contact not found!');
            process.exit(0);
          }
      })
      .catch(console.log)
      break;

  default:
    console.log("Operation not found!");
}

// --create:Contact --firstname=Marluan
