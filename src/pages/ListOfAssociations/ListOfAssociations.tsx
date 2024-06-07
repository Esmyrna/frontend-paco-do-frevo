import Nav from "../../components/Nav";
import * as C from "./style";
import SlideListOfAssociations from "./SlideListOfAssociations";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import InputFilterSearch from "../../components/SearchInput";
import InputFilterCategory from "../../components/InputFilterCategory";
import { EAssociationType } from "../../interfaces/enum";

interface Item {
  id: string;
  name: string;
  foundationDate: string;
  colors: string[];
  associationType: string;
  activeMembers: number;
  isSharedWithAResidence: boolean;
  hasOwnedHeadquarters: boolean;
  isLegalEntity: boolean;
  cnpj: string;
  canIssueOwnReceipts: boolean;
  associationHistoryNotes: string;
}

interface IPagedResults<T> {
  result: Array<T>;
  hasNextPage: boolean;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

const ListOfAssociations = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPageSize, setCurrentPageSize] = useState<number>(4);
  const [search, setSearch] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<EAssociationType | "">("");
  const [items, setItems] = useState<IPagedResults<Item>>({
    result: [],
    hasNextPage: false,
    pageIndex: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
  });

  const BASE_URL = "http://localhost:3000";

  const fetchData = async (
    page: number,
    pageSize: number,
    search: string,
    filterCategory: EAssociationType | ""
  ): Promise<void> => {
    const response = await axios.get(`${BASE_URL}/associations/paged`, {
      params: {
        pageSize,
        page,
        searchParam: search,
        associationType: filterCategory,
      },
    });
    setItems(response.data);
  };

  useEffect(() => {
    fetchData(currentPage, currentPageSize, search, filterCategory);
  }, [currentPage, currentPageSize, search, filterCategory]);

  const handleFilterCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterCategory(event.target.value as EAssociationType | "");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function separateCamelCase(word: string) {
    return word.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  return (
    <>
      <Nav />
      <C.Section>
        <C.ContainerLeft>
          <C.ContainerPhone>
            <C.ContainerDisplayPhone>
              <SlideListOfAssociations />
            </C.ContainerDisplayPhone>
            <C.ButtonPhone>O</C.ButtonPhone>
          </C.ContainerPhone>
        </C.ContainerLeft>
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
                onChange={handleFilterCategoryChange}
              >
                <option value="">All</option>
                <option value={EAssociationType.club}>Clube</option>
                <option value={EAssociationType.troca}>Troça</option>
                <option value={EAssociationType.carnivalBlock}>
                  Bloco carnavalesco
                </option>
                <option value={EAssociationType.puppetClub}>
                  Clube de bonecos
                </option>
              </InputFilterCategory>
            </C.FilterAssociation>
          </C.ContainerFilterAssociations>
          <C.ContainerListing>
            {items.result && (
              <C.Associations>
                {items.result.map((item) => (
                  <C.Association key={item.id}>
                    <C.ContainerInfosAssociation>
                      <C.Title>Name:</C.Title> {separateCamelCase(item.name)}
                      <C.Title>Data de fundação:</C.Title>{" "}
                      {separateCamelCase(item.foundationDate)}
                      <C.Title>Data de fundação:</C.Title> {item.cnpj}
                    </C.ContainerInfosAssociation>
                  </C.Association>
                ))}
              </C.Associations>
            )}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Página anterior
            </button>
            <button
              disabled={!items || !items.hasNextPage}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Próxima página
            </button>
          </C.ContainerListing>
        </C.ContainerRight>
      </C.Section>
      <Footer />
    </>
  );
};

export default ListOfAssociations;
