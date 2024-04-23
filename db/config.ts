import { column, defineDb, defineTable } from 'astro:db';

const Voluntario = defineTable({
  columns: {
    id: column.text({primaryKey: true, unique: true}),
    nombre: column.text(),
    congregación: column.text(),
    contacto: column.text(),
    isPrecursor: column.boolean(),
    isAvailable: column.boolean(),
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {
    Voluntario
  }
});
