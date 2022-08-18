import { Label } from "components/Filter/Filter.styled";
import { Input } from "components/ContactForm/ContactForm.styled";
export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);