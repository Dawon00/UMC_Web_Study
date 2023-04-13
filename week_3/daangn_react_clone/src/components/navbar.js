import React from "react";
import {
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: white;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 55px;
`;

const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    padding-right: 40px;
    margin-right: 40px;
`;

const NavItem = styled.a`
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    display: inline-block;
    padding-right: 20px;
`;

const SearchContainer = styled.form`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    padding: 0.5rem;
    border: none;
    outline: none;
    width: 200px;
    height: 30px;
    padding: 10px;
    border-radius: 0.4rem;
    border: none;
    outline: none;
    background-color: #f2f3f6;
    margin-right: 10px;
    ::placeholder {
        font-size: 14px;
    }
`;

const SearchButton = styled.button`
    border: 0.5px solid #b8bcc3;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    font-weight: 600;
    margin: auto;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center; /*수평 가운데 정렬*/
    align-items: center; /*수직 가운데 정렬*/
    background-color: white;
    cursor: pointer;
`;

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Container>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <NavUl>
                <li>
                    <Link
                        to="/"
                        style={{
                            color:
                                location.pathname === "/"
                                    ? "#ff6f0f"
                                    : "#4d5159",
                        }}
                    >
                        <NavItem>중고거래</NavItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/nearby-stores"
                        style={{
                            color:
                                location.pathname === "/nearby-stores"
                                    ? "#ff6f0f"
                                    : "#4d5159",
                        }}
                    >
                        <NavItem>동네가게</NavItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/jobs"
                        style={{
                            color:
                                location.pathname === "/jobs"
                                    ? "#ff6f0f"
                                    : "#4d5159",
                        }}
                    >
                        <NavItem>알바</NavItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/realty"
                        style={{
                            color:
                                location.pathname === "/realty"
                                    ? "#ff6f0f"
                                    : "#4d5159",
                        }}
                    >
                        <NavItem>부동산 직거래</NavItem>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/car"
                        style={{
                            color:
                                location.pathname === "/car"
                                    ? "#ff6f0f"
                                    : "#4d5159",
                        }}
                    >
                        <NavItem>중고차 직거래</NavItem>
                    </Link>
                </li>
            </NavUl>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="물품이나 동네를 검색해보세요"
                />
                <SearchButton type="submit">채팅하기</SearchButton>
            </SearchContainer>
        </Container>
    );
}

export default Navbar;
