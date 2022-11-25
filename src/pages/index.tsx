import { useState } from "react";
import type { NextPage } from "next";
 
interface CatCategory {
  id: number;
  name: string;
}
 
interface SearchCatImage {
  message: string,
  status: string
}
 
type SearchCatImageResponse = SearchCatImage;
 
const fetchCatImage = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const result = (await res.json()) as SearchCatImageResponse;
  // console.log(result[0])
  return result;
};
 
interface IndexPageProps {
  initialCatImageUrl: string;
}
 
const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);
 
  const handleClick = async () => {
    const image = await fetchCatImage();
    console.log(image)
    console.log(image.message)
    console.log(image.status)
    setCatImageUrl(image.message);
  };
 
  return (
    <div>
      <button onClick={handleClick}>るなへ　きょうのにゃんこを見る🐱</button>
      <div style={{ marginTop: 8 }}>
        <img src={catImageUrl} width={500} height="auto" />
      </div>
      <p>るなかわいこちゃん</p>
    </div>
  );
};
 
export default IndexPage;