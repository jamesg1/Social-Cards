import React from "react";
import { Card, Media, Body, Text, Footer, Link, Image, Read } from "./styled";

type Props = { title: string; imgSrc: string; url: string };

export const SocialCard: React.FC<Props> = props => {
  const { title, imgSrc, url } = props;
  return (
    <Card>
      <Link href={url}>
        <Media>
          <Image src={imgSrc} alt={title} />
        </Media>
        <Body>
          <Text>{title}</Text>
        </Body>
        <Footer>
          <Read>Read More</Read>
        </Footer>
      </Link>
    </Card>
  );
};
