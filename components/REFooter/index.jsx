/* eslint-disable jsx-a11y/alt-text */
import { Button, Group, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";
import logoBig from "../../public/assets/logo_big.png";
import googlePlay from "../../public/assets/google_play.png";
import appleStore from "../../public/assets/apple_store.png";
import Link from "next/link";

const footerUseFulLinks = [
  { name: "About us", slug: "#" },
  { name: "Contact Us", slug: "#" },
  { name: "How Its Work", slug: "#" },
  { name: "Terms of Service", slug: "#" },
  { name: "Privacy Policy", slug: "#" },
];
const topCategoriesLinks = [
  { name: "Women’s Wear", slug: "#" },
  { name: "Men’s Wear", slug: "#" },
  { name: "Home Appliences", slug: "#" },
  { name: "Electronics Items", slug: "#" },
  { name: "Vehicles", slug: "#" },
];

const REFooter = () => {
  return (
    <Stack py={50} px={205} style={{ backgroundColor: "#F1F7FF" }}>
      <Group gap={78} align="flex-start">
        <Stack gap={0}>
          <Image src={logoBig.src} w={132} />
          <Text mt={20}>Copyright © 2023 RentalsShop App.</Text>
          <Text lh={"sm"}>All Rights Reserved.</Text>
        </Stack>
        <Stack gap={0} align="flex-start">
          <Title c={"#046BFB"} size={18} mb={10}>
            Useful Links
          </Title>
          {footerUseFulLinks.map((links, index) => {
            return (
              <Button
                key={index}
                variant="link"
                component={Link}
                href={links.slug}
                size="md"
                fw={500}
                h={30}
                px={0}
              >
                {links.name}
              </Button>
            );
          })}
        </Stack>
        <Stack gap={0} align="flex-start">
          <Title c={"#046BFB"} size={18} mb={10}>
            Top Categories
          </Title>
          {topCategoriesLinks.map((links, index) => {
            return (
              <Button
                key={index}
                variant="link"
                component={Link}
                href={links.slug}
                size="md"
                fw={500}
                h={30}
                px={0}
              >
                {links.name}
              </Button>
            );
          })}
        </Stack>
        <Stack gap={0} align="flex-start">
          <Title c={"#046BFB"} size={18} mb={10}>
            Get App
          </Title>
          <Image mb={10} src={googlePlay.src} w={154} />
          <Image src={appleStore.src} w={154} />
        </Stack>
      </Group>
    </Stack>
  );
};

export default REFooter;
