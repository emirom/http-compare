import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getManyCountries = async ( _limit=10, skip=0) => {
	return await prisma.country.findMany({
		take:10,
		skip
	});	
}

export default getManyCountries