import {
  CREATE_LINKSECTION,
  DELETE_LINKSECTION,
  UPDATE_LINKSECTION,
  FETCH_LINKSECTIONS_BY_USER,
} from "../constants/actionTypes";

import Linksection from "../constants/linksection";

const linksectionsReducer = (linksections: Linksection[] = [], action: any) => {
  const pL = action?.payload;
  switch (action.type) {
    case FETCH_LINKSECTIONS_BY_USER:
      return [...pL];
    case CREATE_LINKSECTION:
      return [...linksections, pL];
    case UPDATE_LINKSECTION:
      return linksections.map((linksection: Linksection) =>
        linksection?._id === pL?._id ? pL : linksection
      );
    case DELETE_LINKSECTION:
      return linksections.filter(
        (linksection: Linksection) => linksection?._id !== pL?._id
      );
    default:
      return linksections;
  }
};

export default linksectionsReducer;
