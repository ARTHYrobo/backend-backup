import prisma from "../../prisma.js";

const update = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const funcionario = await prisma.funcionario.update({
            where: {
                id: +id
            },
            data
        })
        res.json({ success: `Funcionário ${funcionario.id} atualizado com sucesso!`, funcionario })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Houve um erro no nosso servidor, tente novamente!' })
    }
}

export default update