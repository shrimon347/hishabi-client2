import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Selectmenu = () => {
  return (
    <Select className= "!border-green-500">
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="assending">Assending</SelectItem>
          <SelectItem value="desending">Desending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selectmenu;
