import './RangeSelect.css';
import { DEFAULT_MIN, DEFAULT_MAX } from '../ScoreFilter/ScoreFilter';

export default function RangeSelect(labelName) {
  const range = document.createElement('div');
  range.className = 'range';
  const label = document.createElement('p');
  label.innerHTML = labelName;

  const input = document.createElement('input');
  input.className = labelName;
  input.type = 'number';
  input.min = DEFAULT_MIN;
  input.max = DEFAULT_MAX;

  range.append(label, input);

  return range;
}
