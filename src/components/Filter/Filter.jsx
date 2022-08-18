import PropTypes from 'prop-types';
import { Label } from "components/Filter/Filter.styled";
import { Input } from "components/ContactForm/ContactForm.styled";


export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}