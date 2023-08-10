import * as React from "react";

import {
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export interface SearchInputProps {
  onSubmit: (searchQuery: string | undefined) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const { onSubmit } = props;

  const [searchQuery, setSearchQuery] = React.useState<string | undefined>();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSearchQuery(event.target.value),
    [setSearchQuery]
  );

  const onSubmitQuery = React.useCallback(
    () => onSubmit(searchQuery),
    [onSubmit, searchQuery]
  );

  return (
    <InputGroup w="555px" h="58px">
      <Input
        h="full"
        bg="white"
        rounded="15px"
        onChange={onChange}
        placeholder="Search for any IP address or domain"
      />
      <InputRightElement h="full" w="58px">
        <IconButton
          w="full"
          h="full"
          bg="black"
          rounded="0"
          roundedRight="15px"
          aria-label="submit"
          onClick={onSubmitQuery}
          icon={<Image src="/images/icon-arrow.svg" />}
          _hover={{ bg: "custom.veryDarkGray" }}
        />
      </InputRightElement>
    </InputGroup>
  );
};
