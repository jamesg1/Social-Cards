import React from "react";
import { Card, Media, Body, Text, Footer, Link, Image, Read } from "./styled";

const SocialCard = () => (
  <Card>
    <Media>
      <Link href="https://www.sydneyfc.com">
        <Image
          className="image"
          src="https://www.sydneyfc.com/sites/syd/files/styles/image_1200x/public/2019-01/Fixtures.jpg"
          alt="Sydney FC"
        />
      </Link>
    </Media>
    <Body>
      <Text>Sydney FC Set New Membership Record for the 2018/19 Season</Text>
    </Body>
    <Footer>
      <Read href="/resources/forrester-wave-web-cms-2018/">Read More</Read>
    </Footer>
  </Card>
);

export default SocialCard;
