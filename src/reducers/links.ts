import {
  CREATE_LINK,
  DELETE_LINK,
  UPDATE_LINK,
  FETCH_LINKS_BY_LINKSECTION,
} from "../constants/actionTypes";
import Link from "../constants/link";

const linksReducer = (links: Link[] = [], action: any) => {
  const pL = action?.payload;
  switch (action.type) {
    case FETCH_LINKS_BY_LINKSECTION:
      return [...pL];
    case CREATE_LINK:
      return [...links, pL];
    case UPDATE_LINK:
      return links.map((link: Link) => (link?._id === pL?._id ? pL : link));
    case DELETE_LINK:
      return links.filter((link: Link) => link?._id !== pL?._id);
    default:
      return links;
  }
};

export default linksReducer;
