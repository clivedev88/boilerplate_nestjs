import { Empresa } from "@prisma/client";
import { prisma } from "../lib/prisma"

export const empresaService = {
    async criarEmpresa(nome: string): Promise<Empresa> {
        return await prisma.empresa.create({
            data: {
                nome,
            },
        });
    },

    async listarEmpresas(nome: string): Promise<Empresa[]> {
        return await prisma.empresa.findMany();
    },

    async encontrarPorId(id: number): Promise<Empresa | null> {
        return await prisma.empresa.findUnique({
            where: { id },
        });
    },

    async editarEmpresa(id: number, nome: string): Promise<Empresa> {
        return await prisma.empresa.update({
            where: { id },
            data: { nome },
        });
    },

    async excluirEmpresa(id: number): Promise<void> {
        await prisma.empresa.delete({
            where: { id },
        });
    },
};
