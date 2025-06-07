import { Produto } from "@prisma/client"
import { prisma } from "../lib/prisma"

export const produtoService = {
    async criarProduto(nome: string, preco: number, empresaId: number): Promise<Produto> {
        return await prisma.produto.create({
            data: {
                nome,
                preco,
                empresaId,
            },
        });
    },

    async listarProdutos(nome: string, preco: number, empresaId: number): Promise<Produto[]> {
        return await prisma.produto.findMany();
    },

    async encontrarProdutoPorId(id: number): Promise<Produto | null> {
        return await prisma.produto.findUnique({
            where: { id },
        });
    },

    async editarProduto(id: number, nome: string, preco: number, empresaId: number): Promise<Produto> {
        return await prisma.produto.update({
            where: { id },
            data: { nome, preco, empresaId },
        });
    },

    async excluirProduto(id: number): Promise<void> {
        await prisma.produto.delete({
            where: { id },
        });
    },
};