import { useState } from "react";
import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import axios from "axios";

function App() {
  const url = "https://recruit-api.yonple.com/recruit/958292";
  const [titleAndContent, setTitleAndContent] = useState(null);
  const [pageState, setPageState] = useState(true);
  const goToMainPage = () => {
    setPageState(true);
  };
  const goToDetailPage = (id, type) => {
    axios
      .get(`${url}/${type}-posts/${id}`)
      .then((res) => {
        console.log(`res.data in Detail: `, res.data);
        setTitleAndContent({
          title: res.data.title,
          content: res.data.content,
        });
      })
      .then(() => {
        setPageState(false);
      });
  };

  return (
    <>
      {pageState ? (
        <MainPage goToDetailPage={goToDetailPage} />
      ) : (
        <DetailPage
          titleAndContent={titleAndContent}
          goToMainPage={goToMainPage}
        ></DetailPage>
      )}
    </>
  );
}

export default App;
