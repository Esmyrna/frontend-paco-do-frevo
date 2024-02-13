// src/hooks/queryHooks.ts
import { useMutation, useQueryClient } from 'react-query';
import { useStore } from '../store/store'; 
import { AssociationGeraData } from '../interfaces/type';

export const useAssociationMutation = () => {
  const queryClient = useQueryClient();
  const store = useStore();

  return useMutation(
    (associationData: AssociationGeraData) => {
      // Implemente a lógica do seu zustand para atualizar a associação no banco de dados
      return store.updateAssociationInDatabase(associationData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('association');
      },
    }
  );
};
