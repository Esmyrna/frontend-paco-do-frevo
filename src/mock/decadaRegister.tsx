interface Registro {
    clube: number;
    bloco: number;
    troca: number;
    clubeDeBonecos: number;
    outros: number;
}

interface DecadaDados {
decada: string;
registros: Registro;
}

export const dados: DecadaDados[] = [
{
    decada: "1910s",
    registros: {
    clube: 1,
    bloco: 0,
    troca: 5,
    clubeDeBonecos: 2,
    outros: 3,
    },
},
{
    decada: "1920s",
    registros: {
    clube: 6,
    bloco: 7,
    troca: 3,
    clubeDeBonecos: 1,
    outros: 1,
    },
},
{
    decada: "1930s",
    registros: {
        clube: 10,
        bloco: 8,
        troca: 5,
        clubeDeBonecos: 2,
        outros: 3,
    },
    },
    {
    decada: "1940s",
    registros: {
        clube: 9,
        bloco: 1,
        troca: 7,
        clubeDeBonecos: 4,
        outros: 0,
    },
    },
    {
    decada: "1950s",
    registros: {
        clube: 11,
        bloco: 2,
        troca: 4,
        clubeDeBonecos: 1,
        outros: 0,
    },
    },
    {
    decada: "1960s",
    registros: {
        clube: 6,
        bloco: 1,
        troca: 0,
        clubeDeBonecos: 0,
        outros: 1,
    },
    },
    {
    decada: "1970s",
    registros: {
        clube: 1,
        bloco: 5,
        troca: 2,
        clubeDeBonecos: 2,
        outros: 1,
    },
    },
    {
    decada: "1980s",
    registros: {
        clube: 15,
        bloco: 12,
        troca: 7,
        clubeDeBonecos: 4,
        outros: 5,
    },
    },
    {
    decada: "1990s",
    registros: {
        clube: 10,
        bloco: 8,
        troca: 5,
        clubeDeBonecos: 2,
        outros: 3,
    },
    },
    {
    decada: "2000s",
    registros: {
        clube: 11,
        bloco: 3,
        troca: 4,
        clubeDeBonecos: 6,
        outros: 0,
    },
    },
    {
    decada: "2010s",
    registros: {
        clube: 12,
        bloco: 7,
        troca: 8,
        clubeDeBonecos: 9,
        outros: 4,
    },
    },
    {
    decada: "2020s",
    registros: {
        clube: 17,
        bloco: 10,
        troca: 9,
        clubeDeBonecos: 7,
        outros: 2,
    },
    },
];