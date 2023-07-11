import * as React from "react";

import {
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export const SearchInput = () => {
  return (
    <InputGroup w="555px" h="58px">
      <Input
        h="full"
        bg="white"
        rounded="15px"
        placeholder="Search for any IP address or domain"
      />
      <InputRightElement h="full" w="58px">
        <IconButton
          w="full"
          h="full"
          rounded="0"
          roundedRight="15px"
          bg="black"
          aria-label="submit"
          icon={<Image src="/images/icon-arrow.svg" />}
          _hover={{ bg: "custom.veryDarkGray" }}
        />
      </InputRightElement>
    </InputGroup>
  );
};
