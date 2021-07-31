import { useEffect } from "react";
import {itemsServices} from '../../libs/services/'
const HomeSearchBarContainer = () => {
  useEffect(() => {
    itemsServices.itemSearch("algo")
  }, [])
  return (
    <div>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
      <h1>jkdkdfkjfdjkfdjkdfkj</h1>
    </div>
  );
};

export default HomeSearchBarContainer;
