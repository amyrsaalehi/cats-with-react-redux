import { lazy, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategories } from "../redux/actions/categoryActions";
import { fetchImages } from "../redux/actions/imageActions";
import { isDesktop, isMobile } from "react-device-detect";
import ScrollToTop from "react-scroll-up";
import styled from "styled-components";
import ArrowUpIcon from "../assets/images/arrow-up-icon.svg";
const Desktop = lazy(() => import("./Desktop"));
const Mobile = lazy(() => import("./Mobile"));

const Icon = styled.img`
  border-radius: 50%;
`;

const scrollToTopStyles = {
  position: "fixed",
  bottom: 20,
  right: 20,
  cursor: "pointer",
};

function Layout({ children }) {
  const { category, image } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState(
    +localStorage.getItem("Category") || 0
  );
  const iconSize = 50;

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  useEffect(() => {
    localStorage.setItem("Category", categoryId);
    dispatch(fetchImages(categoryId));
  }, [categoryId]);

  return (
    <>
      {isDesktop ? (
        <Desktop
          categories={category}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          page={image.page}
        >
          {children}
        </Desktop>
      ) : isMobile ? (
        <Mobile
          categories={category}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          page={image.page}
        >
          {children}
        </Mobile>
      ) : (
        <></>
      )}
      <ScrollToTop showUnder={160} style={scrollToTopStyles}>
        <Icon
          width={iconSize}
          height={iconSize}
          src={ArrowUpIcon}
          alt="arrow up icon"
        />
      </ScrollToTop>
    </>
  );
}

export default Layout;
