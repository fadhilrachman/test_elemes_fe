import { Input } from "@heroui/input";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { SearchIcon } from "../icons";

interface Props {
  placeholder?: string;
  onChange: (text: string) => void;
}
const InputSearch = ({ onChange, placeholder }: Props) => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Input
      size={"lg"}
      className="!h-[100px]"
      placeholder={placeholder}
      startContent={<SearchIcon />}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default InputSearch;
