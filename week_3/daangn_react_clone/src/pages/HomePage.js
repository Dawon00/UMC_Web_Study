import React from "react";
import "../../src/index.css";
import styled from "styled-components";
import Navbar from "../components/navbar.js";
import data from "../data/hot_content.json";
import HotContentItem from "../components/HotContentItem";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 1024px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const ImgDiv = styled.div`
    position: relative;
    height: 600px;
    margin-top: auto;
`;

const Section = styled.section`
    width: 1024px;
    display: flex;
    flex-direction: row;

    h1 {
        font-size: xx-large;
        font-weight: 700;
        //margin-top: 200px;
        margin-left: 50px;
        margin-bottom: 20px;
    }

    p {
        margin-left: 50px;
        font-size: small;
        margin-bottom: 20px;
    }

    button {
        border-radius: 6px;
        font-size: smaller;
        font-weight: 700;
        border: none;
        display: inline-block;
        padding: 0.7rem 1.5rem;
        background-color: #f1f3f5;
        margin-left: 10px;
        transition: background-color 0.3s ease-in-out;
        height: 50px;
        cursor: pointer;
    }
`;

const ButtonDiv = styled.div`
    margin-left: 40px;
`;

const YellowSection = styled(Section)`
    background-color: #fbf7f2;
`;

const GreenSection = styled(Section)`
    background-color: #e6f3e6;
`;

const GraySection = styled(Section)`
    background-color: #f8f9fa;
    width: 1024px;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: xx-large;
    }

    p {
        margin-left: 50px;
        font-size: small;
    }

    button {
        border-radius: 6px;
        font-size: smaller;
        font-weight: 700;
        border: none;
        display: inline-block;
        padding: 0.7rem 1.5rem;
        background-color: #f1f3f5;
        margin-left: 10px;
        transition: background-color 0.3s ease-in-out;
        height: 50px;
        cursor: pointer;
    }
`;

const IconImg = styled.img`
    width: 40px;
    margin-left: 50px;
    margin-bottom: 20px;
`;

const P_bold = styled.p`
    font-weight: 700;
`;

const SmallP = styled.p`
    font-weight: 400;
    font-size: smaller;
`;

function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <YellowSection>
                    <Column>
                        <h1 className="mt-52">
                            당신 근처의 <br /> 당근마켓
                        </h1>
                        <p>
                            중고 거래부터 동네 정보까지, 이웃과 함께해요.
                            <br />
                            가깝고 따뜻한 당신의 근처를 만들어요.
                        </p>
                    </Column>
                    <img
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp"
                        width="700"
                        height="auto"
                    />
                </YellowSection>
                <Section>
                    <div>
                        <img
                            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp"
                            width="500"
                            height="auto"
                        />
                    </div>
                    <Column>
                        <h1 className="mt-52">
                            우리 동네 <br />
                            중고 직거래 마켓
                        </h1>
                        <p>
                            동네 주민들과 가깝고 따뜻한 거래를 지금
                            경험해보세요.
                        </p>
                        <ButtonDiv>
                            <Row>
                                <button>인기매물 보기</button>
                                <button>믿을 수 있는 중고거래</button>
                            </Row>
                        </ButtonDiv>
                    </Column>
                </Section>
                <GreenSection>
                    <Row>
                        <Column>
                            <h1 className="mt-52">
                                이웃과 함께하는 <br /> 동네생활
                            </h1>
                            <p>
                                우리 동네의 다양한 이야기를 이웃과 함께 나누어요
                            </p>
                            <Row>
                                <Column>
                                    <IconImg src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg" />
                                    <P_bold>우리동네질문</P_bold>
                                    <SmallP>
                                        궁금한 게 있을 땐 이웃에게 물어보세요
                                    </SmallP>
                                </Column>
                                <Column>
                                    <IconImg src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg" />
                                    <P_bold>동네분실센터</P_bold>
                                    <SmallP>
                                        무언가를 잃어버렸을 때, 함께 찾을 수
                                        있어요.{" "}
                                    </SmallP>
                                </Column>
                                <Column>
                                    <IconImg src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg" />
                                    <P_bold>동네모임</P_bold>
                                    <SmallP>
                                        관심사가 비슷한 이웃과 온오프라인으로
                                        만나요.{" "}
                                    </SmallP>
                                </Column>
                            </Row>
                        </Column>
                        <img
                            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp"
                            width="500"
                            height="auto"
                        />
                    </Row>
                </GreenSection>
                <Section>
                    <img
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp"
                        width="450"
                        height="auto"
                    />
                    <Column>
                        <h1 className="mt-52">
                            내 근처에서 찾는 <br /> 동네가게
                        </h1>
                        <p>
                            우리 동네 가게를 찾고 있나요?
                            <br />
                            동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
                        </p>
                        <ButtonDiv>
                            <button>당근마켓 동네가게 찾기</button>
                        </ButtonDiv>
                    </Column>
                </Section>
                <GraySection className="pb-40">
                    <div className="flex justify-center mb-10">
                        <h1 className="font-bold mt-20">중고거래 인기매물</h1>
                    </div>
                    <div className="grid grid-cols-4 justify-center items-center gap-10 px-24">
                        {data.map((i) => (
                            <HotContentItem
                                id={i.id}
                                image={i.image}
                                name={i.name}
                                price={i.price}
                                address={i.address}
                                like={i.like}
                                chat={i.chat}
                            />
                        ))}
                    </div>
                </GraySection>
            </Container>
        </>
    );
}

export default HomePage;
