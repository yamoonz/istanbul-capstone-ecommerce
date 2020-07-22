import { firstType } from './actionsTypes';

export const currentBoardIDAction = (data) => {
	return {
		type: FIRST_TYPE,
		payload: data,
	};
};
