import { column, defineDb, defineTable } from 'astro:db';


const Users = defineTable({
  columns: {
    id: column.text({primaryKey: true, unique: true}),
    nombre: column.text(),
    congregacion: column.text(),
    contacto: column.text(),
    isPrecursor: column.boolean(),
    isAvailable: column.boolean(),
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {
    Users
  }
});
