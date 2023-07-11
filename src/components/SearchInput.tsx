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
      <Input bg="white" rounded="15px" h="full" />
      <InputRightElement h="full">
        <IconButton
          h="full"
          rounded="0"
          roundedRight="15px"
          bg="veryDarkGray"
          aria-label="submit"
          icon={<Image src="/images/icon-arrow.svg" />}
        />
      </InputRightElement>
    </InputGroup>
  );
};
