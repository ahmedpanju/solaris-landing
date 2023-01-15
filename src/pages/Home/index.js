import React, { useState } from "react";
import { Flex } from "rebass";

import Modal from "../../components/Modal";

import * as Styled from "./styles";

const Home = () => {
  const [formOpenState, setFormOpenState] = useState(false);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.MainTitleText>SOLARIS</Styled.MainTitleText>
        <Styled.Jumbotron>
          <Flex flexDirection="column">
            <Flex mb="25px">
              <Styled.SmallText>Solaris</Styled.SmallText>
            </Flex>
            <Styled.TitleText>
              Lorem ipsum dolor sit
              <br />
              amet, consectetur.
            </Styled.TitleText>
            <Styled.BlackButton
              onClick={() => setFormOpenState(!formOpenState)}
            >
              ENROLL NOW
            </Styled.BlackButton>
          </Flex>
          <Flex>
            <Styled.ImageContainer>
              <Styled.Image
                src="https://picsum.photos/400/400?grayscale"
                alt="NFT Image"
              />
            </Styled.ImageContainer>
          </Flex>
        </Styled.Jumbotron>
      </Styled.Wrapper>
      <Styled.InfoPanel>
        <Styled.SinglePanel>
          <Styled.FirstPanelIcon />
          <Styled.PanelTitle>First Title</Styled.PanelTitle>
          <Styled.PanelDescription>
            Etiam sagittis sem sed arcu ornare placerat. Morbi semper orci quis
            gravida venenatis. Cras semper eu odio porttitor lacinia.
          </Styled.PanelDescription>
        </Styled.SinglePanel>
        <Styled.SinglePanel>
          <Styled.FirstPanelIcon />
          <Styled.PanelTitle>Second Title</Styled.PanelTitle>
          <Styled.PanelDescription>
            Etiam sagittis sem sed arcu ornare placerat. Morbi semper orci quis
            gravida venenatis. Cras semper eu odio porttitor lacinia.
          </Styled.PanelDescription>
        </Styled.SinglePanel>
        <Styled.SinglePanel>
          <Styled.FirstPanelIcon />
          <Styled.PanelTitle>Third Title</Styled.PanelTitle>
          <Styled.PanelDescription>
            Etiam sagittis sem sed arcu ornare placerat. Morbi semper orci quis
            gravida venenatis. Cras semper eu odio porttitor lacinia.
          </Styled.PanelDescription>
        </Styled.SinglePanel>
      </Styled.InfoPanel>
      <Styled.FooterPanel>
        <Styled.SingleFooterPanel>
          <Styled.TitleText color="black">Title here</Styled.TitleText>
          <Styled.FooterInfoText>
            Etiam sagittis sem sed arcu ornare placerat. Morbi semper orci quis
            gravida venenatis. Cras semper eu odio porttitor lacinia. Etiam
            sagittis sem sed arcu ornare placerat. Morbi semper orci quis
            gravida venenatis. Cras semper eu odio porttitor lacinia. Etiam
            sagittis sem sed arcu ornare placerat. Morbi semper orci quis
            gravida venenatis. Cras semper eu odio porttitor lacinia.
          </Styled.FooterInfoText>
        </Styled.SingleFooterPanel>
        <Styled.SingleFooterPanel>
          <Styled.TitleText>Title here</Styled.TitleText>
          <Styled.PanelDescription>Image needed here</Styled.PanelDescription>
        </Styled.SingleFooterPanel>
      </Styled.FooterPanel>
      <Modal open={formOpenState} onClose={() => setFormOpenState(false)} />
    </Styled.Container>
  );
};

export default Home;
