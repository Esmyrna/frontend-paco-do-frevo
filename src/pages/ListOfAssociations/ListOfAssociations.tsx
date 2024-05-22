/* eslint-disable @typescript-eslint/no-unused-vars */

import Nav from "../../components/Nav"
import * as C from './style'
import SlideListOfAssociations from "./SlideListOfAssociations";
import axios from "axios";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import InputFilterSearch from "../../components/SearchInput";
import InputFilterCategory from "../../components/InputFilterCategory";
import { EAssociationType } from "../../interfaces/enum";
import { FilterItemsAssociations } from "../../interfaces/filterAssociations";
import { SimplifiedAssociationDTO } from "../../interfaces/type";

interface IPagedResults<T> {
    result: Array<T>;
    hasNextPage: boolean;
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}
''
const ListOfAssociations = () => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [currentPageSize, setCurrentPageSize] = React.useState<number>(5);
    const [items, setItems] = useState<FilterItemsAssociations[]>([]);
    const [search, setSearch] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState<EAssociationType>();

    const BASE_URL = 'http://localhost:3000';

    const fetchData = async (page: number, pageSize: number, search: string, filterCategory: EAssociationType): Promise<IPagedResults<SimplifiedAssociationDTO>> => {
        const response = await axios.get(`${BASE_URL}/associations/paged?pageSize=${pageSize}&page=${page}`, {
            params: {
                searchParam: search,
                associationType: filterCategory
            }
        });
        setItems(response.data);
        return response.data;
    }

    const { data } = useQuery(['items', currentPage], () => fetchData(currentPage, currentPageSize, search, filterCategory!), {
        keepPreviousData: true,
    });

    useEffect(() => {
        fetchData(currentPage, currentPageSize, search, filterCategory!);
    }, [currentPage, currentPageSize, search, filterCategory]);


    const handleFilterCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterCategory(event.target.value as EAssociationType);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    function separateCamelCase(word: string) {

        return word.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
    return (
        <>
            <Nav />
            <C.Section>
                {/* <C.ContainerLeft>
                    <C.ContainerPhone>
                        <C.ContainerDisplayPhone>
                            <SlideListOfAssociations />
                        </C.ContainerDisplayPhone>
                        <C.ButtonPhone>O</C.ButtonPhone>
                    </C.ContainerPhone>
                </C.ContainerLeft> */}
                <C.ContainerRight>
                    <C.ContainerFilterAssociations>
                        <C.SearchAssociation>
                            <InputFilterSearch
                                placeholder="Pesquisar..."
                                value={search}
                                onChange={handleSearchChange}
                            />
                        </C.SearchAssociation>

                        <C.FilterAssociation>
                            <InputFilterCategory
                                placeholder="Filtrar por..."
                                value={filterCategory}
                                onChange={handleFilterCategoryChange}>
                                <option value="">Todos</option>
                                <option value={EAssociationType.club}>Clube</option>
                                <option value={EAssociationType.troca}>Troça</option>
                                <option value={EAssociationType.carnivalBlock}>Bloco carnavalesco</option>
                                <option value={EAssociationType.puppetClub}>Clube de bonecos</option>
                            </InputFilterCategory>
                        </C.FilterAssociation>
                    </C.ContainerFilterAssociations>

                    <C.ContainerListing>
                        {data?.result && (
                            <C.Associations>
                                {data.result.map(item => (
                                    <C.Association key={item.id}>
                                        <C.ContainerInfosAssociation>
                                            <C.AssociationPropertyBlock>
                                                <C.Title>Nome:</C.Title>
                                                {separateCamelCase(item.name)}
                                            </C.AssociationPropertyBlock>

                                            <C.AssociationPropertyBlock>
                                                <C.Title>Tipo:</C.Title>
                                                {separateCamelCase(item.associationType)}
                                            </C.AssociationPropertyBlock>

                                            <C.AssociationPropertyBlock>
                                                <C.Title>Data de fundação:</C.Title>
                                                {item.foundationDate
                                                    ? new Date(item.foundationDate).toLocaleDateString('pt-BR') 
                                                    : 'Data não disponível'}
                                            </C.AssociationPropertyBlock>

                                            <C.AssociationPropertyBlock>
                                                <C.Title>Membros Ativos:</C.Title>
                                                {item.activeMembers ?? '0'}
                                            </C.AssociationPropertyBlock>
                                        </C.ContainerInfosAssociation>
                                    </C.Association>
                                ))}
                            </C.Associations>
                        )}

                        <C.PageButtonsContainer>
                            <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                                Página anterior
                            </button>

                            <button disabled={!data || !data.hasNextPage} onClick={() => setCurrentPage((prev) => prev + 1)}>
                                Próxima página
                            </button>
                        </C.PageButtonsContainer>
                    </C.ContainerListing>
                </C.ContainerRight>
            </C.Section>
            <Footer />
        </>
    )
}

export default ListOfAssociations