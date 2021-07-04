import { useState, useEffect, useRef } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import { ListWrapper } from "../styled-components/postItemList";

export default function PostItemList({ query, tabMenu }) {
  const [APostList, setAPostList] = useState([]);
  const [BPostList, setBPostList] = useState([]);
  const [pageANo, setPageANo] = useState(0);
  const [pageBNo, setPageBNo] = useState(0);
  const url = "https://recruit-api.yonple.com/recruit/958292";
  let A_List_url = `${url}/a-posts?page=${pageANo}&search=${query}`;
  let B_List_url = `${url}/b-posts?page=${pageBNo}&search=${query}`;

  // ? 무한스크롤 이벤트로 페이지 변경 시
  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (Math.ceil(scrollTop + clientHeight) >= parseInt(scrollHeight)) {
      if (tabMenu === 0) {
        setTimeout(() => {
          setPageANo((pageANo) => {
            if (pageANo < 10) return pageANo + 1;
          });
        }, 300);
      } else {
        setTimeout(() => {
          setPageBNo((pageBNo) => {
            if (pageBNo < 10) return pageBNo + 1;
          });
        }, 300);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
  }, [tabMenu]);

  // ? 새로운 쿼리 입력받았을 때 page=0으로 리셋 후 get요청
  useEffect(() => {
    if (tabMenu === 0) {
      setPageANo(0);
    } else {
      setPageBNo(0);
    }
  }, [query, tabMenu]);

  // ? 새로운 쿼리를 입력받았을 때 page=0으로 리셋 후 get요청
  useEffect(() => {
    if (tabMenu === 0) {
      //! A Post인 경우
      if (pageANo === 0) {
        axios.get(`${A_List_url}`).then((res) => {
          setAPostList(res.data);
        });
      } else if (pageANo > 0) {
        axios.get(`${A_List_url}`).then((res) => {
          if (res.data.length !== 0) {
            setTimeout(() => {
              setAPostList([...APostList, ...res.data]);
            }, 500);
          }
        });
      }
    } else {
      //! B Post인 경우
      if (pageBNo === 0) {
        axios.get(`${B_List_url}`).then((res) => {
          setBPostList(res.data);
        });
      } else if (pageBNo > 0) {
        axios.get(`${B_List_url}`).then((res) => {
          if (res.data.length !== 0) {
            setTimeout(() => {
              setBPostList([...BPostList, ...res.data]);
            }, 500);
          }
        });
      }
    }
  }, [tabMenu, query, pageANo, pageBNo]);

  return (
    <ListWrapper>
      {tabMenu === 0
        ? APostList.map((el, idx) => (
            <PostItem
              key={idx}
              id={el.id}
              title={el.title}
              content={el.content}
              type={el.type}
            />
          ))
        : BPostList.map((el, idx) => (
            <PostItem
              key={idx}
              id={el.id}
              title={el.title}
              content={el.content}
              type={el.type}
            />
          ))}
    </ListWrapper>
  );
}
