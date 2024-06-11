/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  ActionIcon,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  TextInput,
  rem,
} from "@mantine/core";
import React from "react";
import logo from "../../public/assets/logo.png";
import { IconHeart, IconMessage2, IconUserCircle } from "@tabler/icons-react";

const REHeader = () => {
  return (
    <Stack px={100} py={20} style={{ borderBottom: "1px solid #D9D9D9" }}>
      <Group justify="space-between" align="center">
        <Group gap={20}>
          <Image src={logo.src} w={280} />
          <TextInput
            w={400}
            variant="primary"
            placeholder="Search for Products"
            size="md"
            leftSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#046BFB"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            }
          />
          <TextInput
            w={190}
            variant="primary"
            placeholder="Select Location"
            size="md"
            leftSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#717171"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            }
          />
        </Group>
        <Group>
          <Stack align="center" gap={0}>
            <ActionIcon variant="primary" size="lg" aria-label="Gallery">
              <IconHeart
                style={{ width: rem(20), color: "#525252" }}
                stroke={1.5}
              />
            </ActionIcon>
            <Text size="sm" ta="center">
              Favourite
            </Text>
          </Stack>
          <Stack align="center" gap={0}>
            <ActionIcon variant="primary" size="lg" aria-label="Gallery">
              <IconMessage2
                style={{ width: rem(20), color: "#525252" }}
                stroke={1.5}
              />
            </ActionIcon>
            <Text size="sm" ta="center">
              ChatBox
            </Text>
          </Stack>
          <Stack align="center" gap={0}>
            <ActionIcon variant="primary" size="lg" aria-label="Gallery">
              <IconUserCircle
                style={{ width: rem(20), color: "#525252" }}
                stroke={1.5}
              />
            </ActionIcon>
            <Text size="sm" ta="center">
              Profile
            </Text>
          </Stack>
        </Group>
      </Group>
    </Stack>
  );
};

export default REHeader;
