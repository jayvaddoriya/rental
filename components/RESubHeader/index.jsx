import { Button, Group, Stack } from "@mantine/core";
import { IconLayoutDashboard, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const RESubHeader = () => {
  return (
    <Stack px={100} py={16} style={{ borderBottom: "1px solid #D9D9D9" }}>
      <Group justify="space-between" align="center">
        <Group>
          <Button
            h={48}
            w={190}
            size="md"
            variant="primary"
            leftSection={<IconLayoutDashboard />}
          >
            All Category
          </Button>
          <Group>
            <Button
              variant="link"
              component={Link}
              href={"#"}
              size="md"
              fw={500}
              px={10}
            >
              How its work
            </Button>
            <Button
              variant="link"
              component={Link}
              href={"#"}
              size="md"
              fw={500}
              px={10}
            >
              About us
            </Button>
            <Button
              variant="link"
              component={Link}
              href={"#"}
              size="md"
              fw={500}
              px={10}
            >
              Contact us
            </Button>
          </Group>
        </Group>
        <Group>
          <Button
            variant="secondary"
            size="md"
            leftSection={
              <IconPlus style={{ color: "#046bfb", width: "20px" }} />
            }
            h={48}
            w={145}
          >
            List an item
          </Button>
        </Group>
      </Group>
    </Stack>
  );
};

export default RESubHeader;
