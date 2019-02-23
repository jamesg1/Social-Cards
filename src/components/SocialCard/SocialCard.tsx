import React from "react";
import { Card, Media, Body, Text, Footer, Link, Image, Read } from "./styled";

type Props = { title: string; imgSrc: string; url: string };

export const SocialCard: React.FC<Props> = props => {
  const { title, imgSrc, url } = props;
  return (
    <Card>
      <Media>
        <Link href={url}>
          <Image src={imgSrc} alt={title} />
        </Link>
      </Media>
      <Body>
        <Text>{title}</Text>
      </Body>
      <Footer>
        <Read href={url}>Read More</Read>
      </Footer>
    </Card>
  );
};
