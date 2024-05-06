import { EAssociationType } from "./enum";

export interface FilterItemsAssociations {
  searchParam: string | null | undefined;
  associationType?: EAssociationType;
  district?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  minMemberAmmount?: number | null | undefined;
  maxMemberAmmount?: number | null | undefined;
}
