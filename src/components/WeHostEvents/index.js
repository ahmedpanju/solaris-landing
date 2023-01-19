import React, { useState } from "react";
import { Flex } from "rebass";

import SmallHeader from "../SmallHeader";
import BigHeader from "../BigHeader";
import DescriptionText from "../DescriptionText";
import Modal from "../Modal";

import * as Styled from "./styles";

const WeHostEvents = () => {
  const [formOpenState, setFormOpenState] = useState(false);

  return (
    <div style={{ marginTop: "100px" }}>
      <Styled.CommunityContainer mb="100px" flex={2}>
        <Flex flexDirection="column" flex={1}>
          <Flex mb="20px">
            <SmallHeader>Community-Building Focused</SmallHeader>
          </Flex>
          <Flex mb="20px">
            <BigHeader>
              We host events
              <br />
              in Bali.
            </BigHeader>
          </Flex>
          <DescriptionText>
            Our aim is to create the most valuable network of people in Web3 and
            A.I through fun, networking events held in Bali.
          </DescriptionText>
        </Flex>
        <Flex flex={1} />
      </Styled.CommunityContainer>
      <Styled.CommunityContainer flex={2}>
        <Flex flex={1} />
        <Flex flex={1} flexDirection="column">
          <div>
            <Flex mb="20px">
              <SmallHeader>Our Next event...</SmallHeader>
            </Flex>
            <Flex mb="20px">
              <BigHeader>Tech paint night.</BigHeader>
            </Flex>
            <DescriptionText>
              A paint party where attendees come together to create a group
              painting, while networking with others in the Tech and Web3 space.
            </DescriptionText>
          </div>
          <Flex flexDirection="column" mt="60px" mb="60px">
            <Flex mb="50px">
              <Styled.WhoContainer flexDirection="column">
                <Styled.PeopleIcon />
                <Styled.GridTitle>Who this event is for:</Styled.GridTitle>
                <Flex mb="5px">
                  <Styled.GridDescriptonText>
                    - Web3 & A.I enthusiasts
                  </Styled.GridDescriptonText>
                </Flex>
                <Flex mb="5px">
                  <Styled.GridDescriptonText>
                    - Investors
                  </Styled.GridDescriptonText>
                </Flex>
                <Flex mb="5px">
                  <Styled.GridDescriptonText>- VCs</Styled.GridDescriptonText>
                </Flex>
                <Flex mb="5px">
                  <Styled.GridDescriptonText>
                    - Marketers
                  </Styled.GridDescriptonText>
                </Flex>
                <Flex mb="5px">
                  <Styled.GridDescriptonText>
                    - Founders
                  </Styled.GridDescriptonText>
                </Flex>
                <Flex mb="5px">
                  <Styled.GridDescriptonText>
                    - Developers
                  </Styled.GridDescriptonText>
                </Flex>
              </Styled.WhoContainer>
              <Styled.LocationContainer flexDirection="column">
                <Styled.LocationIcon />
                <Styled.GridTitle>Location:</Styled.GridTitle>
                <Styled.GridDescriptonText
                  decoration="underline"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/B+Work+Bali/@-8.6540192,115.1352466,15z/data=!4m2!3m1!1s0x0:0xad37452104b8bef3?sa=X&ved=2ahUKEwi4rO3oitT8AhWzkIkEHW50AKMQ_BJ6BAhxEAg",
                      "_blank"
                    )
                  }
                >
                  B Work Bali
                </Styled.GridDescriptonText>
              </Styled.LocationContainer>
            </Flex>
            <div>
              <Styled.DateIcon />
              <Styled.GridTitle>When:</Styled.GridTitle>
              <Styled.GridDescriptonText>
                Monday January 30th 2023 @ 7pm
              </Styled.GridDescriptonText>
            </div>
            <Styled.MobileOnlyLocation>
              <Styled.LocationIcon />
              <Styled.GridTitle>Location:</Styled.GridTitle>
              <Styled.GridDescriptonText
                decoration="underline"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/B+Work+Bali/@-8.6540192,115.1352466,15z/data=!4m2!3m1!1s0x0:0xad37452104b8bef3?sa=X&ved=2ahUKEwi4rO3oitT8AhWzkIkEHW50AKMQ_BJ6BAhxEAg",
                    "_blank"
                  )
                }
              >
                B Work Bali
              </Styled.GridDescriptonText>
            </Styled.MobileOnlyLocation>
          </Flex>
          <Styled.SignUpButton onClick={() => setFormOpenState(true)}>
            Sign Up
            <Styled.SignUpButtonArrow />
          </Styled.SignUpButton>
        </Flex>
      </Styled.CommunityContainer>
      <Modal open={formOpenState} onClose={() => setFormOpenState(false)} />
    </div>
  );
};

export default WeHostEvents;
