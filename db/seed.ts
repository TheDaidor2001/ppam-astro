import {db, Users } from 'astro:db';


// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Users).values([
		{ id: 'a', nombre: 'Daniel Castillo', contacto: '555552558', isAvailable: true, isPrecursor: true, congregacion: "Timbabe" },
		{ id: 'b', nombre: 'Isaac Nguema', contacto: '222547874', isAvailable: true, isPrecursor: true, congregacion: "Timbabe" },
		{ id: 'c', nombre: 'Ruben Pardo', contacto: '555410023', isAvailable: true, isPrecursor: true, congregacion: "Sampaka" },
		{ id: 'd', nombre: 'José Luis Tobachi', contacto: '222966330', isAvailable: false, isPrecursor: false, congregacion: "Ela Ngema" },
	  ])
}
