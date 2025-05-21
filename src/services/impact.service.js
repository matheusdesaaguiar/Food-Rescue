import {PrismaClient} from '@prisma/client';
const getPrisma = () => new PrismaClient();

const createReport = (data, client = getPrisma()) => client.impactReport.create({ data });

//criar um novo registro , que vai conter o titulo, a descrição e os quilos de alimentos 


//buscar os relatórios por id, tipo um select por id
const getReportById = (id, client = prisma) => client.impactReport.findUnique({ where: { id } });


//aqui vai atualizar somente o relatório com este id
const updateReport = (id, data, client = prisma) =>
  client.impactReport.update({ where: {id}, data });
//deleta usando a mesma lódica de procurar o id
const deleteReport = (id, client = prisma) =>
  client.impactReport.delete({ where: { id }});

//lógica para calcular a soma de todos os quilos doados presente nos relatórios, caso não haja vai retornar 0(zero).
const getGlobalImpact = async (client = prisma) => {
    const result = await client.impactReport.aggregate({
        _sum: {
            savedFoodKg: true,
        },
    });
    return result._sum.savedFoodKg || 0;
};

//Converte alimentos salvos em litros de água e CO₂ evitado
 const calculateEquivalence = (savedKg) => {
    // é dificil calcular no geral pq evitando o desperdício de 1 kg reduz tantos litros de água dependendo do alimento:
    // 1kg de carne bovina = 15.400 litros
    //1kg de frando = 4.300 litros
    // 1kg de arooz= 2.500 litros
    // 1kg feijão = 5.500 litros
    
    // também é difícil calcular já que para carnes(cordeiro, aves, suinos, ...) tem média entre 20kg, 6kg e 7kg de CO2 liberado;
    // já vegetais e grãos varia entre 4kg, 1,4kg, 0.3kg...
    return { savedFoodKg: savedKg, waterLiters: savedKg * 1000, co2Kg: savedKg * 1};
};
//mudanças client = prisma) => client. de prisma.
export default {
    createReport,
    getReportById,
    updateReport,
    deleteReport,
    getGlobalImpact,
    calculateEquivalence,
};