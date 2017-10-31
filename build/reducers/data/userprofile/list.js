 export const userProfile = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			list: []
 		};
 	}

 	switch (action.type) {
 		case "init":

 			return Object.assign({}, state, {
 				list: action.payload
 			});

 		default:
 			return state;
 	}
 }