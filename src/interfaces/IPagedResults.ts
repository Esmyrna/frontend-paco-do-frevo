/** The `IPagedResults` interface represents a paginated result set with information about the current page,
total count, and whether there is a next page. */
interface IPagedResults<T> {
  result: Array<T>;

  hasNextPage: boolean;

  pageIndex: number;

  pageSize: number;

  totalCount: number;

  totalPages: number;
}

export default IPagedResults;
